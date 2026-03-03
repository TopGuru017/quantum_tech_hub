import { Globe, Brain, Cloud, Shield, TrendingUp, Layers } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications built with the latest frameworks. We deliver scalable, performant digital products tailored to your business needs.",
    color: "text-teal-400",
    border: "border-teal-400/30 hover:border-teal-400",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Intelligent automation and machine learning tools that transform your operations. From predictive analytics to NLP, we make AI work for your business.",
    color: "text-purple-400",
    border: "border-purple-400/30 hover:border-purple-400",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Secure and scalable cloud infrastructure. We architect, migrate, and manage your cloud environment for maximum efficiency and resilience.",
    color: "text-blue-400",
    border: "border-blue-400/30 hover:border-blue-400",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "End-to-end security solutions to protect your digital assets. Risk assessments, compliance frameworks, and real-time threat monitoring.",
    color: "text-orange-400",
    border: "border-orange-400/30 hover:border-orange-400",
  },
  {
    icon: TrendingUp,
    title: "Digital Strategy",
    description:
      "Data-driven digital transformation roadmaps. We align technology investments with your business goals for measurable, sustainable growth.",
    color: "text-green-400",
    border: "border-green-400/30 hover:border-green-400",
  },
  {
    icon: Layers,
    title: "Systems Integration",
    description:
      "Seamlessly connect disparate systems and platforms. Our integration experts ensure your tech stack works as a unified, efficient whole.",
    color: "text-cyan-400",
    border: "border-cyan-400/30 hover:border-cyan-400",
  },
];

export function Services() {
  return (
    <section id="digital" className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Digital Fusion
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver end-to-end digital transformation services, combining
            deep industry knowledge with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`border ${service.border} rounded-lg p-6 bg-black/40 transition-all duration-300 hover:bg-black/60 group cursor-pointer`}
              >
                <div
                  className={`${service.color} mb-4 transition-transform duration-300 group-hover:scale-110 inline-block`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className={`mt-4 ${service.color} text-sm font-medium`}>
                  Learn more →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
