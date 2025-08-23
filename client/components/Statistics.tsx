import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../data/stats";

export default function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="py-16 bg-atlas-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="space-y-10 md:space-y-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
            We Are Your Business Partner
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-atlas-blue/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-atlas-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-atlas-blue mb-2">
                  {inView ? (
                    <CountUp end={stat.number} duration={5} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </div>
                <div className="text-atlas-blue/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
