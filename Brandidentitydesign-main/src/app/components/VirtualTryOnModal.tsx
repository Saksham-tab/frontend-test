import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Camera, Heart, Share2 } from "lucide-react";

interface VirtualTryOnModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
}

export function VirtualTryOnModal({
  isOpen,
  onClose,
  productName,
  productImage,
}: VirtualTryOnModalProps) {
  const [step, setStep] = useState<"upload" | "preview">("upload");
  const [userImage, setUserImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target?.result as string);
        setStep("preview");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (userImage) {
      // In production, save to localStorage/backend
      console.log("Try-on saved:", { productName, userImage });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-archive-black border-2 border-indigo-deep w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-archive-black border-b border-indigo-deep flex items-center justify-between p-6 z-10">
              <h2 className="font-serif italic text-[24px] text-dust-ivory">
                Virtual Try-On
              </h2>
              <button
                onClick={onClose}
                className="text-dust-ivory hover:text-thread-gold transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {step === "upload" ? (
                // Upload Step
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif italic text-[20px] text-dust-ivory mb-2">
                      {productName}
                    </h3>
                    <p className="font-body text-raw-linen text-[14px]">
                      Upload a photo of yourself to see how this piece looks on you
                    </p>
                  </div>

                  {/* Upload Area */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-thread-gold/50 rounded-none p-12 text-center cursor-pointer hover:border-thread-gold hover:bg-thread-gold/5 transition-all"
                  >
                    <Camera size={48} className="mx-auto mb-4 text-thread-gold" />
                    <p className="font-body text-dust-ivory text-[16px] mb-2">
                      Click to upload a photo
                    </p>
                    <p className="font-body text-ash-grey text-[13px]">
                      JPG, PNG up to 10MB
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>

                  {/* Info */}
                  <div className="bg-indigo-deep/20 border border-indigo-deep p-4">
                    <p className="font-body text-[13px] text-raw-linen">
                      💡 <strong>Pro tip:</strong> For best results, upload a full-body photo
                      with similar pose to how the garment is displayed.
                    </p>
                  </div>
                </div>
              ) : (
                // Preview Step
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif italic text-[20px] text-dust-ivory mb-2">
                      Your Try-On Result
                    </h3>
                    <p className="font-body text-raw-linen text-[14px]">
                      Here's how {productName} looks on you
                    </p>
                  </div>

                  {/* Try-On Preview (Static overlay for now) */}
                  <div className="relative bg-indigo-deep/10 aspect-video border border-indigo-deep overflow-hidden">
                    {userImage && (
                      <>
                        <img
                          src={userImage}
                          alt="Your photo"
                          className="w-full h-full object-cover"
                        />
                        {/* Product overlay */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 opacity-60">
                          <img
                            src={productImage}
                            alt={productName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setStep("upload");
                        setUserImage(null);
                      }}
                      className="flex-1 px-6 py-3 border border-indigo-deep text-dust-ivory font-condensed text-[13px] uppercase tracking-[2px] hover:border-thread-gold hover:text-thread-gold transition-colors"
                    >
                      Try Another Photo
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-terracotta text-archive-black font-condensed text-[13px] uppercase tracking-[2px] hover:bg-terracotta/80 transition-colors"
                    >
                      <Heart size={16} />
                      Save Try-On
                    </button>
                  </div>

                  {/* Share Option */}
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-thread-gold text-thread-gold font-condensed text-[13px] uppercase tracking-[2px] hover:bg-thread-gold hover:text-archive-black transition-colors">
                    <Share2 size={16} />
                    Share Try-On
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
