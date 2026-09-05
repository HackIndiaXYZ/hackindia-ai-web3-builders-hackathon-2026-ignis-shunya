import {
  useEffect,
  useState,
} from "react";

import AuthContext from "./authContextValue";
import type {
  User,
} from "../types/auth";

const USER_STORAGE_KEY = "trustaid_user";
const ACCOUNT_STORAGE_KEY = "trustaid_accounts";

type StoredUser = User & {
  password: string;
};

const DEMO_USERS: StoredUser[] = [
  {
    id: "U001",
    name: "Demo Donor",
    email: "donor@trustaid.demo",
    password: "123456",
    role: "donor",
  },
  {
    id: "U002",
    name: "Demo Manager",
    email: "manager@trustaid.demo",
    password: "123456",
    role: "manager",
  },
];

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function loadStoredAccounts() {
  const savedAccounts = localStorage.getItem(ACCOUNT_STORAGE_KEY);

  if (!savedAccounts) {
    return DEMO_USERS;
  }

  try {
    const parsedAccounts = JSON.parse(savedAccounts) as StoredUser[];
    const customAccounts = parsedAccounts.filter(
      (account) =>
        !DEMO_USERS.some(
          (demoUser) =>
            normalizeEmail(demoUser.email) ===
            normalizeEmail(account.email)
        )
    );

    return [...DEMO_USERS, ...customAccounts];
  } catch {
    localStorage.removeItem(ACCOUNT_STORAGE_KEY);
    return DEMO_USERS;
  }
}

function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accounts, setAccounts] = useState<StoredUser[]>(
    loadStoredAccounts
  );

  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch {
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      ACCOUNT_STORAGE_KEY,
      JSON.stringify(accounts)
    );
  }, [accounts]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const foundUser = accounts.find(
      (item) =>
        normalizeEmail(item.email) === normalizeEmail(email) &&
        item.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password.");
    }

    const loggedInUser: User = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
    };

    setUser(loggedInUser);
    return loggedInUser;
  }

  async function register({
    name,
    email,
    password,
    role,
  }: {
    name: string;
    email: string;
    password: string;
    role: User["role"];
  }) {
    const normalizedEmail = normalizeEmail(email);

    if (
      accounts.some(
        (item) => normalizeEmail(item.email) === normalizedEmail
      )
    ) {
      throw new Error("An account with this email already exists.");
    }

    const newUser: User = {
      id: `U${Date.now()}`,
      name,
      email,
      role,
    };

    setAccounts((currentAccounts) => [
      ...currentAccounts,
      {
        ...newUser,
        email: normalizedEmail,
        password,
      },
    ]);

    setUser({
      ...newUser,
      email: normalizedEmail,
    });
    return newUser;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
