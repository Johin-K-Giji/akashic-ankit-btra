import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, MessageCircle, Bell, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Step 1",
    heading: "Secure Your Spot",
    description: "Pay just ₹99 to reserve your seat in the live workshop.",
    icon: CreditCard,
  },
  {
    title: "Step 2",
    heading: "Join WhatsApp Group",
    description: "Get added to our exclusive WhatsApp group instantly.",
    icon: MessageCircle,
  },
  {
    title: "Step 3",
    heading: "Get Live Access",
    description: "Receive all session links, updates & reminders on WhatsApp.",
    icon: Bell,
  },
];

const JourneyStepsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    const el = document.getElementById("registration-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className="relative py-16 bg-[#FFDB58] overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#73713E]">
            Start Your Healing Journey
          </h2>
          <p className="mt-3 text-black max-w-xl mx-auto">
            A simple 3-step process to begin your transformation
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-[#73713E]/40" />

          <div className="space-y-10 pl-14">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* DOT */}
                <motion.div
                  animate={
                    isInView
                      ? {
                          boxShadow: [
                            "0 0 0 rgba(115,113,62,0)",
                            "0 0 18px rgba(115,113,62,0.45)",
                          ],
                        }
                      : {}
                  }
                  transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                  className="
                    absolute -left-14 top-1
                    w-9 h-9 rounded-full
                    bg-[#73713E]
                    flex items-center justify-center
                  "
                >
                  <step.icon className="w-4 h-4 text-white" />
                </motion.div>

                {/* CARD */}
                <div className="
                  bg-white rounded-2xl p-5
                  border border-[#73713E]/25
                  shadow-[0_10px_24px_rgba(0,0,0,0.08)]
                ">
                  <p className="text-xs uppercase tracking-wider text-[#73713E] mb-1 font-semibold">
                    {step.title}
                  </p>
                  <h3 className="text-lg font-bold text-[#73713E] mb-1">
                    {step.heading}
                  </h3>
                  <p className="text-[#73713E]/80 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(115,113,62,0)",
                "0 0 22px rgba(115,113,62,0.55)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="
              inline-flex items-center gap-3
              px-12 py-4 rounded-full
              bg-[#73713E]
              text-white font-extrabold text-lg
            "
          >
            Register Now
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneyStepsSection;
