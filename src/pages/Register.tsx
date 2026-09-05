import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import RegisterForm from "../components/auth/RegisterForm";
import useAuth from "../hooks/useAuth";
import type { UserRole } from "../types/auth";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(
    name: string,
    email: string,
    password: string,
    role: UserRole
  ) {
    try {
      setError("");
      setLoading(true);

      await register({
        name,
        email,
        password,
        role,
      });

      if (role === "manager") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Registration failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-md px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Join TrustAid
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Create Account
            </h1>

            <p className="mt-3 text-sm text-slate-600">
              Start donating or managing transparent campaigns.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <RegisterForm
            onSubmit={handleRegister}
            loading={loading}
          />

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;