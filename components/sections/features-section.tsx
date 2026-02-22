"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  DollarSign, 
  Users, 
  Wrench, 
  BarChart3, 
  Shield, 
  Zap,
  ArrowRight 
} from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Automated Rent Collection",
    description: "Set up once, collect forever. Tenants pay online, funds deposit automatically to your account.",
    benefit: "Get paid 3x faster",
  },
  {
    icon: Users,
    title: "Tenant Management",
    description: "All tenant info, leases, and communication in one place. No more digging through emails.",
    benefit: "Save 5 hours/week",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description: "Tenants submit requests with photos. You assign vendors and track progress effortlessly.",
    benefit: "Faster resolution",
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    description: "Tax-ready reports, income tracking, and expense categorization. Schedule E made simple.",
    benefit: "Tax season ready",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-level encryption, automatic backups, and compliance with landlord-tenant laws.",
    benefit: "Sleep soundly",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get alerts for late payments, maintenance requests, and lease renewals. Never miss a thing.",
    benefit: "Stay informed",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-lg text-muted-foreground">
            We built RentHive specifically for small landlords. No complex enterprise 
            features—just the tools you actually need to manage your properties efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-renthive-100 flex items-center justify-center mb-4 group-hover:bg-renthive-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-renthive-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-renthive-700">
                  <Zap className="h-4 w-4" />
                  {feature.benefit}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link href="/features">
              Explore All Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
