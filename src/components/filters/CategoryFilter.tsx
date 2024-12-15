import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryFilterProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const CategoryFilter = ({ value, onValueChange }: CategoryFilterProps) => {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "Design", label: "Design" },
    { value: "Development", label: "Development" },
    { value: "Security", label: "Security" },
    { value: "Management", label: "Management" },
    { value: "Marketing", label: "Marketing" },
    { value: "Data", label: "Data Science" },
    { value: "DevOps", label: "DevOps" },
    { value: "QA", label: "Quality Assurance" },
  ];

  return (
    <div className="space-y-2">
      <Label>Category</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full bg-white">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px] overflow-y-auto bg-white">
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value}
              className="cursor-pointer hover:bg-gray-100"
            >
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};