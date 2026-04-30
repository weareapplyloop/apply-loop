"use client";

import React, { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  Brain,
  Briefcase,
  CalendarDays,
  Check,
  ChevronUp,
  ClipboardList,
  Factory,
  FileSearch,
  HeartPulse,
  Megaphone,
  Menu,
  Moon,
  Package,
  Sparkles,
  Sun,
  Target,
  Users,
  Wand2,
  X,
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SCHEDULE_LINK = "https://calendar.app.google/4YV2VJEgkqPegeo59";

type IconType = React.ComponentType<{ className?: string }>;

type FeatureItem = {
  title: string;
  desc: string;
  icon: IconType;
};

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type FaqItem = {
  q: string;
  a: string;
  tone: string;
  active?: boolean;
};

type IndustryItem = {
  title: string;
  icon: IconType;
};

type CompanyItem = {
  name: string;
  file: string;
};

const navLinks = [
  { label: "Services", href: "#what-we-do" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Us", href: "#about-us" },
  { label: "FAQs", href: "#faqs" },
];

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#what-we-do" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Us", href: "#about-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Become a client", href: "#become-client" },
];

const whatWeDo: FeatureItem[] = [
  {
    title: "Optimize Resume",
    desc: "ATS-friendly and recruiter-approved to help you get noticed faster.",
    icon: FileSearch,
  },
  {
    title: "Job Application",
    desc: "Personalized applications are sent based on your goals and preferences.",
    icon: Briefcase,
  },
  {
    title: "Land Interview",
    desc: "We help you prepare so you show up confident and ready.",
    icon: Target,
  },
];

const industryItems: IndustryItem[] = [
  { title: "Design & Tech", icon: Wand2 },
  { title: "Consulting", icon: Users },
  { title: "Sales", icon: Target },
  { title: "Operations", icon: ClipboardList },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance and Accounting", icon: Briefcase },
  { title: "Marketing", icon: Megaphone },
  { title: "Manufacturing", icon: Factory },
];

const testimonials: Testimonial[] = Array.from({ length: 8 }, (_, index) => ({
  name: "Olabanji David T.",
  role: "UX Designer",
  quote:
    index % 2 === 0
      ? "ApplyLoop gave my job search structure, better positioning, and a clearer application rhythm. The support was fast and practical."
      : "ApplyLoop helped reduce the stress of applying. The process felt organized from resume updates to interview preparation.",
}));

const faqs: FaqItem[] = [
  {
    q: "How does Applyloop work?",
    a: "Applyloop starts with a quick consultation, aligns your goals, and optimizes your application materials. Then tailored submissions begin on your behalf.",
    tone: "bg-[#3560d2]",
  },
  {
    q: "Will I still have control over my job applications?",
    a: "Yes. You stay in control of your preferences and target roles while Applyloop handles the heavy lifting.",
    tone: "bg-[#f1ab5a] text-white",
  },
  {
    q: "Are the applications customized for each job?",
    a: "Yes. Every application is tailored with optimized keywords and recruiter-friendly positioning.",
    tone: "bg-[#102f67]",
  },
  {
    q: "How many jobs will you apply to for me?",
    a: "This depends on your subscription plan. Each plan includes a set number of applications per week.",
    tone: "bg-[#6f9de8]",
    active: true,
  },
];

const companies: CompanyItem[] = [
  { name: "ADP", file: "adp-logo.png" },
  { name: "Ambry Genetics", file: "ambry-genetics-logo.png" },
  { name: "Barclays", file: "barclays-logo.png" },
  { name: "BearCom AlwaysOn", file: "bearcom-always-logo.png" },
  { name: "Danta Technologies", file: "danta-technologies-logo.png" },
  { name: "FIS", file: "fis-logo.png" },
  { name: "Impact XM", file: "impact-xm-logo.png" },
  { name: "Kohl's Careers", file: "kohls-careers-logo.png" },
  { name: "Leidos", file: "leidos-logo.png" },
  { name: "MLABS", file: "mlabs-logo.png" },
  { name: "Northwest Partners", file: "northwest-partners-logo.png" },
  { name: "RV", file: "rv-logo.png" },
  { name: "TEEMA", file: "teema-logo.png" },
  { name: "Teradata", file: "teradata-logo.png" },
  { name: "TPX", file: "tpx-logo.png" },
];

const companyMarquee = [...companies, ...companies, ...companies, ...companies];

function SectionReveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.62, delay }}
    >
      {children}
    </motion.div>
  );
}

