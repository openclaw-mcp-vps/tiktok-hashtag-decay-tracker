export default function Home() {
  const faqs = [
    {
      q: "How does hashtag decay tracking work?",
      a: "We monitor reach and engagement metrics for your tracked hashtags daily. When a hashtag's performance drops significantly compared to its baseline, you get an instant alert."
    },
    {
      q: "Which TikTok metrics do you track?",
      a: "We track view count trends, engagement rate, post volume, and reach velocity — giving you a full picture of whether a hashtag is rising, stable, or decaying."
    },
    {
      q: "How many hashtags can I track?",
      a: "The $12/mo plan lets you track up to 50 hashtags across multiple TikTok accounts with daily snapshots and real-time decay alerts."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For TikTok Creators & Social Media Managers
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Know exactly when your hashtags stop working
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          HashDecay monitors your TikTok hashtag performance over time and alerts you the moment reach starts dropping — so you can swap them before your views tank.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["50", "Hashtags tracked"],
            ["Daily", "Performance snapshots"],
            ["Instant", "Decay alerts"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] rounded-lg p-4 border border-[#30363d]">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$12<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of hashtag decay.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Track up to 50 hashtags",
              "Daily performance snapshots",
              "Instant decay alerts via email",
              "Engagement & reach analytics",
              "Multi-account support",
              "CSV export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} HashDecay. All rights reserved.
      </footer>
    </main>
  );
}
