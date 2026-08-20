import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const dates = String(body.dates ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Merci de remplir tous les champs obligatoires." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error("Email non envoyé : RESEND_API_KEY ou CONTACT_EMAIL manquant dans .env.local");
    return NextResponse.json(
      { ok: false, error: "Configuration email manquante sur le serveur." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>Nouvelle demande de réservation</h2>
    <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
    <p><strong>Email :</strong> ${escapeHtml(email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(phone) || "-"}</p>
    <p><strong>Service souhaité :</strong> ${escapeHtml(service) || "-"}</p>
    <p><strong>Dates envisagées :</strong> ${escapeHtml(dates) || "-"}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await resend.emails.send({
    from: "Zénith Maison <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Nouvelle demande — ${service || "Séjour Marrakech"} — ${name}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { ok: false, error: "L'envoi de l'email a échoué." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
