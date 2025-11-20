import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  link?: string;
  children?: ReactNode;
}

export default function ProjectCard({ title, description, link, children }: Props) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-brand font-semibold hover:underline"
        >
          View More →
        </a>
      )}
      {children}
    </div>
  );
}
