import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Heart,
  Sun,
  Zap,
  BadgeIndianRupee
} from "lucide-react";

/* ---------------- DATA ---------------- */

const ebooks = [
  { title: "Heal Your Mind & Body", icon: Heart },
  { title: "Daily Life Fixes (21 Easy Remedies)", icon: Zap },
  { title: "Love & Relationships Support", icon: Heart },
  { title: "Planet Influence Manual (Rahu • Shani • Surya)", icon: Sun },
  { title: "3-6-9 Tesla Formula (Manifest Faster)", icon: Sparkles },
];

const benefits = [
  "Daily healing routine set karne mein",
  "Emotional blocks release karne mein",
  "Relationship energy improve karne mein",
  "Protection & inner balance banane mein",
  "Clarity ko action mein convert karne mein",
];

/* ---------------- HELPERS ---------------- */

const getExistingParams = () => {
  if (typeof window === "undefined") return "";
  return window.location.search.replace("?", "");
};

/* ---------------- COMPONENT ---------------- */

const OtoUpgradePage = () => {
  const [choice, setChoice] = useState<"yes" | "no">("yes");

  const handleContinue = () => {
    if (!choice) return;

    const existingParams = getExistingParams();
    const paramSuffix = existingParams ? `?${existingParams}` : "";

    if (choice === "yes") {
      window.location.href =
        `https://pages.razorpay.com/pl_S6aH999KF1PO4L/view${paramSuffix}`;
    }

    if (choice === "no") {
      window.location.href = `/ty-fb${paramSuffix}`;
    }
  };

  return (
    <section className="min-h-screen bg-[#FFF8E1] px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-10">

      
        <div className="grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">

          {/* ================= LEFT : CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-xl"
          >
           

            <h1 className="text-3xl md:text-3xl font-extrabold text-[#3A2C10] mb-4">
              Ab Healing Ko Aur{" "}
              <span className="text-[#6B5A2E]">Fast</span> Kijiye  <span className="text-[#6B5A2E]">@ ₹ 99 </span>
            </h1>

            <p className="text-[#6A6A4E] text-md mb-6">
              Aapne Akashic session choose karke already ek powerful step liya
              hai Ab agar aap sirf feel nahi balki real life mein visible
              change chahte hain, toh yeh{" "}
              <strong>Healing Upgrade Bundle</strong> aapke liye perfect hai.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-[#2E4C8C]/15 px-4 py-2">
                <BadgeIndianRupee className="w-4 h-4 text-[#2E4C8C]" />
                <span className="text-sm text-[#3B3F4A] line-through">₹1,499</span>
                <span className="text-sm font-extrabold text-[#DBAB3B]">Today Only ₹99</span>
                <span className="text-xs text-[#3B3F4A]">(94% OFF)</span>
              </div>
            </div>


            {/* EBOOKS */}
           <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative flex justify-center mt-8"
>
  {/* NEON GLOW LAYER */}
  <motion.div
    aria-hidden
    animate={{
      opacity: [0.6, 1, 0.6],
      scale: [0.98, 1.05, 0.98],
    }}
    transition={{
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -inset-4
      rounded-3xl
      blur-2xl
      bg-[radial-gradient(circle_at_center,rgba(240, 220, 0, 0.65),transparent_70%)]
      z-0
      backdrop-blur-sm
    "
  />

  {/* IMAGE */}
  <motion.img
    src="/offer.jpeg"
    alt="Healing Upgrade Bundle"
    whileHover={{ scale: 1.03 }}
    className="
      relative z-10
      w-full max-w-md
      rounded-2xl
      shadow-2xl
    "
  />
</motion.div>

            {/* BENEFITS */}
            <div className="bg-[#3A2C10] rounded-2xl p-6 mt-2">
              <h3 className="text-xl font-bold text-[#EAD8B6] mb-4">
                Yeh Upgrade Kyun Lena Chahiye?
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-white"
                  >
                    <CheckCircle className="w-5 h-5 text-[#EAD8B6]" />
                    <p className="text-sm">{b}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-bold text-[#3A2C10]">
                Worth <span className="line-through text-[#6A6A4E]">₹5,000+</span> Get for ₹99
              </p>
              <p className="text-2xl font-extrabold text-[#6B5A2E]">
                Aaj Special Upgrade Price
              </p>
            </div>
          </motion.div>

          {/* ================= RIGHT : OTO BOX ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-2xl sticky top-6"
          >
            <h3 className="text-center text-lg font-bold text-[#3A2C10] mb-2">
              One Last Step
            </h3>

            <p className="text-center text-sm text-[#6A6A4E] mb-6">
              Please choose <strong>Yes</strong> or <strong>No</strong> to continue
            </p>

            <div className="space-y-4 mb-6">
              <label
                className={`flex gap-3 p-4 rounded-xl border cursor-pointer ${
                  choice === "yes"
                    ? "border-[#6B5A2E] bg-[#F6EBD7]"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  checked={choice === "yes"}
                  onChange={() => setChoice("yes")}
                  className="mt-1 accent-[#6B5A2E]"
                />
                <span className="font-semibold text-[#3A2C10] text-sm">
                  Hain Muje Upgrade Chaiye ( ₹99 One Time Offer)
                </span>
              </label>

              <label
                className={`flex gap-3 p-4 rounded-xl border cursor-pointer ${
                  choice === "no"
                    ? "border-[#6B5A2E] bg-[#F6EBD7]"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  checked={choice === "no"}
                  onChange={() => setChoice("no")}
                  className="mt-1 accent-[#6B5A2E]"
                />
                <span className="font-semibold text-[#3A2C10] text-sm">
                  Nahi, abhi skip karna hai
                </span>
              </label>
            </div>

            {/* CTA */}
            <motion.button
              disabled={!choice}
              onClick={handleContinue}
              whileHover={choice ? { scale: 1.06 } : undefined}
              whileTap={choice ? { scale: 0.96 } : undefined}
              animate={
                choice
                  ? {
                      boxShadow: [
                        "0 0 0 rgba(107,90,46,0)",
                        "0 0 34px rgba(107,90,46,0.9)",
                        "0 0 0 rgba(107,90,46,0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2.2, repeat: Infinity }}
              className={`w-full py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 ${
                choice
                  ? "bg-[#6B5A2E] text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Confirm & Continue
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-center text-xs text-[#6A6A4E] mt-4">
              This is a one-time offer. If skipped, it may not appear again.
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-[#6A6A4E] mt-3">
              <ShieldCheck className="w-4 h-4" />
              Secure checkout · WhatsApp / Email delivery
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OtoUpgradePage;
