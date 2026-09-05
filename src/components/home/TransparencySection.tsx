import {
  Eye,
  FileCheck2,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

function TransparencySection() {
  const features = [
    {
      icon: WalletCards,
      title: "Track Funds",
      description:
        "Follow contributions from donation to campaign allocation and reported expenses.",
    },
    {
      icon: FileCheck2,
      title: "Analyze Evidence",
      description:
        "AI helps extract receipt details and identify unusual expense patterns.",
    },
    {
      icon: ShieldCheck,
      title: "Verify Records",
      description:
        "Cryptographic proofs help verify that important records have not been altered.",
    },
    {
      icon: Eye,
      title: "See Impact",
      description:
        "Understand how reported spending translates into measurable campaign outcomes.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Why TrustAid
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Transparency should be built into the donation journey.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              TrustAid connects donation tracking, expense evidence, AI-assisted
              analysis, blockchain-backed verification, and impact reporting in
              one simple experience.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default TransparencySection;