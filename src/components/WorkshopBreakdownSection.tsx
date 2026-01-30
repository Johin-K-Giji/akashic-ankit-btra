import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const days = [
  {
    day: "DAY 1",
    title: "Discover the Power of Akashic Records",
    points: [
      "Understand principles and key elements of Akashic Records",
      "Explore healing and personal development benefits",
      "Reclaim past gifts and soul power",
      "Differentiate soul purpose vs life purpose",
      "Use Akashic Records for soul discovery",
    ],
  },
  {
    day: "DAY 2",
    title: "Secrets to Gain Akashic Wisdom",
    points: [
      "Access Akashic Records for clarity and growth",
      "Identify and resolve karmic patterns",
      "Overcome ego and illusions",
      "Step into your role as an Akashic expert",
    ],
  },
  {
    day: "DAY 3",
    title: "Transforming Your Life with Akashic Insights",
    points: [
      "Address financial challenges",
      "Understand karmic health & weight patterns",
      "Heal recurring relationship cycles",
      "Build a healthier relationship with money",
    ],
  },
];

const WorkshopBreakdownSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const scrollToForm = () => {
    document
      .getElementById("registration-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative bg-[#FFDB58] py-10 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto relative">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
            What You Will Get From the{" "}
            <span className="text-black">3-Day Workshop</span>
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#73713E]/40 -translate-x-1/2 hidden md:block" />

          <div className="space-y-6">
            {days.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-[#73713E]" />
                </div>

                {/* CARD */}
                <div
                  className={`
                    w-full md:w-[48%]
                    bg-white rounded-2xl
                    p-4 md:p-5
                    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                    border border-[#73713E]/20
                  `}
                >
                  {/* DAY BADGE */}
                  <span className="inline-block mb-2 px-3 py-1 rounded-full bg-[#73713E] text-white text-xs font-bold">
                    {day.day}
                  </span>

                  <h3 className="font-display text-lg md:text-xl font-bold text-[#73713E] mb-3">
                    {day.title}
                  </h3>

                  <ul className="space-y-2">
                    {day.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#73713E]"
                      >
                        <span className="mt-1 w-2 h-2 rounded-full bg-[#73713E] flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-10"
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-12 py-4
              rounded-full
              bg-[#73713E]
              text-white
              font-extrabold
              text-lg
              shadow-lg
            "
          >
            Become a Healing Expert
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkshopBreakdownSection;