function SoftGlow({ dark }: { dark: boolean }) {
  return (
    <>
      <div
        className={[
          "pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full blur-3xl sm:h-80 sm:w-80",
          dark ? "bg-[#2d59cf]/18" : "bg-[#7ea6ff]/28",
        ].join(" ")}
      />
      <div
        className={[
          "pointer-events-none absolute bottom-0 right-[6%] h-80 w-80 rounded-full blur-3xl sm:h-96 sm:w-96",
          dark ? "bg-[#315de2]/12" : "bg-[#8cb2ff]/22",
        ].join(" ")}
      />
    </>
  );
}

function RatingsPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-[#2d59cf] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_14px_30px_-16px_rgba(40,81,187,0.85)] sm:px-6 sm:text-[11px]">
      <span>4.8</span>
      <span className="text-[12px] leading-none">⭐</span>
      <span>Rated by users</span>
    </div>
  );
}

function CompanyLogo({ company }: { company: CompanyItem }) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className="flex min-w-[140px] items-center justify-center px-5 sm:min-w-[160px] sm:px-7">
      {!hasError ? (
        <img
          src={`/logos/${company.file}`}
          alt={`${company.name} logo`}
          className="h-8 w-auto object-contain opacity-80 transition duration-300 hover:opacity-100 sm:h-10"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="text-center text-sm font-medium text-white/40">
          {company.name}
        </div>
      )}
    </div>
  );
}

