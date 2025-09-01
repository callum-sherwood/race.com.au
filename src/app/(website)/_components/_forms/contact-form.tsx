"use client";

import { Form } from "@/core/ui/form";
import cn from "@/core/utils/class-names";
import {
  ContactFormSchema,
  contactFormSchema,
} from "@/validators/contact-form.schema";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Button } from "rizzui/button";
import { Input } from "rizzui/input";
import { Textarea } from "rizzui/textarea";

type Props = {
  className?: string;
};

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm = ({ className }: Props) => {
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<ContactFormSchema> = (data) => {
    console.log(data);
    setReset(initialValues);
  };
  return (
    <div className={cn("", className)}>
      <Form<ContactFormSchema>
        validationSchema={contactFormSchema}
        resetValues={reset}
        onSubmit={onSubmit}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-4">
            <Input
              type="text"
              size="xl"
              variant="flat"
              placeholder="Enter your name"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm bg-[#F6F6F6] rounded-lg h-12"
              {...register("name")}
              error={errors.name?.message}
              errorClassName="text-red-500 pl-2"
            />
            <Input
              type="email"
              size="xl"
              variant="flat"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm bg-[#F6F6F6] rounded-lg h-12"
              {...register("email")}
              error={errors.email?.message}
              errorClassName="text-red-500 pl-2"
            />
            <Input
              type="tel"
              size="xl"
              variant="flat"
              placeholder="Enter your phone number"
              className="[&>label>span]:font-medium"
              inputClassName="text-sm bg-[#F6F6F6] rounded-lg h-12"
              {...register("phone")}
              error={errors.phone?.message}
              errorClassName="text-red-500 pl-2"
            />

            <Textarea
              size="xl"
              variant="flat"
              placeholder="Enter your phone number"
              className="[&>label>span]:font-medium"
              textareaClassName="text-sm bg-[#F6F6F6] rounded-lg"
              {...register("message")}
              error={errors.message?.message}
            />
            <Button
              className="rounded-full bg-brand-green  text-white border-0 !cursor-pointer mt-2 w-full"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ContactForm;
