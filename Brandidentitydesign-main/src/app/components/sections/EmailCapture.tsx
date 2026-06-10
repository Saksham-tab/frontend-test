import { motion } from "motion/react";

export function EmailCapture() {
  return (
    <section className="bg-archive-black w-full min-h-[320px] flex flex-col items-center justify-center py-20 px-6 border-t border-indigo-deep">
      <div className="max-w-xl w-full flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif italic text-[32px] lg:text-[40px] text-dust-ivory mb-4"
        >
          The Archive, In Your Inbox.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-[15px] text-ash-grey mb-8 max-w-md leading-relaxed"
        >
          New drops, craft stories, and pieces on the edge of extinction.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            required
            className="w-full flex-1 bg-transparent border-b border-raw-linen pb-3 font-condensed text-[14px] text-dust-ivory placeholder:text-ash-grey focus:outline-none focus:border-thread-gold transition-colors tracking-[2px]"
          />
          <button 
            type="submit"
            className="w-full sm:w-auto px-8 py-3 border border-thread-gold font-condensed text-[12px] uppercase tracking-[3px] text-thread-gold hover:bg-thread-gold hover:text-archive-black transition-colors duration-300 whitespace-nowrap"
          >
            SUBSCRIBE →
          </button>
        </motion.form>

      </div>
    </section>
  );
}
