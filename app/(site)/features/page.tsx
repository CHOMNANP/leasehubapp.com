import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  Users, 
  Wrench, 
  BarChart3, 
  Shield, 
  Zap,
  Clock,
  Smartphone,
  ArrowRight,
  Check
} from "lucide-react"

export const metadata: Metadata = {
  title: "Features",
  description: "Explore RentHive's features designed specifically for small landlords. Automated rent collection, tenant management, maintenance tracking, and more.",
}

const mainFeatures = [
  {
    icon: DollarSign,
    title: "Automated Rent Collection",
    description: "Set up automatic rent collection once and never chase a check again. Tenants can pay via ACH, credit card, or debit card. Funds deposit directly to your account.",
    benefits: [
      "Get paid 3x faster than paper checks",
      "Automatic late fee application",
      "Payment reminders sent to tenants",
      "Partial payment blocking option",
      "Automatic receipt generation",
    ],
    image: "rent-collection",
  },
  {
    icon: Users,
    title: "Tenant Management",
    description: "Keep all tenant information, leases, and communication history in one organized place. No more digging through email threads or filing cabinets.",
    benefits: [
      "Digital lease storage & e-signatures",
      "Tenant portal for 24/7 access",
      "Automated lease renewal reminders",
      "Document sharing & storage",
      "Communication history tracking",
    ],
    image: "tenant-management",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description: "Streamline maintenance requests from submission to completion. Tenants submit requests with photos, you assign to vendors, and track everything in real-time.",
    benefits: [
      "Photo-based request submission",
      "Vendor assignment & tracking",
      "Cost tracking per unit/property",
      "Priority level setting",
      "Automatic status updates to tenants",
    ],
    image: "maintenance",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "Tax-ready financial reports at your fingertips. Track income, categorize expenses, and export everything your accountant needs for Schedule E.",
    benefits: [
      "Schedule E ready reports",
      "Income & expense tracking",
      "Property-level P&L statements",
      "Tax deduction categorization",
      "Export to Excel/CSV/PDF",
    ],
    image: "reporting",
  },
]

const additionalFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "256-bit encryption, automatic backups, and strict data privacy. Your data is safer than in a filing cabinet.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Manage your properties on the go. iOS and Android apps with full functionality.",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Get alerts for payments, late rent, maintenance requests, and lease renewals via email or SMS.",
  },
  {
    icon: Clock,
    title: "5-Minute Setup",
    description: "No complex configuration. Add your property, invite tenants, and start collecting rent in under 5 minutes.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-renthive-100 text-renthive-800">Features</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Everything you need to manage your rentals
            </h1>
            <p className="text-lg text-muted-foreground">
              Purpose-built for small landlords. No bloat, no complexity—just the 
              essential tools to run your rental business efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12">
        <div className="container">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-lg bg-renthive-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-renthive-700" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-renthive-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 border shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <feature.icon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <span className="text-sm text-muted-foreground">{feature.image} screenshot</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              And there&apos;s more
            </h2>
            <p className="text-muted-foreground">
              Every feature designed with small landlords in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-renthive-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-renthive-700" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to streamline your property management?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start free with your first property. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link href="https://app.renthive.io/signup">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
