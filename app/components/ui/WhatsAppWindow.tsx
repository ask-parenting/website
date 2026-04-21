import { siteConfig } from "@/lib/site-config";

export default function WhatsAppWindow() {
  return (
    <aside className="wa-window" aria-label="Example parent conversation">
      <div className="wa-header">
        <div className="wa-avatar" aria-hidden="true">PA</div>
        <div className="wa-header-info">
          <p className="wa-name">{siteConfig.brand}</p>
          <p className="wa-status">online</p>
        </div>
      </div>

      <div className="wa-body">
        {siteConfig.chatMockup.map((msg, i) => (
          <div
            key={i}
            className={`wa-bubble ${
              msg.sender === "Parent" ? "wa-bubble-in" : "wa-bubble-out"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="wa-input-bar" aria-hidden="true">
        <span className="wa-input-placeholder">Message</span>
      </div>
    </aside>
  );
}
