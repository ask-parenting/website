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

function StarIcon({ fillPercent, id }: { fillPercent: number; id: string }) {
  return (
    <svg viewBox="0 0 24 24" className="review-star" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset={`${fillPercent}%`} stopColor="currentColor" />
          <stop offset={`${fillPercent}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.8l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.1 6.4 20l1.1-6.2L3 9.4l6.2-.9L12 2.8Z"
        fill={`url(#${id})`}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ReviewStars({ rating, reviewIndex }: { rating: number; reviewIndex: number }) {
  return (
    <div className="review-rating" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, starIndex) => {
        const starFill = Math.max(0, Math.min(1, rating - starIndex));
        return (
          <StarIcon
            key={`review-star-${reviewIndex}-${starIndex}`}
            id={`review-star-${reviewIndex}-${starIndex}`}
            fillPercent={starFill * 100}
          />
        );
      })}
      <span className="review-rating-value">{rating.toFixed(2).replace(/\.00$/, "")}</span>
    </div>
  );
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
            <ReviewStars rating={review.rating} reviewIndex={index} />
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
                <span>{isExpanded ? "Collapse" : "Expand"}</span>
                <span className={`review-toggle-icon ${isExpanded ? "open" : ""}`} aria-hidden="true">
                  ▾
                </span>
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
          <span>{showAllReviews ? "Show Less" : "Show More"}</span>
          <span className={`review-toggle-icon ${showAllReviews ? "open" : ""}`} aria-hidden="true">
            ▾
          </span>
        </button>
      ) : null}

      <p className="value-props-note">
        Because parenting doesn&apos;t come with a manual—but now, it comes
        with a guide.
      </p>
    </section>
  );
}
