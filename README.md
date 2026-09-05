<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
=======
# hackindia-ai-web3-builders-hackathon-2026-ignis-shunya
Hackathon team repository for IGNIS SHUNYA - [hackindia-team:hackindia-ai-web3-builders-hackathon-2026:ignis-shunya]
# 🔐 TrustAid

### AI + Blockchain Powered Donation Transparency Platform

> **Team:** Ignis Shunya  
> **Hackathon:** HackIndia Hackathon

TrustAid is a transparent donation management platform that helps donors understand **where their money goes after they donate**.

It connects the complete journey of a donation:

**Donation → Fund Allocation → Expense → AI Analysis → Blockchain Proof → Verification → Reported Impact**

---

## 🎯 Problem

Traditional donation platforms mainly focus on collecting donations and showing campaign progress.

The bigger problem starts after the donation:

- Donors cannot easily track how funds are spent.
- Expense receipts are often difficult to verify.
- Manually checking hundreds of receipts is slow.
- Suspicious or unusual expenses can be difficult to identify.
- Digital documents can potentially be modified after submission.
- Donation, expense, and impact information is often scattered across different systems.

TrustAid addresses this transparency gap by connecting financial records with AI-assisted analysis and blockchain-based integrity verification.

---

## 💡 What We Are Building

TrustAid provides two main experiences:

### 👤 For Donors

Donors can:

- Browse campaigns
- Donate to campaigns
- Track their donations
- View fund allocation
- See recorded expenses
- View expense evidence
- Check AI analysis results
- Verify blockchain-backed records
- View reported campaign impact

### 🏢 For Campaign Managers

Managers can:

- Create and manage campaigns
- Track donations
- Record expenses
- Upload receipts
- Review AI-generated expense analysis
- View risk scores and anomaly flags
- Generate verification records
- Register document hashes on blockchain
- Publish impact updates

---

# 🚀 Core Workflow

```text
                    TRUSTAID

Donor
  │
  ▼
Donation
  │
  ▼
Fund Allocation
  │
  ▼
Expense Submitted
  │
  ▼
Receipt Uploaded
  │
  ▼
AI Analysis
  │
  ├── Vendor
  ├── Amount
  ├── Date
  ├── Category
  └── Risk / Anomaly Signals
  │
  ▼
Cryptographic Hash
  │
  ▼
Blockchain Proof
  │
  ▼
Public Verification
  │
  ▼
Reported Impact
>>>>>>> db39e9dbfe578b6f4bd051768286f5798f5bea61
