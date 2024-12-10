import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Blockchain Developer",
    image: "/placeholder.svg",
    content: "CryptoLance has transformed how I find blockchain projects. The smart contract payments give me peace of mind."
  },
  {
    name: "Sarah Chen",
    role: "Project Manager",
    image: "/placeholder.svg",
    content: "As a client, finding qualified crypto developers has never been easier. The platform is intuitive and secure."
  },
  {
    name: "Michael Roberts",
    role: "Smart Contract Engineer",
    image: "/placeholder.svg",
    content: "The quality of projects and clients on CryptoLance is outstanding. I've found consistent work here."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10">
                  <img src={testimonial.image} alt={testimonial.name} />
                </Avatar>
                <div className="ml-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};