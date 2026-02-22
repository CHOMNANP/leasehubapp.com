"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, UserPlus, Wallet } from "lucide-react"

const steps = [
  {
    icon: Building2,
    step: "01",
    title: "Add Your Property",
    description: "Enter basic property details, units, and rent amounts. Takes 2 minutes, no complex setup.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Invite Tenants",
    description: "Send invite links via email or text. Tenants create accounts and set up payment methods.",
  },
  {
    icon: Wallet,
    step: "03",
    title: "Collect Rent Automatically",
    description: "Rent is charged and deposited to your account on the due date. Late fees apply automatically.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24" id="demo">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple setup, powerful results
          </h2>
          <p className="text-lg text-muted-foreground">
            Most landlords are up and running in under 10 minutes. No training required, 
            no complicated configuration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={item.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-renthive-200 to-transparent" />
              )}
              <Card className="relative h-full border-renthive-100">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-renthive-600 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-renthive-100">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
