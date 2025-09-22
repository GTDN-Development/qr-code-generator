import { IconBrandProps, GitHubIcon } from "@/components/icon-brand";

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
  },
  // Social media links
  socials: {
    github: {
      name: "GitHub",
      href: "https://github.com/GTDN-Development/qr-code-generator",
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
