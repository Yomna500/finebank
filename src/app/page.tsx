import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Finebank dashboard. Manage your finances, track expenses, and monitor your income easily.",
};

export default function Home() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-3xl flex flex-col items-center text-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Finebank Financial Management Dashboard
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-7 mb-4">
            Smart, secure, and simple financial tracking
          </h2>

          <p className="text-sm sm:text-base text-gray-7 leading-relaxed max-w-2xl mb-6">
            Finebank helps you manage expenses, track income, and analyze
            financial data through a clean and powerful dashboard. Free for
            personal and educational use.
          </p>

          <div className="h-px w-40 sm:w-56 bg-gray-3 my-4" />

          <Link
            href="/auth/login"
            className="bg-primary text-text-light text-base sm:text-lg font-semibold px-8 sm:px-10 py-3 rounded-full hover:bg-primary-hover transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
