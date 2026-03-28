"use client";

import Image from "next/image";
import { Sun, Wind, Droplets, Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

const energyIcons = {
  Solar: Sun,
  Wind: Wind,
  Hydro: Droplets,
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const EnergyIcon = energyIcons[product.energy];
  const co2Reduction = ((1 - product.co2e_green / product.co2e_conv) * 100).toFixed(0);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute right-2 top-2 flex flex-col gap-1">
          {product.badges.slice(0, 2).map((badge) => (
            <Badge
              key={badge}
              variant="secondary"
              className="bg-background/90 text-xs backdrop-blur"
            >
              {badge}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-xs backdrop-blur">
          <EnergyIcon className="h-3 w-3 text-primary" />
          <span>{product.energy}</span>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <h3 className="font-medium text-foreground">{product.name}</h3>
          </div>
          <p className="text-lg font-semibold text-primary">
            &euro;{product.price_eur_per_kg.toFixed(2)}
            <span className="text-xs font-normal text-muted-foreground">/{product.unit}</span>
          </p>
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded bg-primary/10 px-2 py-0.5 text-primary">
            -{co2Reduction}% CO2
          </span>
          <span>{product.farm}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md border border-border">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <Button
            className="flex-1"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
