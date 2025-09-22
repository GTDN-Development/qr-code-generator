import { Container } from "@/components/container";
import { Hero, HeroContent, HeroTitle } from "@/components/hero";
import type { Metadata } from "next/types";
import { getPostsWithFeaturedImages, stripHtmlTags } from "@/lib/api-wordpress";
import { Badge } from "@/components/badge";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/components/utils";
import Image from "next/image";
import { TextLink } from "@/components/text";
import { Link } from "@/components/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Stránka kontaktu",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Page() {
  const posts = await getPostsWithFeaturedImages();

  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>Wordpress blog</HeroTitle>
        </HeroContent>
      </Hero>

      {/*Content*/}
      <Container className="space-y-10 pb-24">
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            const postHref = `/blog/${post.slug}`;
            return (
              <div key={index} className="relative z-10 p-6">
                <div className="pointer-events-none absolute inset-0 z-10 rounded-lg" />
                <div className="relative z-20 flex flex-col items-start justify-center gap-3">
                  {post.featuredImage && (
                    <div className="aspect-[16/10] w-full max-w-full grow-0 overflow-clip">
                      <Image
                        src={post.featuredImage.source_url}
                        alt={post.featuredImage.alt_text || post.title.rendered}
                        className="size-full rounded object-cover"
                        width={post.featuredImage.media_details.width}
                        height={post.featuredImage.media_details.height}
                      />
                    </div>
                  )}
                  <time dateTime={post.date} className="mt-3">
                    <Badge>
                      <CalendarIcon aria-hidden="true" />
                      {formatDate(post.date, "cs-CZ")}
                    </Badge>
                  </time>
                  <Link
                    href={postHref}
                    className="text-text-emphasized font-sans text-xl font-semibold sm:text-2xl"
                  >
                    <span
                      dangerouslySetInnerHTML={{ __html: stripHtmlTags(post.title.rendered) }}
                    />
                  </Link>
                  <p
                    className="line-clamp-5"
                    dangerouslySetInnerHTML={{ __html: stripHtmlTags(post.excerpt.rendered) }}
                  />
                  <TextLink href={postHref} className="text-text-emphasized">
                    Read More
                  </TextLink>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
