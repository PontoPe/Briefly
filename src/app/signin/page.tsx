"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
export default function SignInPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-surface-container-low py-16">
        <div className="w-full max-w-md px-6">
          <div className="text-center mb-8">
            <Link
              href="/"
              className="font-display text-headline-md font-extrabold text-primary"
            >
              Briefly
            </Link>
            <p className="mt-2 text-body-lg text-on-surface-variant">
              Sign in to your account
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-[0_20px_40px_rgba(29,27,32,0.06)]">
            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest hover:bg-surface-container-low transition-colors font-display font-bold text-body-md text-on-surface">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M18.171 8.368h-.67V8.333H10v3.333h4.709A4.998 4.998 0 015 10a5 5 0 015-5c1.275 0 2.434.482 3.317 1.267l2.357-2.357A8.295 8.295 0 0010 1.667 8.334 8.334 0 001.667 10 8.334 8.334 0 0010 18.333c4.584 0 8.334-3.75 8.334-8.333 0-.559-.057-1.104-.163-1.632z"
                    fill="#FFC107"
                  />
                  <path
                    d="M2.628 6.121l2.738 2.009A4.998 4.998 0 0110 5c1.275 0 2.434.482 3.317 1.267l2.357-2.357A8.295 8.295 0 0010 1.667 8.329 8.329 0 002.628 6.12z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M10 18.333a8.294 8.294 0 005.587-2.163l-2.579-2.183A4.963 4.963 0 0110 15a4.998 4.998 0 01-4.701-3.316L2.58 13.783A8.327 8.327 0 0010 18.333z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M18.171 8.368h-.67V8.333H10v3.333h4.709a5.013 5.013 0 01-1.7 2.32l.001-.001 2.578 2.183C15.387 16.354 18.333 14.167 18.333 10c0-.559-.057-1.104-.163-1.632z"
                    fill="#1976D2"
                  />
                </svg>
                Continue with Google
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest hover:bg-surface-container-low transition-colors font-display font-bold text-body-md text-on-surface">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M17.04 1.667H2.96c-.714 0-1.293.579-1.293 1.293v14.08c0 .714.579 1.293 1.293 1.293h14.08c.714 0 1.293-.579 1.293-1.293V2.96c0-.714-.579-1.293-1.293-1.293zM6.84 15.807H4.266V7.93H6.84v7.877zM5.553 6.8a1.49 1.49 0 110-2.98 1.49 1.49 0 010 2.98zm10.28 9.007h-2.573v-3.833c0-.914-.017-2.09-1.273-2.09-1.275 0-1.47.996-1.47 2.024v3.899H7.944V7.93h2.47v1.077h.034c.344-.652 1.184-1.34 2.437-1.34 2.607 0 3.088 1.716 3.088 3.948v4.192h-.14z"
                    fill="#0A66C2"
                  />
                </svg>
                Continue with LinkedIn
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="grow h-px bg-outline-variant/20" />
              <span className="text-label-sm text-on-surface-variant">
                or continue with email
              </span>
              <div className="grow h-px bg-outline-variant/20" />
            </div>

            {/* Email Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-label-md font-bold text-on-surface mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-label-md font-bold text-on-surface"
                  >
                    Password
                  </label>
                  <Link
                    href="/signin"
                    className="text-label-sm font-bold text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-body-md text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl hero-gradient text-on-primary font-display font-bold text-body-md hover:opacity-90 transition-opacity"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-body-sm text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <Link
                href="/signin"
                className="font-bold text-primary hover:underline"
              >
                Create one for free
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-body-sm text-on-surface-variant/60">
            By signing in, you agree to our{" "}
            <Link href="/resources" className="underline hover:text-on-surface-variant">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/resources" className="underline hover:text-on-surface-variant">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
