import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Home, Target, Heart, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about RentHive's mission to simplify property management for small landlords. Built by landlords, for landlords.",
}

const values = [
  {
    icon: Target,
    title: "Simplicity First",
    description: "We believe powerful software doesn't need to be complicated. Every feature is designed to be intuitive and require zero training.",
  },
  {
    icon: Heart,
    title: "Built with Care",
    description: "We're landlords too. We understand the 2 AM maintenance calls and the stress of late rent. RentHive is built to solve real problems.",
  },
  {
    icon: Users,
    title: "Small Landlord Focus",
    description: "We don't serve 200-unit complexes. We're exclusively focused on the unique needs of landlords with 2-20 units.",
  },
  {
    icon: Home,
    title: "Fair Pricing",
    description: "Your first property is free forever. After that, simple per-unit pricing with no hidden fees or surprise charges.",
  },
]

const stats = [
  { value: "500+", label: "Active Landlords" },
  { value: "3,200+", label: "Units Managed" },
  { value: "$2.4M", label: "Rent Collected Monthly" },
  { value: "4.9/5", label: "Customer Rating" },
]

export default function AboutPage() {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-renthive-100 text-renthive-800">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Built by landlords,{" "}
              <span className="gradient-text">for landlords</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              RentHive was born from frustration. We couldn&apos;t find property management 
              software that understood the needs of small landlords—so we built it ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-renthive-100 to-renthive-50 flex items-center justify-center">
              <div className="text-center p-8">
                <Home className="h-16 w-16 text-renthive-300 mx-auto mb-4" />
                <p className="text-muted-foreground">Founder Story Image</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2023, we were managing a handful of rental properties while working full-time jobs. 
                  We tried every property management software on the market, and they all had the same problem: 
                  they were built for massive property management companies, not small landlords like us.
                </p>
                <p>
                  We were drowning in features we&apos;d never use, paying enterprise prices for simple needs, 
                  and spending more time learning the software than actually managing our properties.
                </p>
                <p>
                  So we built RentHive—a simple, affordable tool specifically for landlords with 2-20 units. 
                  No bloat, no complexity, just the essential features you actually need.
                </p>
                <p>
                  Today, over 500 landlords use RentHive to collect rent, manage tenants, and reclaim their weekends. 
                  We&apos;re still small, still focused, and still building exactly what small landlords need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-renthive-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-renthive-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-renthive-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What we believe
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make at RentHive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-renthive-100 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-renthive-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Small but mighty
            </h2>
            <p className="text-muted-foreground">
              We&apos;re a lean team of landlords, engineers, and designers who care deeply 
              about helping small landlords succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-renthive-200 to-renthive-100 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-renthive-600" />
              </div>
              <h3 className="font-semibold">Founder & CEO</h3>
              <p className="text-sm text-muted-foreground">Former landlord, now full-time on RentHive</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-renthive-200 to-renthive-100 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-renthive-600" />
              </div>
              <h3 className="font-semibold">Head of Product</h3>
              <p className="text-sm text-muted-foreground">10 years in property tech</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-renthive-200 to-renthive-100 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-renthive-600" />
              </div>
              <h3 className="font-semibold">Customer Success</h3>
              <p className="text-sm text-muted-foreground">Former property manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Join the RentHive community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re building RentHive in public, with constant feedback from our users. 
              Have a feature request or just want to say hi? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.renthive.io/signup">
                  Try RentHive Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
