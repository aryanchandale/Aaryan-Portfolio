import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Please enter your name";
    if (!formData.email.trim()) {
      next.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) next.message = "Please enter a message";
    else if (formData.message.trim().length < 10) next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:aryanchandale152@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status === "success") setStatus("idle");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-2xl"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            aria-invalid={errors.name ? "true" : "false"}
            className="h-12 rounded-2xl border-border bg-card/50 px-4"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="your@email.com"
            aria-invalid={errors.email ? "true" : "false"}
            className="h-12 rounded-2xl border-border bg-card/50 px-4"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange("message")}
          placeholder="Tell me about your project, opportunity, or just say hi..."
          rows={5}
          aria-invalid={errors.message ? "true" : "false"}
          className="min-h-[140px] resize-none rounded-2xl border-border bg-card/50 px-4 py-3"
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-1.5 text-xs text-destructive"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-full bg-foreground px-8 text-background hover:bg-foreground/90 sm:w-auto"
        >
          <Send className="mr-2 h-4 w-4" />
          Send message
        </Button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400"
            >
              <Check className="h-4 w-4" />
              Opening your email client...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}
