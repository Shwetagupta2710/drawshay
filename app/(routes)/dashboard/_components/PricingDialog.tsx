import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import Link from "next/link";

function PricingDialog() {
  return (
    <DialogContent className="max-w-4xl">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">
          Upgrade Your Plan
        </DialogTitle>
        <DialogDescription>
          Unlock full access with one simple upgrade.
        </DialogDescription>
      </DialogHeader>

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* PROFESSIONAL PLAN */}
        <div className="relative scale-[1.03] rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-[1px] shadow-xl">
          <div className="rounded-2xl bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Professional
              </h3>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                Most Popular
              </span>
            </div>

            <p className="mt-4">
              <span className="text-4xl font-bold text-gray-900">$4.99</span>
              <span className="text-sm text-gray-600"> / month</span>
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>✔ Everything in Free</li>
              <li>✔ Unlimited team files</li>
              <li>✔ Advanced document features</li>
              <li>✔ Priority email support</li>
              <li>✔ Instagram support</li>
            </ul>

            <Link
              href="https://buymeacoffee.com/shay_slay_"
              target="_blank"
              className="mt-8 block rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Upgrade Now
            </Link>
          </div>
        </div>

        {/* FREE PLAN */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-900 text-center">
            Free
          </h3>

          <p className="mt-4 text-center">
            <span className="text-4xl font-bold text-gray-900">Free</span>
            <span className="text-sm text-gray-600"> / month</span>
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li>✔ Up to 5 team files</li>
            <li>✔ Basic document features</li>
            <li>✔ Email support</li>
          </ul>

          <button
            disabled
            className="mt-8 w-full cursor-not-allowed rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-400"
          >
            Current Plan
          </button>
        </div>
      </div>

      <DialogFooter className="mt-6">
        <DialogClose className="text-sm text-gray-500 hover:underline">
          Close
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default PricingDialog;
