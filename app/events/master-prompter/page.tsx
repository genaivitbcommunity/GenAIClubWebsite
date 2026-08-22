"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Copy,
  CreditCard,
  Headphones,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  Upload,
  User,
  Users,
  Zap,
} from "lucide-react";

export default function MasterPrompterRegistrationPage() {
  const [branch, setBranch] = useState("");
  const [copied, setCopied] = useState(false);

  const upiId = "genai.community@okaxis";

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* ================= NAVBAR ================= */}
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5b642] text-sm font-bold shadow-[0_0_20px_rgba(245,182,66,0.15)]">
              GAI
            </div>

            <div className="hidden sm:block">
              <div className="text-sm font-bold">
                Generative AI Community
              </div>

              <div className="text-[10px] text-[#f5b642]">
                From Prompts to Production
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex">
            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <Link href="/team" className="hover:text-white">
              Team Members
            </Link>

            <Link
              href="/events"
              className="rounded-full border border-[#f5b642]/60 bg-[#f5b642]/10 px-5 py-2 text-[#f5b642]"
            >
              Events
            </Link>

            <Link href="/winners" className="hover:text-white">
              Winners
            </Link>

            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>

            <Link href="/achievements" className="hover:text-white">
              Achievements
            </Link>

            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_38%,rgba(245,182,66,0.09),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-8 pt-8 sm:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-[#f5b642] hover:text-[#ffd477]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_250px]">
            {/* HERO TEXT */}
            <div>
              <h1 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl">
                <span className="block text-white">MASTER</span>
                <span className="block text-[#f5b642]">PROMPTER</span>
              </h1>

              <h2 className="mt-6 text-xl font-semibold">
                AI Prompt Engineering Challenge
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-300">
                Put your prompting skills to the test. Solve real-world
                challenges, think creatively, and become the ultimate Master
                Prompter!
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#f5b642]" />
                  22 August 2026
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-[#f5b642]" />
                  10:41 PM Onwards
                </span>

                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#f5b642]" />
                  Lab Complete
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "AI / ML",
                  "Prompt Engineering",
                  "Challenge",
                  "Open for All",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#f5b642]/50 px-3 py-1 text-xs text-[#f5b642]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative flex min-h-[300px] items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-[#f5b642]/10 blur-3xl" />

              <img
                src="/master-prompter.png"
                alt="Master Prompter"
                className="relative z-10 max-h-[390px] w-full object-contain"
              />

              <div className="absolute right-[12%] top-[25%] flex h-12 w-12 items-center justify-center rounded-xl border border-[#f5b642]/60 bg-black/80 text-2xl text-[#f5b642]">
                &gt;_
              </div>

              <div className="absolute bottom-[24%] left-[12%] flex h-12 w-12 items-center justify-center rounded-xl border border-[#f5b642]/60 bg-black/80 text-xl text-[#f5b642]">
                {"{}"}
              </div>
            </div>

            {/* REGISTRATION FEE */}
            <aside className="rounded-2xl border border-[#f5b642]/40 bg-[#0b0b0b] p-6">
              <div className="text-xs font-semibold uppercase text-zinc-300">
                Registration Fee
              </div>

              <div className="mt-2 text-4xl font-black text-[#f5b642]">
                ₹200
              </div>

              <div className="mt-1 text-xs text-zinc-300">
                One-time entry pass
              </div>

              <div className="my-5 h-px bg-white/10" />

              <ul className="space-y-4 text-sm">
                {[
                  "Event Entry",
                  "Participation Certificate",
                  "Top Performer Rewards",
                  "Networking Opportunity",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#f5b642]" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#registration"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#f5b642] px-5 py-3 font-bold text-black hover:bg-[#ffd477]"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-[#f5b642]/25 bg-[#0a0a0a] md:grid-cols-4">
          <Benefit
            icon={<Sparkles />}
            title="Real-world Challenges"
            text="Solve practical problems using AI prompts."
          />

          <Benefit
            icon={<Zap />}
            title="Creative & Logical"
            text="Craft unique prompts and get the best results."
          />

          <Benefit
            icon={<Trophy />}
            title="Exciting Rewards"
            text="Win exciting prizes and certificates."
          />

          <Benefit
            icon={<Users />}
            title="Learn & Network"
            text="Connect, learn and grow with AI enthusiasts."
          />
        </div>
      </section>

      {/* ================= REGISTRATION ================= */}
      <section
        id="registration"
        className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
          {/* STEPPER */}
          <div className="border-b border-white/10 px-5 py-6 sm:px-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              REGISTRATION
            </h2>

            <div className="mt-6 grid grid-cols-4">
              <Step number="1" title="Your Details" active />
              <Step number="2" title="Payment" />
              <Step number="3" title="Verification" />
              <Step number="4" title="Confirmation" />
            </div>
          </div>

          {/* THREE COLUMNS */}
          <div className="grid gap-5 p-5 lg:grid-cols-3 sm:p-8">
            {/* ================= YOUR DETAILS ================= */}
            <div className="overflow-hidden rounded-xl border border-[#f5b642]/25 bg-[#0d0d0d]">
              <SectionHeader icon={<User />} title="1. YOUR DETAILS" />

              <div className="space-y-5 p-5">
                <Field
                  label="Full Name *"
                  placeholder="Enter your full name"
                />

                <Field
                  label="VIT Registration Number *"
                  placeholder="Enter your VIT registration number"
                />

                <label className="block">
                  <span className="mb-2 block text-sm font-medium">
                    Branch / Program *
                  </span>

                  <div className="relative">
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-white/15 bg-[#151515] px-4 py-3 text-sm text-zinc-300 outline-none focus:border-[#f5b642]"
                    >
                      <option value="">Select your branch</option>
                      <option value="CSE">CSE</option>
                      <option value="AIML">CSE - AIML</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="Other">Other</option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  </div>
                </label>

                <Field
                  label="Personal Email *"
                  type="email"
                  placeholder="name@example.com"
                />

                <Field
                  label="Phone Number *"
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                />
              </div>
            </div>

            {/* ================= PAYMENT ================= */}
            <div className="overflow-hidden rounded-xl border border-[#f5b642]/25 bg-[#0d0d0d]">
              <SectionHeader icon={<CreditCard />} title="2. PAYMENT" />

              <div className="p-5">
                <div className="text-sm text-zinc-300">
                  Registration Fee
                </div>

                <div className="mt-1 flex items-center gap-3">
                  <span className="text-4xl font-black text-[#f5b642]">
                    ₹200
                  </span>

                  <span className="rounded-full border border-[#f5b642]/30 px-3 py-1 text-xs text-[#f5b642]">
                    Non-refundable
                  </span>
                </div>

                {/* REAL FRONTEND QR IMAGE / PLACEHOLDER */}
                <div className="mx-auto mt-5 flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border-4 border-white bg-white shadow-[0_0_30px_rgba(245,182,66,0.35)]">
                  <img
                    src="/QR.png"
                    alt="Demo payment QR code"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="mt-4 rounded-lg border border-[#f5b642]/30 bg-[#11100c] px-4 py-3 text-center font-mono text-sm">
                  UPI ID: {upiId}
                </div>

                <button
                  type="button"
                  onClick={copyUpi}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-[#f5b642]/30 px-4 py-3 text-sm text-[#f5b642] hover:bg-[#f5b642]/10"
                >
                  <Copy className="h-4 w-4" />

                  {copied ? "UPI ID Copied" : "Copy UPI ID"}
                </button>

                <div className="mt-5 rounded-xl border border-[#f5b642]/20 bg-[#11100c] p-4">
                  <h3 className="font-bold text-[#f5b642]">
                    PAYMENT INSTRUCTIONS
                  </h3>

                  <ol className="mt-3 space-y-2 text-sm text-zinc-300">
                    <li>1. Scan the QR code or copy the UPI ID.</li>
                    <li>2. Pay ₹200 using any UPI app.</li>
                    <li>3. Complete the payment.</li>
                    <li>4. Enter your UTR ID below.</li>
                    <li>5. Upload your payment screenshot.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* ================= VERIFICATION ================= */}
            <div className="overflow-hidden rounded-xl border border-[#f5b642]/25 bg-[#0d0d0d]">
              <SectionHeader
                icon={<ShieldCheck />}
                title="3. VERIFICATION"
              />

              <div className="space-y-5 p-5">
                <Field
                  label="UPI Transaction ID / UTR *"
                  placeholder="Enter 12-digit UTR / Ref ID"
                />

                <p className="-mt-2 text-xs leading-5 text-zinc-500">
                  Enter the 12-digit UTR or Reference ID from your payment app.
                </p>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Payment Screenshot *
                  </label>

                  <label className="flex min-h-[190px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/30 bg-[#111] text-center hover:border-[#f5b642]">
                    <Upload className="h-10 w-10 text-zinc-300" />

                    <span className="mt-3 text-sm text-[#f5b642]">
                      Click to upload
                    </span>

                    <span className="text-sm text-zinc-300">
                      or drag & drop
                    </span>

                    <span className="mt-2 text-xs text-zinc-500">
                      JPG, PNG, WEBP (Max 2MB)
                    </span>

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="rounded-xl border border-[#f5b642]/20 bg-[#11100c] p-4">
                  <h3 className="font-bold">
                    IMPORTANT NOTES
                  </h3>

                  <ul className="mt-3 space-y-3 text-sm text-zinc-300">
                    <Note text="Registration fee is non-refundable." />
                    <Note text="Ensure all details are correct." />
                    <Note text="Verification usually takes up to 24 hours." />
                    <Note text="Entry pass will be sent to your email." />
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SUBMIT ================= */}
          <div className="px-5 pb-8 sm:px-8">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f5b642] px-6 py-4 text-base font-bold text-black hover:bg-[#ffd477]"
            >
              <ShieldCheck className="h-5 w-5" />
              Submit Registration
            </button>

            <p className="mt-4 text-center text-xs text-zinc-500">
              By submitting, you agree to our terms and confirm the above
              information is correct.
            </p>
          </div>

          {/* ================= SUPPORT ================= */}
          <div className="grid gap-4 border-t border-white/10 p-5 sm:p-8 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-5">
              <h3 className="font-bold">Need Help?</h3>

              <p className="mt-2 text-xs text-zinc-500">
                Facing issues with payment or registration?
              </p>

              <button
                type="button"
                className="mt-5 rounded-lg border border-[#f5b642]/40 px-4 py-2 text-sm font-semibold text-[#f5b642]"
              >
                Contact Coordinators
              </button>
            </div>

            <SupportCard
              name="Operations & Support"
              email="student.coordinator@example.com"
              phone="+91 XXXXX XXXXX"
            />

            <SupportCard
              name="Campus Support"
              email="campus.support@example.com"
              phone="+91 XXXXX XXXXX"
            />
          </div>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-10 sm:px-8">
        <div className="grid rounded-2xl border border-[#f5b642]/25 bg-[#0a0a0a] md:grid-cols-4">
          <Trust
            icon={<ShieldCheck />}
            title="Secure Registration"
            text="Your data is safe with us"
          />

          <Trust
            icon={<Zap />}
            title="Instant Verification"
            text="Quick verification after payment"
          />

          <Trust
            icon={<Mail />}
            title="Email Confirmation"
            text="Entry pass sent to your email"
          />

          <Trust
            icon={<Headphones />}
            title="24/7 Support"
            text="We're here to help"
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Generative AI Community</span>
          <span>VIT Bhopal. All rights reserved.</span>
          <span>
            Made with <span className="text-[#f5b642]">♥</span> by GenAI
            Community
          </span>
        </div>
      </footer>
    </main>
  );
}

/* ================= FIELD ================= */

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">
        {label}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/15 bg-[#151515] px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-[#f5b642]"
      />
    </label>
  );
}

/* ================= SECTION HEADER ================= */

function SectionHeader({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 bg-[#11100c] px-5 py-4">
      <span className="text-[#f5b642]">{icon}</span>

      <span className="font-bold text-[#f5b642]">
        {title}
      </span>
    </div>
  );
}

/* ================= STEP ================= */

function Step({
  number,
  title,
  active = false,
}: {
  number: string;
  title: string;
  active?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${
          active
            ? "border-[#f5b642] bg-[#f5b642] text-black"
            : "border-white/30 bg-[#111] text-white"
        }`}
      >
        {number}
      </div>

      <span
        className={`mt-2 text-xs sm:text-sm ${
          active
            ? "font-bold text-[#f5b642]"
            : "text-zinc-400"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

/* ================= BENEFIT ================= */

function Benefit({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 border-b border-white/10 p-6 last:border-0 md:border-b-0 md:border-r md:last:border-r-0">
      <div className="shrink-0 text-[#f5b642]">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[#f5b642]">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-zinc-400">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ================= NOTE ================= */

function Note({ text }: { text: string }) {
  return (
    <li className="flex gap-2">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f5b642]" />
      {text}
    </li>
  );
}

/* ================= SUPPORT ================= */

function SupportCard({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5b642]/40 text-[#f5b642]">
          <User className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold">{name}</h3>

          <p className="mt-1 text-xs text-[#f5b642]">
            {email}
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= TRUST ================= */

function Trust({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 p-5 last:border-0 md:border-b-0 md:border-r md:last:border-r-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f5b642]/30 text-[#f5b642]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#f5b642]">
          {title}
        </h3>

        <p className="mt-1 text-xs text-zinc-500">
          {text}
        </p>
      </div>
    </div>
  );
}