import { Phone, MessageCircle, MapPin } from "lucide-react";
import { coordinators, hospitals } from "@/lib/data";

export function EmergencyContacts() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        Emergency &amp; Medical
      </h2>

      {/* Dial 911 — prominent, easy to spot when scrolling. */}
      <div className="mt-4 rounded-lg border-2 border-secondary bg-secondary/5 p-4">
        <p className="font-semibold text-secondary">
          In a life-threatening emergency, dial 911
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          From any US phone — police, fire, or ambulance. Calls to 911 are free.
        </p>
        <a
          href="tel:911"
          className="mt-2 inline-flex items-center gap-1.5 font-semibold text-secondary"
        >
          <Phone className="size-4" aria-hidden /> Call 911
        </a>
      </div>

      {/* Coordinator escalation */}
      <div className="mt-4 rounded-lg border border-border border-l-4 border-l-secondary bg-card p-4">
        <h3 className="font-semibold text-foreground">Relay center coordinators</h3>
        <ul className="mt-3 space-y-3">
          {coordinators.map((c) => (
            <li
              key={c.phone}
              className="flex flex-wrap items-center justify-between gap-2"
            >
              <div>
                <p className="font-medium text-primary">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary"
                >
                  <Phone className="size-4" aria-hidden /> {c.phoneDisplay}
                </a>
                {c.whatsapp && (
                  <a
                    href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${c.name}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    <MessageCircle className="size-4" aria-hidden /> WhatsApp
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Hospitals / urgent care */}
      <div className="mt-4 rounded-lg border border-border border-l-4 border-l-secondary bg-card p-4">
        <h3 className="font-semibold text-foreground">
          Nearest hospital &amp; urgent care
        </h3>
        <ul className="mt-3 space-y-3">
          {hospitals.map((h) => (
            <li key={h.phone}>
              <p className="font-medium text-primary">
                {h.name}{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  ({h.type})
                </span>
              </p>
              <p className="text-sm text-muted-foreground">{h.address}</p>
              <div className="mt-1 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href={`tel:${h.phone}`}
                  className="inline-flex items-center gap-1.5 font-medium text-secondary"
                >
                  <Phone className="size-4" aria-hidden /> {h.phoneDisplay}
                </a>
                <a
                  href={h.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary"
                >
                  <MapPin className="size-4" aria-hidden /> Map
                </a>
              </div>
            </li>
          ))}
        </ul>
        {/* TODO: add a nearby urgent care entry in emergency.ts after verification. */}
      </div>
    </section>
  );
}
