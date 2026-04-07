"use client";

import React, { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
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
  Moon,
  Package,
  Sparkles,
  Sun,
  Target,
  Users,
  Wand2,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

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

const navLinks = [
  { label: "Services", href: "#what-we-do" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faqs", href: "#faqs" },
];

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#what-we-do" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Join us", href: "#join-us" },
  { label: "Become a client", href: "#become-client" },
];

const whatWeDo: FeatureItem[] = [
  {
    title: "Optimize Resume",
    desc: "ATS-friendly and recruiter-approved to increase your chances of getting noticed.",
    icon: FileSearch,
  },
  {
    title: "Job Application",
    desc: "Personalized applications sent daily based on your goals.",
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
      ? "It has been helpful in providing our Biz Dev team contacts to pursue. The thing I like best is the fantastic support that I get from Mike Fister. He is always available or responds within a short time, communicates happily and well and is very knowledgeable."
      : "Applyloop helped reduce the stress of applying. The support was responsive, clear, and practical, and the process felt much more organized from resume updates to interview preparation.",
}));

const faqs: FaqItem[] = [
  {
    q: "How does Applyloop work?",
    a: "Applyloop starts with a quick consultation, aligns your goals, optimizes your application materials, and then manages tailored submissions on your behalf.",
    tone: "bg-[#3560d2]",
  },
  {
    q: "Will I still have control over my job applications?",
    a: "Yes. You stay in control of your preferences, target roles, and final direction while Applyloop handles the heavy lifting.",
    tone: "bg-[#f1ab5a] text-white",
  },
  {
    q: "Are the applications customized for each job?",
    a: "Yes. Every application is tailored for the role, using optimized keywords, recruiter-friendly positioning, and context-specific edits.",
    tone: "bg-[#102f67]",
  },
  {
    q: "How many jobs will you apply to for me?",
    a: "This depends on your subscription plan. Each plan includes a set number of applications per week, which you can adjust or upgrade anytime.",
    tone: "bg-[#6f9de8]",
    active: true,
  },
];

const companyIds = [
  "deloitte",
  "interswitch",
  "meta",
  "oracle",
  "tesla",
  "google",
] as const;

const companyMarquee = [...companyIds, ...companyIds, ...companyIds, ...companyIds];

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
      viewport={{ once: true, amount: 0.16 }}
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
          "pointer-events-none absolute -left-16 top-0 h-80 w-80 rounded-full blur-3xl",
          dark ? "bg-[#2d59cf]/18" : "bg-[#7ea6ff]/28",
        ].join(" ")}
      />
      <div
        className={[
          "pointer-events-none absolute bottom-0 right-[6%] h-96 w-96 rounded-full blur-3xl",
          dark ? "bg-[#315de2]/12" : "bg-[#8cb2ff]/22",
        ].join(" ")}
      />
    </>
  );
}

