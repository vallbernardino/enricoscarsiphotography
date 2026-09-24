import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT } from "@/lib/site-content";
import { Reveal } from "./Reveal";

const fieldClass =
  "w-full border border-cream/15 bg-cream/[0.03] px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-champagne/70";

function Radio({
  checked,
  label,
  onChange,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={checked}
      className="flex items-center gap-3 text-left text-sm text-cream/75 transition-colors hover:text-cream"
    >
      <span
        className={`relative block h-3.5 w-3.5 shrink-0 border ${
          checked ? "border-champagne" : "border-cream/30"
        }`}
      >
        {checked && <span className="absolute inset-[3px] block bg-champagne" />}
      </span>
      {label}
    </button>
  );
}

export function InquiryForm() {
  const { lang } = useLang();
  const t = homeCopy(lang).inquiry;
  const [type, setType] = useState(t.types[0] ?? "");
  const [channel, setChannel] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  useEffect(() => {
    setType(t.types[0] ?? "");
  }, [lang, t.types]);

  const resumeEditing = () => {
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    setStatus("sending");
    const labels = lang === "it"
      ? { title: "NUOVA RICHIESTA FOTOGRAFICA", name: "Nome", email: "Email", phone: "Telefono", service: "Servizio", contact: "Contatto preferito", message: "Messaggio" }
      : { title: "NEW PHOTOGRAPHY INQUIRY", name: "Name", email: "Email", phone: "Phone", service: "Service", contact: "Preferred contact", message: "Message" };
    const details = [
      name.trim() && `${labels.name}: ${name}`,
      email.trim() && `${labels.email}: ${email}`,
      phone.trim() && `${labels.phone}: ${phone}`,
      type.trim() && `${labels.service}: ${type}`,
      t.continueOptions[channel] && `${labels.contact}: ${t.continueOptions[channel]}`,
    ].filter(Boolean);
    const body = [
      labels.title,
      "",
      ...details,
      ...(message.trim() ? ["", `${labels.message}:`, message] : []),
    ].join("\n");

    try {
      const win = window.open(
        `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener",
      );
      if (!win) throw new Error("popup blocked");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const statusCopy =
    lang === "it"
      ? {
          sent: "WhatsApp è stato aperto con il messaggio pronto: premi invio per completare la richiesta.",
          error: `Non è stato possibile aprire il messaggio. Scrivi direttamente a ${CONTACT.email} o chiama ${CONTACT.phone1}.`,
        }
      : {
          sent: "WhatsApp opened with your message ready — press send to complete the inquiry.",
          error: `We couldn't open the message. Please write to ${CONTACT.email} or call ${CONTACT.phone1}.`,
        };

  return (
    <section id="inquiry" className="relative z-20 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-28 lg:grid-cols-12 lg:gap-24 lg:px-10 lg:py-44">
        <Reveal className="lg:col-span-4">
          <span className="label-xs text-champagne">{t.label}</span>
          <h2 className="mt-8 font-display text-[1.6rem] leading-[1.22] text-cream sm:text-[2rem]">
            {t.heading.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-8 text-sm leading-[1.9] text-muted-warm">
            {t.support.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-8" delay={120}>
          <form onSubmit={submit} className="space-y-14">

            <fieldset>
              <legend className="label-xs text-cream/45">{t.typeLabel}</legend>
              <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {t.types.map((opt) => (
                  <Radio key={opt} label={opt} checked={type === opt} onChange={() => setType(opt)} />
                ))}
              </div>
            </fieldset>

            <div className="grid gap-8 sm:grid-cols-3">
              <label className="block">
                <span className="label-xs block text-cream/45">{t.name}</span>
                <input
                  required
                  value={name}
                  onChange={(e) => { resumeEditing(); setName(e.target.value); }}
                  placeholder={t.namePlaceholder}
                  className={`${fieldClass} mt-3`}
                />
              </label>
              <label className="block">
                <span className="label-xs block text-cream/45">{t.email}</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => { resumeEditing(); setEmail(e.target.value); }}
                  placeholder={t.emailPlaceholder}
                  className={`${fieldClass} mt-3`}
                />
              </label>
              <label className="block">
                <span className="label-xs block text-cream/45">
                  {t.whatsapp} <span className="normal-case tracking-normal">({t.optional})</span>
                </span>
                <input
                  value={phone}
                  onChange={(e) => { resumeEditing(); setPhone(e.target.value); }}
                  placeholder={t.whatsappPlaceholder}
                  className={`${fieldClass} mt-3`}
                />
              </label>
            </div>

            <label className="block">
              <span className="label-xs block text-cream/45">{t.tell}</span>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => { resumeEditing(); setMessage(e.target.value); }}
                placeholder={t.tellPlaceholder}
                className={`${fieldClass} mt-3 resize-none`}
              />
            </label>

            <div className="flex flex-wrap items-end justify-between gap-8">
              <fieldset>
                <legend className="label-xs text-cream/45">{t.continueLabel}</legend>
                <div className="mt-4 flex gap-8">
                  {t.continueOptions.map((opt, i) => (
                    <Radio
                      key={opt}
                      label={opt}
                      checked={channel === i}
                      onChange={() => setChannel(i)}
                    />
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                aria-busy={status === "sending"}
                className="arrow-link label-xs border border-champagne bg-champagne px-9 py-4 text-charcoal transition-colors hover:bg-transparent hover:text-champagne disabled:pointer-events-none disabled:opacity-60"
              >
                {t.submit}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </button>
            </div>

            <p aria-live="polite" className="min-h-[1.25rem] text-sm leading-relaxed">
              {status === "sent" && <span className="text-champagne">{statusCopy.sent}</span>}
              {status === "error" && <span className="text-cream/80">{statusCopy.error}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
