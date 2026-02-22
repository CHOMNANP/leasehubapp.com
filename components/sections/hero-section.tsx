"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-leasehub-50/50 via-background to-amber-50/30" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-leasehub-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-leasehub-100 text-leasehub-800 hover:bg-leasehub-200">
              Now free for your first property
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Property management that{" "}
              <span className="gradient-text">actually saves you time</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Built for small landlords with 2-20 units. Collect rent 3x faster, 
              automate tenant communication, and reclaim your weekends. No complex 
              features you&apos;ll never use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://dashboard.leasehubapp.com/signup">
                  Start Free — First Property
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="#demo">
                  <Play className="h-4 w-4" />
                  See How It Works
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-leasehub-600" />
                <span>Free for 1 property (10 units)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-leasehub-600" />
                <span>Setup in under 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-leasehub-600" />
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl border bg-background shadow-2xl overflow-hidden">
              {/* Placeholder for LeaseHub Dashboard Screenshot */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                <div className="relative bg-white rounded-xl shadow-lg border p-6 w-4/5 max-w-md">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-muted-foreground">LeaseHub Dashboard</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-leasehub-50 rounded-lg">
                      <span className="text-sm font-medium">Rent Collected (June)</span>
                      <span className="text-lg font-bold text-leasehub-700">$12,450</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-xs text-muted-foreground block">Occupancy</span>
                        <span className="text-lg font-semibold">94%</span>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <span className="text-xs text-muted-foreground block">Pending</span>
                        <span className="text-lg font-semibold">$1,200</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                        <div className="w-8 h-8 rounded-full bg-leasehub-100 flex items-center justify-center text-leasehub-700 text-xs font-bold">JD</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">John Doe — Unit 4A</p>
                          <p className="text-xs text-leasehub-600">Paid on time ✓</p>
                        </div>
                        <span className="text-sm font-semibold">$1,500</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold">SM</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Sarah Miller — Unit 2B</p>
                          <p className="text-xs text-amber-600">Due in 3 days</p>
                        </div>
                        <span className="text-sm font-semibold">$1,350</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-leasehub-100 flex items-center justify-center">
                <CheckCircle2 className="h-5 w-5 text-leasehub-600" />
              </div>
              <div>
                <p className="text-sm font-semibold">Payment Received</p>
                <p className="text-xs text-muted-foreground">Just now from Unit 3C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
