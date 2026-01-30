import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import akashicImage from "@/assets/akashic-records.jpg";

const AkashicRecordsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 bg-white"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(180,139,57,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(213,213,205,0.12),transparent_60%)]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.6, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Content Card */}
          <div className="relative rounded-3xl p-6 md:p-10 bg-[#5F5E2F]/85 backdrop-blur-xl border border-[#B48B39]/25 shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
            
            {/* Soft outer glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#B48B39]/25 via-transparent to-[#B48B39]/25 blur-xl opacity-60" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Gold border ring */}
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#B48B39] via-[#D5D5CD] to-[#B48B39] opacity-70 blur-lg" />
                
                {/* Inner border */}
                <div className="absolute -inset-1 rounded-2xl border border-[#B48B39]/50" />

                <img
                  src={akashicImage}
                  alt="Akashic Records – Cosmic Library"
                  className="relative rounded-2xl w-full h-auto shadow-2xl"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-[#D5D5CD]"
              >
                <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  <span className="block text-white">
                    What are
                  </span>
                  <span className="block text-[#FFDB58] drop-shadow-[0_0_18px_rgba(180,139,57,0.65)]">
                    Akashic Records?
                  </span>
                </h2>

                <div className="space-y-4 text-white leading-relaxed text-base md:text-lg">
                  <p>
                    The Akashic Records are a sacred cosmic library that holds the
                    complete story of every soul — past, present, and future.
                  </p>
                  <p>
                    For healers, these records reveal deep-rooted karmic patterns,
                    emotional blocks, and soul lessons. Accessing this wisdom allows
                    you to guide clients toward clarity, healing, and transformation
                    at the level of mind, body, and soul.
                  </p>
                </div>

                {/* Divider */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-1 w-20 bg-gradient-to-r from-[#B48B39] to-[#D5D5CD] rounded-full" />
                  <span className="text-sm italic text-[#D5D5CD]/80">
                    Unlock the wisdom of ages
                  </span>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AkashicRecordsSection;
