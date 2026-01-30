import React, { useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import {
  Calendar,
  Clock,
  Globe,
  Award,
  Users,
  ArrowRight,
  ShieldCheck,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
  "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Delhi","Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  state: string;
};

const getUTMParams = () => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
  };
};

/* ---------------- FIELD ---------------- */

const Field = ({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  inputMode,
}: {
  label: string;
  icon: any;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) => (
  <div>
    <label className="block text-left text-sm font-semibold text-[#243A8F]">
      {label}
    </label>
    <div className="relative mt-1">
      <Icon className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
      <input
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full pl-10 pr-4 py-3 rounded-xl border bg-white
          text-black placeholder:text-gray-400
          focus:ring-2 focus:ring-[#FFDB58] outline-none
        "
        placeholder={placeholder}
        autoComplete="on"
      />
    </div>
    {error && <p className="text-left text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

/* ---------------- FORM (outside HeroSection to avoid remount on timer) ---------------- */

const RegistrationForm = React.memo(function RegistrationForm({
  minutes,
  seconds,
  formData,
  setFormData,
  isSubmitting,
  onSubmit,
}: {
  minutes: string;
  seconds: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isSubmitting: boolean;
  onSubmit: () => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [stateQuery, setStateQuery] = useState(formData.state || "");
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  const filteredStates = useMemo(() => {
    const q = (stateQuery || "").toLowerCase();
    return INDIAN_STATES.filter((s) => s.toLowerCase().includes(q));
  }, [stateQuery]);

  useEffect(() => {
    setStateQuery(formData.state || "");
  }, [formData.state]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (formData.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = "Enter a valid email";
    if (!/^\d{10}$/.test(formData.phone)) e.phone = "Enter a 10 digit phone number";
    if (!formData.state) e.state = "Select your state";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit();
  };

  return (
    <form
      id="registration-form"
      onSubmit={handleSubmit}
      className="bg-[#FFF9EF] rounded-3xl p-6 space-y-4 shadow-xl border border-black/5"
    >
      <div className="text-center">
        <span className="inline-block px-4 py-1 text-xs font-semibold rounded-full border bg-white">
          Quick Registration
        </span>
        <h3 className="text-2xl font-extrabold mt-3 text-[#243A8F]">
          Register Now & Join
        </h3>
        <div className="inline-block mt-2 px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
          Offer Expires In {minutes}:{seconds}
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Fill details to join 
        </p>
      </div>

      <Field
        label="Full Name"
        icon={User}
        value={formData.name}
        error={errors.name}
        placeholder="Enter your name"
        onChange={(v) => setFormData((p) => ({ ...p, name: v }))}
      />

      <Field
        label="Email"
        icon={Mail}
        type="email"
        inputMode="email"
        value={formData.email}
        error={errors.email}
        placeholder="Enter your email"
        onChange={(v) => setFormData((p) => ({ ...p, email: v }))}
      />

      <Field
        label="Phone Number"
        icon={Phone}
        inputMode="numeric"
        value={formData.phone}
        error={errors.phone}
        placeholder="Enter phone (10 digits)"
        onChange={(v) => setFormData((p) => ({ ...p, phone: v.replace(/\D/g, "") }))}
      />

      {/* STATE */}
      <div className="relative">
        <label className="block text-left text-sm font-semibold text-[#243A8F]">
          State
        </label>

        <div className="relative mt-1">
          <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            value={stateQuery}
            onChange={(e) => {
              const v = e.target.value;
              setStateQuery(v);
              setFormData((p) => ({ ...p, state: v }));
              setShowStateDropdown(true);
            }}
            onFocus={() => setShowStateDropdown(true)}
            onBlur={() => setTimeout(() => setShowStateDropdown(false), 150)}
            className="
              w-full pl-10 pr-4 py-3 rounded-xl border bg-white
              text-black placeholder:text-gray-400
              focus:ring-2 focus:ring-[#FFDB58] outline-none
            "
            placeholder="Select your state"
            autoComplete="off"
          />
        </div>

        {errors.state && (
          <p className="text-left text-xs text-red-600 mt-1">{errors.state}</p>
        )}

        {showStateDropdown && (
          <ul className="absolute left-0 right-0 z-50 mt-1 max-h-40 overflow-auto rounded-xl bg-white shadow-xl border">
            {filteredStates.length === 0 ? (
              <li className="px-4 py-2 text-sm text-gray-500">No matches</li>
            ) : (
              filteredStates.map((state) => (
                <li
                  key={state}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    setStateQuery(state);
                    setFormData((p) => ({ ...p, state }));
                    setShowStateDropdown(false);
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-[#EFE7D1]"
                >
                  {state}
                </li>
              ))
            )}
          </ul>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 rounded-2xl bg-[#73713E] text-[#fff] font-extrabold text-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        Register Now <ArrowRight className="inline w-5 h-5 ml-1" />
      </motion.button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
        <ShieldCheck className="w-4 h-4" />
        Secure checkout · Instant WhatsApp access
      </div>
    </form>
  );
});

/* ---------------- WATER-LIKE BACKGROUND (finger reactive) ---------------- */

function WaterBackground({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  // map pointer position (0..1) -> small parallax shifts
  const blob1X = useTransform(x, [0, 1], [-30, 30]);
  const blob1Y = useTransform(y, [0, 1], [-20, 20]);

  const blob2X = useTransform(x, [0, 1], [40, -40]);
  const blob2Y = useTransform(y, [0, 1], [25, -25]);

  const sheenX = useTransform(x, [0, 1], [-8, 8]);
  const sheenY = useTransform(y, [0, 1], [-6, 6]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#15150F] via-[#242312] to-[#15150F]" />

      {/* soft animated blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full blur-[70px] opacity-45"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(255,219,88,0.55), rgba(255,219,88,0) 60%)",
          x: blob1X,
          y: blob1Y,
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-28 -right-28 w-[420px] h-[420px] rounded-full blur-[90px] opacity-35"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(120,155,255,0.45), rgba(120,155,255,0) 65%)",
          x: blob2X,
          y: blob2Y,
        }}
        animate={{ scale: [1, 1.06, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* watery sheen layer that follows finger a bit */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          x: sheenX,
          y: sheenY,
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(255,255,255,0.10), rgba(255,255,255,0) 55%), radial-gradient(700px 420px at 80% 30%, rgba(255,219,88,0.10), rgba(255,219,88,0) 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* subtle “water ripple” texture (very light) */}
      <motion.div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0 1px, transparent 2px), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.25) 0 1px, transparent 2px)",
          backgroundSize: "120px 120px",
          mixBlendMode: "overlay",
        }}
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

/* ---------------- HERO SECTION ---------------- */

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // timer (re-renders every second, but form does NOT remount)
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  // finger reactive background
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.5 });

  const setFromPoint = (clientX: number, clientY: number, el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const nx = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    const ny = Math.min(1, Math.max(0, (clientY - r.top) / r.height));
    rawX.set(nx);
    rawY.set(ny);
  };

  const submit = () => {
    setIsSubmitting(true);

   

      const otoUrl = "/oto-fb";

    const params = new URLSearchParams({
      init_booking: "true",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      ...getUTMParams(),
    });

    window.location.assign(`${otoUrl}?${params.toString()}`);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

  return (
    <section
      className="relative min-h-screen w-full isolate"
      onPointerMove={(e) => {
        if (e.currentTarget instanceof HTMLElement) {
          setFromPoint(e.clientX, e.clientY, e.currentTarget);
        }
      }}
      onTouchMove={(e) => {
        const t = e.touches?.[0];
        if (!t) return;
        if (e.currentTarget instanceof HTMLElement) {
          setFromPoint(t.clientX, t.clientY, e.currentTarget);
        }
      }}
    >
      {/* Water-like animated background */}
      <WaterBackground x={x} y={y} />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start lg:items-center">
          {/* LEFT */}
          <div className="text-center text-[#D5D5CD]">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-white text-4xl md:text-5xl lg:text-[64px] font-extrabold mb-6"
            >
              Stop Overthinking
              <span className="block text-[#FFDB58]">Start Healing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-lg lg:text-xl max-w-xl mx-auto mb-10"
            >
              Learn how to heal emotional pain, trauma, anxiety & stuck energy using the powerful guidance of the Akashic Records.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
              {[
                { icon: Calendar, label: "Duration", value: "3 Days Live" },
                { icon: Calendar, label: "Dates", value: "20–22 Jan 2026" },
                { icon: Clock, label: "Time", value: "8:30 PM IST" },
                { icon: Globe, label: "Language", value: "English" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#5F5E2F]/70 border border-[#FFDB58]/25 backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-[#FFDB58]" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wide">{label}</p>
                    <p className="font-bold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE FORM */}
            <div className="block lg:hidden">
              <RegistrationForm
                minutes={minutes}
                seconds={seconds}
                formData={formData}
                setFormData={setFormData}
                isSubmitting={isSubmitting}
                onSubmit={submit}
              />
            </div>

            <div className="flex gap-6 justify-center mt-10">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFDB58]" />
                <strong>15+</strong> Years Experience
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FFDB58]" />
                <strong>6000+</strong> Clients
              </div>
            </div>
          </div>

          {/* DESKTOP FORM */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[430px]">
              <RegistrationForm
                minutes={minutes}
                seconds={seconds}
                formData={formData}
                setFormData={setFormData}
                isSubmitting={isSubmitting}
                onSubmit={submit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
