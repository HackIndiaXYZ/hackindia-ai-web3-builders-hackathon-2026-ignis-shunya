import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { apiFetch } from "../services/api";

interface User {
  name: string;
  email: string;
}

function Profile() {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await apiFetch("/users/me");

        setUser(data.user || data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-2xl p-6">

        <h1 className="mb-6 text-3xl font-bold">
          My Profile
        </h1>

        {loading ? (
          <Loading />
        ) : user ? (
          <div className="rounded-xl border p-6">

            <p className="mb-3">
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

          </div>
        ) : (
          <p>Unable to load profile.</p>
        )}

      </main>
    </>
  );
}

export default Profile;
