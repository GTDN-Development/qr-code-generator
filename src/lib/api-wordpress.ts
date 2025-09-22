export type BlogPost = {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
};

export type MediaItem = {
  id: number;
  source_url: string;
  alt_text: string;
  title: {
    rendered: string;
  };
  media_details: {
    width: number;
    height: number;
  };
};

export async function getAllPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}posts`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export async function getFeaturedImage(mediaId: number): Promise<MediaItem | null> {
  if (mediaId === 0) {
    return null;
  }

  const response = await fetch(`${process.env.WORDPRESS_API_URL}media/${mediaId}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export async function getPostsWithFeaturedImages(): Promise<
  (BlogPost & { featuredImage: MediaItem | null })[]
> {
  const posts = await getAllPosts();

  const postsWithImages = await Promise.all(
    posts.map(async (post) => {
      const featuredImage = await getFeaturedImage(post.featured_media);
      return {
        ...post,
        featuredImage,
      };
    })
  );

  return postsWithImages;
}

export async function getPostBySlug(
  slug: string
): Promise<(BlogPost & { featuredImage: MediaItem | null }) | null> {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}posts?slug=${slug}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) return null;

  const posts: BlogPost[] = await response.json();
  const post = posts[0];

  if (!post) return null;

  const featuredImage = await getFeaturedImage(post.featured_media);

  return { ...post, featuredImage };
}

export function stripHtmlTags(html: string): string {
  // Remove HTML tags
  let text = html.replace(/<[^>]*>/g, "");

  // Decode HTML entities
  text = text
    .replace(/&hellip;/g, "…")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&bull;/g, "•")
    .replace(/&copy;/g, "©")
    .replace(/&reg;/g, "®")
    .replace(/&trade;/g, "™")
    .replace(/&#(\d+);/g, (match, num) => String.fromCharCode(parseInt(num, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)));

  return text.trim();
}
