import type { APIRoute } from 'astro';
import { profile } from '../../data/profile.ts';

export const prerender = false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false }, 400);
  }

  const first = String(body.first ?? '').trim();
  const last = String(body.last ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();

  // Honeypot: a real visitor never fills a field they cannot see.
  // Answer 200 so bots do not learn it was filtered.
  if (String(body.website ?? '').trim()) return json({ ok: true });

  const name = `${first} ${last}`.trim();

  if (
    !name ||
    !EMAIL.test(email) ||
    email.length > 200 ||
    name.length > 120 ||
    message.length < 5 ||
    message.length > 4000
  ) {
    return json({ ok: false }, 400);
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  const from = import.meta.env.CONTACT_FROM;
  // Defaults to the address already on the site, so it is never declared twice.
  const to = import.meta.env.CONTACT_TO ?? profile.email;

  if (!apiKey || !from) {
    // Never leak the key or the upstream body — only a status the client can show.
    console.error('[contact] missing RESEND_API_KEY or CONTACT_FROM');
    return json({ ok: false }, 500);
  }

  const upstream = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio enquiry — ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });

  if (!upstream.ok) {
    const detail = await upstream.text().catch(() => '');
    console.error(`[contact] resend ${upstream.status}: ${detail.slice(0, 300)}`);
    return json({ ok: false }, 502);
  }

  return json({ ok: true });
};

export const ALL: APIRoute = () => json({ ok: false }, 405);