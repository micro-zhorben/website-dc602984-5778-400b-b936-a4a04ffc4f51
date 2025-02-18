import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  onSelect: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  origin,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          <Coffee className="h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Typography.Small className="rounded-full bg-secondary px-2 py-1">
            {roastLevel}
          </Typography.Small>
          <Typography.Small className="rounded-full bg-secondary px-2 py-1">
            {origin}
          </Typography.Small>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P className="line-clamp-2 text-muted-foreground">
          {description}
        </Typography.P>
        <Button
          onClick={onSelect}
          className="w-full"
          variant="outline"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}