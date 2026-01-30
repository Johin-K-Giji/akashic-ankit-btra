import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

/* ---------------- COMPONENT ---------------- */

const ThankYouSkipOTO = () => {
  const handleContinue = () => {
    // 👉 Change this if you want to redirect elsewhere
    window.location.href = "/";
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF8E1] px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center"
      >
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#FFDB58]/30 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[#3A2C10]" />
          </div>
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl font-extrabold text-[#3A2C10] mb-3">
          You’re All Set 🙌
        </h1>

        <p className="text-[#6A6A4E] text-lg mb-6">
          Aapka decision confirm ho chuka hai.  
          Aapne OTO upgrade skip kiya hai — koi problem nahi 💛
        </p>

        {/* WHAT HAPPENS NEXT */}
        <div className="bg-[#FFF4C4] rounded-2xl p-5 text-left mb-6">
          <h3 className="font-bold text-[#3A2C10] mb-3">
            Ab kya hoga?
          </h3>

          <ul className="space-y-3 text-sm text-[#3A2C10]">
            <li className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-[#3A2C10]" />
              WhatsApp par aapko workshop details mil jaayengi
            </li>

            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#3A2C10]" />
              Email par confirmation + access details aayenge
            </li>

            <li className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#3A2C10]" />
              Aapki seat secure ho chuki hai
            </li>
          </ul>
        </div>

        {/* NOTE */}
        <p className="text-sm text-[#6A6A4E] mb-6">
          Agar future mein aapko advanced healing tools chahiye hon,
          toh aap unhe baad mein bhi explore kar sakte hain 🌱
        </p>

        {/* CTA */}
        <motion.button
          onClick={handleContinue}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            inline-flex items-center gap-2
            px-8 py-4 rounded-full
            bg-[#3A2C10]
            text-white font-bold text-lg
            shadow-lg
          "
        >
          Join Whatsaap Community
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* FOOTER TRUST */}
        <p className="text-xs text-[#6A6A4E] mt-6">
          Thank you for trusting us ✨  
          We look forward to seeing you in the session.
        </p>
      </motion.div>
    </section>
  );
};

export default ThankYouSkipOTO;
