import { Star } from "lucide-react";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={24}
          className={i < rating ? "fill-[#0129E3] text-[#0129E3]" : "text-[#0129E3]"}
        />
      ))}
    </div>
  );
};
export default Rating