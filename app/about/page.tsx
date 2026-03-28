import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Eye, Sparkles, Heart, Sun, Wind, Droplets, Target, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { farms } from "@/lib/data";

const values = [
  {
    icon: Leaf,
    title: "100% Green Sources",
    description: "Every vegetable we sell is grown using renewable energy sources. Solar panels, wind turbines, and hydroelectric power are the only energy sources our partner farms use."
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "We believe in complete openness. From farm to table, you can trace every product. We share our sourcing practices, energy certifications, and environmental impact data."
  },
  {
    icon: Sparkles,
    title: "Freshness & Taste",
    description: "Sustainable doesn&apos;t mean compromising on quality. Our produce is harvested at peak ripeness and delivered fresh, ensuring maximum flavor and nutritional value."
  },
  {
    icon: Heart,
    title: "Fair Pay for Farmers",
    description: "We ensure every farmer in our network receives fair compensation. By cutting out middlemen and building direct relationships, we can offer farmers better rates."
  }
];

const milestones = [
  { year: "2022", title: "Founded", description: "Shiftly was born from a simple idea: sustainable produce should be accessible to everyone." },
  { year: "2023", title: "First Partner Farms", description: "We partnered with three pioneering renewable-energy farms across Europe." },
  { year: "2024", title: "10,000 Customers", description: "Reached our first milestone of 10,000 happy customers choosing sustainable produce." },
  { year: "2025", title: "Carbon Neutral", description: "Achieved complete carbon neutrality across all our operations and logistics." },
];

const stats = [
  { value: "85%", label: "Less CO2 Emissions", description: "Compared to conventional farming" },
  { value: "3", label: "Partner Farms", description: "Across Portugal, Germany & Austria" },
  { value: "100%", label: "Renewable Energy", description: "Solar, Wind & Hydro powered" },
  { value: "€2.5M", label: "Fair Pay Distributed", description: "Directly to our farmers" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h1 className="font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
                  Shifting Towards a
                  <span className="block text-primary">Greener Future</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  We&apos;re Shiftly - a company dedicated to making sustainable produce accessible to everyone. 
                  We partner with farms that power their operations exclusively with renewable energy, 
                  bringing you vegetables that are fresh, fairly priced, and lighter on the planet.
                </p>
                <Button asChild size="lg">
                  <Link href="/shop">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop"
                    alt="Sustainable farming"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Mission</span>
                </div>
                <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
                  Making Sustainable Food the Standard
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We believe that choosing sustainable food shouldn&apos;t be a luxury. Our mission is to 
                  create a world where renewable-energy farming is the norm, not the exception. By connecting 
                  conscious consumers with forward-thinking farmers, we&apos;re building a food system that 
                  nourishes both people and the planet.
                </p>
              </div>
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Vision</span>
                </div>
                <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
                  A Carbon-Neutral Food Chain
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We envision a future where every vegetable on your plate comes from a farm powered by 
                  nature itself. Our goal is to expand our network to 50 renewable-energy farms by 2030, 
                  serving millions of customers across Europe while maintaining complete carbon neutrality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-card py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl font-medium text-primary">{stat.value}</p>
                  <p className="mt-1 font-medium text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Card key={index} className="border-none bg-muted/30">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Farms Section */}
        <section id="farms" className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Our Partner Farms</h2>
              <p className="mt-4 text-muted-foreground">
                Meet the innovative farms that share our vision for sustainable agriculture
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {farms.map((farm) => {
                const FarmIcon = farm.energy === "Solar" ? Sun : farm.energy === "Wind" ? Wind : Droplets;
                return (
                  <Card key={farm.id} className="overflow-hidden">
                    <div className="relative aspect-[3/2]">
                      <Image
                        src={farm.image}
                        alt={farm.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white">
                          <FarmIcon className="h-5 w-5" />
                          <span className="font-medium">{farm.energy} Powered</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-1 text-xl font-semibold text-foreground">{farm.name}</h3>
                      <p className="mb-3 text-sm text-primary">{farm.region}</p>
                      <p className="text-sm text-muted-foreground">{farm.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Our Journey</h2>
              <p className="mt-4 text-muted-foreground">Key milestones in our mission to transform food production</p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-border lg:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`flex flex-col gap-4 lg:flex-row lg:items-center ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="lg:w-1/2">
                      <Card className={`${index % 2 === 0 ? "lg:ml-8" : "lg:mr-8"}`}>
                        <CardContent className="p-6">
                          <span className="text-sm font-medium text-primary">{milestone.year}</span>
                          <h3 className="mt-1 font-semibold text-foreground">{milestone.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden h-4 w-4 shrink-0 rounded-full border-4 border-primary bg-background lg:block" />
                    <div className="lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Our Team</span>
              </div>
              <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
                Passionate About Change
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Behind Shiftly is a dedicated team of sustainability advocates, agricultural experts, 
                and tech enthusiasts united by a common goal: making renewable-energy farming 
                the standard for food production.
              </p>
              <Button asChild className="mt-8">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-primary-foreground md:text-4xl">
              Join the Movement
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Every purchase you make supports renewable energy farming and helps build a more 
              sustainable food system. Start your journey with Shiftly today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/shop">Start Shopping</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
