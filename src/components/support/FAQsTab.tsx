import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQsTab = ({ faqs }: { faqs: FAQ[] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search FAQs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md"
      />
      
      {filteredFAQs.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          No FAQs found matching your search.
        </p>
      ) : (
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <Card key={faq.id}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  <CardTitle className="text-base">{faq.question}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{faq.answer}</p>
                <div className="mt-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {faq.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};