import { z } from "zod";
import { validateEmail } from "./common-rules";
import { messages } from "@/config/messages";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is  required" }),
  email: validateEmail,
  phone: z.string().min(2, { message: messages.phoneNumberIsRequired }),
  message: z.string().optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
