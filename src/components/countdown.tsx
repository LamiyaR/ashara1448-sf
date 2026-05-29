"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getCountdown, type Countdown as CountdownT } from "@/lib/countdown";

const PLACEHOLDER: CountdownT = { days: 0, hours: 0, minutes: 0, isPast: false };

export function Countdown() {
  const [c, setC] = useState<CountdownT>(PLACEHOLDER);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    setC(getCountdown());
    const id = setInterval(() => setC(getCountdown()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-2xl px-4">
      <div className="rounded-lg border border-border bg-card px-6 py-8 shadow-sm">
        {c.isPast ? (
          <p className="text-center font-serif text-2xl font-semibold text-primary sm:text-3xl">
            Allah-ho Akbar — Ashara Mubaraka 1448H has begun
          </p>
        ) : (
          <>
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-secondary">
              Countdown
            </p>
            <h2 className="mt-1 text-center font-serif text-xl font-medium text-foreground">
              Until Ashara Mubaraka 1448H
            </h2>
            <div className="mt-6 flex items-start justify-center gap-2 sm:gap-5">
              <Tile value={mounted ? c.days : 0} label="Days" color="text-primary" reduce={!!reduce} />
              <Colon />
              <Tile value={mounted ? c.hours : 0} label="Hours" color="text-secondary" reduce={!!reduce} />
              <Colon />
              <Tile value={mounted ? c.minutes : 0} label="Minutes" color="text-primary" reduce={!!reduce} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function Tile({
  value,
  label,
  color,
  reduce,
}: {
  value: number;
  label: string;
  color: string;
  reduce: boolean;
}) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="flex min-w-[3.5rem] flex-col items-center sm:min-w-[5rem]">
      <div className="relative h-[44px] overflow-hidden sm:h-[64px]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={reduce ? false : { y: "-70%", opacity: 0 }}
            animate={reduce ? undefined : { y: "0%", opacity: 1 }}
            exit={reduce ? undefined : { y: "70%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`block font-serif text-[44px] font-semibold leading-none tabular-nums sm:text-[64px] ${color}`}
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="font-serif text-[44px] font-semibold leading-none text-secondary sm:text-[64px]"
      aria-hidden
    >
      :
    </span>
  );
}
