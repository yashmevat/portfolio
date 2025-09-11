"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Menu,
  X,
  ExternalLink,
  Download,
  Sparkles,
} from "lucide-react";

// ====== Your Personal Details ======
const YOUR_NAME = "Yash Mevat";
const GITHUB_URL = "https://github.com/yashmevat";
const LINKEDIN_URL = "https://www.linkedin.com/in/yash-mevat-4630ab256/";
const EMAIL = "yashmevat16@gmail.com";

// Put these files in `/public`
const RESUME_LINK = "/YashResume2025.pdf";
const PROFILE_IMAGE = "/profile2.jpg";

// ====== Motion Variants / Helpers ======
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }, // ✅ tuple
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const float = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const, // ✅ fixed
    },
  },
};
const scaleTap = { whileTap: { scale: 0.97 } };

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm backdrop-blur border-white/15 bg-white/5 text-white/80">
    {children}
  </span>
);

const Section = ({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className={`relative mx-auto w-full max-w-6xl px-4 md:px-8 ${className}`}
  >
    {children}
  </section>
);

// ====== Navbar ======
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur bg-black/30" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <button
          onClick={() => scrollToId("home")}
          className="group inline-flex items-center gap-2"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500">
            <motion.span className="absolute inset-0" {...float} />
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90 md:text-base">
            {YOUR_NAME}
            <span className="text-white/50">.dev</span>
          </span>
        </button>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToId(l.id)}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
            </button>
          ))}
          <a
            href={RESUME_LINK}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 shadow-sm transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-white/15 bg-white/5 p-2 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-4 mb-3 rounded-2xl border border-white/15 bg-black/60 p-4 backdrop-blur md:hidden"
          >
            <div className="grid gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    setOpen(false);
                    scrollToId(l.id);
                  }}
                  className="rounded-xl px-3 py-2 text-left text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={RESUME_LINK}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ====== Hero ======
