import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";
import { useAppContext } from "../context/AppContext";

type AuthStep = "info" | "otp";

export function Auth() {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const [step, setStep] = useState<AuthStep>("info");
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.mobile.trim()) {
      setStep("otp");
    }
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        login({ name: formData.name, mobile: formData.mobile });
        setLoading(false);
        navigate("/profile");
      }, 500);
    }
  };

  const handleBack = () => {
    setStep("info");
    setOtp("");
  };

  return (
    <div className="min-h-screen bg-archive-black text-dust-ivory flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif italic text-[48px] text-dust-ivory mb-2">WEAVR</h1>
          <p className="font-body text-raw-linen text-[16px]">
            {step === "info" ? "Create or Login to Your Account" : "Verify Your Identity"}
          </p>
        </div>

        {/* Form Container */}
        <div className="border border-indigo-deep p-8 lg:p-10">
          {step === "info" ? (
            // Step 1: Personal Information
            <form onSubmit={handleInfoSubmit} className="space-y-6">
              <div>
                <label className="block font-condensed text-[11px] uppercase tracking-[1px] text-raw-linen mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-archive-black border border-indigo-deep px-4 py-3 text-dust-ivory placeholder-ash-grey focus:outline-none focus:border-thread-gold transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block font-condensed text-[11px] uppercase tracking-[1px] text-raw-linen mb-3">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="+91 123 4567 890"
                  className="w-full bg-archive-black border border-indigo-deep px-4 py-3 text-dust-ivory placeholder-ash-grey focus:outline-none focus:border-thread-gold transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-8 px-6 py-3 bg-terracotta text-archive-black font-condensed text-[13px] uppercase tracking-[2px] hover:bg-terracotta/80 transition-colors duration-300"
              >
                Send OTP
              </button>

              <p className="text-center text-ash-grey text-[12px] mt-6">
                We'll send you a one-time password to verify your identity.
              </p>
            </form>
          ) : (
            // Step 2: OTP Verification
            <form onSubmit={handleOTPSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <p className="font-body text-raw-linen text-[14px] mb-2">
                  Enter the 6-digit code sent to
                </p>
                <p className="font-condensed text-[13px] text-dust-ivory">
                  {formData.mobile}
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup className="flex gap-2">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <InputOTPSlot
                        key={i}
                        index={i}
                        className="w-12 h-12 bg-archive-black border border-indigo-deep text-center font-condensed text-[18px] text-dust-ivory focus:border-thread-gold transition-colors"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <button
                type="submit"
                disabled={otp.length !== 6 || loading}
                className="w-full px-6 py-3 bg-terracotta text-archive-black font-condensed text-[13px] uppercase tracking-[2px] hover:bg-terracotta/80 disabled:bg-ash-grey disabled:cursor-not-allowed transition-colors duration-300"
              >
                {loading ? "Verifying..." : "Verify & Login"}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full mt-4 px-6 py-3 border border-indigo-deep text-dust-ivory font-condensed text-[13px] uppercase tracking-[2px] hover:border-thread-gold transition-colors duration-300"
              >
                Back
              </button>

              <p className="text-center text-ash-grey text-[12px] mt-6">
                Don't have the code? <span className="text-thread-gold cursor-pointer hover:underline">Resend</span>
              </p>
            </form>
          )}
        </div>

        {/* Footer Link */}
        {step === "info" && (
          <p className="text-center text-ash-grey text-[12px] mt-8">
            By logging in, you agree to our <span className="text-thread-gold cursor-pointer hover:underline">Terms & Conditions</span>
          </p>
        )}
      </motion.div>
    </div>
  );
}
