import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const insights = [
  { number: "01", text: "Unlock Akashic Wisdom to Transform Your Healing Journey" },
  { number: "02", text: "Understand Clients' Karmic Patterns to Resolve Life's Challenges" },
  { number: "03", text: "Master Unique Skills to Heal Mind, Body, and Soul" },
  { number: "04", text: "Empower Clients to Manifest Their Future by Understanding Their Past" },
  { number: "05", text: "Reveal the Hidden Secrets of Your Clients' Past, Present, and Future Lifetimes" },
  { number: "06", text: "Help Clients Release Emotional Baggage and Heal Deeply" },
  { number: "07", text: "Guide Clients to Attract Miracles Through Regression Techniques" },
  { number: "08", text: "Achieve Recognition and Increase Income with Powerful Healing Offerings" },
];

const KeyInsightsGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const scrollToForm = () => {
    const el = document.getElementById("registration-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={ref} className="bg-white py-14">
      <div className="container max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#73713E]">
            8 Key Insights From The{" "}
            <span className="text-[#FFDB58]">
              Akashic Miracles Masterclass
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          animate={
            isInView
              ? {
                  boxShadow: "0 0 30px rgba(255,219,88,0.25)",
                }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 border border-[#73713E]/20"
        >
          {insights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`
                relative p-6 md:p-10
                border-[#73713E]/20
                ${index < 6 ? "border-b" : ""}
                ${index % 2 === 0 ? "border-r" : ""}
                overflow-hidden
              `}
            >
              {/* NUMBER */}
              <div className="absolute top-4 left-4 w-[90px] h-[90px] pointer-events-none">
                <div
                  className="
                    absolute top-0 left-0 w-full h-1/2
                    text-[64px] font-extrabold leading-none
                    text-[#73713E]/35
                    overflow-hidden
                  "
                >
                  {item.number}
                </div>
              </div>

              {/* TEXT */}
              <p className="relative z-10 mt-10 text-sm md:text-lg font-bold text-black leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(115,113,62,0)",
                "0 0 24px rgba(115,113,62,0.55)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="
              px-12 py-4 rounded-full
              bg-[#73713E]
              text-white font-extrabold text-lg
            "
          >
            Register Now
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default KeyInsightsGrid;
