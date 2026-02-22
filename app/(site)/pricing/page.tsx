import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, HelpCircle, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for RentHive. Free for your first property (up to 10 units). Then just $2 per unit per month. No hidden fees.",
}

const plans = [
  {
    name: "Starter",
    description: "Perfect for your first property",
    price: "$0",
    priceDetail: "Forever free",
    unitLimit: "1 property (up to 10 units)",
    features: [
      "Online rent collection",
      "Tenant portal & messaging",
      "Basic financial reporting",
      "Maintenance request tracking",
      "Mobile app (iOS & Android)",
      "Email support",
      "Automatic payment reminders",
      "Digital lease storage",
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
    unitLimit: "Unlimited properties & units",
    features: [
      "Everything in Starter, plus:",
      "Automated late fees",
      "Advanced reporting & analytics",
      "Vendor management",
      "Bulk tenant messaging",
      "Priority support (24hr response)",
      "API access",
      "Custom branding",
      "Data export (Excel/CSV)",
      "Multi-user accounts",
    ],
    cta: "Start Free Trial",
    href: "https://app.renthive.io/signup",
    popular: true,
  },
]

const faqs = [
  {
    question: "Is the free plan really free forever?",
    answer: "Yes! The Starter plan is free forever for one property with up to 10 units. No credit card required, no time limits, no hidden fees. When you're ready to add more properties, you can upgrade to Professional.",
  },
  {
    question: "How does the $2 per unit pricing work?",
    answer: "Professional plan pricing is simple: $2 per unit per month. If you have 15 units across multiple properties, you pay $30/month. If you have 50 units, you pay $100/month. No setup fees, no hidden costs.",
  },
  {
    question: "Can I switch between plans?",
    answer: "Absolutely. You can upgrade from Starter to Professional at any time. If you downgrade from Professional to Starter, you'll keep access to Pro features until the end of your billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and ACH bank transfers for Professional plans. We use Stripe for secure payment processing.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes! If you choose annual billing for the Professional plan, you get 2 months free (17% discount). That's $20/unit/year instead of $24.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You own your data. If you cancel, you can export all your data (tenants, leases, financial records) at any time. We keep backups for 30 days after cancellation, then permanently delete all data.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for Professional plans. If you're not satisfied within the first 30 days, contact us for a full refund—no questions asked.",
  },
  {
    question: "Is there a plan for large portfolios (50+ units)?",
    answer: "For portfolios over 50 units, we offer custom Enterprise pricing with dedicated support, onboarding assistance, and potential volume discounts. Contact our sales team for details.",
  },
]

const comparisonFeatures = [
  { name: "Online rent collection", starter: true, pro: true },
  { name: "ACH payments", starter: true, pro: true },
  { name: "Credit/debit card payments", starter: true, pro: true },
  { name: "Automatic payment reminders", starter: true, pro: true },
  { name: "Tenant portal", starter: true, pro: true },
  { name: "Maintenance requests", starter: true, pro: true },
  { name: "Mobile app", starter: true, pro: true },
  { name: "Basic reporting", starter: true, pro: true },
  { name: "Automated late fees", starter: false, pro: true },
  { name: "Advanced analytics", starter: false, pro: true },
  { name: "Vendor management", starter: false, pro: true },
  { name: "API access", starter: false, pro: true },
  { name: "Priority support", starter: false, pro: true },
  { name: "Custom branding", starter: false, pro: true },
  { name: "Multi-user accounts", starter: false, pro: true },
]

export default function PricingPage() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-renthive-100 text-renthive-800">Pricing</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Start free, scale as you grow. No hidden fees, no setup costs, 
              cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-renthive-500 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-renthive-600 hover:bg-renthive-700">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.priceDetail}</span>
                  </div>
                  <p className="text-sm font-medium text-renthive-700 mt-2">
                    {plan.unitLimit}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-renthive-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full gap-2" 
                    size="lg"
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
              <Link href="/contact" className="text-renthive-700 hover:underline font-medium">
                Contact us for Enterprise pricing
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">Compare plans</h2>
            <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold text-renthive-700">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                      <td className="py-3 px-6 text-sm">{feature.name}</td>
                      <td className="text-center py-3 px-6">
                        {feature.starter ? (
                          <Check className="h-5 w-5 text-renthive-600 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-6">
                        <Check className="h-5 w-5 text-renthive-600 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
              <p className="text-muted-foreground">
                Everything you need to know about RentHive pricing.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 p-6 bg-renthive-50 rounded-xl text-center">
              <HelpCircle className="h-8 w-8 text-renthive-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Still have questions?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
