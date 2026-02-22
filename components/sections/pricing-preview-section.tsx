"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Perfect for your first property",
    price: "$0",
    priceDetail: "Forever free",
    features: [
      "1 property (up to 10 units)",
      "Online rent collection",
      "Tenant portal",
      "Basic reporting",
      "Email support",
      "Mobile app access",
    ],
    cta: "Get Started Free",
    href: "https://app.renthive.io/signup",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing landlords",
    price: "$2",
    priceDetail: "per unit / month",
    features: [
      "Unlimited properties",
      "Unlimited units",
      "Automated late fees",
      "Maintenance tracking",
      "Advanced reporting",
      "Priority support",
      "API access",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    href: "https://app.renthive.io/signup",
    popular: true,
  },
]

export function PricingPreviewSection() {
  return (
    <section className="py-24 bg-muted/30" id="pricing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free, scale as you grow. No hidden fees, no setup costs, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-renthive-500 shadow-lg' : ''}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-renthive-600 hover:bg-renthive-700">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.priceDetail}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-renthive-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full gap-2" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Need more than 50 units?{" "}
            <Link href="/contact" className="text-renthive-700 hover:underline">
              Contact us for custom pricing
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
