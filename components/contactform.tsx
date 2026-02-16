'use client';
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, Linkedin, Loader2, LocateIcon, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Phone optional in development (test), required in production (publish/deploy)
const isProduction = process.env.NODE_ENV === 'production';
const phoneSchema = isProduction
  ? z
      .string()
      .min(1, "Phone number is required")
      .regex(/^[\d\s\-\+\(\)]+$/, "Phone number can only contain digits, spaces, dashes, plus sign, and parentheses")
      .refine((val) => {
        const digitsOnly = val.replace(/\D/g, '');
        return digitsOnly.length >= 7 && digitsOnly.length <= 15;
      }, {
        message: "Phone number must contain between 7 and 15 digits (international format)",
      })
  : z
      .string()
      .optional()
      .refine(
        (val) => {
          if (!val || val.trim() === '') return true;
          if (!/^[\d\s\-\+\(\)]+$/.test(val)) return false;
          const digitsOnly = val.replace(/\D/g, '');
          return digitsOnly.length >= 7 && digitsOnly.length <= 15;
        },
        { message: "Phone must be 7–15 digits when provided" }
      );

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),
  phone: phoneSchema,
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

{/* CONTACT FORM */}
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-5 md:mb-8 relative w-full col-span-2"
  >

{/* BACKGROUND GLOW */}
<div className="absolute inset-0">
                {/* soft background glow */}
           
<div
          className="absolute bottom-0 -left-10   w-100 h-100 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
          }}
        />
        </div> 

        {/* FORM */}
        <div className="relative z-20 mx-auto bg-white text-left border border-gray-100 rounded-2xl shadow-xl p-10 z-20">
          {/* TITLE */}
          <div className="max-w-3xl mx-auto mb-8">
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Welcome to GrowthOptics
            </h1>
            <p className="mt-4 text-muted">
              Send us your query, our team will connect with you as soon as we receive your message.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-3 flex flex-col ">
                {/* First Name and Last Name */}
                <div className="flex flex-row items-start flex-wrap gap-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone – optional in dev (test), required in production (deploy) */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone{!isProduction ? ' (optional)' : ''}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+91 9960414939 or +1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us about your project or inquiry..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary text-white transition-all duration-300 hover:bg-accent/90 "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        </motion.div>
      

      {/* CONTACT INFO */}
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-5 md:mb-8 flex flex-col items-center justify-start gap-5 w-full"
  >
        {/* INFO ROW */}
        <div className="flex flex-col items-center justify-start gap-5 w-full 
        rounded-2xl   border border-gray-100 rounded-2xl p-8  text-left">
         
          <h2 className="text-xl font-bold text-foreground  w-full">Get In Touch</h2>
          <div className="flex flex-col gap-5 w-full">
            
            
            <a
              href="mailto:hello@example.com"
              className="text-foreground hover:underline flex flex-row items-center justify-start gap-2 w-full"
            >
              <MailIcon className="text-secondary w-5 h-5" />
               connect@growthoptics.in
            </a>
            {/* <a
              href="tel:+919960414939"
              className="text-foreground hover:underline flex flex-row items-center justify-start gap-2 w-full"
            >
              <PhoneCallIcon className="text-secondary w-5 h-5" />
              +91 9960414939
            </a> */}

            <div className="flex justify-start gap-4">
              {[
                // {
                //   href: "https://www.facebook.com/",
                //   icon: <FacebookIcon className="text-white w-4 h-4" />,
                // },
                // {
                //   href: "https://www.instagram.com/",
                //   icon: <InstagramIcon className="text-white w-4 h-4" />,
                // },
                // {
                //   href: "https://www.twitter.com/",
                //   icon: <Linkedin className="text-white w-4 h-4" />,
                // },
                { href: "https://www.linkedin.com/company/86808961/", icon: <Linkedin className="text-white w-4 h-4" /> },
                { href:  "mailto:hello@example.com", icon: <MailIcon className="text-white w-4 h-4" /> },
              ].map((item, i) => (
                <Link
                key={i}
                href={item.href}
                target="_blank"
                className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center hover:scale-105 transition"
              >
                {item.icon}
              </Link>
                
              ))}
            </div>
          </div>

        </div>

        {/* ADDRESS */}
        <div className="flex flex-col items-center justify-start gap-5 w-full 
        rounded-2xl  mb-20 border border-gray-100 rounded-2xl p-8  text-left">
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <MapPinIcon className="text-secondary w-6 h-6" />
            <p className="text-muted">
            No. 21 & 21A, Sector 142,<br className="hidden md:block" /> Noida - 201304
            </p>
          </div>
        </div>
        </motion.div>
        </div>
      </section>
    );
  }
