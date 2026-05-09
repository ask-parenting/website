import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";
import { getAllBlogs, getBlogById } from "@/lib/blogs";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ id: blog.id }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Parenting Blogs`,
    description: blog.excerpt,
    alternates: {
      canonical: `/blogs/${blog.id}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.coverImage, alt: blog.coverAlt }],
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blog = getBlogById(id);

  if (!blog) {
    notFound();
  }

  const whatsappLink = buildWhatsAppLink(
    siteConfig.whatsapp.businessNumber,
    siteConfig.whatsapp.prefilledText
  );

  return (
    <>
      <SiteHeader whatsappLink={whatsappLink} />

      <main className="page-shell blog-page-shell">
        <article className="section blog-detail-section">
          <Link href="/blogs" className="blog-back-link">← Back to all blogs</Link>
          <p className="blog-meta">{formatDate(blog.publishedAt)} · {blog.readMinutes} min read</p>
          <h1>{blog.title}</h1>
          <p className="blog-detail-excerpt">{blog.excerpt}</p>

          <Image
            src={blog.coverImage}
            alt={blog.coverAlt}
            width={1200}
            height={675}
            className="blog-hero-image"
            priority
          />

          <div className="blog-content">
            {blog.content.map((paragraph, index) => (
              <p key={`${blog.id}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>

      <SiteFooter whatsappLink={whatsappLink} />
    </>
  );
}
