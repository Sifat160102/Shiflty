export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price_eur_per_kg: number;
  unit: string;
  farm: string;
  farm_id: string;
  region: string;
  energy: "Solar" | "Wind" | "Hydro";
  organic: boolean;
  certified: boolean;
  co2e_green: number;
  co2e_conv: number;
  stock_kg: number;
  image: string;
  badges: string[];
}

export interface Farm {
  id: string;
  name: string;
  region: string;
  energy: "Solar" | "Wind" | "Hydro";
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "shf-001",
    name: "Heirloom Tomatoes",
    category: "Vegetables",
    description: "Juicy tomatoes grown in solar-powered greenhouses.",
    price_eur_per_kg: 4.50,
    unit: "kg",
    farm: "Solaris Greens",
    farm_id: "farm-01",
    region: "Alentejo, Portugal",
    energy: "Solar",
    organic: true,
    certified: true,
    co2e_green: 0.12,
    co2e_conv: 0.85,
    stock_kg: 120,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
    badges: ["100% Green", "Organic", "Bestseller"]
  },
  {
    id: "shf-002",
    name: "Crisp Romaine Lettuce",
    category: "Leafy Greens",
    description: "Crunchy lettuce irrigated via wind turbine power.",
    price_eur_per_kg: 2.20,
    unit: "kg",
    farm: "Gusty Valley Farm",
    farm_id: "farm-02",
    region: "Lower Saxony, Germany",
    energy: "Wind",
    organic: false,
    certified: true,
    co2e_green: 0.08,
    co2e_conv: 0.45,
    stock_kg: 85,
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop",
    badges: ["Freshness Guarantee", "Fair Pay"]
  },
  {
    id: "shf-003",
    name: "Baby Carrots",
    category: "Root Vegetables",
    description: "Sweet carrots processed with hydroelectric energy.",
    price_eur_per_kg: 3.10,
    unit: "kg",
    farm: "RiverFlow Organics",
    farm_id: "farm-03",
    region: "Styria, Austria",
    energy: "Hydro",
    organic: true,
    certified: true,
    co2e_green: 0.05,
    co2e_conv: 0.60,
    stock_kg: 200,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
    badges: ["Lighter on the Planet", "Organic"]
  },
  {
    id: "shf-004",
    name: "Fresh Spinach",
    category: "Leafy Greens",
    description: "Nutrient-rich spinach from solar-powered vertical farms.",
    price_eur_per_kg: 3.80,
    unit: "kg",
    farm: "Solaris Greens",
    farm_id: "farm-01",
    region: "Alentejo, Portugal",
    energy: "Solar",
    organic: true,
    certified: true,
    co2e_green: 0.10,
    co2e_conv: 0.55,
    stock_kg: 95,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
    badges: ["100% Green", "Organic"]
  },
  {
    id: "shf-005",
    name: "Bell Peppers Mix",
    category: "Vegetables",
    description: "Colorful peppers grown with wind energy.",
    price_eur_per_kg: 5.20,
    unit: "kg",
    farm: "Gusty Valley Farm",
    farm_id: "farm-02",
    region: "Lower Saxony, Germany",
    energy: "Wind",
    organic: false,
    certified: true,
    co2e_green: 0.15,
    co2e_conv: 0.90,
    stock_kg: 150,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
    badges: ["Fair Pay", "Certified Green"]
  },
  {
    id: "shf-006",
    name: "Organic Potatoes",
    category: "Root Vegetables",
    description: "Hearty potatoes from hydro-powered sustainable farms.",
    price_eur_per_kg: 2.50,
    unit: "kg",
    farm: "RiverFlow Organics",
    farm_id: "farm-03",
    region: "Styria, Austria",
    energy: "Hydro",
    organic: true,
    certified: true,
    co2e_green: 0.08,
    co2e_conv: 0.50,
    stock_kg: 300,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82ber4d?w=400&h=300&fit=crop",
    badges: ["Organic", "Lighter on the Planet"]
  },
  {
    id: "shf-007",
    name: "Zucchini",
    category: "Vegetables",
    description: "Fresh zucchini powered by solar energy.",
    price_eur_per_kg: 3.40,
    unit: "kg",
    farm: "Solaris Greens",
    farm_id: "farm-01",
    region: "Alentejo, Portugal",
    energy: "Solar",
    organic: true,
    certified: true,
    co2e_green: 0.09,
    co2e_conv: 0.65,
    stock_kg: 110,
    image: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=400&h=300&fit=crop",
    badges: ["100% Green", "Bestseller"]
  },
  {
    id: "shf-008",
    name: "Red Onions",
    category: "Root Vegetables",
    description: "Flavorful onions grown with wind power.",
    price_eur_per_kg: 1.90,
    unit: "kg",
    farm: "Gusty Valley Farm",
    farm_id: "farm-02",
    region: "Lower Saxony, Germany",
    energy: "Wind",
    organic: false,
    certified: true,
    co2e_green: 0.06,
    co2e_conv: 0.40,
    stock_kg: 180,
    image: "https://images.unsplash.com/photo-1618512496248-a07e5a3e6bc8?w=400&h=300&fit=crop",
    badges: ["Fair Pay"]
  }
];

export const farms: Farm[] = [
  {
    id: "farm-01",
    name: "Solaris Greens",
    region: "Alentejo, Portugal",
    energy: "Solar",
    description: "A pioneering solar-powered greenhouse complex in sunny Portugal, producing premium vegetables year-round using 100% photovoltaic energy.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop"
  },
  {
    id: "farm-02",
    name: "Gusty Valley Farm",
    region: "Lower Saxony, Germany",
    energy: "Wind",
    description: "Located in the windy plains of northern Germany, this farm harnesses wind turbines to power all irrigation and processing equipment.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&h=400&fit=crop"
  },
  {
    id: "farm-03",
    name: "RiverFlow Organics",
    region: "Styria, Austria",
    energy: "Hydro",
    description: "Nestled in the Austrian Alps, this farm uses nearby river hydroelectric power for all operations, producing organic vegetables in harmony with nature.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
  }
];

export const categories = ["All", "Vegetables", "Leafy Greens", "Root Vegetables"];

export const energyTypes = ["All", "Solar", "Wind", "Hydro"];
