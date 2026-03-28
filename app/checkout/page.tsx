"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, CreditCard, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useCart } from "@/lib/cart-context";

type CheckoutStep = "shipping" | "payment" | "confirmation";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, co2Saved, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("shipping");
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingData, setShippingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Germany",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  if (items.length === 0 && step !== "confirmation") {
    router.push("/cart");
    return null;
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      setStep("confirmation");
    }, 2000);
  };

  const steps = [
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "confirmation", label: "Confirmation", icon: Check },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Step Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {steps.map((s, index) => (
                <div key={s.id} className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                      step === s.id
                        ? "border-primary bg-primary text-primary-foreground"
                        : steps.findIndex((st) => st.id === step) > index
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <s.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-16 sm:w-24 ${
                        steps.findIndex((st) => st.id === step) > index
                          ? "bg-primary"
                          : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-12 sm:gap-20">
              {steps.map((s) => (
                <span
                  key={s.id}
                  className={`text-sm ${
                    step === s.id ? "font-medium text-primary" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          {/* Shipping Step */}
          {step === "shipping" && (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleShippingSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            required
                            value={shippingData.firstName}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, firstName: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            required
                            value={shippingData.lastName}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, lastName: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={shippingData.email}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, email: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={shippingData.phone}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          required
                          value={shippingData.address}
                          onChange={(e) =>
                            setShippingData({ ...shippingData, address: e.target.value })
                          }
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            required
                            value={shippingData.city}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, city: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input
                            id="postalCode"
                            required
                            value={shippingData.postalCode}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, postalCode: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            value={shippingData.country}
                            onChange={(e) =>
                              setShippingData({ ...shippingData, country: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button type="button" variant="outline" asChild>
                          <Link href="/cart">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Cart
                          </Link>
                        </Button>
                        <Button type="submit" className="flex-1">
                          Continue to Payment
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <OrderSummary items={items} totalPrice={totalPrice} co2Saved={co2Saved} />
            </div>
          )}

          {/* Payment Step */}
          {step === "payment" && (
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-3 rounded-lg border border-border p-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <span className="font-medium">Credit/Debit Card</span>
                            <p className="text-sm text-muted-foreground">
                              Pay securely with your card
                            </p>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border border-border p-4">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                            <span className="font-medium">PayPal</span>
                            <p className="text-sm text-muted-foreground">
                              Pay with your PayPal account
                            </p>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 rounded-lg border border-border p-4">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank" className="flex-1 cursor-pointer">
                            <span className="font-medium">Bank Transfer</span>
                            <p className="text-sm text-muted-foreground">
                              Direct bank transfer (SEPA)
                            </p>
                          </Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "card" && (
                        <div className="space-y-4 rounded-lg border border-border p-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="John Doe" />
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep("shipping")}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>
                        <Button type="submit" className="flex-1" disabled={isProcessing}>
                          {isProcessing ? "Processing..." : `Pay €${totalPrice.toFixed(2)}`}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <OrderSummary items={items} totalPrice={totalPrice} co2Saved={co2Saved} />
            </div>
          )}

          {/* Confirmation Step */}
          {step === "confirmation" && (
            <Card className="mx-auto max-w-lg text-center">
              <CardContent className="py-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-2xl font-medium text-foreground">
                  Order Confirmed!
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Thank you for your order. You will receive a confirmation email shortly.
                </p>
                <div className="mt-6 rounded-lg bg-primary/10 p-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Leaf className="h-5 w-5" />
                    <span className="font-medium">You&apos;re making a difference!</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your purchase supports renewable energy farming and helps reduce carbon
                    emissions.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button asChild>
                    <Link href="/shop">Continue Shopping</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function OrderSummary({
  items,
  totalPrice,
  co2Saved,
}: {
  items: { product: { id: string; name: string; image: string; price_eur_per_kg: number }; quantity: number }[];
  totalPrice: number;
  co2Saved: number;
}) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-lg">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.product.name}</p>
                <p className="text-xs text-muted-foreground">{item.quantity} kg</p>
              </div>
              <p className="text-sm font-medium">
                &euro;{(item.product.price_eur_per_kg * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>&euro;{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-primary">Free</span>
          </div>
          <div className="mt-2 flex justify-between font-semibold">
            <span>Total</span>
            <span>&euro;{totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <p className="text-xs text-muted-foreground">
            <Leaf className="mr-1 inline h-3 w-3 text-primary" />
            Saving {co2Saved.toFixed(2)} kg CO2 with this order
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
