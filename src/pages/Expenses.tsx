import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { apiFetch } from "../services/api";
import type { Expense } from "../types/expense";

function Expenses() {
  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const data = await apiFetch("/expenses");

        setExpenses(data.expenses || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadExpenses();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-5xl p-6">

        <h1 className="mb-6 text-3xl font-bold">
          Expenses
        </h1>

        {loading ? (
          <Loading />
        ) : expenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          <div className="space-y-4">

            {expenses.map((expense) => (
              <div
                key={expense._id}
                className="rounded-xl border p-5"
              >
                <h2 className="font-bold">
                  {expense.title}
                </h2>

                <p>
                  ₹{expense.amount}
                </p>

                <p className="text-gray-600">
                  {expense.description}
                </p>

              </div>
            ))}

          </div>
        )}

      </main>
    </>
  );
}

export default Expenses;
