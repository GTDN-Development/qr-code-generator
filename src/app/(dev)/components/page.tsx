"use client";

import { Container } from "@/components/container";
import { Heading, Subheading } from "@/components/heading";
import { Hero, HeroContent, HeroDescription, HeroTitle } from "@/components/hero";
import { Button, styles as buttonStyles, ButtonLink } from "@/components/button";
import { ButtonIcon, styles as buttonIconStyles } from "@/components/button-icon";
import { Dialog, DialogTitle, DialogDescription, DialogActions } from "@/components/dialog";
import { Drawer, DrawerTitle, DrawerDescription, DrawerActions } from "@/components/drawer";
import { Divider } from "@/components/divider";
import { Spinner } from "@/components/spinner";
import { Text, TextLink, Lead, Strong, Em, Highlight, Kbd, Code } from "@/components/text";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxField,
  styles as checkboxStyles,
} from "@/components/checkbox";
import { Input, InputGroup } from "@/components/input";
import { Select } from "@/components/select";
import { Textarea } from "@/components/textarea";
import {
  Alert,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
  AlertInfoIcon,
  AlertErrorIcon,
  AlertBulbIcon,
  AlertComposed,
} from "@/components/alert";
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  DropdownHeading,
  DropdownDivider,
  DropdownTriggerIcon,
} from "@/components/dropdown";
import { Badge, BadgeButton, BadgeLink, styles as badgeStyles } from "@/components/badge";
import { Radio, RadioGroup, RadioField, styles as radioStyles } from "@/components/radio";
import { Fieldset, Legend, Field, Label, Description } from "@/components/fieldset";
import { Label as HeadlessLabel } from "@headlessui/react";
import { styles as containerStyles } from "@/components/container";
import {
  Avatar,
  AvatarButton,
  AvatarLink,
  AvatarImage,
  AvatarInitials,
  AvatarGroup,
} from "@/components/avatar";
import { useState } from "react";

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState<Record<string, boolean>>({});
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [alertStates, setAlertStates] = useState<Record<string, boolean>>({
    primary: true,
    secondary: true,
    tertiary: true,
    error: true,
  });
  const [radioValue, setRadioValue] = useState("");

  return (
    <>
      <Hero>
        <HeroContent>
          <HeroTitle>Project components</HeroTitle>
          <HeroDescription>
            Showcase of all available components and their variants in this starter project.
          </HeroDescription>
        </HeroContent>
      </Hero>

      <div className="space-y-24 pb-24">
        {/* Button Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Button
          </Heading>
          <Subheading className="mt-2">All button variants</Subheading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Variants
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                {Object.keys(buttonStyles.variant).map((variant) => (
                  <Button key={variant} variant={variant as keyof typeof buttonStyles.variant}>
                    {variant}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Sizes
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                {Object.keys(buttonStyles.size).map((size) => (
                  <Button key={size} size={size as keyof typeof buttonStyles.size}>
                    Size {size}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                States
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <ButtonLink href="#">Button Link</ButtonLink>
              </div>
            </div>
          </div>
        </Container>

        {/* Button Icon Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Button Icon
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Variants
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                {Object.keys(buttonIconStyles.variant).map((variant) => (
                  <ButtonIcon
                    key={variant}
                    variant={variant as keyof typeof buttonIconStyles.variant}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </ButtonIcon>
                ))}
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Sizes
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                {Object.keys(buttonIconStyles.size).map((size) => (
                  <ButtonIcon key={size} size={size as keyof typeof buttonIconStyles.size}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </ButtonIcon>
                ))}
              </div>
            </div>
          </div>
        </Container>

        {/* Badge Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Badge
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Variants
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                {Object.keys(badgeStyles.variant).map((variant) => (
                  <Badge key={variant} variant={variant as keyof typeof badgeStyles.variant}>
                    {variant}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Sizes
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                {Object.keys(badgeStyles.size).map((size) => (
                  <Badge key={size} size={size as keyof typeof badgeStyles.size}>
                    Size {size}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Clickable
              </Heading>
              <div className="flex flex-wrap items-start justify-start gap-3">
                <BadgeButton variant="primary">Button Badge</BadgeButton>
                <BadgeLink variant="secondary" href="#">
                  Link Badge
                </BadgeLink>
              </div>
            </div>
          </div>
        </Container>

        {/* Container Component */}
        <div className="space-y-6">
          <Container size="sm">
            <Heading as="h2" size="3xl">
              Container
            </Heading>
            <Text className="mt-2">Different container sizes demonstrated below:</Text>
          </Container>

          {Object.keys(containerStyles.size).map((size) => (
            <div key={size} className="bg-primary-fill/5 py-8">
              <Container size={size as keyof typeof containerStyles.size}>
                <div className="bg-primary-fill/10 rounded-lg p-6">
                  <Heading as="h3" size="lg">
                    Container Size: {size}
                  </Heading>
                  <Text className="mt-2">
                    This container uses the {size}&quot; size variant. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </Text>
                </div>
              </Container>
            </div>
          ))}
        </div>

        {/* Text Components */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Text Components
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="space-y-4">
              <div>
                <Heading as="h3" size="lg" className="mb-2">
                  Text
                </Heading>
                <Text>This is regular text content with proper line height and spacing.</Text>
              </div>
              <div>
                <Heading as="h3" size="lg" className="mb-2">
                  Lead
                </Heading>
                <Lead>
                  This is lead text that stands out with larger font size for introductory content.
                </Lead>
              </div>
              <div>
                <Heading as="h3" size="lg" className="mb-2">
                  Text Link
                </Heading>
                <Text>
                  This paragraph contains a <TextLink href="#">text link</TextLink> within normal
                  text content.
                </Text>
              </div>
              <div>
                <Heading as="h3" size="lg" className="mb-2">
                  Text Formatting
                </Heading>
                <Text>
                  Text with <Strong>strong emphasis</Strong>, <Em>italic emphasis</Em>,{" "}
                  <Highlight>highlighted text</Highlight>, <Code>inline code</Code>, and keyboard
                  shortcuts like <Kbd>Cmd + K</Kbd>.
                </Text>
              </div>
            </div>
          </div>
        </Container>

        {/* Spinner Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Spinner
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <Text className="mb-2 text-sm font-medium">Default</Text>
                <Spinner className="size-5" />
              </div>
              <div className="text-center">
                <Text className="mb-2 text-sm font-medium">Thicker</Text>
                <Spinner className="size-12" thicker />
              </div>
              <div className="text-center">
                <Text className="mb-2 text-sm font-medium">Large</Text>
                <Spinner className="size-8" />
              </div>
              <div className="text-center">
                <Text className="mb-2 text-sm font-medium">Colored</Text>
                <Spinner className="text-primary-fill size-8" />
              </div>
            </div>
          </div>
        </Container>

        {/* Divider Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Divider
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Text className="mb-4">Default divider:</Text>
              <Divider />
            </div>
            <div>
              <Text className="mb-4">Subtle divider:</Text>
              <Divider subtle />
            </div>
          </div>
        </Container>

        {/* Dialog Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Dialog
          </Heading>
          <div className="mt-6">
            <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
          </div>

          <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} size="lg">
            <DialogTitle>Example Dialog</DialogTitle>
            <DialogDescription>
              This is an example dialog with a title, description, and actions.
            </DialogDescription>
            <DialogActions>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>Confirm</Button>
            </DialogActions>
          </Dialog>
        </Container>

        {/* Drawer Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Drawer
          </Heading>
          <div className="mt-6">
            <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
              Open Drawer
            </Button>
          </div>

          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} placement="bottom">
            <DrawerTitle>Example Drawer</DrawerTitle>
            <DrawerDescription>
              This is an example drawer that slides up from the bottom of the screen.
            </DrawerDescription>
            <DrawerActions>
              <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDrawerOpen(false)}>Confirm</Button>
            </DrawerActions>
          </Drawer>
        </Container>

        {/* Checkbox Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Checkbox
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Colors
              </Heading>
              <CheckboxGroup>
                {Object.keys(checkboxStyles.colors).map((color) => (
                  <CheckboxField key={color}>
                    <Checkbox
                      color={color as keyof typeof checkboxStyles.colors}
                      checked={checkboxValues[color] || false}
                      onChange={(checked) =>
                        setCheckboxValues((prev) => ({ ...prev, [color]: checked }))
                      }
                    />
                    <Label>{color}</Label>
                  </CheckboxField>
                ))}
              </CheckboxGroup>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                States
              </Heading>
              <CheckboxGroup>
                <CheckboxField>
                  <Checkbox
                    checked={checkboxValues.normal || false}
                    onChange={(checked) =>
                      setCheckboxValues((prev) => ({ ...prev, normal: checked }))
                    }
                  />
                  <Label>Normal</Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox indeterminate />
                  <Label>Indeterminate</Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox disabled />
                  <Label>Disabled</Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox checked disabled />
                  <Label>Checked & Disabled</Label>
                </CheckboxField>
              </CheckboxGroup>
            </div>
          </div>
        </Container>

        {/* Radio Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Radio
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Colors
              </Heading>
              <RadioGroup value={radioValue} onChange={setRadioValue}>
                {Object.keys(radioStyles.colors).map((color) => (
                  <RadioField key={color}>
                    <Radio value={color} color={color as keyof typeof radioStyles.colors} />
                    <Label>{color}</Label>
                  </RadioField>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                States
              </Heading>
              <RadioGroup value="" onChange={() => {}}>
                <RadioField>
                  <Radio value="normal" />
                  <Label>Normal</Label>
                </RadioField>
                <RadioField>
                  <Radio value="selected" />
                  <Label>Selected (checked state)</Label>
                </RadioField>
                <RadioField>
                  <Radio value="disabled" disabled />
                  <Label>Disabled</Label>
                </RadioField>
                <RadioField>
                  <Radio value="disabled-selected" disabled />
                  <Label>Disabled & Selected</Label>
                </RadioField>
              </RadioGroup>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                With Description
              </Heading>
              <RadioGroup value="" onChange={() => {}}>
                <RadioField>
                  <Radio value="option1" />
                  <Label>Option 1</Label>
                  <Description>This is the first option with additional details.</Description>
                </RadioField>
                <RadioField>
                  <Radio value="option2" />
                  <Label>Option 2</Label>
                  <Description>This is the second option with more information.</Description>
                </RadioField>
              </RadioGroup>
            </div>
          </div>
        </Container>

        {/* Input Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Input
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Text className="mb-2 text-sm font-medium">Text Input</Text>
                <Input
                  type="text"
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Email Input</Text>
                <Input type="email" placeholder="Enter email..." />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Password Input</Text>
                <Input type="password" placeholder="Enter password..." />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Number Input</Text>
                <Input type="number" placeholder="Enter number..." />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Date Input</Text>
                <Input type="date" />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Search Input</Text>
                <Input type="search" placeholder="Search..." />
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Input with Icons
              </Heading>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Text className="mb-2 text-sm font-medium">With Leading Icon</Text>
                  <InputGroup>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                    <Input type="search" placeholder="Search..." />
                  </InputGroup>
                </div>
                <div>
                  <Text className="mb-2 text-sm font-medium">With Trailing Icon</Text>
                  <InputGroup>
                    <Input type="email" placeholder="Enter email..." />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </InputGroup>
                </div>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                States
              </Heading>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Text className="mb-2 text-sm font-medium">Disabled</Text>
                  <Input type="text" placeholder="Disabled input" disabled />
                </div>
                <div>
                  <Text className="mb-2 text-sm font-medium">Invalid</Text>
                  <Input type="email" placeholder="Invalid email" invalid />
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Select Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Select
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Text className="mb-2 text-sm font-medium">Single Select</Text>
                <Select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                  <option value="">Choose an option...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">With Optgroups</Text>
                <Select>
                  <option value="">Choose a fruit...</option>
                  <optgroup label="Citrus">
                    <option value="orange">Orange</option>
                    <option value="lemon">Lemon</option>
                    <option value="lime">Lime</option>
                  </optgroup>
                  <optgroup label="Berries">
                    <option value="strawberry">Strawberry</option>
                    <option value="blueberry">Blueberry</option>
                    <option value="raspberry">Raspberry</option>
                  </optgroup>
                </Select>
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Multiple Select</Text>
                <Select multiple>
                  <option value="tag1">Tag 1</option>
                  <option value="tag2">Tag 2</option>
                  <option value="tag3">Tag 3</option>
                  <option value="tag4">Tag 4</option>
                  <option value="tag5">Tag 5</option>
                </Select>
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Disabled</Text>
                <Select disabled>
                  <option value="">Disabled select</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </Select>
              </div>
            </div>
          </div>
        </Container>

        {/* Textarea Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Textarea
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Text className="mb-2 text-sm font-medium">Default Textarea</Text>
                <Textarea
                  placeholder="Enter your message..."
                  rows={4}
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Non-resizable</Text>
                <Textarea
                  placeholder="This textarea cannot be resized..."
                  rows={4}
                  resizable={false}
                />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Disabled</Text>
                <Textarea placeholder="Disabled textarea..." rows={4} disabled />
              </div>
              <div>
                <Text className="mb-2 text-sm font-medium">Invalid</Text>
                <Textarea placeholder="Invalid textarea..." rows={4} invalid />
              </div>
            </div>
          </div>
        </Container>

        {/* Alert Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Alert
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Variants
              </Heading>
              <div className="space-y-4">
                <Alert
                  variant="primary"
                  isOpen={alertStates.primary}
                  onClose={(open) => setAlertStates((prev) => ({ ...prev, primary: open }))}
                >
                  <AlertInfoIcon />
                  <AlertContent>
                    <AlertTitle>Primary Alert</AlertTitle>
                    <AlertDescription>
                      This is a primary alert message with some additional information.
                    </AlertDescription>
                  </AlertContent>
                  <AlertCloseButton />
                </Alert>
                <Alert
                  variant="secondary"
                  isOpen={alertStates.secondary}
                  onClose={(open) => setAlertStates((prev) => ({ ...prev, secondary: open }))}
                >
                  <AlertBulbIcon />
                  <AlertContent>
                    <AlertTitle>Secondary Alert</AlertTitle>
                    <AlertDescription>
                      This is a secondary alert message with some additional information.
                    </AlertDescription>
                  </AlertContent>
                  <AlertCloseButton />
                </Alert>
                <Alert
                  variant="tertiary"
                  isOpen={alertStates.tertiary}
                  onClose={(open) => setAlertStates((prev) => ({ ...prev, tertiary: open }))}
                >
                  <AlertInfoIcon />
                  <AlertContent>
                    <AlertTitle>Tertiary Alert</AlertTitle>
                    <AlertDescription>
                      This is a tertiary alert message with some additional information.
                    </AlertDescription>
                  </AlertContent>
                  <AlertCloseButton />
                </Alert>
                <Alert
                  variant="error"
                  isOpen={alertStates.error}
                  onClose={(open) => setAlertStates((prev) => ({ ...prev, error: open }))}
                >
                  <AlertErrorIcon />
                  <AlertContent>
                    <AlertTitle>Error Alert</AlertTitle>
                    <AlertDescription>
                      This is an error alert message indicating something went wrong.
                    </AlertDescription>
                  </AlertContent>
                  <AlertCloseButton />
                </Alert>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Composed Alert
              </Heading>
              <AlertComposed
                variant="primary"
                title="Success!"
                description="Your action was completed successfully."
                isDismissable={false}
              />
            </div>
          </div>
        </Container>

        {/* Dropdown Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Dropdown
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="flex flex-wrap gap-4">
              <Dropdown>
                <DropdownButton>
                  Options <DropdownTriggerIcon />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Duplicate</DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>Archive</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown>
                <DropdownButton variant="outline">
                  Actions <DropdownTriggerIcon />
                </DropdownButton>
                <DropdownMenu>
                  <DropdownSection>
                    <DropdownHeading>Quick Actions</DropdownHeading>
                    <DropdownItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </DropdownItem>
                    <DropdownItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                      Duplicate
                    </DropdownItem>
                  </DropdownSection>
                  <DropdownDivider />
                  <DropdownSection>
                    <DropdownHeading>Danger Zone</DropdownHeading>
                    <DropdownItem>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      Delete
                    </DropdownItem>
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Container>

        {/* Avatar Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Avatar
          </Heading>
          <div className="mt-6 space-y-6">
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Sizes
              </Heading>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Size 6</Text>
                  <Avatar className="bg-primary-fill/10 size-6">
                    <AvatarInitials name="John Doe" />
                  </Avatar>
                </div>
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Size 8</Text>
                  <Avatar className="bg-secondary-fill/10 size-8">
                    <AvatarInitials name="Jane Smith" />
                  </Avatar>
                </div>
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Size 10</Text>
                  <Avatar className="bg-tertiary-fill/10 size-10">
                    <AvatarInitials name="Mike Johnson" />
                  </Avatar>
                </div>
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Size 12</Text>
                  <Avatar className="bg-primary-fill/20 size-12">
                    <AvatarInitials name="Sarah Wilson" />
                  </Avatar>
                </div>
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Size 16</Text>
                  <Avatar className="bg-secondary-fill/20 size-16">
                    <AvatarInitials name="David Brown" />
                  </Avatar>
                </div>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Background Colors
              </Heading>
              <div className="flex flex-wrap items-center gap-6">
                <Avatar className="size-12 bg-red-100 text-red-700">
                  <AvatarInitials name="Red User" />
                </Avatar>
                <Avatar className="size-12 bg-blue-100 text-blue-700">
                  <AvatarInitials name="Blue User" />
                </Avatar>
                <Avatar className="size-12 bg-green-100 text-green-700">
                  <AvatarInitials name="Green User" />
                </Avatar>
                <Avatar className="size-12 bg-yellow-100 text-yellow-700">
                  <AvatarInitials name="Yellow User" />
                </Avatar>
                <Avatar className="size-12 bg-purple-100 text-purple-700">
                  <AvatarInitials name="Purple User" />
                </Avatar>
                <Avatar className="size-12 bg-gray-100 text-gray-700">
                  <AvatarInitials name="Gray User" />
                </Avatar>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Shapes
              </Heading>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Round</Text>
                  <Avatar className="bg-primary-fill/10 size-12">
                    <AvatarInitials name="Round Avatar" />
                  </Avatar>
                </div>
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Square</Text>
                  <Avatar square className="bg-secondary-fill/10 size-12">
                    <AvatarInitials name="Square Avatar" />
                  </Avatar>
                </div>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                With Images
              </Heading>
              <div className="flex flex-wrap items-center gap-6">
                <Avatar className="size-12 bg-gray-100">
                  <AvatarInitials name="John Doe" />
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&crop=face"
                    alt="John Doe"
                  />
                </Avatar>
                <Avatar square className="size-12 bg-gray-100">
                  <AvatarInitials name="Jane Smith" />
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b602?w=256&h=256&fit=crop&crop=face"
                    alt="Jane Smith"
                  />
                </Avatar>
                <Avatar className="size-12 bg-gray-100">
                  <AvatarInitials name="Mike Johnson" />
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face"
                    alt="Mike Johnson"
                  />
                </Avatar>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Interactive Avatars
              </Heading>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Button</Text>
                  <AvatarButton className="bg-primary-fill/10 size-12">
                    <AvatarInitials name="Clickable Avatar" />
                  </AvatarButton>
                </div>
                <div className="text-center">
                  <Text className="mb-2 text-sm font-medium">Link</Text>
                  <AvatarLink href="#" className="bg-secondary-fill/10 size-12">
                    <AvatarInitials name="Link Avatar" />
                  </AvatarLink>
                </div>
              </div>
            </div>
            <div>
              <Heading as="h3" size="lg" className="mb-4">
                Avatar Group
              </Heading>
              <div className="space-y-4">
                <div>
                  <Text className="mb-2 text-sm font-medium">Small offset</Text>
                  <AvatarGroup offset="sm">
                    <Avatar className="size-10 bg-red-100 text-red-700">
                      <AvatarInitials name="User One" />
                    </Avatar>
                    <Avatar className="size-10 bg-blue-100 text-blue-700">
                      <AvatarInitials name="User Two" />
                    </Avatar>
                    <Avatar className="size-10 bg-green-100 text-green-700">
                      <AvatarInitials name="User Three" />
                    </Avatar>
                    <Avatar className="size-10 bg-yellow-100 text-yellow-700">
                      <AvatarInitials name="User Four" />
                    </Avatar>
                  </AvatarGroup>
                </div>
                <div>
                  <Text className="mb-2 text-sm font-medium">Medium offset</Text>
                  <AvatarGroup offset="md">
                    <Avatar className="size-12 bg-purple-100 text-purple-700">
                      <AvatarInitials name="Alpha User" />
                    </Avatar>
                    <Avatar className="size-12 bg-pink-100 text-pink-700">
                      <AvatarInitials name="Beta User" />
                    </Avatar>
                    <Avatar className="size-12 bg-indigo-100 text-indigo-700">
                      <AvatarInitials name="Gamma User" />
                    </Avatar>
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Fieldset Component */}
        <Container size="sm">
          <Heading as="h2" size="3xl">
            Fieldset
          </Heading>
          <div className="mt-6 space-y-6">
            <Fieldset>
              <Legend>User Information</Legend>
              <Field>
                <Label>Full Name</Label>
                <Input type="text" placeholder="Enter your full name" />
                <Description>This will be displayed publicly on your profile.</Description>
              </Field>
              <Field>
                <Label>Email Address</Label>
                <Input type="email" placeholder="Enter your email" />
                <Description>We`&apos;ll never share your email with anyone else.</Description>
              </Field>
              <Field>
                <Label>Bio</Label>
                <Textarea placeholder="Tell us about yourself..." rows={3} />
                <Description>A brief description about yourself.</Description>
              </Field>
            </Fieldset>

            <Fieldset>
              <Legend>Preferences</Legend>
              <Field>
                <Label>Notifications</Label>
                <CheckboxGroup>
                  <CheckboxField>
                    <Checkbox />
                    <HeadlessLabel>Email notifications</HeadlessLabel>
                  </CheckboxField>
                  <CheckboxField>
                    <Checkbox />
                    <HeadlessLabel>SMS notifications</HeadlessLabel>
                  </CheckboxField>
                </CheckboxGroup>
              </Field>
              <Field>
                <Label>Theme</Label>
                <Select>
                  <option value="">Select theme...</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </Select>
              </Field>
            </Fieldset>

            <Fieldset disabled>
              <Legend>Disabled Fieldset</Legend>
              <Field>
                <Label>This field is disabled</Label>
                <Input type="text" placeholder="Can't edit this" />
                <Description>All fields in this fieldset are disabled.</Description>
              </Field>
            </Fieldset>
          </div>
        </Container>
      </div>
    </>
  );
}
