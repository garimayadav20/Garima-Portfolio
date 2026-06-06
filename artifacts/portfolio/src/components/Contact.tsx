import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock submission
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Outfit']">Let's Connect</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            <p className="text-slate-600 mb-8 text-lg">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4 text-slate-700">
              <p className="flex items-center">
                <span className="font-semibold w-24">Location:</span> 
                San Francisco, CA
              </p>
              <p className="flex items-center">
                <span className="font-semibold w-24">Email:</span> 
                <a href="mailto:hello@garimayadav.com" className="text-primary hover:underline">hello@garimayadav.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            {isSubmitted ? (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-12 text-center flex flex-col items-center justify-center h-full min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Outfit']">Message Sent!</h3>
                <p className="text-slate-600 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-slate-50 border-slate-200 focus-visible:ring-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we work together?" 
                            className="bg-slate-50 border-slate-200 focus-visible:ring-primary min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 rounded-full font-semibold text-base" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
