import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-emerald-700 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100">
          Make Every Contribution Count
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Give with confidence. Track with clarity.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
          Explore campaigns, follow your contribution, and verify the
          evidence behind reported expenses.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/campaigns"
            className="rounded-xl bg-white px-6 py-3.5 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Explore Campaigns
          </Link>

          <Link
            to="/verify"
            className="rounded-xl border border-emerald-400 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-600"
          >
            Verify a Record
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;