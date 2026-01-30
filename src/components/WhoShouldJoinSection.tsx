import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Sun, Brain, Star, Heart } from "lucide-react";

const items = [
  { label: "Reiki Practitioners", icon: Sparkles },
  { label: "Energy Healers", icon: Zap },
  { label: "Spiritual Coaches", icon: Sun },
  { label: "Therapists & Psychologists", icon: Brain },
  { label: "Tarot Card Readers", icon: Star },
  { label: "Upskill Your Healing Abilities", icon: Heart },
];

const WhoShouldJoinSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="bg-white py-10">
      <div className="container max-w-5xl mx-auto px-4">
        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35 }}
          className="text-center font-display text-2xl md:text-4xl font-bold text-[#73713E] mb-8"
        >
          Who Should Join This{" "}
          <span className="text-[#FFDB58]">Workshop?</span>
        </motion.h2>

        {/* CIRCULAR GRID */}
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="w-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.18,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    aspect-square
                    w-[110px] sm:w-[130px] md:w-[150px]
                    rounded-full
                    bg-[#73713E]
                    border border-[#E6D27A]
                    shadow-[0_10px_22px_rgba(115,113,62,0.18)]
                    flex flex-col items-center justify-center
                    text-center
                    px-3
                  "
                >
                  {/* Icon bubble */}
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-black/5 mb-2">
                    <Icon className="w-5 h-5 text-[#73713E]" />
                  </div>

                  {/* Label */}
                  <span className="text-[11px] sm:text-[12px] md:text-[13px] font-bold leading-snug text-white">
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoinSection;
