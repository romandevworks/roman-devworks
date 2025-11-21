"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  // parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative text-center pt-32 pb-28 overflow-hidden select-none">

      {/* spotlight parallax */}
      <div
        className="spotlight"
        style={{
          transform: `translateX(-50%) translateY(${offset * 0.6}px)`,
        }}
      ></div>

      {/* hero title */}
      <h1
        className="text-5xl md:text-7xl font-bold fade"
        style={{
          transform: `translateY(${offset * 0.25}px)`,
        }}
      >
        Introducing <span className="text-white/90">Roman DevWorks</span>
      </h1>

      {/* mobile title scale override */}
      <style jsx>{`
        @media (max-width: 480px) {
          h1 {
            font-size: 2.45rem;
            line-height: 1.15;
            padding: 0 6px;
          }
        }
      `}</style>

      {/* subtitle */}
      <p
        className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto fade"
        style={{ animationDelay: "0.22s" }}
      >
        Started as a hobby. Still learning. Still improving. Still leveling up —
        every project teaches me something new.
      </p>

      {/* buttons */}
      <div
        className="flex justify-center gap-5 mt-10 fade flex-wrap"
        style={{ animationDelay: "0.44s" }}
      >
        <button className="button-primary">Invite Bots</button>
        <button className="button-secondary">View Projects</button>
      </div>

      {/* divider */}
      <div
        className="w-[190px] h-px mx-auto mt-16 fade"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent)",
          animationDelay: "0.7s",
        }}
      ></div>
    </section>
  );
}
