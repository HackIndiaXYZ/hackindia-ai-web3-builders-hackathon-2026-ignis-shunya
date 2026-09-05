import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-slate-900"
            >
              Trust<span className="text-emerald-600">Aid</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              AI-powered donation transparency with blockchain-backed
              verification and impact tracking.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Platform
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/campaigns"
                className="text-slate-600 hover:text-slate-900"
              >
                Campaigns
              </Link>

              <Link
                to="/dashboard"
                className="text-slate-600 hover:text-slate-900"
              >
                My Donations
              </Link>

              <Link
                to="/admin"
                className="text-slate-600 hover:text-slate-900"
              >
                Manager
              </Link>
            </div>
          </div>

          {/* Trust */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Trust
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/verify"
                className="text-slate-600 hover:text-slate-900"
              >
                Verify a Record
              </Link>

              <span className="text-slate-500">
                AI-assisted analysis
              </span>

              <span className="text-slate-500">
                Blockchain-backed proof
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">
            © 2026 TrustAid. Hackathon prototype.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;