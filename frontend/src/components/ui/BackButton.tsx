import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ href, label }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <Link
        href={href}
        className="inline-flex items-center text-[#ff1744] hover:text-[#d50000] transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {label}
      </Link>
    </div>
  );
};
