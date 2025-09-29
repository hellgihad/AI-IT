import React, { useEffect, useState } from "react";
import { FilloutStandardEmbed } from "@fillout/react";

const features = [
  { title: "Recruitment assistant", desc: "Automate hiring from first touch to signed offer: screening, shortlists, interviews, and updates.", icon: "🧩" },
  { title: "Instagram bot", desc: "Instant replies, qualify leads, book calls, and escalate to human when needed.", icon: "🤖" },
  { title: "Voice diary", desc: "Turn voice notes into structured tasks, docs, and follow-ups with summaries.", icon: "🎙️" },
  { title: "Email agent", desc: "Auto-sort, tag, summarize, and draft replies while respecting rules and tone.", icon: "📧" },
  { title: "File organizer", desc: "OCR + AI recognition to name, route, and store docs where they belong.", icon: "🗂️" },
  { title: "Notifications", desc: "Smart alerts for exceptions: only ping when something needs you.", icon: "🔔" },
  { title: "Task manager", desc: "Daily automations and reminders across tools. Less busywork, more deep work.", icon: "✅" },
  { title: "Calendar sync", desc: "Keep calendars in sync, auto-schedule meetings, prep briefs for every call.", icon: "🗓️" },
  { title: "Custom bots", desc: "Personalized agents for your workflow and data. Start small, scale safely.", icon: "⚙️" },
];

const useCases = [
  { title: "Document recognition & routing", bullets: ["Watch mailbox/chat for new files","Classify & OCR (PDF, DOC, images)","Rename, tag, store in cloud drive","Notify stakeholders & log activity"] },
  { title: "Lead capture & triage", bullets: ["Scrape form/chat/DMs for intent","Score & enrich leads from CRM/data","Auto-book meetings or send sequences","Handoff to human with context pack"] },
  { title: "Inbox autopilot", bullets: ["Summaries, bundles, and rules","Answer routine questions with sources","Flag risks & approvals","Draft replies you can one-click send"] },
  { title: "Automated hiring assistant", bullets: ["Collect applications from inbox/forms/boards","Parse CVs, apply knockout rules, and score with a role-specific rubric","Generate shortlists and auto-schedule interviews (with prep packs)","Sync to ATS/Sheets, notify stakeholders, and send candidate updates"] },
];

const stack = [
  "LLMs: OpenAI, Gemini",
  "Forms & Scheduling: Fillout, Cal.com",
  "Automation & Integrations: Make, Sendpulse, webhooks, custom APIs",
  "Chat & Social: Instagram, Telegram, Slack, WhatsApp",
  "Google Workspace: Gmail, Docs, Drive, Notebook LM",
  "Microsoft 365: Outlook, Excel, OneDrive",
  "Knowledge & Docs: Notion",
];

const faqs = [
  { q: "How do we start?", a: "With a 30–45 minute discovery call. We pick 1–2 high-ROI workflows, map them, then ship a pilot in ~1–2 weeks depending on complexity." },
  { q: "Is my data safe?", a: "Yes. We use least-privilege access, encrypted connectors, and keep audit trails. On request, we can host models in your cloud VPC." },
  { q: "What does pricing look like?", a: "Fixed-price pilots from £300, growth packages from £1,200+. Ongoing care plans from £150/mo for monitoring, updates, and new mini-features." },
  { q: "Which tools can you integrate?", a: "Most modern SaaS with an API: CRMs, helpdesks, HRIS, finance, plus custom websites. If it has email, a webhook, or a button, we can automate it." },
];

function DevSmokeTests() {
  useEffect(() => {
    if (import.meta?.env?.MODE !== "development") return;
    try {
      console.group("DEV Smoke Tests");
      console.assert(typeof FilloutStandardEmbed === "function", "Fillout embed should be available");
      ["node-mailbox","node-doc","node-ocr","node-drive","node-notify"].forEach((id) => {
        const el = document.querySelector(`[data-testid="${id}"]`);
        console.assert(el, `Missing SVG node: ${id}`);
      });
      console.groupEnd();
    } catch (e) {
      console.warn("Smoke tests error", e);
    }
  }, []);
  return null;
}