function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0B12] via-[#0B0B12] to-[#0B0B12]">
      {/* soft glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[140px]" />
        <div className="absolute left-[10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <Section
        id="home"
        className="flex min-h-[88vh] items-center pt-28"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid w-full items-center gap-8 md:grid-cols-2"
        >
          <div>
            <motion.div
              variants={fadeInUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Open to
              work · Remote / On-site
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-balance text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              Hi, I’m {YOUR_NAME}
              <br />
              <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                MCA Student
              </span>{" "}
              & MERN Stack Developer
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-xl text-white/70"
            >
              Currently working at <span className="font-semibold text-white">Ekarigar Technologies</span> as a MERN Stack Developer.
              I build responsive, animated, and user-friendly products with Next.js, React, Node.js, PHP, PHP codeigniter, Prisma, and more.
            </motion.p>


            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <motion.a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                {...scaleTap}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 hover:bg-white/10"
              >
                <Github className="h-5 w-5" /> GitHub
              </motion.a>
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                {...scaleTap}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/90 hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </motion.a>
              <motion.button
                {...scaleTap}
                onClick={() => scrollToId("projects")}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/90 px-4 py-2 font-medium text-black transition hover:bg-white"
              >
                View Projects{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Showcase */}
          <motion.div variants={fadeInUp} className="relative">
            <motion.div
              whileHover={{ rotateX: 6, rotateY: -6 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl"
            >
              <div className="rounded-xl bg-black/40 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                {/* Showcase Grid */}
                <div className="grid gap-3">
                  {/* Main Project */}
                  <div className="relative group h-40 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src="chat-app.png"
                      alt="Chat App Project"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <a
                        href="https://mytextu.netlify.app/chats"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-indigo-600 px-3 py-1.5 rounded-lg text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  </div>

                  {/* Small Projects */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        src: "notes-app.png",
                        link: "https://nextnotes-swart.vercel.app",
                      },
                      {
                        src: "email-auth.png",
                        link: "https://nextauth-two-iota.vercel.app/login",
                      },
                      {
                        src: "saliennt.png",
                        link: "https://nextproject-ten-gold.vercel.app/",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative group h-24 rounded-xl overflow-hidden border border-white/10"
                      >
                        <img
                          src={item.src}
                          alt={`Project ${index + 1}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white bg-indigo-600 px-2 py-1 rounded-lg text-xs"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Profile Avatar */}
            <motion.img
              src={PROFILE_IMAGE}
              alt={`${YOUR_NAME} profile`}
              className="absolute -right-4 -top-4 h-14 w-14 rounded-xl border border-white/20 object-cover"
              {...float}
            />
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}

// ====== About ======
function About() {
  return (
    <Section id="about" className="py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl text-white/70">
            MCA student & MERN Stack Developer currently working at
            <span className="font-semibold text-white"> Ekarigar Technologies</span>.
            I focus on performance, accessibility, and smooth micro-interactions.
            I ship polished UI with React/Next.js, TypeScript, TailwindCSS, and Framer Motion,
            and I enjoy building real-world apps with Next.js, Express.js, MongoDB, MYSQL, PHP, PHP Codeigniter and Prisma.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "Node.js",
              "PHP",
              "PHP codeigniter",
              "wordpress CMS",
              "Shopify",
              "Prisma",
              "PostgreSQL",
              "MongoDB",
              "TailwindCSS",
              "Framer Motion",
            ].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30 blur-2xl" />
          <img
            src={PROFILE_IMAGE}
            alt={`${YOUR_NAME} portrait`}
            className="relative aspect-[4/5] w-full  rounded-3xl border border-white/10 object-cover"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}

// ====== Projects ======
const PROJECTS = [
  {
    title: "Chat Application",
    desc: "Real-time chat app using Socket.io and Node.js server along with group chat functioanlity.",
    tags: ["Node.js", "Socket.io","Express.js"],
    link: "https://mytextu.netlify.app/",
  },
  {
    title: "Notes Application",
    desc: "Notes application using next.js and prisma ORM in postgres",
    tags: ["Next.js", "JavaScript", "Prisma", "postgres"],
    link: "https://nextnotes-swart.vercel.app/",
  },
  {
    title: "Text Utils",
    desc: "React-based text utility app for analysis and formatting.",
    tags: ["React", "JavaScript"],
    link: "https://yashmevat.github.io/textutils",
  },
  {
    title: "Snake Mania",
    desc: "Classic Snake game in JavaScript for the browser.",
    tags: ["JavaScript", "Game"],
    link: "https://yashmevat.github.io/snakemania",
  },
  {
    title: "Email Verification System",
    desc: "Email Verification System in next js and nextauth with proper verification using nodemailer and forgot password functionality as well",
    tags: ["Next.js", "Nodemailer", "JavaScript", "NextAuth"],
    link: "https://nextauth-two-iota.vercel.app/login",
  },
  {
    title: "Workforce Reporting System",
    desc: "Enterprise workforce reporting system developed at Ekarigar Technologies. Includes daily reports with AI-generated summaries, manager approval workflows, weekly report submissions, and automated notifications.",
    tags: ["Next.js", "Node.js", "MYSQL", "Multer"],
    link: "https://diamondraja.com/vis",
  },
];


function Projects() {
  return (
    <Section id="projects" className="py-20">
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={stagger}
  >
    <motion.h2
      variants={fadeInUp}
      className="text-3xl font-semibold text-white md:text-4xl"
    >
      Selected Projects
    </motion.h2>

    <motion.p
      variants={fadeInUp}
      className="mt-2 max-w-2xl text-white/70"
    >
      Animations with intent—snappy where it matters, subtle where it counts.
    </motion.p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {PROJECTS.map((p) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer"
          variants={fadeInUp}
          whileHover={{ y: -6, scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 cursor-pointer block transition"
        >
          {/* Glow background */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/25 to-fuchsia-500/25 blur-2xl transition group-hover:scale-125" />

          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <ExternalLink className="h-4 w-4 text-white/80 transition group-hover:text-white" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {p.desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
</Section>

  );
}

// ====== Skills ======
const SKILLS = [
  { name: "HTML/CSS/JavaScript", level: 95 },
  { name: "C/C++", level: 95 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Next.js", level: 90 },
  { name: "PHP with codeigniter", level: 85 },
  { name: "MongoDB", level: 85 },
  { name: "MySQL", level: 82 },
  { name: "Wordpress CMS", level: 75 },
  { name: "Shopify", level: 75 },
];

function Skills() {
  return (
    <Section id="skills" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-semibold text-white md:text-4xl"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {SKILLS.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeInUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-white">{s.name}</span>
                <span className="text-sm text-white/60">{s.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut" as const }} // ✅ fixed
                  className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

// ====== Contact ======
function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Error");

      setStatus("success");
      formElement.reset();
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <Section id="contact" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl font-semibold text-white md:text-4xl"
        >
          Contact
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-2 max-w-2xl text-white/70"
        >
          I’m currently taking on new projects. Email:{" "}
          <span className="text-white">{EMAIL}</span>
        </motion.p>

        <motion.form
          variants={fadeInUp}
          onSubmit={onSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-black/30 p-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email address"
              className="rounded-xl border border-white/10 bg-black/30 p-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="rounded-xl border border-white/10 bg-black/30 p-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            required
            name="message"
            placeholder="Tell me about your project…"
            rows={5}
            className="resize-none rounded-xl border border-white/10 bg-black/30 p-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <motion.button
            {...scaleTap}
            disabled={status === "sending"}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/90 px-5 py-3 font-medium text-black hover:bg-white disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send Message"}{" "}
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-emerald-300"
              >
                Thanks! Your message was sent.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-red-300"
              >
                Oops, something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </Section>
  );
}

// ====== Footer ======
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
      © {new Date().getFullYear()} {YOUR_NAME} — Built with Next.js & Framer
      Motion
    </footer>
  );
}

// ====== Page Export ======
export default function Portfolio() {
  return (
    <main className="min-h-[100dvh] scroll-smooth bg-[#0B0B12] font-sans text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
