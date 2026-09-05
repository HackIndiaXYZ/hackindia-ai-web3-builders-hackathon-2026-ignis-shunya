import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

function ImpactVerificationSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Verification Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <ShieldCheck size={22} />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Record Verification
                </p>

                <h3 className="font-semibold text-slate-900">
                  Expense #CHA-1029
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-500">
                  AI Risk Analysis
                </span>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  Low Risk
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-500">
                  Hash Match
                </span>

                <span className="flex items-center gap-1 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 size={16} />
                  Verified
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-sm text-slate-500">
                  Blockchain Record
                </span>

                <span className="text-sm font-semibold text-slate-900">
                  0x8a4f...91cd
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Amount
                </span>

                <span className="text-lg font-bold text-slate-900">
                  ₹7,500
                </span>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              View Blockchain Record
              <ExternalLink size={16} />
            </button>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Proof + Impact
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Don't just see a donation. See the evidence behind it.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              TrustAid combines AI-assisted expense analysis with
              blockchain-backed record verification, then connects those
              records to the campaign's reported impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Reported Impact
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  25 meals
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Example campaign outcome
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">
                  Record Integrity
                </p>

                <p className="mt-2 text-2xl font-bold text-emerald-600">
                  Verified
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Hash matches on-chain proof
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ImpactVerificationSection;