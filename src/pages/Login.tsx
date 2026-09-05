import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(email: string, password: string) {
    try {
      setError("");
      setLoading(true);

      const user = await login({
        email,
        password,
      });

      navigate(user.role === "manager" ? "/admin" : "/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Login failed."
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
              Welcome back
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Login to TrustAid
            </h1>

            <p className="mt-3 text-sm text-slate-600">
              Access your donations or campaign manager dashboard.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <LoginForm
            onSubmit={handleLogin}
            loading={loading}
          />

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
