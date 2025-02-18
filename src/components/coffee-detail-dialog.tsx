import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Coffee, Star } from "lucide-react";

interface CoffeeDetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  coffee: {
    name: string;
    description: string;
    roastLevel: string;
    origin: string;
    rating: number;
    price: string;
    tastingNotes: string[];
  };
}

export function CoffeeDetailDialog({
  isOpen,
  onClose,
  coffee,
}: CoffeeDetailDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-primary" />
            {coffee.name}
          </DialogTitle>
          <DialogDescription className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>{coffee.rating} / 5 Rating</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Typography.H4>About this Coffee</Typography.H4>
            <Typography.P>{coffee.description}</Typography.P>
          </div>

          <div className="grid gap-2">
            <div className="flex flex-wrap gap-2">
              <Typography.Small className="rounded-full bg-secondary px-2 py-1">
                {coffee.roastLevel}
              </Typography.Small>
              <Typography.Small className="rounded-full bg-secondary px-2 py-1">
                {coffee.origin}
              </Typography.Small>
              <Typography.Small className="rounded-full bg-secondary px-2 py-1">
                {coffee.price}
              </Typography.Small>
            </div>
          </div>

          <div className="grid gap-2">
            <Typography.H4>Tasting Notes</Typography.H4>
            <div className="flex flex-wrap gap-2">
              {coffee.tastingNotes.map((note) => (
                <Typography.Small
                  key={note}
                  className="rounded-full bg-accent/10 px-2 py-1 text-accent-foreground"
                >
                  {note}
                </Typography.Small>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full">
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}