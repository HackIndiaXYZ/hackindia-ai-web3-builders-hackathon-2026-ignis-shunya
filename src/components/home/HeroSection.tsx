import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-6 py-16">
        
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Transparent. Trackable. Verifiable.
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Helping Hearts.
              <br />
              Building{" "}
              <span className="text-emerald-600">Trust.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Track your contributions, verify expense records, and see
              the real-world impact of your donation with TrustAid.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/campaigns"
                className="rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
              >
                Explore Campaigns
              </Link>

              <Link
                to="/verify"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Verify a Record
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-emerald-100">
              
              <div className="absolute h-64 w-64 rounded-full border border-emerald-200" />

              <div className="z-10 flex h-32 w-32 items-center justify-center rounded-3xl bg-emerald-600 text-6xl text-white shadow-xl">
                ✓
              </div>

              <div className="absolute left-0 top-8 rounded-xl bg-white px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-slate-900">
                  AI Verified
                </p>
              </div>

              <div className="absolute bottom-8 right-0 rounded-xl bg-white px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-slate-900">
                  Blockchain Proof
                </p>
              </div>

              <div className="absolute bottom-0 left-12 rounded-xl bg-white px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold text-slate-900">
                  Real Impact
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;