"use client";

import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/heading";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/hero";

export default function Page() {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>Project colors</HeroTitle>
          <HeroDescription>
            Reference of the color system used throughout this project. Each color shows its
            purpose, appearance, and recommended usage scenarios.
          </HeroDescription>
        </HeroContent>
      </Hero>

      <Container size="sm" className="space-y-24 pb-24">
        {dynamicColors.map((colorGroup, index) => (
          <div key={index} className="grid gap-4">
            <Heading as="h2" size="3xl" className="text-text-emphasized capitalize">
              {colorGroup.name}
            </Heading>
            <p>{colorGroup.description}</p>
            <div className="flex flex-wrap gap-6">
              {colorGroup.colors.map((color, index) => (
                <div key={index} className="flex basis-48 flex-col gap-4">
                  <div
                    className={`rounded-default h-24 w-full inset-ring-1 inset-ring-current/20 ${color.className}`}
                  />
                  <div className="flex flex-col gap-2.5">
                    <Subheading size="sm" as="h3" className="text-text-emphasized">
                      {color.name}
                    </Subheading>
                    <p className="text-sm">{color.description}</p>
                    <ul className="list-inside list-disc space-y-2">
                      {color.usage.map((usage, index) => (
                        <li key={index} className="font-mono text-xs">
                          {usage}-{color.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}

const dynamicColors = [
  {
    name: "surface",
    description: "Surface colors provide background colors for different elevation levels.",
    colors: [
      {
        name: "surface-default",
        className: "bg-surface-default",
        description: "Primary background color for main content areas.",
        usage: ["bg"],
      },
      {
        name: "surface-elevated",
        className: "bg-surface-elevated",
        description: "Background for elevated surfaces like cards and modals.",
        usage: ["bg"],
      },
      {
        name: "surface-high",
        className: "bg-surface-high",
        description: "Highest elevation background for tooltips and overlays.",
        usage: ["bg"],
      },
    ],
  },
  {
    name: "text",
    description: "Text colors ensure proper contrast and hierarchy across surfaces.",
    colors: [
      {
        name: "text-subtle",
        className: "bg-text-subtle",
        description: "Secondary text and placeholders with subtle contrast.",
        usage: ["text"],
      },
      {
        name: "text-default",
        className: "bg-text-default",
        description: "Standard text color for body content and labels.",
        usage: ["text"],
      },
      {
        name: "text-emphasized",
        className: "bg-text-emphasized",
        description: "Emphasized text for headings and important content.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "border",
    description:
      "Border colors define how prominent borders appear, from subtle separation to strong emphasis.",
    colors: [
      {
        name: "border-subtle",
        className: "bg-border-subtle",
        description: "Subtle borders for light separation and dividers.",
        usage: ["border", "ring", "inset-ring"],
      },
      {
        name: "border-default",
        className: "bg-border-default",
        description: "Standard border color for inputs and components.",
        usage: ["border", "ring", "inset-ring"],
      },
      {
        name: "border-emphasized",
        className: "bg-border-emphasized",
        description: "Strong borders for focus states and emphasis.",
        usage: ["border", "ring", "inset-ring"],
      },
    ],
  },
  {
    name: "primary",
    description: "Primary brand colors for main actions and key interactive elements.",
    colors: [
      {
        name: "primary-fill",
        className: "bg-primary-fill",
        description: "Main fill for primary buttons and brand elements.",
        usage: ["bg", "fill"],
      },
      {
        name: "primary-on-fill",
        className: "bg-primary-on-fill",
        description: "For text and icons on primary-fill backgrounds to ensure proper contrast.",
        usage: ["text"],
      },
      {
        name: "primary-alt",
        className: "bg-primary-alt",
        description: "Alternative primary for hover, focus and other states.",
        usage: ["bg", "fill"],
      },
      {
        name: "primary-subtle",
        className: "bg-primary-subtle",
        description: "Subtle primary background for badges and visual styling variations.",
        usage: ["bg"],
      },
      {
        name: "primary-text",
        className: "bg-primary-text",
        description: "Primary text color that ensures proper contrast against surface colors.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "secondary",
    description: "Secondary colors for alternative actions that complement primary colors.",
    colors: [
      {
        name: "secondary-fill",
        className: "bg-secondary-fill",
        description: "Fill for secondary buttons and actions.",
        usage: ["bg", "fill"],
      },
      {
        name: "secondary-on-fill",
        className: "bg-secondary-on-fill",
        description: "For text and icons on secondary-fill backgrounds to ensure proper contrast.",
        usage: ["text"],
      },
      {
        name: "secondary-alt",
        className: "bg-secondary-alt",
        description: "Alternative secondary for hover, focus and other states.",
        usage: ["bg", "fill"],
      },
      {
        name: "secondary-subtle",
        className: "bg-secondary-subtle",
        description: "Subtle secondary background for badges and visual styling variations.",
        usage: ["bg"],
      },
      {
        name: "secondary-text",
        className: "bg-secondary-text",
        description: "Secondary text color that ensures proper contrast against surface colors.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "tertiary",
    description: "Tertiary colors for accent elements and special features.",
    colors: [
      {
        name: "tertiary-fill",
        className: "bg-tertiary-fill",
        description: "Fill for tertiary actions and accents.",
        usage: ["bg", "fill"],
      },
      {
        name: "tertiary-on-fill",
        className: "bg-tertiary-on-fill",
        description: "For text and icons on tertiary-fill backgrounds to ensure proper contrast.",
        usage: ["text"],
      },
      {
        name: "tertiary-alt",
        className: "bg-tertiary-alt",
        description: "Alternative tertiary for hover, focus and other states.",
        usage: ["bg", "fill"],
      },
      {
        name: "tertiary-subtle",
        className: "bg-tertiary-subtle",
        description: "Subtle tertiary background for badges and visual styling variations.",
        usage: ["bg"],
      },
      {
        name: "tertiary-text",
        className: "bg-tertiary-text",
        description: "Tertiary text color that ensures proper contrast against surface colors.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "error",
    description: "Error colors for problems, validation issues, and destructive actions.",
    colors: [
      {
        name: "error-fill",
        className: "bg-error-fill",
        description: "Fill for error buttons and destructive actions.",
        usage: ["bg", "fill"],
      },
      {
        name: "error-on-fill",
        className: "bg-error-on-fill",
        description: "For text and icons on error-fill backgrounds to ensure proper contrast.",
        usage: ["text"],
      },
      {
        name: "error-alt",
        className: "bg-error-alt",
        description: "Alternative error for hover, focus and other states.",
        usage: ["bg", "fill"],
      },
      {
        name: "error-subtle",
        className: "bg-error-subtle",
        description: "Subtle error background for badges and visual styling variations.",
        usage: ["bg"],
      },
      {
        name: "error-text",
        className: "bg-error-text",
        description: "Error text color that ensures proper contrast against surface colors.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "disabled",
    description: "Disabled colors for non-interactive and unavailable elements.",
    colors: [
      {
        name: "disabled-fill",
        className: "bg-disabled-fill",
        description: "Fill for disabled buttons and elements.",
        usage: ["bg", "fill"],
      },
      {
        name: "disabled-on-fill",
        className: "bg-disabled-on-fill",
        description: "For text and icons on disabled-fill backgrounds to ensure proper contrast.",
        usage: ["text"],
      },
      {
        name: "disabled-alt",
        className: "bg-disabled-alt",
        description: "Alternative disabled for borders and states.",
        usage: ["border", "bg"],
      },
      {
        name: "disabled-subtle",
        className: "bg-disabled-subtle",
        description: "Subtle disabled background for badges and visual styling variations.",
        usage: ["bg"],
      },
      {
        name: "disabled-text",
        className: "bg-disabled-text",
        description: "Text for disabled labels and content.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "input",
    description: "Input colors designed for form elements and interactive fields.",
    colors: [
      {
        name: "input-fill",
        className: "bg-input-fill",
        description: "Background for inputs and form fields.",
        usage: ["bg"],
      },
      {
        name: "input-on-fill",
        className: "bg-input-on-fill",
        description: "Text color for input content and labels.",
        usage: ["text"],
      },
      {
        name: "input-border",
        className: "bg-input-border",
        description: "Default border for form inputs.",
        usage: ["border"],
      },
      {
        name: "input-border-hover",
        className: "bg-input-border-hover",
        description: "Border for form inputs on hover.",
        usage: ["border"],
      },
      {
        name: "input-placeholder",
        className: "bg-input-placeholder",
        description: "Placeholder text color in inputs.",
        usage: ["text"],
      },
    ],
  },
  {
    name: "popover",
    description: "Popover colors for floating elements like dropdowns and tooltips.",
    colors: [
      {
        name: "popover-fill",
        className: "bg-popover-fill",
        description: "Background for popovers and dropdowns.",
        usage: ["bg"],
      },
      {
        name: "popover-on-fill",
        className: "bg-popover-on-fill",
        description: "Text color for popover content.",
        usage: ["text"],
      },
      {
        name: "popover-selected",
        className: "bg-popover-selected",
        description: "Background for selected popover items.",
        usage: ["bg"],
      },
      {
        name: "popover-on-selected",
        className: "bg-popover-on-selected",
        description: "Text for selected popover items.",
        usage: ["text"],
      },
      {
        name: "popover-border",
        className: "bg-popover-border",
        description: "Border for popover containers.",
        usage: ["border", "ring", "inset-ring"],
      },
    ],
  },
  {
    name: "focus",
    description: "Focus colors provide clear visual feedback for keyboard navigation.",
    colors: [
      {
        name: "focus-ring",
        className: "bg-focus-ring",
        description: "Focus ring color for interactive elements and accessibility.",
        usage: ["ring", "inset-ring", "border"],
      },
    ],
  },
];