function Pill({
  children,
  dark,
  white = false,
}: {
  children: ReactNode;
  dark: boolean;
  white?: boolean;
}) {
  return (
    <motion.div
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] shadow-[0_16px_36px_-18px_rgba(59,130,246,0.8)]",
        white
          ? "border-[#d9e6ff] bg-white text-[#2453c7]"
          : dark
            ? "border-white/10 bg-[#2d59cf] text-white"
            : "border-[#d2ddff] bg-[#2d59cf] text-white",
      ].join(" ")}
    >
      <motion.span
        className={[
          "h-2.5 w-2.5 rounded-full",
          white ? "bg-[#2f5fe0]" : "bg-white",
        ].join(" ")}
        animate={{ opacity: [0.55, 1, 0.55], scale: [0.9, 1.06, 0.9] }}
        transition={{ duration: 1.55, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}

function CompanyWordmark({ company }: { company: (typeof companyIds)[number] }) {
  if (company === "deloitte") {
    return (
      <div className="min-w-[148px] text-center text-[1.95rem] font-semibold tracking-[-0.05em] text-white/35">
        Deloitte<span className="text-[#c9d93a]">.</span>
      </div>
    );
  }

  if (company === "interswitch") {
    return (
      <div className="relative min-w-[160px] text-center text-[1.95rem] font-semibold tracking-[-0.05em] text-[#1d748d]">
        Interswitch
        <span className="absolute right-[10px] top-[2px] text-[1.55rem] text-[#ef4d4d]">↗</span>
      </div>
    );
  }

  if (company === "meta") {
    return (
      <div className="flex min-w-[130px] items-center justify-center">
        <svg width="60" height="38" viewBox="0 0 60 38" fill="none" aria-label="Meta logo">
          <path
            d="M6 30C8.6 19.4 12.1 8.8 18.4 8.8C24.6 8.8 28.4 30 30 30C31.6 30 35.4 8.8 41.6 8.8C47.9 8.8 51.4 19.4 54 30"
            stroke="#2f7cff"
            strokeWidth="4.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (company === "oracle") {
    return (
      <div className="min-w-[150px] text-center text-[1.95rem] font-semibold uppercase tracking-[0.08em] text-[#ff3434]">
        Oracle
      </div>
    );
  }

  if (company === "tesla") {
    return (
      <div className="min-w-[146px] text-center text-[1.5rem] font-medium uppercase tracking-[0.44em] text-white/44">
        Tesla
      </div>
    );
  }

  return (
    <div className="min-w-[150px] text-center text-[1.95rem] font-semibold tracking-[-0.06em]">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#DB4437]">o</span>
      <span className="text-[#F4B400]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#0F9D58]">l</span>
      <span className="text-[#DB4437]">e</span>
    </div>
  );
}

function AnimatedRule({ width, delay = 0 }: { width: string; delay?: number }) {
  return (
    <div className="h-[2px] overflow-hidden rounded-full bg-white/10">
      <motion.div
        className={["h-full rounded-full bg-gradient-to-r from-transparent via-[#9db7ff] to-transparent", width].join(" ")}
        initial={{ x: "-130%" }}
        animate={{ x: ["-130%", "130%"] }}
        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay }}
      />
    </div>
  );
}

