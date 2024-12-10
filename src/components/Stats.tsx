const stats = [
  { number: "50K+", label: "Active Users" },
  { number: "$10M+", label: "Paid to Freelancers" },
  { number: "1000+", label: "Completed Projects" },
  { number: "95%", label: "Success Rate" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};