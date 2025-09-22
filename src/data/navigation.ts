import {
  IconBrandProps,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/icon-brand";

type NavItem = {
  name: string;
  href: string;
};

type NavItemWithChildren = {
  name: string;
  href?: string;
  children: Record<string, NavItem>;
};

type SocialMediaNavItem = NavItem & {
  icon: React.ComponentType<IconBrandProps>;
};

export type NestedNavigation = Record<string, NavItem | NavItemWithChildren>;
export type SimpleNavigation = Record<string, NavItem>;
export type SocialNavigation = Record<string, SocialMediaNavItem>;

// Navigation data for the whole website
export const navigation = {
  // Primary navigation
  primary: {
    home: {
      name: "Domů",
      href: "/",
    },
    blog: {
      name: "Blog",
      href: "/blog",
    },
    contact: {
      name: "Kontakt",
      href: "/kontakt",
    },
    subMenu: {
      name: "Rozbalovací menu",
      children: {
        firstItem: {
          name: "Položka 1",
          href: "/",
        },
        secondItem: {
          name: "Položka 2",
          href: "/",
        },
      },
    },
  },
  // Secondary navigation
  secondary: {
    someLink: {
      name: "Další odkaz",
      href: "/gdpr",
    },
  },
  // Legal items
  legal: {
    gdpr: {
      name: "Zpracování osobních údajů",
      href: "/gdpr",
    },
  },
  // Social media links
  socials: {
    facebook: {
      name: "Facebook",
      href: "https://www.facebook.com/user-name/",
      icon: FacebookIcon,
    },
    instagram: {
      name: "Instagram",
      href: "https://www.instagram.com/user-name/",
      icon: InstagramIcon,
    },
    twitter: {
      name: "Twitter",
      href: "https://x.com/user-name",
      icon: TwitterXIcon,
    },
    youtube: {
      name: "YouTube",
      href: "https://www.youtube.com/@user-name",
      icon: YoutubeIcon,
    },
    github: {
      name: "GitHub",
      href: "https://github.com/user-name",
      icon: GitHubIcon,
    },
  },
};

// Contact information
export const contact: SimpleNavigation = {
  phone: {
    name: "+420 123 456 789",
    href: "tel:+420123456789",
  },
  email: {
    name: "info@example.com",
    href: "mailto:info@example.com",
  },
};
