"use client";

import { useState } from "react";
import { parentSuccessMessages } from "@/lib/content";

const INITIAL_VISIBLE_REVIEWS = 6;
const REVIEW_PREVIEW_CHARS = 128;

function formatReviewDateTime(value: string) {
  const date = new Date(value);
  return date.toLocaleString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function WhyParentsLoveSection() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const reviewEntries = parentSuccessMessages.map((review, index) => ({ review, index }));
  const visibleReviewEntries = showAllReviews
    ? reviewEntries
    : reviewEntries.slice(0, INITIAL_VISIBLE_REVIEWS);

  const toggleReviewExpansion = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      className="section value-props"
      aria-labelledby="why-love-title"
    >
      <h2 id="why-love-title">Why Parents Love This</h2>

      <div className="review-grid" aria-label="Parent success messages">
        {visibleReviewEntries.map(({ review, index }) => {
          const isLongReview = review.scenario.length > REVIEW_PREVIEW_CHARS;
          const isExpanded = expandedReviews[index] ?? false;
          const previewText = `${review.scenario.slice(0, REVIEW_PREVIEW_CHARS).trimEnd()}...`;

          return (
          <article key={`${review.name}-${review.scenario}`} className="review-card">
            <p className="review-rating">Rating: {review.rating}/5</p>
            <p className="review-datetime">{formatReviewDateTime(review.reviewedAt)}</p>
            <p className="review-scenario">
              &quot;{isLongReview && !isExpanded ? previewText : review.scenario}&quot;
            </p>
            {isLongReview ? (
              <button
                type="button"
                className="review-toggle-button"
                onClick={() => toggleReviewExpansion(index)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Collapse" : "Expand"}
              </button>
            ) : null}
            <p className="review-author">- {review.name}, Parent</p>
          </article>
          );
        })}
      </div>

      {parentSuccessMessages.length > INITIAL_VISIBLE_REVIEWS ? (
        <button
          type="button"
          className="review-list-toggle"
          onClick={() => setShowAllReviews((prev) => !prev)}
          aria-expanded={showAllReviews}
        >
          {showAllReviews ? "Show Less" : "Show More"}
        </button>
      ) : null}

      <p className="value-props-note">
        Because parenting doesn&apos;t come with a manual—but now, it comes
        with a guide.
      </p>
    </section>
  );
}
