
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function NewProjectCardSkeleton() {
  return (
    <Card className="bg-[#242424] border-gray-700 transition-all duration-300 group overflow-hidden flex flex-col h-full">
      <div className="w-full h-[200px] overflow-hidden p-2">
        <Skeleton className="w-full h-full" />
      </div>

      <CardHeader>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-12" />
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-6 pt-0">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-10" />
      </CardFooter>
    </Card>
  );
}
