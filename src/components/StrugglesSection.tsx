import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Square, CheckSquare } from "lucide-react";
import mentorImage from "@/assets/mentor-portrait.jpg";

const struggles = [
  "Unable to understand and solve your clients' core issues",
  "Getting stuck when your healing remedies don't work",
  "Earning a mere minimum income despite your efforts",
  "Seeing no growth and recognition in your healing career",
  "Looking for opportunities to improve your healing abilities",
  "Wanting to start a new career in healing that allows you to serve others passionately",
];

const StrugglesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("registration-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className="relative bg-[#FFDB58] py-10 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#7D784C] leading-tight">
            Are You Experiencing Any Of These{" "}
            <span className="block md:inline text-black">
              Struggles In Your Healing Career?
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* CHECKLIST */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_16px_32px_rgba(0,0,0,0.12)]">
              <p className="text-[#73713E] font-bold mb-4 text-base">
                Tick the boxes if this feels true for you
              </p>

              <div className="space-y-2">
                {struggles.map((struggle, index) => {
                  const checked = checkedItems.includes(index);

                  return (
                    <motion.div
                      key={index}
                      onClick={() => toggleCheck(index)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className={`
                        flex gap-3 items-start
                        px-4 py-3 rounded-xl
                        cursor-pointer
                        transition-all duration-300
                        ${
                          checked
                            ? "bg-[#73713E] text-white"
                            : "bg-[#FFF6C2] hover:bg-[#FFF0A8] text-[#73713E]"
                        }
                      `}
                    >
                      {/* ICON */}
                      <motion.div
                        initial={false}
                        animate={{
                          scale: checked ? 1.2 : 1,
                          rotate: checked ? 0 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mt-1"
                      >
                        {checked ? (
                          <CheckSquare className="w-5 h-5 text-white" />
                        ) : (
                          <Square className="w-5 h-5 text-[#73713E]/60" />
                        )}
                      </motion.div>

                      {/* TEXT */}
                      <p
                        className={`font-medium leading-relaxed ${
                          checked ? "text-white" : "text-[#73713E]"
                        }`}
                      >
                        {struggle}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[#73713E]/25 blur-xl" />
              <img
                src="./coach2.webp"
                alt="Dr. Geetanjali V Saxena"
                className="relative rounded-3xl w-full max-w-sm shadow-2xl"
              />
            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(115,113,62,0)",
                "0 0 22px rgba(115,113,62,0.55)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="
              px-12 py-3 rounded-full
              bg-[#73713E]
              text-white font-extrabold text-base
            "
          >
            Register Now
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default StrugglesSection;
