import { AdminLoginForm } from "@/components/admin/admin-login-form";

interface AdminLoginPageProps {
  searchParams: Promise<{ error?: string }>;
}

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const params = await searchParams;
  const hasInvalidCredentials = params.error === "invalid_credentials";

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[color:var(--border)] bg-card shadow-[0_32px_80px_var(--shadow)] md:grid-cols-[1.05fr_1fr]">
        <section className="relative hidden border-r border-[color:var(--border)] bg-[radial-gradient(circle_at_top_left,_rgba(245,182,66,0.18),_transparent_55%)] p-10 md:flex md:flex-col md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-brand uppercase">
              GEN AI CLUB
            </span>
            <h1 className="mt-6 text-3xl font-semibold leading-tight text-foreground">
              Admin Control Panel
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Manage members, events, and projects from a secure internal dashboard.
            </p>
          </div>
          <div className="flex flex-1 items-center rounded-2xl border border-brand/20 bg-card-soft px-6 py-6">
            <p className="text-2xl font-bold leading-snug text-foreground italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              &ldquo;I&apos;m a professional multi-tasker: I can procrastinate, check my email, and lose my pen all at the same time.&rdquo;
            </p>
          </div>
        </section>

        <section className="p-6 sm:p-10">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Admin Login</h2>
          <p className="mt-2 text-sm text-muted">
            Use your Supabase Auth credentials (e.g. <span className="text-foreground">admin@club.com</span>
            ) so Row Level Security allows saves. An alternate login without Supabase does not grant database
            writes.
          </p>

          <AdminLoginForm showInitialError={hasInvalidCredentials} />
        </section>
      </div>
    </main>
  );
}
