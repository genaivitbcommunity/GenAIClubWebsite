"use client";

import { tryHardcodedAdminSession } from "@/app/admin/actions";
import { createClientSupabase } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm({ showInitialError }: { showInitialError: boolean }) {
  const router = useRouter();
  const [error, setError] = useState(showInitialError);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setPending(true);
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const hardcoded = await tryHardcodedAdminSession(email, password);
    if (hardcoded.ok) {
      router.push("/admin");
      router.refresh();
      setPending(false);
      return;
    }

    const supabase = createClientSupabase();
    const { error: signError } = await supabase.auth.signInWithPassword({ email, password });
    if (signError) {
      setError(true);
      setPending(false);
      return;
    }
    router.push("/admin");
    router.refresh();
    setPending(false);
  }

  return (
    <>
      {error && (
        <p className="mt-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-200">
          Invalid credentials. Please check email/password in Supabase Auth.
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-[0.12em] text-muted uppercase" htmlFor="admin-email">
            Email
          </label>
          <input
            id="admin-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="admin@club.com"
            className="w-full rounded-xl border border-[color:var(--border)] bg-card-soft px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-brand/70 focus:ring-2 focus:ring-brand/25"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-[0.12em] text-muted uppercase" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-[color:var(--border)] bg-card-soft px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-brand/70 focus:ring-2 focus:ring-brand/25"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:bg-brand-strong focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Login"}
        </button>
      </form>

      <Link
        href="/"
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-brand/30 bg-card-soft px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand/40 hover:text-brand"
      >
        Get Back to Home
      </Link>
    </>
  );
}
