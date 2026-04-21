import { whyParentsLove } from "@/lib/content";

export default function WhyParentsLoveSection() {
  return (
    <section
      className="section value-props"
      aria-labelledby="why-love-title"
    >
      <h2 id="why-love-title">💛 Built for real parenting moments</h2>

      <div className="card-grid">
        {whyParentsLove.map((point) => (
          <article key={point} className="card">
            <p className="card-index">✔</p>
            <h3>{point}</h3>
          </article>
        ))}
      </div>

      <p className="value-props-note">
        Because parenting doesn&apos;t come with a manual—but now, it comes
        with a guide.
      </p>
    </section>
  );
}
