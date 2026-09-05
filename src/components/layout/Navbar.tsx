import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();

  const navLinkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-emerald-600"
        : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center gap-4 px-6 py-3 md:flex-nowrap">
        <Link
          to="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-slate-900"
        >
          Trust<span className="text-emerald-600">Aid</span>
        </Link>

        <nav className="order-last flex w-full items-center justify-center gap-4 overflow-x-auto md:order-none md:w-auto md:flex-1 md:gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink
            to="/campaigns"
            className={navLinkClass}
          >
            Campaigns
          </NavLink>

          {isAuthenticated && user?.role === "donor" && (
            <NavLink
              to="/dashboard"
              className={navLinkClass}
            >
              My Donations
            </NavLink>
          )}

          {isAuthenticated && user?.role === "manager" && (
            <NavLink
              to="/admin"
              className={navLinkClass}
            >
              Manager
            </NavLink>
          )}

          <NavLink
            to="/verify"
            className={navLinkClass}
          >
            Verify
          </NavLink>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="hidden text-sm text-slate-600 md:block">
                Hi, {user?.name}
              </span>

              <button
                type="button"
                onClick={logout}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Login
              </Link>

              <Link
                to="/campaigns"
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Donate
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
