import Link from "next/link";
import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "Contact • Roman DevWorks",
  description: "Get in touch with Roman DevWorks — Discord bot & software development.",
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-28 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-4">Contact</h1>
      <p className="text-gray-400 max-w-xl mx-auto mb-16">
        Want a custom Discord bot or software solution?  
        I'm open to commissions, collaborations, or business inquiries.
      </p>

      <AnimatedSection>
        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
          <Link
            href="mailto:romandevworks@proton.me"
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
          >
            📩 Email Me
          </Link>

          <Link
            href="https://discord.com/users/1388535675921502349"
            className="px-8 py-4 border border-neutral-500 rounded-lg font-semibold hover:border-neutral-300 transition"
            target="_blank"
          >
            💬 Contact on Discord
          </Link>
        </div>

        {/* Contact Form (no backend required) */}
        <form
          action="https://formsubmit.co/romandevworks@proton.me"
          method="POST"
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-left max-w-xl mx-auto"
        >
          <input type="hidden" name="_subject" value="New Inquiry from Roman DevWorks Website" />
          <input type="hidden" name="_captcha" value="false" />

          <label className="block text-sm text-gray-400 mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 mb-6 text-white focus:outline-none"
          />

          <label className="block text-sm text-gray-400 mb-2">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 mb-6 text-white focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-neutral-200 transition"
          >
            Send Message
          </button>
        </form>
      </AnimatedSection>
    </main>
  );
}
