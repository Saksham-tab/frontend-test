import React, { useState } from 'react';

export function EmailCapture() {
  const [email, setEmail] = useState('');

  return (
    <section className="bg-archive-black w-full h-[400px] lg:h-[320px] flex flex-col items-center justify-center px-6 border-b border-indigo-deep">
      <h2 className="font-heading italic text-[32px] lg:text-[40px] text-dust-ivory mb-4 text-center">
        The Archive, In Your Inbox.
      </h2>
      <p className="font-body text-[15px] text-ash-grey mb-10 text-center max-w-[400px]">
        New drops, craft stories, and pieces on the edge of extinction.
      </p>
      
      <form 
        className="flex flex-col lg:flex-row items-center w-full max-w-[500px] gap-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-raw-linen text-dust-ivory font-body text-[16px] py-2 px-0 focus:outline-none focus:border-thread-gold placeholder:text-ash-grey"
        />
        <button 
          type="submit"
          className="shrink-0 text-thread-gold font-ui text-[12px] tracking-[3px] uppercase border border-thread-gold px-8 py-3 hover:bg-thread-gold hover:text-archive-black transition-colors"
        >
          SUBSCRIBE →
        </button>
      </form>
    </section>
  );
}
