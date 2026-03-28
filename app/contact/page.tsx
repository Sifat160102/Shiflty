"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, MessageSquare, Package, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@shiftly.eco",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+49 30 123 4567",
    description: "Mon-Fri, 9AM-6PM CET",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Berlin, Germany",
    description: "Renewable Energy District",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "For all inquiries",
  },
];

const inquiryTypes = [
  { value: "general", label: "General Inquiry", icon: MessageSquare },
  { value: "order", label: "Order Issue", icon: Package },
  { value: "support", label: "Customer Support", icon: HelpCircle },
];

const faqs = [
  {
    question: "How is my produce delivered?",
    answer: "We use eco-friendly packaging and carbon-neutral delivery services. Your order is packed fresh and delivered within 2-3 business days across Europe.",
  },
  {
    question: "What if I'm not satisfied with my order?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your produce, contact us within 24 hours of delivery for a full refund or replacement.",
  },
  {
    question: "How do you verify renewable energy usage?",
    answer: "All our partner farms are certified by recognized energy authorities. We conduct regular audits and publish transparency reports on our energy sourcing.",
  },
  {
    question: "Can I visit the farms?",
    answer: "Yes! We organize farm tours throughout the year. Sign up for our newsletter to be notified about upcoming farm visit opportunities.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    inquiryType: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="mx-auto max-w-lg px-4 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <CheckCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-2xl font-medium text-foreground">
              Message Sent!
            </h1>
            <p className="mt-2 text-muted-foreground">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Have questions about your order, our farms, or sustainability practices? 
              We&apos;re here to help and would love to hear from you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-none bg-muted/30">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orderNumber">Order Number (optional)</Label>
                    <Input
                      id="orderNumber"
                      value={formData.orderNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, orderNumber: e.target.value })
                      }
                      placeholder="SHF-12345"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Inquiry Type</Label>
                    <RadioGroup
                      value={formData.inquiryType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, inquiryType: value })
                      }
                      className="grid gap-2 sm:grid-cols-3"
                    >
                      {inquiryTypes.map((type) => {
                        const isSelected = formData.inquiryType === type.value;
                        return (
                          <div key={type.value}>
                            <RadioGroupItem
                              value={type.value}
                              id={type.value}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={type.value}
                              className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 p-3 transition-colors ${
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-border bg-card hover:border-primary/50 hover:bg-muted"
                              }`}
                            >
                              <type.icon className={`h-4 w-4 ${isSelected ? "text-primary-foreground" : "text-foreground"}`} />
                              <span className={`text-sm font-medium ${isSelected ? "text-primary-foreground" : "text-foreground"}`}>{type.label}</span>
                            </Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-medium text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-none bg-muted/30">
                    <CardContent className="p-5">
                      <h3 className="mb-2 font-medium text-foreground">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-medium text-foreground">
                    Can&apos;t find what you&apos;re looking for?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Our customer support team is available Monday through Friday, 
                    9AM to 6PM CET. We typically respond to all inquiries within 24 hours.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Mail className="h-4 w-4" />
                    <span>hello@shiftly.eco</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
