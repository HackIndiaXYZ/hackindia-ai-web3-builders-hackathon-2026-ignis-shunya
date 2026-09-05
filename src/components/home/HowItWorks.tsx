function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Donate",
      description:
        "Choose a campaign and make a contribution through TrustAid.",
    },
    {
      number: "02",
      title: "Funds Allocated",
      description:
        "Your donation is associated with the selected campaign.",
    },
    {
      number: "03",
      title: "Expense Submitted",
      description:
        "Campaign managers add expenses and upload supporting receipts.",
    },
    {
      number: "04",
      title: "AI Analysis",
      description:
        "AI extracts receipt details and flags unusual expense patterns.",
    },
    {
      number: "05",
      title: "Blockchain Proof",
      description:
        "A cryptographic proof is recorded to make the document verifiable.",
    },
    {
      number: "06",
      title: "Impact Reported",
      description:
        "Donors can see how campaign spending translates into reported impact.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            How TrustAid Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From Donation to Verified Impact
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            TrustAid connects donations, expense evidence, AI analysis,
            blockchain verification, and impact reporting in one transparent flow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;