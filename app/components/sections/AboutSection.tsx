import { aboutParagraphs } from "@/lib/content";

export default function AboutSection() {
  return (
    <section
      className="section about-section"
      aria-labelledby="about-title"
    >
      <h2 id="about-title">About Us</h2>

      {aboutParagraphs.map((text, i) => (
        <p key={i} className="about-copy">
          {text}
        </p>
      ))}
    </section>
  );
}
