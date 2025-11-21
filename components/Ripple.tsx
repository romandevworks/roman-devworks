"use client";

import { MouseEventHandler } from "react";

export default function Ripple({
  children,
}: {
  children: React.ReactNode;
}) {
  const createRipple: MouseEventHandler<HTMLButtonElement> = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple-effect");

    const ripple = button.getElementsByClassName("ripple-effect")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  return (
    <button onClick={createRipple} className="ripple relative">
      {children}
    </button>
  );
}
