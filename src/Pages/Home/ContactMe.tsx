import React from "react";

/**
 * ContactMe component - Refactored to a rounded, styled box with email and message fields only.
 */
const ContactMe: React.FC = () => {
  return (
    <section id="Contact" className="py-[70px] lg:py-[100px] px-[20px] lg:px-[85px] bg-white">
      <div className="w-full max-w-[1333px] mx-auto bg-bg-shade p-[40px] lg:p-[80px] rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5">
        <div className="text-center mb-[60px]">
          <p className="text-primary font-bold uppercase tracking-[2px] mb-[10px]">Get In Touch</p>
          <h2 className="text-heading text-[35px] lg:text-[48px] font-bold leading-[40px] lg:leading-[58px]">Let's Connect</h2>
          <p className="text-darkblue text-[16px] font-normal leading-[24px] mt-[10px]">
            Feel free to reach out to me for collaborations, questions, or just to say hi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[40px] lg:gap-[80px] items-start">
          {/* Contact Info */}
          <div className="flex flex-col gap-[30px] bg-white p-[30px] rounded-[20px] shadow-sm">
            <div className="flex items-center gap-[20px] text-darkblue">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <span className="break-all">your-email@placeholder.com</span>
            </div>
            <div className="flex items-center gap-[20px] text-darkblue">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span>+1 (XXX) XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-[20px] text-darkblue">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <span>linkedin.com/in/placeholder</span>
            </div>
            <div className="flex items-center gap-[20px] text-darkblue">
              <div className="w-[40px] h-[40px] bg-bg-shade text-primary flex items-center justify-center rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span>City, Country Placeholder</span>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full bg-white p-[30px] rounded-[20px] shadow-sm">
            <form className="flex flex-col gap-[25px]">
              <label htmlFor="email" className="flex flex-col items-start gap-[10.6px] w-full">
                <span className="text-[16px] font-semibold text-darkblue">Email</span>
                <input
                  type="email"
                  className="w-full p-[16px] rounded-[12px] border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white text-[16px] text-darkblue transition-all"
                  name="email"
                  id="email"
                  required
                />
              </label>

              <label htmlFor="message" className="flex flex-col items-start gap-[10.6px] w-full">
                <span className="text-[16px] font-semibold text-darkblue">Message</span>
                <textarea
                  className="w-full p-[16px] rounded-[12px] border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white text-[16px] text-darkblue transition-all"
                  id="message"
                  rows={4}
                  placeholder="Type your message..."
                />
              </label>
              
              <div className="mt-[10px]">
                <button className="w-full py-[16px] text-base font-semibold cursor-pointer text-center no-underline rounded-[50px] transition-all duration-300 ease-in-out border border-primary text-white bg-primary hover:bg-white hover:text-primary hover:scale-105 shadow-md">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
