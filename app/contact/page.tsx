import AnimatedSection from "../../components/AnimatedSection";
import EmailButton from "../../components/EmailButton";

export default function ContactPage() {
  return (
    <AnimatedSection>
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-gray-300 mb-4">
        Whether you're interested in my bots, my development work, or have a project in mind — feel free to reach out.
      </p>
      <EmailButton />
    </AnimatedSection>
  );
}
