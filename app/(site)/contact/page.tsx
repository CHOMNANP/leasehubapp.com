import type { Metadata } from "next"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the RentHive team. We're here to help with questions, demo requests, or partnership inquiries.",
}

export default function ContactPage() {
  return <ContactForm />
}