function Rule({ width }: { width: string }) {
  return (
    <motion.div
      className={["h-[4px] rounded-full bg-[#445e98]", width].join(" ")}
      animate={{ opacity: [0.45, 1, 0.45] }}
      transition={{
        duration: 1.6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

function HeroPreviewCard() {
  return (
    <div className="mx-auto max-w-[860px] rounded-[12px] border border-[#1b2e5a] bg-[linear-gradient(180deg,rgba(14,22,44,0.96),rgba(12,19,39,0.94))] p-3 shadow-[0_24px_60px_-36px_rgba(39,80,185,0.85)] sm:p-4">
      <div className="grid overflow-hidden rounded-[10px] md:grid-cols-[1fr_1px_1fr]">
        <div className="px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-white text-[#2f5fdd] sm:h-8 sm:w-8">
              <Wand2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-medium text-white sm:text-[12px]">
                AI Resume Optimization
              </div>
              <div className="mt-4 space-y-2.5">
                <Rule width="w-[68%]" />
                <Rule width="w-[92%]" />
                <Rule width="w-[84%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden bg-[#223966] md:block" />

        <div className="px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#efe4ff] text-[#7b52d9] sm:h-8 sm:w-8">
              <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-medium text-white sm:text-[12px]">
                Human Specialist Review
              </div>

              <div className="mt-4 grid grid-cols-[24px_1fr] items-center gap-x-3 gap-y-2.5 sm:grid-cols-[30px_1fr]">
                <motion.div
                  className="h-6 w-6 rounded-full bg-[#324a84] sm:h-[30px] sm:w-[30px]"
                  animate={{
                    opacity: [0.55, 1, 0.55],
                    scale: [0.96, 1.03, 0.96],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <div className="space-y-2.5">
                  <Rule width="w-[62%]" />
                  <Rule width="w-[70%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ item, dark }: { item: FeatureItem; dark: boolean }) {
  const Icon = item.icon;

  return (
    <div
      className={[
        "rounded-[14px] border px-5 py-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.6)] backdrop-blur-sm",
        dark
          ? "border-white/10 bg-[#16357f]/42"
          : "border-[#cfe0ff] bg-[#f7faff]",
      ].join(" ")}
    >
      <div
        className={[
          "mb-4 flex h-9 w-9 items-center justify-center rounded-[10px]",
          dark ? "bg-[#2958d7]/78 text-white" : "bg-[#2e60df] text-white",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </div>
      <h3
        className={[
          "text-[1.15rem] font-medium",
          dark ? "text-white" : "text-[#132c57]",
        ].join(" ")}
      >
        {item.title}
      </h3>
      <p
        className={[
          "mt-2 max-w-[19rem] text-sm leading-6",
          dark ? "text-white/72" : "text-[#36517f]",
        ].join(" ")}
      >
        {item.desc}
      </p>
    </div>
  );
}

function SearchIllustration() {
  return (
    function SearchIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-[460px]">
      <img
        src="/what-we-do-image.png"
        alt="Magnifying glass profile search illustration"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
  );
}

function ProcessCard({
  title,
  icon: Icon,
  className = "",
  style,
}: {
  title: string;
  icon: IconType;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={[
        "absolute z-10 flex h-[72px] w-[230px] items-center gap-3 rounded-[8px]",
        "border border-[#20458a]",
        "bg-[linear-gradient(180deg,rgba(22,49,115,0.98),rgba(14,33,80,0.98))]",
        "px-4 shadow-[0_18px_34px_-24px_rgba(0,0,0,0.72)]",
        className,
      ].join(" ")}
    >
      <div className="h-[40px] w-[12px] shrink-0 rounded-full bg-[#2f66ee]" />

      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#3b70f4] text-white">
        <Icon className="h-3.5 w-3.5" />
      </div>

      <div className="text-[13px] font-medium leading-none text-white">
        {title}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(90deg,#0a2865_0%,#08245c_45%,#071b3d_100%)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-[#2d83ff]" />

      <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="max-w-[420px]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7fb1ff]">
            HOW IT WORKS
          </div>

          <h2 className="mt-3 text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[34px]">
            We handle the hard part so you can focus on showing up strong.
          </h2>

          <p className="mt-4 max-w-[400px] text-[14px] leading-7 text-white/78">
            Your search gets a system: cleaner positioning, more relevant
            applications, and support when interviews start landing.
          </p>
        </div>

        {/* Mobile */}
        <div className="mt-10 space-y-4 lg:hidden">
          <div className="relative">
            <div className="relative flex h-[72px] items-center gap-3 rounded-[8px] border border-[#20458a] bg-[linear-gradient(180deg,rgba(22,49,115,0.98),rgba(14,33,80,0.98))] px-4 shadow-[0_18px_34px_-24px_rgba(0,0,0,0.72)]">
              <div className="h-[40px] w-[12px] shrink-0 rounded-full bg-[#2f66ee]" />
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#3b70f4] text-white">
                <CalendarDays className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-medium leading-none text-white">
                Schedule a call
              </div>
            </div>
          </div>

          <div className="mx-auto h-5 w-px border-l border-dashed border-[#3c84ff]/70" />

          <div className="relative">
            <div className="relative flex h-[72px] items-center gap-3 rounded-[8px] border border-[#20458a] bg-[linear-gradient(180deg,rgba(22,49,115,0.98),rgba(14,33,80,0.98))] px-4 shadow-[0_18px_34px_-24px_rgba(0,0,0,0.72)]">
              <div className="h-[40px] w-[12px] shrink-0 rounded-full bg-[#2f66ee]" />
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#3b70f4] text-white">
                <Package className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-medium leading-none text-white">
                Select a package
              </div>
            </div>
          </div>

          <div className="mx-auto h-5 w-px border-l border-dashed border-[#3c84ff]/70" />

          <div className="relative">
            <div className="relative flex h-[72px] items-center gap-3 rounded-[8px] border border-[#20458a] bg-[linear-gradient(180deg,rgba(22,49,115,0.98),rgba(14,33,80,0.98))] px-4 shadow-[0_18px_34px_-24px_rgba(0,0,0,0.72)]">
              <div className="h-[40px] w-[12px] shrink-0 rounded-full bg-[#2f66ee]" />
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#3b70f4] text-white">
                <ClipboardList className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-medium leading-none text-white">
                Preference Disclosure
              </div>
            </div>
          </div>

          <div className="mx-auto h-5 w-px border-l border-dashed border-[#3c84ff]/70" />

          <div className="relative">
            <div className="relative flex h-[72px] items-center gap-3 rounded-[8px] border border-[#20458a] bg-[linear-gradient(180deg,rgba(22,49,115,0.98),rgba(14,33,80,0.98))] px-4 shadow-[0_18px_34px_-24px_rgba(0,0,0,0.72)]">
              <div className="h-[40px] w-[12px] shrink-0 rounded-full bg-[#2f66ee]" />
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#3b70f4] text-white">
                <Briefcase className="h-3.5 w-3.5" />
              </div>
              <div className="text-[13px] font-medium leading-none text-white">
                Application Begins
              </div>
            </div>
          </div>
        </div>

        {/* Desktop locked layout */}
        <div className="relative mt-10 hidden lg:block">
          <div className="relative h-[340px] w-[770px]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 770 340"
              fill="none"
              aria-hidden="true"
            >
              {/* schedule -> select */}
              <path
                d="M230 36 H420 V108 H540"
                stroke="rgba(63,139,255,0.72)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />

              {/* select -> preference */}
              <path
                d="M540 144 H420 V204 H230"
                stroke="rgba(63,139,255,0.72)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />

              {/* preference -> application */}
              <path
                d="M230 240 H420 V300 H540"
                stroke="rgba(63,139,255,0.72)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>

            <ProcessCard
              title="Schedule a call"
              icon={CalendarDays}
              style={{ left: 0, top: 0 }}
            />

            <ProcessCard
              title="Select a package"
              icon={Package}
              style={{ left: 540, top: 108 }}
            />

            <ProcessCard
              title="Preference Disclosure"
              icon={ClipboardList}
              style={{ left: 0, top: 204 }}
            />

            <ProcessCard
              title="Application Begins"
              icon={Briefcase}
              style={{ left: 540, top: 268 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="min-w-[280px] max-w-[280px] rounded-[12px] border border-white/10 bg-[#12295a]/86 p-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)] sm:min-w-[320px] sm:max-w-[320px] lg:min-w-[360px] lg:max-w-[360px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white/90 text-[#173f95] shadow-inner">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[12px] font-medium leading-tight text-white">
              {item.name}
            </div>
            <div className="mt-1 text-[10px] text-white/60">{item.role}</div>
          </div>
        </div>
        <Apple className="mt-0.5 h-4 w-4 shrink-0 text-white" />
      </div>

      <p className="mt-4 text-[12px] leading-6 text-white/80">{item.quote}</p>
    </div>
  );
}

function TestimonialRow({
  items,
  duration = 34,
  direction = "rtl",
}: {
  items: Testimonial[];
  duration?: number;
  direction?: "rtl" | "ltr";
}) {
  const loop = [...items, ...items, ...items, ...items];
  const x = direction === "rtl" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-3 sm:gap-4"
        animate={{ x }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {loop.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function FAQCard({ item, index }: { item: FaqItem; index: number }) {
  return (
    <div
      tabIndex={0}
      className={[
        "group cursor-pointer px-5 py-4 text-white transition-all duration-300 sm:px-6",
        item.tone,
        index === 0 ? "rounded-t-[18px]" : "-mt-1",
        index === 3 ? "rounded-b-[18px]" : "",
        "hover:pb-8 focus:pb-8 sm:hover:pb-12 sm:focus:pb-12",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-medium">{item.q}</div>
        <span className="text-lg leading-none text-white/80 transition-transform duration-300 group-hover:rotate-45 group-focus:rotate-45">
          +
        </span>
      </div>

      <p className="max-h-0 overflow-hidden text-xs leading-6 text-white/90 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100 group-focus:mt-3 group-focus:max-h-32 group-focus:opacity-100">
        {item.a}
      </p>
    </div>
  );
}

function IndustryCard({ item }: { item: IndustryItem }) {
  const Icon = item.icon;

  return (
    <div className="rounded-[8px] border border-white/8 bg-[#23439a]/75 px-4 py-4 text-white/92">
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#17316c] text-white/90">
          <Icon className="h-3.5 w-3.5" />
        </div>
        <div className="text-sm font-medium">{item.title}</div>
      </div>
    </div>
  );
}

function ThemeSwitch({
  dark,
  onToggle,
}: {
  dark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={onToggle}
      className={[
        "relative inline-flex h-8 w-[40px] items-center rounded-full border p-[3px] transition-colors duration-300",
        dark ? "border-white/12 bg-[#122451]" : "border-[#cadeff] bg-white",
      ].join(" ")}
    >
      <motion.div
        animate={{ x: dark ? 0 : 12 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        className={[
          "flex h-5 w-5 items-center justify-center rounded-full shadow-sm",
          dark ? "bg-[#2e64e7] text-white" : "bg-[#dfe9ff] text-[#2250c7]",
        ].join(" ")}
      >
        {dark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
      </motion.div>
    </button>
  );
}

function CtaDecoration({
  children,
  className,
  tone,
}: {
  children: ReactNode;
  className: string;
  tone: string;
}) {
  return (
    <div
      className={[
        "pointer-events-none absolute hidden h-12 w-12 items-center justify-center rounded-2xl shadow-2xl md:flex",
        tone,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function ApplyLoopLandingPage() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const page = dark ? "bg-[#06142b] text-white" : "bg-[#edf4ff] text-[#12305e]";
  const muted = dark ? "text-white/70" : "text-[#3c5d91]";
  const navText = dark
    ? "text-white/62 hover:text-white"
    : "text-[#355588] hover:text-[#153a75]";
  const heroBg = dark
    ? "bg-[radial-gradient(circle_at_top,rgba(46,90,255,0.18),transparent_32%),linear-gradient(180deg,#071327_0%,#061326_55%,#091a36_100%)]"
    : "bg-[radial-gradient(circle_at_top,rgba(92,133,255,0.22),transparent_36%),linear-gradient(180deg,#f7faff_0%,#eef4ff_52%,#e5efff_100%)]";
  const whatWeDoSection = dark
    ? "bg-[linear-gradient(180deg,#071a3f_0%,#061531_100%)] text-white"
    : "bg-[linear-gradient(180deg,#3f6de2_0%,#335fd2_100%)] text-white";
  const howItWorksSection = dark
    ? "bg-[linear-gradient(180deg,#071b43_0%,#061634_100%)] text-white"
    : "bg-[linear-gradient(180deg,#102856_0%,#123164_100%)] text-white";
  const footerBg = dark
    ? "bg-[linear-gradient(90deg,#081325_0%,#0b1d42_48%,#081325_100%)] text-white"
    : "bg-[linear-gradient(90deg,#112f63_0%,#1a3f83_48%,#112f63_100%)] text-white";

  const topRow = testimonials.slice(0, 4);
  const bottomRow = testimonials.slice(4, 8);

  return (
    <div
      id="top"
      className={[
        inter.className,
        "min-h-screen w-full overflow-x-hidden transition-colors duration-300",
        page,
      ].join(" ")}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <section className={["relative overflow-hidden", heroBg].join(" ")}>
        <SoftGlow dark={dark} />

        <header className="relative z-20 mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-3">
            <a href="#top" className="flex min-w-0 items-center gap-2.5">
              <img
                src="/applyloop-logo-blue.png"
                alt="Apply Loop logo"
                className="h-7 w-7 object-contain"
              />
              <span
                className={[
                  "truncate text-sm font-semibold tracking-[-0.03em]",
                  dark ? "text-white" : "text-[#12305e]",
                ].join(" ")}
              >
                ApplyLoop
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={["text-[12px] transition", navText].join(" ")}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={SCHEDULE_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#2d59cf] px-3 py-2 text-xs font-medium text-white shadow-[0_20px_40px_-20px_rgba(45,89,207,0.95)] transition hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Schedule a call
              </a>
              <ThemeSwitch
                dark={dark}
                onToggle={() => setDark((value) => !value)}
              />
              <button
                type="button"
                aria-label={
                  menuOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((value) => !value)}
                className={[
                  "inline-flex h-9 w-9 items-center justify-center rounded-full border md:hidden",
                  dark
                    ? "border-white/12 bg-white/5 text-white"
                    : "border-[#cadeff] bg-white text-[#12305e]",
                ].join(" ")}
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={[
                  "mt-4 rounded-2xl border p-4 md:hidden",
                  dark
                    ? "border-white/10 bg-[#0d1d3f]/95"
                    : "border-[#d7e4ff] bg-white/95",
                ].join(" ")}
              >
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        "rounded-xl px-3 py-2 text-sm transition",
                        navText,
                      ].join(" ")}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </header>

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-10 lg:pb-28 lg:pt-16">
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-center">
              <RatingsPill />

              <h1
                className={[
                  "mt-7 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-[3.6rem]",
                  dark ? "text-white" : "text-[#102447]",
                ].join(" ")}
              >
                Spend less time applying.
              </h1>
              <div
                className="mt-2 text-3xl italic text-[#6ea2ff] sm:text-5xl lg:text-[3.6rem]"
                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
              >
                More time living.
              </div>
              <p
                className={[
                  "mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-[15px]",
                  muted,
                ].join(" ")}
              >
                We use AI + human experts to apply to jobs for you, optimize
                every application for ATS screening, and shape each submission
                around your goals.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href={SCHEDULE_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#2d59cf] px-5 py-3 text-sm font-medium text-white shadow-[0_20px_40px_-20px_rgba(45,89,207,0.95)] transition hover:-translate-y-0.5 sm:px-6"
                >
                  Schedule a call
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="mt-12 lg:mt-16">
              <HeroPreviewCard />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={dark ? "bg-[#0b1834]" : "bg-[#eaf2ff]"}>
  <div className="w-full py-10 lg:py-12">
    <SectionReveal>
      <p
        className={[
          "px-4 text-center text-sm sm:px-6 lg:px-10",
          dark ? "text-white" : "text-[#143365]",
        ].join(" ")}
      >
        Companies we can help you apply to and get hired
      </p>

      <div className="relative mt-8 w-full overflow-hidden">
        <div
          className={[
            "pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r sm:w-16",
            dark
              ? "from-[#0b1834] to-transparent"
              : "from-[#eaf2ff] to-transparent",
          ].join(" ")}
        />
        <div
          className={[
            "pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l sm:w-16",
            dark
              ? "from-[#0b1834] to-transparent"
              : "from-[#eaf2ff] to-transparent",
          ].join(" ")}
        />

        <motion.div
          className="flex w-max items-center gap-5 sm:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 120,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {companyMarquee.map((company, index) => (
            <CompanyLogo
              key={`${company.file}-${index}`}
              company={company}
            />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  </div>
</section>

      <section
        id="what-we-do"
        className={["relative overflow-hidden scroll-mt-28", whatWeDoSection].join(
          " "
        )}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <SectionReveal>
              <div className="max-w-[34rem]">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#2f60d5] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_16px_34px_-18px_rgba(47,96,213,0.95)]">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  WHAT WE DO
                </div>
                <h2 className="mt-7 max-w-[31rem] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
                  Job hunting shouldn&apos;t feel like a full-time job.
                </h2>
                <p className="mt-5 max-w-[28rem] text-sm leading-7 text-white/76 sm:text-[15px]">
                  You apply to dozens, sometimes hundreds, of jobs and hear back
                  from almost none. It&apos;s repetitive, time-consuming, and
                  frustrating.
                </p>
                <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">
                  It&apos;s not you. It&apos;s the process.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="relative flex justify-center lg:justify-end">
                <img
                  src="/what-we-do-image.png"
                  alt="What we do illustration"
                  className="max-w-full h-auto rounded-xl shadow-lg"
                  style={{ maxWidth: 420 }}
                />
              </div>
            </SectionReveal>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.06}>
                <FeatureCard item={item} dark={dark} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className={["relative overflow-hidden", howItWorksSection].join(" ")}
      >
        <SectionReveal>
          <HowItWorksSection />
        </SectionReveal>
      </section>

      <section id="testimonials" className={dark ? "bg-[#08162f]" : "bg-[#102856]"}>
        <div className="w-full scroll-mt-28 py-16 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
              <div className="max-w-xl">
                <div className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  Testimonials
                </div>
                <h2 className="mt-8 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  What people are saying about Applyloop
                </h2>
              </div>
            </div>
          </SectionReveal>

          <div className="mt-10 w-full space-y-4 sm:mt-12">
            <TestimonialRow items={topRow} duration={36} direction="rtl" />
            <TestimonialRow items={bottomRow} duration={40} direction="ltr" />
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className={dark ? "bg-[#08162f] text-white" : "bg-[#102856] text-white"}
      >
        <div className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                About Us
              </h2>
              <p className="mx-auto mt-8 max-w-4xl text-lg font-medium leading-[1.5] tracking-tight text-white/76 sm:text-[1.45rem] lg:text-[2.1rem]">
                Finding the right job today takes strategy, consistency, and
                time most people simply don&apos;t have.{" "}
                <span className="font-semibold text-white">Applyloop</span>{" "}
                combines the{" "}
                <span className="font-semibold text-white">speed of AI</span>{" "}
                with the precision of{" "}
                <span className="font-semibold text-white">
                  human expertise
                </span>
                .
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-[#23439a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                Works For All Industries
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/72">
                From first application to final offer, ApplyLoop empowers job
                seekers to succeed faster, smarter, and with confidence.
              </p>
            </div>
          </SectionReveal>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            {industryItems.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.04}>
                <IndustryCard item={item} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className={dark ? "bg-[#08162f]" : "bg-[#102856]"}>
        <div className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7da8ff]">
                FAQs
              </div>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                Need Answers? Here are some you might need
              </h2>

              <div className="mt-10 overflow-hidden rounded-[18px]">
                {faqs.map((item, index) => (
                  <FAQCard key={item.q} item={item} index={index} />
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section
        id="ats-review"
        className={
          dark ? "bg-[#08162f] text-white" : "bg-[#edf4ff] text-[#12305e]"
        }
      >
        <div className="mx-auto max-w-7xl scroll-mt-28 px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <SectionReveal delay={0.1}>
              <div
                className={[
                  "rounded-[28px] border p-4 shadow-[0_30px_80px_-25px_rgba(59,130,246,0.36)] sm:p-6",
                  dark
                    ? "border-white/10 bg-white/[0.04]"
                    : "border-[#cfddff] bg-white/90",
                ].join(" ")}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <div
                    className={[
                      "text-lg font-medium",
                      dark ? "text-white" : "text-[#12305e]",
                    ].join(" ")}
                  >
                    Application Pipeline
                  </div>
                  <div className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
                    98% ATS Pass Rate
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      role: "Product Manager at Stripe",
                      status: "AI Parsing...",
                      icon: FileSearch,
                      tone: "bg-blue-100 text-blue-700",
                    },
                    {
                      role: "UX Designer at Linear",
                      status: "Human Review...",
                      icon: Sparkles,
                      tone: "bg-violet-100 text-violet-700",
                    },
                    {
                      role: "Frontend Dev at Vercel",
                      status: "Submitted",
                      icon: Check,
                      tone: "bg-emerald-100 text-emerald-700",
                    },
                  ].map((row) => {
                    const Icon = row.icon;
                    return (
                      <div
                        key={row.role}
                        className={[
                          "flex flex-col gap-3 rounded-2xl border px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                          dark
                            ? "border-white/10 bg-white/[0.03]"
                            : "border-[#dde7ff] bg-[#f7faff]",
                        ].join(" ")}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={[
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                              row.tone,
                            ].join(" ")}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div
                            className={[
                              "truncate text-sm font-medium sm:text-base",
                              dark ? "text-white" : "text-[#12305e]",
                            ].join(" ")}
                          >
                            {row.role}
                          </div>
                        </div>
                        <div
                          className={[
                            "shrink-0 text-xs sm:text-sm",
                            dark ? "text-white/60" : "text-[#5b77a8]",
                          ].join(" ")}
                        >
                          {row.status}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className={dark ? "text-white/92" : "text-[#12305e]"}>
                  Optimized for ATS.
                </span>
                <br />
                <span className="text-[#6ea2ff]">Reviewed by humans.</span>
              </h2>
              <p
                className={[
                  "mt-8 max-w-xl text-base leading-8",
                  muted,
                ].join(" ")}
              >
                We don&apos;t just spam job boards. ApplyLoop uses a hybrid
                model to make every application technologically optimized and
                contextually precise.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "AI Automation",
                    desc: "Scans job descriptions, extracts keywords, and formats your resume to pass ATS filters.",
                    icon: Brain,
                  },
                  {
                    title: "Human Quality Control",
                    desc: "Trained specialists handle complex forms, custom cover letters, and final review.",
                    icon: Users,
                  },
                ].map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f4fc4] text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div
                          className={[
                            "text-lg font-medium",
                            dark ? "text-white" : "text-[#12305e]",
                          ].join(" ")}
                        >
                          {feature.title}
                        </div>
                        <div
                          className={[
                            "mt-1 max-w-xl text-sm leading-7",
                            muted,
                          ].join(" ")}
                        >
                          {feature.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section
        id="become-client"
        className={dark ? "bg-[#08162f]" : "bg-[#edf4ff]"}
      >
        <div className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-16 pt-14 sm:px-6 lg:px-10 lg:pb-20">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-[34px] bg-[#2f4278] px-6 py-12 text-white sm:px-12 sm:py-14 lg:px-16 lg:py-16">
              <CtaDecoration
                className="left-[18%] top-[18%] rotate-12"
                tone="bg-[#1f3f8a] text-white"
              >
                <Briefcase className="h-4 w-4" />
              </CtaDecoration>
              <CtaDecoration
                className="left-[20%] bottom-[18%] -rotate-12"
                tone="bg-[#77aaff] text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </CtaDecoration>
              <CtaDecoration
                className="right-[18%] top-[14%] rotate-[16deg]"
                tone="bg-white text-[#1f4fc4]"
              >
                <Sparkles className="h-4 w-4" />
              </CtaDecoration>

              <div className="relative z-10 mx-auto max-w-[420px] text-center">
                <div className="text-sm font-medium text-white/85">
                  ApplyLoop
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Start landing interviews as soon as you want
                </h2>
                <div className="mt-4 text-sm leading-7 text-white/80">
                  Let us handle your applications while you focus on getting
                  hired.
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <a
                    href={SCHEDULE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2453c7] transition hover:-translate-y-0.5"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer
        className={[
          "relative overflow-hidden border-t border-white/8",
          footerBg,
        ].join(" ")}
      >
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <a href="#top" className="text-sm font-medium text-white/92">
              ApplyLoop
            </a>
            <div className="grid grid-cols-2 gap-4 sm:max-w-sm sm:justify-self-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/76 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full border-y border-white/10 px-2 py-8 sm:px-4 lg:py-10">
          <div className="w-full overflow-hidden text-center text-[18vw] font-semibold leading-none tracking-[-0.08em] text-white/95 sm:text-[17vw] lg:text-[13vw]">
            APPLY LOOP
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div>Copyright © 2026 all rights reserved.</div>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-white">
              Back to top <ChevronUp className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11px] leading-6 text-white/48 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              Disclaimer: This platform provides guidance, resources, and
              support to enhance your job search. Securing employment within 30
              days depends on market conditions, individual effort, and employer
              decisions.
            </div>
            <div className="flex flex-wrap gap-4 text-white/56">
              <a href="#">Refund Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}