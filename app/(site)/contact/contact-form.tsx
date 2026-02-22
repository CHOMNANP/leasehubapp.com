"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Clock, CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
  }

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-renthive-100 text-renthive-800">Contact</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question about RentHive? Need a demo for your team? 
              Just want to say hi? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-renthive-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-renthive-700" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For general inquiries and support
                </p>
                <a 
                  href="mailto:hello@renthive.io" 
                  className="text-renthive-700 hover:underline font-medium"
                >
                  hello@renthive.io
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-renthive-100 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-renthive-700" />
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Available for Pro users
                </p>
                <span className="text-muted-foreground text-sm">
                  In-app support
                </span>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-renthive-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-renthive-700" />
                </div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We typically reply within
                </p>
                <span className="text-muted-foreground text-sm">
                  24 hours
                </span>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-renthive-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-renthive-700" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or request..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="grid gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How do I get started with RentHive?</h3>
                  <p className="text-sm text-muted-foreground">
                    Simply sign up for a free account, add your first property, and invite your tenants. 
                    Most landlords are up and running in under 10 minutes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can I import data from another system?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! We offer free migration assistance for new users. Contact us and we&apos;ll help 
                    you transfer your tenant and property data.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you offer demos for larger portfolios?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. If you manage 20+ units, we&apos;re happy to schedule a personalized demo. 
                    Just fill out the contact form above.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
