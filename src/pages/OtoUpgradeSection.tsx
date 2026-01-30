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
  // ✅ NOTHING selected initially
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);

  const handleContinue = () => {
    if (!choice) return;

    const existingParams = getExistingParams();
    const paramSuffix = existingParams ? `?${existingParams}` : "";

    if (choice === "yes") {
      // ✅ OTO YES → Razorpay link with params
      window.location.href =
        `https://pages.razorpay.com/pl_S6aH999KF1PO4L/view${paramSuffix}`;
    }

    if (choice === "no") {
      // ✅ OTO SKIP → change this if needed
      window.location.href = `/ty-fb${paramSuffix}`;
    }
  };

  return (
    <section className="min-h-screen bg-[#FFF8E1] px-4 py-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">

        {/* ================= LEFT : CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFDB58]/30 text-[#3A2C10] font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            One Time Upgrade (Shown Only Once)
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3A2C10] mb-4">
            Ab Healing Ko Aur{" "}
            <span className="text-[#FFDB58]">Fast</span> Kijiye
          </h1>

          <p className="text-[#6A6A4E] text-lg mb-6">
            Aapne Akashic session choose karke already ek powerful step liya
            hai 🙌 Ab agar aap sirf feel nahi balki real life mein visible
            change chahte hain, toh yeh{" "}
            <strong>Healing Upgrade Bundle</strong> aapke liye perfect hai.
          </p>

          {/* EBOOKS */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {ebooks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFF4C4] border border-[#FFDB58]/40"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFDB58] flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#3A2C10]" />
                </div>
                <p className="font-semibold text-[#3A2C10]">{item.title}</p>
              </motion.div>
            ))}
          </div>

          {/* BENEFITS */}
          <div className="bg-[#3A2C10] rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[#FFDB58] mb-4">
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
                  <CheckCircle className="w-5 h-5 text-[#FFDB58]" />
                  <p className="text-sm">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg font-bold text-[#3A2C10]">
              Worth <span className="line-through text-[#6A6A4E]">₹5,000+</span>
            </p>
            <p className="text-2xl font-extrabold text-[#FFDB58]">
              Aaj Special Upgrade Price 💛
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

          {/* OPTIONS */}
          <div className="space-y-4 mb-6">
            <label
              className={`flex gap-3 p-4 rounded-xl border cursor-pointer ${
                choice === "yes"
                  ? "border-[#FFDB58] bg-[#FFF4C4]"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                checked={choice === "yes"}
                onChange={() => setChoice("yes")}
                className="mt-1 accent-[#FFDB58]"
              />
              <span className="font-semibold text-[#3A2C10] text-sm">
                Haan, main upgrade karna chahta / chahti hoon
              </span>
            </label>

            <label
              className={`flex gap-3 p-4 rounded-xl border cursor-pointer ${
                choice === "no"
                  ? "border-[#FFDB58] bg-[#FFF4C4]"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                checked={choice === "no"}
                onChange={() => setChoice("no")}
                className="mt-1 accent-[#FFDB58]"
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
            whileHover={choice ? { scale: 1.04 } : undefined}
            whileTap={choice ? { scale: 0.96 } : undefined}
            className={`w-full py-4 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-2 transition-all ${
              choice
                ? "bg-[#FFDB58] text-[#3A2C10]"
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
    </section>
  );
};

export default OtoUpgradePage;
