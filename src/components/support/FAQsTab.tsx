import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQsTab = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
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
  );
};