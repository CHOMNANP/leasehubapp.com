"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-leasehub-600">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leasehub-500 text-white text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Free forever for your first property
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to simplify your property management?
          </h2>
          <p className="text-xl text-leasehub-100 mb-8">
            Join 500+ small landlords who&apos;ve reclaimed their time with
            LeaseHub. Setup takes 5 minutes, and your first property is always
            free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-leasehub-700"
              asChild
            >
              <Link href="https://dashboard.leasehubapp.com?onboarding">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white text-white hover:bg-white hover:text-leasehub-700"
              asChild
            >
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
          <p className="text-sm text-leasehub-200 mt-6">
            No credit card required • Cancel anytime • Free migration assistance
          </p>
        </div>
      </div>
    </section>
  );
}
