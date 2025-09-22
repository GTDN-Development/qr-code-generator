import { Container } from "@/components/container";
import { getPostBySlug, stripHtmlTags } from "@/lib/api-wordpress";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackButton } from "@/components/blog/back-button";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/hero";

function removeFirstImage(htmlContent: string): string {
  return htmlContent.replace(/<img[^>]*>/i, "");
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title.rendered,
    description: stripHtmlTags(post.excerpt.rendered),
    openGraph: {
      title: post.title.rendered,
      description: stripHtmlTags(post.excerpt.rendered),
      type: "article",
      publishedTime: post.date,
      images: post.featuredImage
        ? [
            {
              url: post.featuredImage.source_url,
              width: post.featuredImage.media_details.width,
              height: post.featuredImage.media_details.height,
              alt: post.featuredImage.alt_text || post.title.rendered,
            },
          ]
        : undefined,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="grid gap-16">
      <Hero>
        <HeroContent>
          <BackButton />
          <HeroTitle>{stripHtmlTags(post.title.rendered)}</HeroTitle>
          <HeroDescription>{stripHtmlTags(post.excerpt.rendered)}</HeroDescription>
        </HeroContent>
      </Hero>

      {post.featuredImage ? (
        <Container>
          <Image
            src={post.featuredImage.source_url}
            alt={post.featuredImage.alt_text || post.title.rendered}
            className="size-full object-cover"
            width={post.featuredImage.media_details.width}
            height={post.featuredImage.media_details.height}
          />
        </Container>
      ) : (
        <Container size="sm" className="py-10">
          <hr className="opacity-40" />
        </Container>
      )}

      <Container size="sm" className="pb-24">
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: post.featuredImage
              ? removeFirstImage(post.content.rendered)
              : post.content.rendered,
          }}
        />
      </Container>
    </article>
  );
}
