"use client";

import { useCallback, useEffect, useState } from "react";
import type { CartState } from "@/lib/types";

const STORAGE_KEY = "heart-desserts:cart";

function readStoredCart(): CartState {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartState) : {};
  } catch {
    return {};
  }
}

export function useCart() {
  const [cart, setCart] = useState<CartState>({});
  const [hydrated, setHydrated] = useState(false);

  // Cargar del localStorage solo en el cliente, tras el primer render, para
  // evitar mismatch de hidratación entre servidor y cliente.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hidratación única desde localStorage, no un loop de sincronización
    setCart(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const increment = useCallback((productId: string) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  }, []);

  const decrement = useCallback((productId: string) => {
    setCart((prev) => {
      const current = prev[productId] ?? 0;
      if (current <= 1) {
        const rest = { ...prev };
        delete rest[productId];
        return rest;
      }
      return { ...prev, [productId]: current - 1 };
    });
  }, []);

  const clear = useCallback(() => setCart({}), []);

  return { cart, increment, decrement, clear };
}
