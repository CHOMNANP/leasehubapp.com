import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides and resources for small landlords. Learn how to automate rent collection, screen tenants, handle maintenance, and grow your rental business.",
}

// Static blog posts data
const posts = [
  {
    title: "How to Collect Rent Online: A Complete Guide for Small Landlords",
    excerpt: "Stop chasing checks and waiting in line at the bank. Here's how to set up online rent collection in under 10 minutes, which platforms to use, and how to get tenants on board.",
    slug: "collect-rent-online-guide",
    publishedAt: "2024-06-15",
    category: "Getting Started",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "5 Automation Rules Every Small Landlord Needs",
    excerpt: "Reclaim your weekends with these simple automation workflows for rent collection, late fees, maintenance reminders, and tenant communication.",
    slug: "automation-rules-landlords",
    publishedAt: "2024-06-12",
    category: "Productivity",
    readTime: "4 min read",
    featured: false,
  },
  {
    title: "Late Rent Notice Templates (Free Download)",
    excerpt: "Professional, legally-compliant templates for every stage of the late rent process. Copy, customize, and send. Includes 3-day, 5-day, and final notice templates.",
    slug: "late-rent-notice-templates",
    publishedAt: "2024-06-10",
    category: "Legal",
    readTime: "3 min read",
    featured: false,
  },
  {
    title: "Tenant Screening: Red Flags and Green Lights",
    excerpt: "How to spot great tenants and avoid problematic ones. A practical guide to credit checks, reference verification, and gut instinct.",
    slug: "tenant-screening-guide",
    publishedAt: "2024-06-08",
    category: "Getting Started",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Rental Property Accounting 101: Schedule E Made Simple",
    excerpt: "Don't dread tax season. Here's how to track income and expenses throughout the year so your accountant (or tax software) loves you.",
    slug: "rental-property-accounting",
    publishedAt: "2024-06-05",
    category: "Growth",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "When to DIY vs. Hire a Property Manager",
    excerpt: "The honest math on when it makes sense to manage yourself with software versus hiring a professional property manager.",
    slug: "diy-vs-property-manager",
    publishedAt: "2024-06-01",
    category: "Growth",
    readTime: "5 min read",
    featured: false,
  },
]

const categories = [
  { name: "All", slug: "all", count: posts.length },
  { name: "Getting Started", slug: "getting-started", count: 2 },
  { name: "Productivity", slug: "productivity", count: 1 },
  { name: "Legal", slug: "legal", count: 1 },
  { name: "Growth", slug: "growth", count: 2 },
]

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-leasehub-100 text-leasehub-800">Blog</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Resources for small landlords
            </h1>
            <p className="text-lg text-muted-foreground">
              Practical guides, templates, and tips to help you manage your rental 
              properties more efficiently. No fluff, just actionable advice.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category.slug}
                variant={category.slug === "all" ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 text-sm"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12">
          <div className="container">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="aspect-video md:aspect-auto bg-gradient-to-br from-leasehub-100 to-leasehub-50 flex items-center justify-center">
                    <span className="text-6xl font-bold text-leasehub-200">
                      {featuredPost.category[0]}
                    </span>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
                      Featured
                    </Badge>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-leasehub-700 transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(featuredPost.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-leasehub-700 font-medium hover:underline"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Latest articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-300">
                        {post.category[0]}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-leasehub-700 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Get landlord tips delivered to your inbox</h2>
            <p className="text-muted-foreground mb-6">
              Join 2,000+ small landlords getting weekly tips on automation, 
              tenant management, and growing their rental business.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border bg-background"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-leasehub-600 text-white rounded-lg font-medium hover:bg-leasehub-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