function HeroPreviewCard({ dark }: { dark: boolean }) {
  const items = [
    { title: "AI Resume Optimization", icon: Wand2 },
    { title: "Human Specialist Review", icon: Users },
  ];

  return (
    <div
      className={[
        "relative mx-auto max-w-[760px] overflow-hidden rounded-[14px] border px-4 py-4 shadow-[0_28px_90px_-36px_rgba(59,130,246,0.42)] backdrop-blur-sm sm:px-5",
        dark ? "border-white/8 bg-[rgba(13,27,58,0.82)]" : "border-[#d7e4ff] bg-white/80",
      ].join(" ")}
    >
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-[-20%] w-[30%] bg-gradient-to-r from-transparent via-white/6 to-transparent blur-xl"
        animate={{ x: ["0%", "420%"] }}
        transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={[
                "rounded-[12px] border px-4 py-4",
                dark ? "border-white/6 bg-[#0d1835]/78" : "border-[#dce6ff] bg-[#f7faff]",
              ].join(" ")}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded-[4px] border border-[#cddcff] bg-white text-[#2350c3]">
                  <Check className="h-3 w-3" />
                </div>
                <div className={[
                  "text-[12.5px] font-medium",
                  dark ? "text-white/92" : "text-[#163363]",
                ].join(" ")}>
                  {item.title}
                </div>
                <motion.div
                  className="ml-auto h-2.5 w-2.5 rounded-full bg-[#4d7bff]"
                  animate={{ opacity: [0.35, 1, 0.35], scale: [0.92, 1.12, 0.92] }}
                  transition={{ duration: 1.35, repeat: Number.POSITIVE_INFINITY, delay: index * 0.18 }}
                />
              </div>

              <div className="mt-4 grid grid-cols-[36px_1fr] items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2b56c6] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="space-y-2">
                  <AnimatedRule width="w-[94%]" delay={index * 0.16 + 0.05} />
                  <AnimatedRule width="w-[87%]" delay={index * 0.16 + 0.14} />
                  <AnimatedRule width="w-[91%]" delay={index * 0.16 + 0.23} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FeatureCard({ item, dark }: { item: FeatureItem; dark: boolean }) {
  const Icon = item.icon;

  return (
    <div
      className={[
        "rounded-[12px] border px-5 py-5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.6)] backdrop-blur-sm",
        dark ? "border-white/10 bg-[#16357f]/42" : "border-[#cfe0ff] bg-[#f7faff]",
      ].join(" ")}
    >
      <div className={[
        "mb-4 flex h-8 w-8 items-center justify-center rounded-[8px]",
        dark ? "bg-[#2958d7]/78 text-white" : "bg-[#2e60df] text-white",
      ].join(" ")}>
        <Icon className="h-4 w-4" />
      </div>
      <h3 className={[
        "text-[1.15rem] font-medium",
        dark ? "text-white" : "text-[#132c57]",
      ].join(" ")}>
        {item.title}
      </h3>
      <p className={[
        "mt-2 max-w-[19rem] text-sm leading-6",
        dark ? "text-white/72" : "text-[#36517f]",
      ].join(" ")}>
        {item.desc}
      </p>
    </div>
  );
}

function SearchIllustration() {
  return (
    <div className="relative mx-auto h-[280px] w-[360px] sm:h-[330px] sm:w-[430px] lg:mx-0">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute right-[18px] top-[32px] h-[62px] w-[132px] rounded-[14px] bg-[#f0b565] px-4 py-3 text-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]"
      >
        <div className="h-[10px] w-[10px] rounded-full border border-white/70" />
        <div className="mt-3 h-[2px] w-[74px] rounded-full bg-white/80" />
        <div className="mt-2 h-[2px] w-[88px] rounded-full bg-white/50" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
        className="absolute left-[28px] top-[128px] h-[58px] w-[136px] rounded-full bg-[#73beff] px-4 py-3 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.45)]"
      >
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-white/90" />
          <div className="h-[2px] w-[60px] rounded-full bg-white/85" />
        </div>
        <div className="mt-2 h-[2px] w-[74px] rounded-full bg-white/55" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-0 top-[176px] h-[22px] w-[74px] rounded-full bg-[#ef89c7] px-4 py-2 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.45)]"
      >
        <div className="h-[2px] w-[36px] rounded-full bg-white/80" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 5.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-[126px] top-[90px] h-[150px] w-[150px] rounded-full border-[8px] border-[#2c5cc4] bg-[radial-gradient(circle_at_50%_45%,rgba(185,218,255,0.9),rgba(136,182,255,0.95)_62%,rgba(75,125,230,1)_100%)] shadow-[0_24px_50px_-25px_rgba(0,0,0,0.55)]"
      >
        <div className="absolute inset-[13px] rounded-full border border-white/20 bg-[radial-gradient(circle_at_48%_40%,rgba(255,255,255,0.92),rgba(202,224,255,0.84)_45%,rgba(111,158,244,0.95)_100%)]">
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-[74%] rounded-full bg-[#7fa6f3]" />
          <div className="absolute bottom-[23%] left-1/2 h-11 w-[56px] -translate-x-1/2 rounded-t-[999px] rounded-b-[20px] bg-[#8ab0fb]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [40, 44, 40] }}
        transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-[214px] top-[214px] h-[86px] w-[20px] rounded-full bg-[#173b88] shadow-[0_14px_26px_-16px_rgba(0,0,0,0.75)]"
        style={{ transformOrigin: "top center" }}
      />
    </div>
  );
}

function StepCard({
  title,
  icon: Icon,
  className,
  width,
  height,
}: {
  title: string;
  icon: IconType;
  className: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className={[
        "absolute rounded-[12px] border border-white/10 bg-[#12295f]/88 px-4 py-4 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.65)]",
        width,
        height,
        className,
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-4 rounded-full bg-[#2f5fe0]" />
        <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#2a5ae0] text-white">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3 text-[15px] font-medium text-white/92">{title}</div>
    </div>
  );
}

function HowItWorksDiagram() {
  return (
    <div className="relative mt-12 h-[430px] w-full max-w-[760px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 760 430" fill="none" aria-hidden="true">
        <path d="M176 70 H456 V104" stroke="rgba(111,158,255,0.68)" strokeWidth="1.5" strokeDasharray="7 8" />
        <path d="M456 138 H144 V228" stroke="rgba(111,158,255,0.68)" strokeWidth="1.5" strokeDasharray="7 8" />
        <path d="M268 268 H540 V332" stroke="rgba(111,158,255,0.68)" strokeWidth="1.5" strokeDasharray="7 8" />
      </svg>

      <StepCard title="Schedule a call" icon={CalendarDays} width="w-[178px]" height="h-[74px]" className="left-0 top-0" />
      <StepCard title="Select a package" icon={Package} width="w-[176px]" height="h-[74px]" className="left-[448px] top-[96px]" />
      <StepCard title="Preference Disclosure" icon={ClipboardList} width="w-[176px]" height="h-[74px]" className="left-[78px] top-[196px]" />
      <StepCard title="Application Begins" icon={Briefcase} width="w-[176px]" height="h-[74px]" className="left-[486px] top-[300px]" />
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="min-w-[360px] rounded-[12px] border border-white/10 bg-[#12295a]/86 p-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white/90 text-[#173f95] shadow-inner">
            <Users className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[12px] font-medium leading-tight text-white">{item.name}</div>
            <div className="mt-1 text-[10px] text-white/60">{item.role}</div>
          </div>
        </div>
        <Apple className="mt-0.5 h-4 w-4 text-white" />
      </div>

      <p className="mt-4 text-[12px] leading-6 text-white/80">{item.quote}</p>
    </div>
  );
}

function TestimonialRow({ items, duration = 34 }: { items: Testimonial[]; duration?: number }) {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
      className={[
        "px-6 py-4 text-white",
        item.tone,
        item.active ? "rounded-b-[18px] pb-16" : "-mb-1",
        index === 0 ? "rounded-t-[18px]" : "",
      ].join(" ")}
    >
      <div className="text-sm font-medium">{item.q}</div>
      {item.active ? <p className="mt-3 max-w-[34rem] text-xs leading-6 text-white/90">{item.a}</p> : null}
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

function ThemeSwitch({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
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

export default function ApplyLoopLandingPage() {
  const [dark, setDark] = useState(true);

  const page = dark ? "bg-[#06142b] text-white" : "bg-[#edf4ff] text-[#12305e]";
  const muted = dark ? "text-white/70" : "text-[#3c5d91]";
  const navText = dark ? "text-white/62 hover:text-white" : "text-[#355588] hover:text-[#153a75]";
  const heroBg = dark
    ? "bg-[radial-gradient(circle_at_top,rgba(46,90,255,0.18),transparent_32%),linear-gradient(180deg,#071327_0%,#061326_55%,#091a36_100%)]"
    : "bg-[radial-gradient(circle_at_top,rgba(92,133,255,0.22),transparent_36%),linear-gradient(180deg,#f7faff_0%,#eef4ff_52%,#e5efff_100%)]";
  const blueSection = dark
    ? "bg-[linear-gradient(180deg,#0d2d74_0%,#0c2868_100%)] text-white"
    : "bg-[linear-gradient(180deg,#3f6de2_0%,#335fd2_100%)] text-white";
  const darkSection = dark
    ? "bg-[linear-gradient(180deg,#08162f_0%,#08182f_100%)] text-white"
    : "bg-[linear-gradient(180deg,#102856_0%,#123164_100%)] text-white";
  const footerBg = dark
    ? "bg-[linear-gradient(90deg,#081325_0%,#0b1d42_48%,#081325_100%)] text-white"
    : "bg-[linear-gradient(90deg,#112f63_0%,#1a3f83_48%,#112f63_100%)] text-white";

  const topRow = testimonials.slice(0, 4);
  const bottomRow = testimonials.slice(4, 8);

  return (
    <div id="top" className={[poppins.className, "min-h-screen w-full transition-colors duration-300", page].join(" ")}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <section className={["relative overflow-hidden", heroBg].join(" ")}>
        <SoftGlow dark={dark} />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/applyloop-logo-blue.png" alt="Apply Loop logo" className="h-7 w-7 object-contain" />
            <span className={["text-sm font-semibold tracking-[-0.03em]", dark ? "text-white" : "text-[#12305e]"].join(" ")}>ApplyLoop</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={["text-[12px] transition", navText].join(" ")}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/4YV2VJEgkqPegeo59"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#2d59cf] px-5 py-2.5 text-sm font-medium text-white shadow-[0_20px_40px_-20px_rgba(45,89,207,0.95)] transition hover:-translate-y-0.5 md:inline-flex"
            >
              Schedule a call
            </a>
            <ThemeSwitch dark={dark} onToggle={() => setDark((value) => !value)} />
          </div>
        </header>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-16">
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-center">
              <Pill dark={dark} white>
                4.8 ⭐ Rated by users
              </Pill>

              <h1 className={["mt-7 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-[3.6rem]", dark ? "text-white" : "text-[#102447]"].join(" ")}>
                Spend less time applying.
              </h1>
              <div
                className="mt-2 text-4xl italic text-[#6ea2ff] sm:text-5xl lg:text-[3.6rem]"
                style={{ fontFamily: "Georgia, Times New Roman, serif" }}
              >
                More time living.
              </div>
              <p className={["mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-[15px]", muted].join(" ")}>
                We use AI + human experts to apply to jobs for you, optimize every application for ATS screening,
                and shape each submission around your goals.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a
                  href="https://calendar.app.google/4YV2VJEgkqPegeo59"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#2d59cf] px-6 py-3 text-sm font-medium text-white shadow-[0_20px_40px_-20px_rgba(45,89,207,0.95)] transition hover:-translate-y-0.5"
                >
                  Schedule a call
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-14 lg:mt-16">
              <HeroPreviewCard dark={dark} />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={dark ? "bg-[#0b1834]" : "bg-[#eaf2ff]"}>
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-12">
          <SectionReveal>
            <p className={[
              "text-center text-sm",
              dark ? "text-white" : "text-[#143365]",
            ].join(" ")}>
              Companies we can help you apply to and get hired
            </p>

            <div className="relative mt-8 overflow-hidden">
              <div className={[
                "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r",
                dark ? "from-[#0b1834] to-transparent" : "from-[#eaf2ff] to-transparent",
              ].join(" ")} />
              <div className={[
                "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l",
                dark ? "from-[#0b1834] to-transparent" : "from-[#eaf2ff] to-transparent",
              ].join(" ")} />

              <motion.div
                className="flex items-center gap-6 sm:gap-8"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {companyMarquee.map((company, index) => (
                  <CompanyWordmark key={`${company}-${index}`} company={company} />
                ))}
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="what-we-do" className={["relative overflow-hidden scroll-mt-28", blueSection].join(" ")}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <SectionReveal>
              <div className="max-w-[34rem]">
                <Pill dark={dark}>What we do</Pill>
                <h2 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Job hunting shouldn&apos;t feel like a full-time job.
                </h2>
                <p className="mt-5 max-w-[28rem] text-sm leading-7 text-white/78 sm:text-[15px]">
                  You apply to dozens, sometimes hundreds, of jobs and hear back from almost none. It&apos;s repetitive,
                  time-consuming, and frustrating.
                </p>
                <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">It&apos;s not you. It&apos;s the process.</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="relative flex justify-center lg:justify-end">
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
                <SearchIllustration />
              </div>
            </SectionReveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item, index) => (
              <SectionReveal key={item.title} delay={index * 0.06}>
                <FeatureCard item={item} dark={dark} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={["relative overflow-hidden", darkSection].join(" ")}>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="max-w-[38rem]">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7da8ff]">HOW IT WORKS</div>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                We handle the hard part so you can focus on showing up strong.
              </h2>
              <p className="mt-5 max-w-[33rem] text-sm leading-7 text-white/72 sm:text-[15px]">
                Your search gets a system: cleaner positioning, more relevant applications, and support when interviews start landing.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <HowItWorksDiagram />
          </SectionReveal>
        </div>
      </section>

      <section id="testimonials" className={dark ? "bg-[#08162f]" : "bg-[#102856]"}>
        <div className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="max-w-xl">
              <Pill dark>
                Testimonials
              </Pill>
              <h2 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                What people are saying about Applyloop
              </h2>
            </div>
          </SectionReveal>

          <div className="mt-12 space-y-4">
            <TestimonialRow items={topRow} duration={34} />
            <TestimonialRow items={bottomRow} duration={39} />
          </div>
        </div>
      </section>

      <section className="bg-[#23439a] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Works For All Industries</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/72">
                From first application to final offer, Final Round AI empowers job seekers to succeed, faster, smarter, and with confidence.
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
        <div className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 lg:px-10 lg:py-24">
          <SectionReveal>
            <div className="mx-auto max-w-4xl text-white">
              <div className="text-sm font-semibold uppercase tracking-[0.08em] text-[#7da8ff]">FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
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

      <section id="ats-review" className={dark ? "bg-[#08162f] text-white" : "bg-[#edf4ff] text-[#12305e]"}>
        <div className="mx-auto max-w-7xl scroll-mt-28 px-6 py-10 lg:px-10 lg:py-16">
          <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <SectionReveal delay={0.1}>
              <div className={[
                "rounded-[28px] border p-5 shadow-[0_30px_80px_-25px_rgba(59,130,246,0.36)] sm:p-6",
                dark ? "border-white/10 bg-white/[0.04]" : "border-[#cfddff] bg-white/90",
              ].join(" ")}>
                <div className="flex items-center justify-between gap-4">
                  <div className={[
                    "text-lg font-medium",
                    dark ? "text-white" : "text-[#12305e]",
                  ].join(" ")}>
                    Application Pipeline
                  </div>
                  <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
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
                          "flex items-center justify-between gap-4 rounded-2xl border px-4 py-4",
                          dark ? "border-white/10 bg-white/[0.03]" : "border-[#dde7ff] bg-[#f7faff]",
                        ].join(" ")}
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className={[
                            "flex h-9 w-9 items-center justify-center rounded-xl",
                            row.tone,
                          ].join(" ")}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className={[
                            "truncate text-sm font-medium sm:text-base",
                            dark ? "text-white" : "text-[#12305e]",
                          ].join(" ")}>
                            {row.role}
                          </div>
                        </div>
                        <div className={[
                          "shrink-0 text-xs sm:text-sm",
                          dark ? "text-white/60" : "text-[#5b77a8]",
                        ].join(" ")}>
                          {row.status}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className={dark ? "text-white/92" : "text-[#12305e]"}>Optimized for ATS.</span>
                <br />
                <span className="text-[#6ea2ff]">Reviewed by humans.</span>
              </h2>
              <p className={["mt-8 max-w-xl text-base leading-8", muted].join(" ")}>
                We don&apos;t just spam job boards. Apply Loop uses a hybrid model to make every application technologically optimized and contextually precise.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "AI Automation",
                    desc: "Scans job descriptions, extracts keywords, and automatically formats your resume to bypass ATS filters.",
                    icon: Brain,
                  },
                  {
                    title: "Human Quality Control",
                    desc: "Trained specialists handle complex application forms, write custom cover letters, and ensure final polish.",
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
                        <div className={[
                          "text-lg font-medium",
                          dark ? "text-white" : "text-[#12305e]",
                        ].join(" ")}>
                          {feature.title}
                        </div>
                        <div className={["mt-1 max-w-xl text-sm leading-7", muted].join(" ")}>
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

      <section id="become-client" className={dark ? "bg-[#08162f]" : "bg-[#edf4ff]"}>
        <div className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-16 pt-14 lg:px-10 lg:pb-20">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(73,98,180,0.72),rgba(57,82,160,0.8))] px-8 py-12 text-white sm:px-12 sm:py-14">
              <div className="absolute left-[18%] top-[18%] flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-[#1f3f8a] text-white shadow-2xl">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="absolute left-[24%] top-[58%] flex h-14 w-14 -rotate-12 items-center justify-center rounded-2xl bg-[#76aaff] text-white shadow-2xl">
                <ArrowUpRight className="h-5 w-5" />
              </div>
              <div className="absolute right-[18%] top-[18%] flex h-16 w-16 rotate-[18deg] items-center justify-center rounded-2xl bg-white text-[#1f4fc4] shadow-2xl">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="absolute right-[24%] top-[58%] flex h-16 w-16 -rotate-[14deg] items-center justify-center rounded-2xl bg-[#76aaff] text-white shadow-2xl">
                <Users className="h-5 w-5" />
              </div>

              <div className="relative mx-auto max-w-3xl text-center">
                <div className="text-sm font-medium text-white/85">Apply Loop</div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.2rem]">
                  Start landing interviews as soon as you want
                </h2>
                <div className="mt-4 text-sm leading-7 text-white/80">
                  Let us handle your applications while you focus on getting hired.
                </div>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#top"
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

      <footer className={["relative overflow-hidden border-t border-white/8", footerBg].join(" ")}>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <a href="#top" className="text-sm font-medium text-white/92">
              Apply Loop
            </a>
            <div className="grid grid-cols-2 gap-4 sm:max-w-sm sm:justify-self-end">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-white/76 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-10 lg:mt-24 lg:pt-14">
            <div className="overflow-hidden text-[18vw] font-semibold leading-none tracking-[-0.08em] text-white/95 lg:text-[12rem]">
              APPLY LOOP
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div>Copyright © 2026 all rights reserved.</div>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-white">
              Back to top <ChevronUp className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-8 text-[11px] leading-6 text-white/48 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              Disclaimer: This platform provides guidance, resources, and support to enhance your job search. However, securing employment within 30 days depends on various factors beyond our control, including market conditions, individual effort, and employer decisions. We do not guarantee job placement within any specific timeframe.
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
