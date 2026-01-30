import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, Ticket } from "lucide-react";

const TOTAL_TIME = 15 * 60; // 15 minutes

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const scrollToForm = () => {
    const el = document.getElementById("registration-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-[999] md:hidden"
        >
          {/* FULL BLEED BAR (NO GAP) */}
          <div
            className="
              w-full
              bg-[#FFDB58]
              shadow-[0_-10px_30px_rgba(0,0,0,0.25)]
              border-t-4 border-black
              rounded-t-2xl
            "
            style={{
              paddingBottom: "env(safe-area-inset-bottom)", // keeps iOS home-bar safe, still flush
            }}
          >
            <div className="flex items-center gap-4 px-4 py-4">
              {/* TEXT */}
              <div className="flex-1">
                <p className="font-extrabold text-black text-sm leading-tight">
                  Akashic Miracles Workshop
                </p>

                <div className="flex items-center gap-3 mt-1 text-xs text-black/80">
             <motion.div
  animate={
    timeLeft < 300
      ? { scale: [1, 1.06, 1] }
      : undefined
  }
  transition={{ duration: 1.2, repeat: Infinity }}
  className="
    flex items-center gap-2
    px-3 py-1.5
    rounded-full
    bg-black/10
    text-black
  "
>
  <Clock className="w-4 h-4" />
  <span className="font-extrabold tracking-wider text-[20px]">
    {minutes}:{seconds}
  </span>
  <span className="text-[10px] font-semibold opacity-80">
    LEFT
  </span>
</motion.div>


                  <div className="flex items-center gap-1">
                    <Ticket className="w-4 h-4" />
                    <span className="font-semibold">Limited Seats Only</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                onClick={scrollToForm}
                whileTap={{ scale: 0.96 }}
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 22px rgba(0,0,0,0.55)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  px-6 py-3
                  rounded-xl
                  bg-black
                  text-[#FFDB58]
                  font-extrabold text-sm
                  whitespace-nowrap
                "
              >
                Register ₹99
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