export default function AIAutomationLanding() {
  const [diagramOpen, setDiagramOpen] = useState(false);
  const diagramSrc = "/assets/workflows/make-flow.jpg";
  const diagramFallback = "/assets/workflows/document-ocr-flow.png";

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setDiagramOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openWhatsApp = () => {
    const n = atob('NDQ3NDUzNjk0ODI0'); // 447453694824 (hidden to reduce scraping)
    const msg = encodeURIComponent("Hi AI IT — I'd like to talk about automation.");
    window.open(`https://wa.me/${n}?text=${msg}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <DevSmokeTests />
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <img src="/assets/ai-it-logo.png" alt="AI IT logo" className="h-8 w-auto" />
            <span className="hidden sm:inline-block">AI IT — Business Processes Improvements</span>
          </div>
          <a href="#contact" className="rounded-xl px-4 py-2 bg-[#093339] text-white hover:bg-slate-800 transition">Book a call</a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Automate the busywork. <span className="text-[#6AACA4]">Ship faster with AI agents.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            I design, build, and maintain practical automations that plug into your stack. Start
            with one workflow, measure the win, and scale confidently.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solutions" className="rounded-xl px-4 py-2 bg-[#093339] text-white hover:bg-slate-800 transition">See solutions</a>
            <a href="#how" className="rounded-xl px-4 py-2 border border-slate-300 hover:border-slate-400">How it works</a>
          </div>
          <p className="mt-6 text-sm text-slate-500">Preferred tools: {stack.slice(0,3).join(" • ")} …</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#6AACA4]/20 to-[#08898E]/10 shadow-inner flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-sm uppercase tracking-widest text-[#08898E]">Workflow example</p>
              <h3 className="text-2xl font-semibold mt-1">Document Recognition & Sortation</h3>
              <p className="mt-3 text-slate-600 max-w-md mx-auto">
                Monitor inbox/chat → AI OCR → classify → upload to cloud drive → notify stakeholders. See the flow below.
              </p>

              {/* L-shape responsive flow diagram */}
              <div className="mt-4 w-full mx-auto max-w-4xl">
                <svg viewBox="0 0 1200 340" className="block w-full" preserveAspectRatio="xMidYMid meet" aria-label="Document routing flow (responsive L-shape)">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M0 0 L10 5 L0 10 z" fill="#08898E" />
                    </marker>
                  </defs>

                  {/* Row 1 */}
                  <rect data-testid="node-mailbox" x="40" y="40" rx="12" ry="12" width="220" height="88" fill="#093339" opacity="0.95"/>
                  <text x="150" y="84" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="18">Mailbox/Chat</text>

                  <polygon data-testid="node-doc" points="360,40 440,84 360,128 300,84" fill="#6AACA4"/>
                  <text x="360" y="84" textAnchor="middle" dominantBaseline="middle" fill="#093339" fontSize="18">Doc?</text>

                  <line x1="260" y1="84" x2="300" y2="84" stroke="#08898E" strokeWidth="3" markerEnd="url(#arrow)"/>

                  {/* Bend to Row 2 */}
                  <path d="M440,84 L440,186 L530,186 L530,200" fill="none" stroke="#08898E" strokeWidth="3" markerEnd="url(#arrow)"/>

                  {/* Row 2 */}
                  <rect data-testid="node-ocr" x="420" y="200" rx="12" ry="12" width="220" height="88" fill="#08898E"/>
                  <text x="530" y="244" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="18">AI OCR</text>

                  <rect data-testid="node-drive" x="680" y="200" rx="12" ry="12" width="220" height="88" fill="#6AACA4"/>
                  <text x="790" y="244" textAnchor="middle" dominantBaseline="middle" fill="#093339" fontSize="18">Cloud Drive</text>

                  <rect data-testid="node-notify" x="940" y="200" rx="12" ry="12" width="220" height="88" fill="#093339"/>
                  <text x="1050" y="244" textAnchor="middle" dominantBaseline="middle" fill="#ffffff" fontSize="18">Notify</text>

                  <line x1="640" y1="244" x2="680" y2="244" stroke="#08898E" strokeWidth="3" markerEnd="url(#arrow)"/>
                  <line x1="900" y1="244" x2="940" y2="244" stroke="#08898E" strokeWidth="3" markerEnd="url(#arrow)"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section id="solutions" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">What I can automate</h2>
          <p className="mt-2 text-slate-600">Pick one to start. We’ll tailor it to your tools and data.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-5 bg-slate-50 hover:bg-white transition shadow-sm">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">How we work together</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[{n:1,t:"Discovery",d:"Map your process, systems, and ROI. Select 1–2 pilot workflows."},
            {n:2,t:"Prototype",d:"Build a safe MVP in your sandbox with clear success metrics."},
            {n:3,t:"Deploy",d:"Connect to live tools, add guardrails, and deliver training."},
            {n:4,t:"Care",d:"Monitoring, updates, and small improvements every month."}].map((s)=>(
            <div key={s.n} className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-[#093339] text-white flex items-center justify-center font-semibold">{s.n}</div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Workflow card with modal trigger */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg">Document recognition & sortation – flow</h3>
              <p className="text-sm text-slate-600">This mirrors your attached diagram. Replace the image URL below with your asset.</p>
            </div>
            <button onClick={() => setDiagramOpen(true)} data-testid="open-diagram" className="rounded-xl px-4 py-2 border border-slate-300 hover:border-slate-400">Open diagram</button>
          </div>
          <div id="workflow" className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <img
              alt="Document recognition workflow diagram"
              src={diagramSrc}
              onError={(e) => { e.currentTarget.src = diagramFallback; }}
              className="w-full cursor-zoom-in"
              onClick={() => setDiagramOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Popular use-cases</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {useCases.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                  {c.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech + compliance */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Integrations & stack</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              {stack.map((item) => (<li key={item} className="rounded-xl bg-white border border-slate-200 p-3">{item}</li>))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-lg">Security & guardrails</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Least-privilege access and encrypted connectors</li>
              <li>Human-in-the-loop for critical actions</li>
              <li>Full audit logs on requests and actions</li>
              <li>On-prem/VPC deployment available on request</li>
              <li>Data retention and redaction controls</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#093339] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Simple engagement</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { name: "Pilot", price: "from £300", points: ["1 workflow", "MVP in your stack", "Training & docs"] },
              { name: "Growth", price: "from £1,200", points: ["2–4 workflows", "Analytics & guardrails", "Team onboarding"] },
              { name: "Care", price: "from £150/mo", points: ["Monitoring & incident fixes", "Model & rule updates", "Quarterly roadmap"] },
              { name: "Custom solution", price: "per requirement", points: ["Bespoke multi-agent design", "Process analysis & architecture", "Roadmap & implementation"] },
            ].map((p, idx) => (
              <div key={p.name} className={`rounded-2xl p-6 border ${idx===1?"bg-white text-slate-900 border-white":"border-slate-700"}`}>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <div className="mt-2 text-2xl font-bold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                  {p.points.map((pt) => (<li key={pt}>{pt}</li>))}
                </ul>
                <a href="#contact" className={`mt-6 inline-block rounded-xl px-4 py-2 ${idx===1?"bg-[#093339] text-white":"bg-white text-slate-900"}`}>Start here</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="p-5 group">
              <summary className="cursor-pointer font-medium flex items-center justify-between">
                {f.q}
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition">＋</span>
              </summary>
              <p className="mt-2 text-slate-700 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#08898E]">About me</p>
            <h2 className="mt-3 text-3xl font-bold">Hi, I’m Mat</h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              With over 13 years in IT, I’ve grown from Service Desk roles through Infrastructure to managing
              Azure Cloud environments. Along the way, I earned Six Sigma and Lean accreditations, giving me a
              strong foundation in process optimization and efficiency. When AI emerged as a transformative
              tool, I quickly expanded my skills with professional automation training to combine proven
              methodologies with cutting-edge technology.
            </p>
            <p className="mt-4 text-slate-600">
              At AI-IT, my mission is simple: make automation accessible, reliable, and tailored to your
              business. No half-baked solutions or flashy promises—just practical, results-driven systems that
              streamline recruitment, enhance client communication, and automate back-office tasks. The goal is
              to free your time and let you focus on growth.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                <span className="text-lg">🎯</span> Outcome-focused experiments
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                <span className="text-lg">🤝</span> Transparent collaboration
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#6AACA4]/20 blur-2xl" aria-hidden="true"></div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              <img
                src="/assets/nanobanana-[nanobanana.io]-1758893121257.png"
                alt="Mat smiling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#093339] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Let’s automate something small</h2>
            <p className="mt-2 text-slate-300">Send a link to a process or a tool that slows you down. I’ll suggest a concrete automation plan and a fixed pilot price.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>✉️ <a href="mailto:augustymat@gmail.com" className="underline">Email me</a></li>
              <li>🌐 <a href="https://aiit.today" target="_blank" rel="noopener noreferrer" className="underline">aiit.today</a></li>
              <li>🔗 <a href="https://www.linkedin.com/company/ai-it1" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></li>
              <li>📘 Facebook — coming soon</li>
              <li>💬 <button onClick={openWhatsApp} className="underline">Message on WhatsApp</button><span className="ml-2 text-xs text-slate-400">(number hidden to reduce spam)</span></li>
            </ul>
          </div>
          <div className="bg-white text-slate-900 rounded-2xl overflow-hidden">
            <FilloutStandardEmbed
              filloutId="gbMiCeZJyPus"
              dynamicResize
              inheritParameters
              style={{ width: "100%", height: "100%", minHeight: "640px" }}
            />
            <div className="p-3 text-xs text-slate-500 bg-slate-50 border-t">
              Can’t see the form in this preview?
              <a href="https://forms.fillout.com/t/gbMiCeZJyPus" target="_blank" rel="noopener noreferrer" className="underline ml-1">Open it in a new tab</a>.
            </div>
          </div>
        </div>
      </section>

      {/* Diagram Modal */}
      {diagramOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Make diagram full view" onClick={() => setDiagramOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-2 border-b">
              <h4 className="font-semibold">Document recognition & sortation — Make scenario</h4>
              <button onClick={() => setDiagramOpen(false)} className="rounded-lg px-3 py-1 border text-sm">Close</button>
            </div>
            <div className="max-h-[80vh] overflow-auto">
              <img src={diagramSrc} onError={(e) => { e.currentTarget.src = diagramFallback; }} alt="Make.com scenario diagram for document recognition and sortation" className="w-full" />
            </div>
          </div>
        </div>
      )}

      <footer className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500">
        © {new Date().getFullYear()} AI IT. Built with love and lots of automations.
      </footer>
    </main>
  );
}
