import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import { formatDate } from "@/lib/utils"

// Static blog posts data (same as blog page)
const posts = [
  {
    title: "How to Collect Rent Online: A Complete Guide for Small Landlords",
    excerpt: "Stop chasing checks and waiting in line at the bank. Here's how to set up online rent collection in under 10 minutes.",
    content: `
      <p>Chasing down rent checks is one of the most time-consuming parts of being a landlord. You leave notes, send texts, make phone calls, and still find yourself driving across town to pick up checks or waiting days for mail delivery.</p>

      <p>Online rent collection changes everything. Tenants pay with a click, money hits your account automatically, and you get your time back. Here's how to set it up properly.</p>

      <h2>Why Online Rent Collection?</h2>

      <p>Before we dive into the how, let's look at the why:</p>

      <ul>
        <li><strong>Speed:</strong> Online payments typically clear in 1-2 business days vs. checks that can take a week</li>
        <li><strong>Convenience:</strong> Tenants can pay anytime, anywhere, from their phone</li>
        <li><strong>Automatic records:</strong> Every payment is tracked automatically—no more manual bookkeeping</li>
        <li><strong>Professional image:</strong> Tenants see you as a serious, modern landlord</li>
        <li><strong>Reduced late payments:</strong> Automated reminders and easy payment options mean fewer missed deadlines</li>
      </ul>

      <h2>Step 1: Choose Your Payment Methods</h2>

      <p>Most small landlords should offer two options:</p>

      <p><strong>ACH (Bank Transfer):</strong> This is the gold standard. It's secure, has low fees (usually $0-1 per transaction), and feels official. Most tenants are comfortable with this.</p>

      <p><strong>Credit/Debit Cards:</strong> Some tenants prefer this for the rewards points or because they don't have bank accounts. Expect to pay 2.9% + $0.30 per transaction, but you can pass this fee to tenants if you choose.</p>

      <h2>Step 2: Set Up Your System</h2>

      <p>If you're using RentHive, this is incredibly simple:</p>

      <ol>
        <li>Connect your bank account (takes 2 minutes)</li>
        <li>Set your rent amount and due date for each unit</li>
        <li>Invite tenants via email</li>
        <li>They connect their payment method</li>
        <li>Done—rent collection is now automated</li>
      </ol>

      <h2>Step 3: Communicate with Tenants</h2>

      <p>The key to successful adoption is clear communication. Send a message like this:</p>

      <blockquote>
        "Hi [Tenant Name], I'm upgrading our rent payment system to make things easier for both of us. Starting [Date], you'll be able to pay rent online through a secure tenant portal. You'll receive an invite email with setup instructions. This is optional—you can still pay by check if you prefer—but online payments are faster and more convenient. Let me know if you have any questions!"
      </blockquote>

      <h2>Step 4: Handle the Transition</h2>

      <p>Give tenants 30 days notice before requiring online payments. During the transition:</p>

      <ul>
        <li>Accept both payment methods</li>
        <li>Help tech-hesitant tenants with setup</li>
        <li>Remind tenants about the new system 1 week and 1 day before the switch</li>
      </ul>

      <h2>Pro Tips for Success</h2>

      <p><strong>Automate late fees:</strong> Set up automatic late fees (usually 5-10% of rent or a flat $25-50) that apply after a grace period. This removes the awkward conversation and ensures consistency.</p>

      <p><strong>Send reminders:</strong> Automated payment reminders 3 days before and on the due date reduce late payments significantly.</p>

      <p><strong>Keep records:</strong> Even with automatic tracking, download monthly statements for your records. Your accountant will thank you.</p>

      <h2>Common Concerns Addressed</h2>

      <p><strong>"What if the tenant disputes a charge?"</strong> Online payment systems have clear dispute processes. Keep your lease, communication records, and payment history organized.</p>

      <p><strong>"What if the tenant doesn't have a bank account?"</strong> About 5% of Americans are unbanked. For these tenants, you can accept money orders or cash (with proper documentation), or help them set up a free checking account.</p>

      <p><strong>"Is it secure?"</strong> Reputable platforms use bank-level encryption (256-bit SSL). It's actually more secure than checks, which can be lost, stolen, or forged.</p>

      <h2>The Bottom Line</h2>

      <p>Online rent collection isn't just a nice-to-have anymore—it's becoming the standard. Tenants expect it, and once you experience the time savings, you'll never go back to chasing checks.</p>

      <p>Set aside 30 minutes this week to get your system configured. Your future self will thank you.</p>
    `,
    slug: "collect-rent-online-guide",
    publishedAt: "2024-06-15",
    category: "Getting Started",
    readTime: "5 min read",
    author: {
      name: "RentHive Team",
      role: "Property Management Experts",
    },
  },
  {
    title: "5 Automation Rules Every Small Landlord Needs",
    excerpt: "Reclaim your weekends with these simple automation workflows for rent collection, late fees, maintenance reminders, and tenant communication.",
    content: `<p>Content coming soon...</p>`,
    slug: "automation-rules-landlords",
    publishedAt: "2024-06-12",
    category: "Productivity",
    readTime: "4 min read",
    author: {
      name: "RentHive Team",
      role: "Property Management Experts",
    },
  },
  {
    title: "Late Rent Notice Templates (Free Download)",
    excerpt: "Professional, legally-compliant templates for every stage of the late rent process. Copy, customize, and send.",
    content: `<p>Content coming soon...</p>`,
    slug: "late-rent-notice-templates",
    publishedAt: "2024-06-10",
    category: "Legal",
    readTime: "3 min read",
    author: {
      name: "RentHive Team",
      role: "Property Management Experts",
    },
  },
  {
    title: "Tenant Screening: Red Flags and Green Lights",
    excerpt: "How to spot great tenants and avoid problematic ones. A practical guide to credit checks, reference verification, and gut instinct.",
    content: `<p>Content coming soon...</p>`,
    slug: "tenant-screening-guide",
    publishedAt: "2024-06-08",
    category: "Getting Started",
    readTime: "6 min read",
    author: {
      name: "RentHive Team",
      role: "Property Management Experts",
    },
  },
  {
    title: "Rental Property Accounting 101: Schedule E Made Simple",
    excerpt: "Don't dread tax season. Here's how to track income and expenses throughout the year so your accountant (or tax software) loves you.",
    content: `<p>Content coming soon...</p>`,
    slug: "rental-property-accounting",
    publishedAt: "2024-06-05",
    category: "Growth",
    readTime: "7 min read",
    author: {
      name: "RentHive Team",
      role: "Property Management Experts",
    },
  },
  {
    title: "When to DIY vs. Hire a Property Manager",
    excerpt: "The honest math on when it makes sense to manage yourself with software versus hiring a professional property manager.",
    content: `<p>Content coming soon...</p>`,
    slug: "diy-vs-property-manager",
    publishedAt: "2024-06-01",
    category: "Growth",
    readTime: "5 min read",
    author: {
      name: "RentHive Team",
      role: "Property Management Experts",
    },
  },
]

// Generate static params for all blog posts
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2)

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" className="mb-6 -ml-4" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to blog
              </Link>
            </Button>

            <Badge className="mb-4 bg-renthive-100 text-renthive-800">
              {post.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-renthive-100 to-renthive-50 flex items-center justify-center">
              <span className="text-8xl font-bold text-renthive-200">
                {post.category[0]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-renthive-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-renthive-500 prose-blockquote:bg-renthive-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Box */}
            <Card className="mt-12 bg-muted/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-renthive-100 flex items-center justify-center shrink-0">
                  <User className="h-6 w-6 text-renthive-700" />
                </div>
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Helping small landlords save time and collect rent faster with practical tips and automation strategies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Related articles</h2>
              <div className="grid gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {relatedPost.category}
                          </Badge>
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <h3 className="font-semibold hover:text-renthive-700 transition-colors">
                              {relatedPost.title}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground shrink-0">
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to simplify your property management?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join 500+ small landlords using RentHive to automate rent collection 
              and reclaim their time.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="https://app.renthive.io/signup">
                Get Started Free
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
