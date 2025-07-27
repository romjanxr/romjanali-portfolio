import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface FeaturesCardProps {
  features: string[];
}

export const FeaturesCard: React.FC<FeaturesCardProps> = ({ features }) => {
  return (
    <Card className="bg-[#242424] border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl text-white">Key Features</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-[#ff1744] mt-0.5 flex-shrink-0" />
              <span className="text-gray-400">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
