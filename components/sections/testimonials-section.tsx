"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "I was using spreadsheets and chasing checks for 6 units. LeaseHub cut my admin time by 70%. The automated reminders alone are worth it.",
    author: "Michael Chen",
    role: "Landlord",
    location: "8 units in Portland",
    metric: "Saved 8 hours/week",
  },
  {
    quote: "The free tier for my first property got me hooked. Now I manage 12 units and still pay less than I would for other software that does less.",
    author: "Jennifer Walsh",
    role: "Part-time Investor",
    location: "12 units in Austin",
    metric: "60% cost savings",
  },
  {
    quote: "Finally, software built for small landlords like me. No bloat, no complexity. I set it up in 10 minutes and my tenants love the easy payments.",
    author: "Robert Martinez",
    role: "Accidental Landlord",
    location: "5 units in Denver",
    metric: "Zero late payments",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-leasehub-900 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Loved by small landlords
          </h2>
          <p className="text-lg text-leasehub-100">
            Join 500+ landlords who&apos;ve simplified their property management with LeaseHub.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-leasehub-800 border-leasehub-700">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-leasehub-400 mb-4" />
                <p className="text-leasehub-50 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-leasehub-200">{testimonial.role}</p>
                    <p className="text-xs text-leasehub-300">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-leasehub-600 text-xs font-semibold">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
