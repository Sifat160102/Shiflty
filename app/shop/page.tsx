"use client";

import { useEffect, useMemo, useState } from "react";
import { Filter, X, Sun, Wind, Droplets, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { products, categories, energyTypes } from "@/lib/data";

const energyIcons = {
  Solar: Sun,
  Wind: Wind,
  Hydro: Droplets,
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEnergy, setSelectedEnergy] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");

  useEffect(() => {
    const category = new URLSearchParams(window.location.search).get("category") || "All";
    setSelectedCategory(category);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedEnergy !== "All") {
      filtered = filtered.filter((p) => p.energy === selectedEnergy);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.farm.toLowerCase().includes(query)
      );
    }

    switch (sortBy) {
      case "price-asc":
        filtered = [...filtered].sort((a, b) => a.price_eur_per_kg - b.price_eur_per_kg);
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => b.price_eur_per_kg - a.price_eur_per_kg);
        break;
      default:
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedCategory, selectedEnergy, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedEnergy("All");
    setSearchQuery("");
    setSortBy("name");
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedEnergy !== "All" ||
    searchQuery !== "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
              Our Products
            </h1>
            <p className="mt-2 text-muted-foreground">
              Fresh vegetables from renewable-energy-powered farms
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24 space-y-6">
                <div>
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {category}
                        {category !== "All" && (
                          <span className="text-xs opacity-70">
                            {products.filter((p) => p.category === category).length}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Energy Source</h3>
                  <div className="space-y-2">
                    {energyTypes.map((energy) => {
                      const Icon = energy !== "All" ? energyIcons[energy as keyof typeof energyIcons] : Leaf;
                      return (
                        <button
                          key={energy}
                          onClick={() => setSelectedEnergy(energy)}
                          className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                            selectedEnergy === energy
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {energy}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>

                {hasActiveFilters && (
                  <Button variant="outline" className="w-full" onClick={clearFilters}>
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Mobile Filter Button */}
            <div className="flex items-center justify-between lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-1">
                    Active
                  </Badge>
                )}
              </Button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="space-y-4 rounded-lg border border-border bg-card p-4 lg:hidden">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Energy Source</h3>
                  <div className="flex flex-wrap gap-2">
                    {energyTypes.map((energy) => (
                      <Badge
                        key={energy}
                        variant={selectedEnergy === energy ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedEnergy(energy)}
                      >
                        {energy}
                      </Badge>
                    ))}
                  </div>
                </div>
                {hasActiveFilters && (
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                )}
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-muted/30 py-16 text-center">
                  <Leaf className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mb-2 font-medium text-foreground">No products found</h3>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your filters or search query
                  </p>
                  <Button variant="outline" className="mt-4" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
