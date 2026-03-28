import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Eye, Sparkles, Heart, Sun, Wind, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { products, farms } from "@/lib/data";

const values = [
  {
    icon: Leaf,
    title: "100% Green Sources",
    description: "Nature is not affected by our products in any way. Every vegetable is grown using solar, wind, or hydroelectric power."
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "All that we know is what you know. No secrets about sourcing, farming practices, or environmental impact."
  },
  {
    icon: Sparkles,
    title: "Freshness & Taste",
    description: "There&apos;s nothing better than nature&apos;s actual taste. Our produce is harvested at peak ripeness for maximum flavor."
  },
  {
    icon: Heart,
    title: "Fair Pay",
    description: "All of our partner farmers deserve fair compensation for their work. We ensure every farmer is paid justly."
  }
];

const energyStats = [
  { icon: Sun, label: "Solar Farms", value: "40%", desc: "of our energy" },
  { icon: Wind, label: "Wind Powered", value: "35%", desc: "of our energy" },
  { icon: Droplets, label: "Hydro Energy", value: "25%", desc: "of our energy" },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary/5 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                  <Leaf className="h-4 w-4" />
                  <span>100% Renewable Energy</span>
                </div>
                <h1 className="font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Shifting Towards
                  <span className="block text-primary">Nature</span>
                </h1>
                <p className="max-w-lg text-lg text-muted-foreground">
                  Your store for vegetables grown with 100% renewable energy. Fresh, fairly priced produce that&apos;s lighter on the planet.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/shop">
                      Shop Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=800&fit=crop"
                    alt="Fresh organic vegetables"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">85%</p>
                      <p className="text-sm text-muted-foreground">Less CO2 Emissions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Stats */}
        <section className="border-y border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {energyStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 text-center md:text-left">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
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
              <p className="mt-4 text-muted-foreground">What drives us every single day</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-none bg-muted/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-muted/30 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Featured Products</h2>
                <p className="mt-4 text-muted-foreground">Fresh picks from our partner farms</p>
              </div>
              <Button asChild variant="outline" className="hidden sm:flex">
                <Link href="/shop">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button asChild>
                <Link href="/shop">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Farms Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Our Partner Farms</h2>
              <p className="mt-4 text-muted-foreground">Meet the sustainable farms behind our produce</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
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
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur">
                        <FarmIcon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{farm.energy} Powered</span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="mb-1 font-semibold text-foreground">{farm.name}</h3>
                      <p className="mb-3 text-sm text-primary">{farm.region}</p>
                      <p className="text-sm text-muted-foreground">{farm.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-medium text-primary-foreground md:text-4xl">
              Ready to Shift Towards Nature?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Join thousands of customers who are making a difference with every purchase. 
              Fresh, sustainable produce delivered to your door.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/shop">Start Shopping</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
