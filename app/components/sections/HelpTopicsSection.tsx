import { helpTopics } from "@/lib/content";

function TopicIcon({ type }: { type: "feeding" | "sleep" | "development" | "milestones" | "everyday" }) {
  if (type === "feeding") {
    return (
      <svg viewBox="0 0 24 24" className="topic-icon-svg" aria-hidden="true">
        <rect x="9" y="3" width="6" height="3.2" rx="1.2" />
        <path d="M9.5 7h5a2 2 0 0 1 2 2v7a4.5 4.5 0 0 1-9 0V9a2 2 0 0 1 2-2Z" />
        <path d="M9 11h6" />
      </svg>
    );
  }

  if (type === "sleep") {
    return (
      <svg viewBox="0 0 24 24" className="topic-icon-svg" aria-hidden="true">
        <path d="M14.6 3.2a8.6 8.6 0 1 0 6.2 12.6A7 7 0 1 1 14.6 3.2Z" />
        <path d="M5.5 16.8a2.7 2.7 0 0 1 2.7-2.2 3 3 0 0 1 5.6-.4 2.2 2.2 0 0 1 2.7 2.6H5.5Z" />
      </svg>
    );
  }

  if (type === "development") {
    return (
      <svg viewBox="0 0 24 24" className="topic-icon-svg" aria-hidden="true">
        <rect x="4" y="12" width="8" height="8" rx="1.6" />
        <rect x="12" y="4" width="8" height="8" rx="1.6" />
        <path d="M8 8h1M15 16h1" />
      </svg>
    );
  }

  if (type === "milestones") {
    return (
      <svg viewBox="0 0 24 24" className="topic-icon-svg" aria-hidden="true">
        <path d="M4 18h16" />
        <path d="M6.5 18V14M11.5 18V10M16.5 18V7" />
        <path d="M6.5 14l5-4 5-3" />
        <circle cx="6.5" cy="14" r="1" />
        <circle cx="11.5" cy="10" r="1" />
        <circle cx="16.5" cy="7" r="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="topic-icon-svg" aria-hidden="true">
      <path d="M12 20s-6-3.8-6-9a3.6 3.6 0 0 1 6-2.5A3.6 3.6 0 0 1 18 11c0 5.2-6 9-6 9Z" />
      <path d="M4 20h16" />
    </svg>
  );
}

export default function HelpTopicsSection() {
  return (
    <section
      className="section trust-section"
      aria-labelledby="helps-title"
    >
      <h2 id="helps-title">What It Helps With</h2>

      <div className="trust-grid">
        {helpTopics.map((item) => (
          <div key={item.title} className="trust-item">
            <div className={`trust-icon trust-icon-${item.icon}`} aria-hidden="true">
              <TopicIcon type={item.icon} />
            </div>
            <div className="trust-item-body">
              <h3>{item.title}</h3>
              <p>{item.question}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
