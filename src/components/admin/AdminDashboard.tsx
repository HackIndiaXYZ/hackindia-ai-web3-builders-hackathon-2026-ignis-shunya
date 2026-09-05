import { Link } from "react-router-dom";
import AdminStats from "../components/admin/AdminStats";
import { campaigns, expenses } from "../data/mockData";

function AdminDashboard() {
  const totalRaised = campaigns.reduce(
    (sum, campaign) => sum + campaign.raisedAmount,
    0
  );

  const totalSpent = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const verifiedExpenses = expenses.filter(
    (expense) => expense.verificationStatus === "verified"
  ).length;

  const flaggedExpenses = expenses.filter(
    (expense) =>
      expense.riskLevel === "high" ||
      expense.verificationStatus === "review"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Campaign Manager
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Manage transparency
            </h1>
          </div>

          <Link
            to="/admin/expenses/new"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-center font-semibold text-white hover:bg-emerald-700"
          >
            Add Expense
          </Link>
        </div>

        <div className="mt-10">
          <AdminStats
            totalRaised={totalRaised}
            totalSpent={totalSpent}
            verifiedExpenses={verifiedExpenses}
            flaggedExpenses={flaggedExpenses}
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              My Campaigns
            </h2>

            <div className="mt-6 space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="rounded-2xl border border-slate-100 p-5"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {campaign.title}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {campaign.location}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-emerald-600">
                      {campaign.status}
                    </span>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-emerald-600"
                      style={{
                        width: `${Math.min(
                          (campaign.raisedAmount /
                            campaign.targetAmount) *
                            100,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Recent Expenses
              </h2>

              <Link
                to="/admin/expenses/new"
                className="text-sm font-semibold text-emerald-600"
              >
                Add new
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              {expenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 p-5"
                >
                  <div>
                    <p className="font-semibold text-slate-900">
                      {expense.vendor}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {expense.category}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">
                      ₹{expense.amount.toLocaleString("en-IN")}
                    </p>

                    <p
                      className={`mt-1 text-xs font-semibold ${
                        expense.riskLevel === "low"
                          ? "text-emerald-600"
                          : expense.riskLevel === "medium"
                          ? "text-amber-600"
                          : "text-red-600"
                      }`}
                    >
                      {expense.riskLevel} risk
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;