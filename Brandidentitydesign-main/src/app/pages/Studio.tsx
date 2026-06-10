import { Link } from "react-router";
import { motion } from "motion/react";
import { Zap, Eye, Sparkles, Heart } from "lucide-react";

export function Studio() {
  const cards = [
    {
      id: "build",
      title: "Build Your Look",
      description: "Create custom outfits from our collections",
      icon: Sparkles,
      color: "from-terracotta to-terracotta/80",
    },
    {
      id: "try-on",
      title: "AI Try-On",
      description: "See how outfits look on you",
      icon: Eye,
      color: "from-thread-gold to-thread-gold/80",
    },
    {
      id: "trending",
      title: "Trending Looks",
      description: "Explore curated outfit combinations",
      icon: Zap,
      color: "from-indigo-deep to-indigo-deep/80",
    },
    {
      id: "saved",
      title: "Saved Looks",
      description: "Your personal outfit collection",
      icon: Heart,
      color: "from-ash-grey to-ash-grey/80",
    },
  ];

  return (
    <div className="min-h-screen bg-archive-black text-dust-ivory">
      {/* Hero Section */}
      <section className="py-20 lg:py-[120px] px-6 lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="font-serif italic text-[48px] lg:text-[64px] text-dust-ivory mb-6 leading-tight">
            Studio
          </h1>
          <p className="font-body text-raw-linen text-[16px] lg:text-[18px] mb-8 max-w-xl">
            Your creative space to design, explore, and perfect your personal style. Mix and match pieces from our collections or discover trending combinations curated just for you.
          </p>
        </motion.div>
      </section>

      {/* Cards Grid */}
      <section className="px-6 lg:px-[80px] pb-20 lg:pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  to={card.id === "build" ? "/studio/outfit-builder" : "#"}
                  className="group block"
                >
                  <div className="h-[320px] lg:h-[380px] rounded-none bg-gradient-to-br from-indigo-deep to-indigo-deep/50 border border-thread-gold/20 p-8 lg:p-12 flex flex-col justify-between hover:border-thread-gold/60 transition-all duration-300 hover:shadow-lg">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-none border border-thread-gold/40 flex items-center justify-center mb-6 group-hover:border-thread-gold transition-colors">
                      <Icon size={32} className="text-thread-gold" strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-serif italic text-[32px] lg:text-[40px] text-dust-ivory mb-3 leading-tight">
                        {card.title}
                      </h3>
                      <p className="font-body text-raw-linen text-[15px]">
                        {card.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="mt-6 text-thread-gold text-[20px] group-hover:translate-x-2 transition-transform">
                      →
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="border-t border-indigo-deep py-16 lg:py-[80px] px-6 lg:px-[80px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="font-body text-raw-linen text-[16px] mb-6">
            Not sure where to start? Build your first outfit and get personalized recommendations.
          </p>
          <Link
            to="/studio/outfit-builder"
            className="inline-block px-8 py-4 border-2 border-thread-gold text-thread-gold font-condensed text-[13px] uppercase tracking-[2px] hover:bg-thread-gold hover:text-archive-black transition-all duration-300"
          >
            Start Building
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
