"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}

/** Envoltorio genérico de animación al scroll. No le importa qué hay adentro
 * (puede ser un Server Component ya renderizado), solo anima su contenedor. */
export function FadeIn({ children, delayMs = 0, className = "" }: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
