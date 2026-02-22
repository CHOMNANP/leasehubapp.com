import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

// Static blog posts for initial render
const recentPosts = [
  {
    title: "How to Collect Rent Online: A Complete Guide for Small Landlords",
    excerpt: "Stop chasing checks and waiting in line at the bank. Here's how to set up online rent collection in under 10 minutes.",
    slug: "collect-rent-online-guide",
    publishedAt: "2024-06-15",
    category: "Getting Started",
    readTime: "5 min read",
  },
  {
    title: "5 Automation Rules Every Small Landlord Needs",
    excerpt: "Reclaim your weekends with these simple automation workflows for rent collection, late fees, and tenant communication.",
    slug: "automation-rules-landlords",
    publishedAt: "2024-06-10",
    category: "Productivity",
    readTime: "4 min read",
  },
  {
    title: "Late Rent Notice Templates (Free Download)",
    excerpt: "Professional, legally-compliant templates for every stage of the late rent process. Copy, customize, send.",
    slug: "late-rent-notice-templates",
    publishedAt: "2024-06-05",
    category: "Legal",
    readTime: "3 min read",
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Landlord resources & guides
            </h2>
            <p className="text-lg text-muted-foreground">
              Practical advice for small landlords. No fluff, just actionable tips to 
              help you manage properties more efficiently.
            </p>
          </div>
          <Button variant="outline" className="gap-2 shrink-0" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-leasehub-100 to-leasehub-50 flex items-center justify-center">
                      <span className="text-4xl font-bold text-leasehub-200">{post.category[0]}</span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-leasehub-700 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
  )
}
