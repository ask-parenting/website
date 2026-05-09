import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";
import { getAllBlogs } from "@/lib/blogs";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Parenting Blogs | Practical Tips for Daily Parenting",
  description:
    "Explore practical parenting blogs on sleep, feeding, tantrums, routines, milestones, and family balance.",
  alternates: {
    canonical: "/blogs",
  },
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogsPage() {
  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );
  const blogs = getAllBlogs();

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="page-shell blog-page-shell">
        <section className="section blog-index-section" aria-labelledby="blog-index-title">
          <p className="blog-kicker">Parenting Blogs</p>
          <h1 id="blog-index-title">Real Parenting Help for Real, Messy Days</h1>
          <p className="blog-index-lead">
            Actionable articles for sleep, feeding, routines, behavior, and everyday parenting pressure.
          </p>

          <div className="blog-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card">
                <Link href={`/blogs/${blog.id}`} className="blog-image-link" aria-label={`Open blog: ${blog.title}`}>
                  <Image
                    src={blog.coverImage}
                    alt={blog.coverAlt}
                    width={960}
                    height={540}
                    className="blog-card-image"
                  />
                </Link>
                <div className="blog-card-body">
                  <p className="blog-meta">{formatDate(blog.publishedAt)} · {blog.readMinutes} min read</p>
                  <h2>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <p>{blog.excerpt}</p>
                  <Link href={`/blogs/${blog.id}`} className="blog-read-more">
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter whatsappLink={whatsappLink} />
    </>
  );
}
