import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const testimonials = [
  {
    id: "vQFmfPBCPeo",
    name: "Workshop Participant",
    summary:
      "Gained clarity on life patterns and emotional blocks, bringing peace and confidence in healing work.",
  },
  {
    id: "hw4lQ31-fmo",
    name: "Healing Practitioner",
    summary:
      "Enhanced confidence with clients and developed a deeper understanding of Akashic guidance.",
  },
  {
    id: "bSErgFD_hxY",
    name: "Student Healer",
    summary:
      "Experienced emotional release and spiritual growth through Akashic insights.",
  },
  {
    id: "lSvDFITBz5s",
    name: "Workshop Attendee",
    summary:
      "Found clarity in karmic patterns and direction in personal and professional life.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const scrollToForm = () => {
    document
      .getElementById("registration-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="bg-white py-10 overflow-hidden">
      <div className="container max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#73713E]">
            What My Students Say About the Workshop
          </h2>
        </motion.div>

        {/* HORIZONTAL SCROLL ROW */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4">
          {testimonials.map((t) => {
            const isSoundOn = activeSound === t.id;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35 }}
                className="min-w-[240px] md:min-w-[280px] snap-start"
              >
                <div className="rounded-xl overflow-hidden border border-[#73713E]/20 shadow-md bg-white">

                  {/* VIDEO – reduced height (16:9 instead of tall reels) */}
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${t.id}?autoplay=1&mute=${
                        isSoundOn ? 0 : 1
                      }&loop=1&playlist=${t.id}&controls=0&modestbranding=1`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    />

                    {/* SOUND TOGGLE */}
                    <button
                      onClick={() =>
                        setActiveSound(isSoundOn ? null : t.id)
                      }
                      className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full"
                    >
                      {isSoundOn ? (
                        <Volume2 className="w-4 h-4 text-white" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-white" />
                      )}
                    </button>
                  </div>

                  {/* TEXT */}
                  <div className="p-3">
                    <p className="text-sm font-bold text-[#73713E] mb-1">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {t.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-6"
        >
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-[#73713E] text-white font-extrabold text-base shadow-lg"
          >
            Become an Expert Healer
            <span className="block text-xs font-normal opacity-80">
              Register now for just ₹99
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
