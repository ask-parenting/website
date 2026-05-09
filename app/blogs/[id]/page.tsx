import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";
import { getAllBlogs, getBlogById } from "@/lib/blogs";
import type { BlogContentBlock } from "@/lib/blogs";
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

function renderBlogBlock(blogId: string, block: BlogContentBlock, index: number) {
  if (block.type === "header") {
    return <h2 key={`${blogId}-block-${index}`} className="blog-block-header">{block.text}</h2>;
  }

  if (block.type === "subheader") {
    return <h3 key={`${blogId}-block-${index}`} className="blog-block-subheader">{block.text}</h3>;
  }

  if (block.type === "paragraph") {
    return <p key={`${blogId}-block-${index}`}>{block.text}</p>;
  }

  if (block.type === "image") {
    return (
      <figure key={`${blogId}-block-${index}`} className="blog-block-figure">
        <Image
          src={block.src}
          alt={block.alt}
          width={1200}
          height={675}
          className="blog-hero-image blog-inline-image"
        />
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === "bullet") {
    return (
      <ul key={`${blogId}-block-${index}`} className="blog-block-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ol key={`${blogId}-block-${index}`} className="blog-block-list blog-block-list-numbered">
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
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

          <div className="blog-content">
            {blog.content.map((block, index) => renderBlogBlock(blog.id, block, index))}
          </div>
        </article>
      </main>

      <SiteFooter whatsappLink={whatsappLink} />
    </>
  );
}
