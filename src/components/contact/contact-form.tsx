"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { Fieldset, Field, Label, ErrorMessage } from "../fieldset";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { Checkbox, CheckboxField } from "../checkbox";
import { Button } from "../button";
import { TextLink } from "../text";
import { Alert, AlertContent, AlertDescription, AlertInfoIcon, AlertTitle } from "../alert";
import clsx from "clsx";

// Note: This form can be submitted only with correctly configured .env variables

const contactSchema = z.object({
  name: z.string().min(1, "Jméno je povinné").min(2, "Jméno musí mít alespoň 2 znaky"),
  surname: z.string().min(1, "Příjmení je povinné").min(2, "Příjmení musí mít alespoň 2 znaky"),
  email: z.string().min(1, "E-mail je povinný").pipe(z.email("Neplatná e-mailová adresa")),
  message: z.string().min(1, "Zpráva je povinná").min(10, "Zpráva musí mít alespoň 10 znaků"),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, "Musíte souhlasit se zpracováním osobních údajů"),
});

type FormData = z.infer<typeof contactSchema>;

export function ContactForm(props: React.ComponentProps<"div">) {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
      gdprConsent: false,
    },
  });

  async function onSubmit(data: FormData) {
    try {
      setSubmitStatus({ type: null, message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          email: data.email,
          message: data.message,
          gdprConsent: data.gdprConsent,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Zpráva byla úspěšně odeslána!",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Došlo k chybě při odesílání zprávy.",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Došlo k chybě při odesílání zprávy.",
      });
    }
  }

  return (
    <div {...props} className={clsx("@container", props.className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <div className="grid gap-4">
            <div className="grid gap-4 @sm:grid-cols-2">
              <Field>
                <Label>Jméno</Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => <Input type="text" {...field} invalid={!!errors.name} />}
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </Field>

              <Field>
                <Label>Příjmení</Label>
                <Controller
                  name="surname"
                  control={control}
                  render={({ field }) => (
                    <Input type="text" {...field} invalid={!!errors.surname} />
                  )}
                />
                {errors.surname && <ErrorMessage>{errors.surname.message}</ErrorMessage>}
              </Field>
            </div>

            <Field>
              <Label>E-mail</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input type="email" {...field} invalid={!!errors.email} />}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Field>

            <Field>
              <Label>Zpráva</Label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => <Textarea {...field} rows={4} invalid={!!errors.message} />}
              />
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Field>

            <CheckboxField>
              <Controller
                name="gdprConsent"
                control={control}
                render={({ field: { value, onChange, ...field } }) => (
                  <Checkbox {...field} checked={value} onChange={onChange} />
                )}
              />
              <Label>
                Souhlasím se <TextLink href="/gdpr">zpracováním osobních údajů</TextLink>
              </Label>
              {errors.gdprConsent && <ErrorMessage>{errors.gdprConsent.message}</ErrorMessage>}
            </CheckboxField>
          </div>
        </Fieldset>

        {submitStatus.type && (
          <Alert className="mt-6" variant="tertiary">
            <AlertInfoIcon />
            <AlertContent>
              <AlertTitle>{submitStatus.type === "success" ? "Úspěch" : "Chyba"}</AlertTitle>
              <AlertDescription>{submitStatus.message}</AlertDescription>
            </AlertContent>
          </Alert>
        )}

        <Button
          type="submit"
          size="xl"
          className="mt-6 w-full md:mt-8"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Odeslat zprávu
        </Button>
      </form>
    </div>
  );
}
