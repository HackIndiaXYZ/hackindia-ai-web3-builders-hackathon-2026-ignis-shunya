import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "./context/AuthContext";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/common/ProtectedRoute";

import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import CampaignDetails from "./pages/CampaignDetails";
import Donate from "./pages/Donate";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import UploadExpense from "./pages/UploadExpense";
import CreateCampaign from "./pages/CreateCampaign";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/campaigns"
            element={<Campaigns />}
          />

          <Route
            element={<ProtectedRoute />}
          >
            <Route
              path="/campaigns/create"
              element={<CreateCampaign />}
            />
          </Route>

          <Route
            path="/campaigns/:id"
            element={<CampaignDetails />}
          />

          <Route
            path="/campaign/:id"
            element={<CampaignDetails />}
          />

          <Route
            path="/donate/:campaignId"
            element={<Donate />}
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            element={<ProtectedRoute />}
          >
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
          </Route>

          <Route
            element={
              <ProtectedRoute allowedRoles={["manager"]} />
            }
          >
            <Route
              path="/admin"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/expenses/new"
              element={<UploadExpense />}
            />
          </Route>

          <Route
            path="/verify"
            element={<Verify />}
          />
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
