import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { RecommendationForm } from "@/components/recommendation-form";
import { CoffeeCard } from "@/components/coffee-card";
import { CoffeeDetailDialog } from "@/components/coffee-detail-dialog";
import { Coffee } from "lucide-react";

// Mock data for demonstration
const mockRecommendations = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "A bright, clean coffee with complex floral and citrus notes, medium body and an elegant, tea-like finish.",
    roastLevel: "Light Roast",
    origin: "Ethiopia",
    rating: 4.8,
    price: "$18.99",
    tastingNotes: ["Floral", "Citrus", "Bergamot", "Honey"],
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with a smooth body, caramel sweetness, and subtle notes of toasted nuts and chocolate.",
    roastLevel: "Medium Roast",
    origin: "Colombia",
    rating: 4.6,
    price: "$16.99",
    tastingNotes: ["Caramel", "Nuts", "Chocolate", "Brown Sugar"],
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Full-bodied and smooth with complex earthy flavors, subtle spice notes, and a rich, syrupy finish.",
    roastLevel: "Dark Roast",
    origin: "Indonesia",
    rating: 4.7,
    price: "$17.99",
    tastingNotes: ["Earthy", "Spicy", "Cedar", "Dark Chocolate"],
  },
];

export function Home() {
  const [recommendations, setRecommendations] = useState<typeof mockRecommendations>([]);
  const [selectedCoffee, setSelectedCoffee] = useState<(typeof mockRecommendations)[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetRecommendations = async (values: any) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRecommendations(mockRecommendations);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-12 pt-6">
      <header className="mx-auto mb-12 flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-primary" />
          <Typography.H2>AI Coffee Recommender</Typography.H2>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-6xl">
        <section className="mb-16 text-center">
          <Typography.H1 className="mb-4">
            Find Your Perfect Coffee Match
          </Typography.H1>
          <Typography.Lead className="mx-auto max-w-2xl">
            Tell us your preferences, and our AI will recommend the perfect coffee
            for your taste buds. Get personalized suggestions based on your unique
            palate.
          </Typography.Lead>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-md">
            <RecommendationForm
              onSubmit={handleGetRecommendations}
              isLoading={isLoading}
            />
          </div>
        </section>

        {recommendations.length > 0 && (
          <section>
            <Typography.H3 className="mb-6 text-center">
              Your Personalized Recommendations
            </Typography.H3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((coffee) => (
                <CoffeeCard
                  key={coffee.id}
                  name={coffee.name}
                  description={coffee.description}
                  roastLevel={coffee.roastLevel}
                  origin={coffee.origin}
                  onSelect={() => setSelectedCoffee(coffee)}
                />
              ))}
            </div>
          </section>
        )}

        {selectedCoffee && (
          <CoffeeDetailDialog
            isOpen={!!selectedCoffee}
            onClose={() => setSelectedCoffee(null)}
            coffee={selectedCoffee}
          />
        )}
      </main>
    </div>
  );
}