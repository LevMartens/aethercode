"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Sparkles,
  CheckCircle,
  Mail,
  Building,
  User,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

interface FloatingLabelInputProps {
  id: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  icon?: LucideIcon;
  className?: string;
}

// Floating Label Input Component
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  id,
  type = "text",
  label,
  value,
  onChange,
  required = false,
  icon: Icon,
  className = "",
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 z-10" />
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={`
            peer w-full h-14 px-4 ${Icon ? "pl-12" : "px-4"} 
            bg-white dark:bg-neutral-950 
            border border-neutral-300 dark:border-neutral-700
            rounded-lg
            text-neutral-900 dark:text-neutral-100
            placeholder-transparent
            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
            transition-all duration-200
            ${className}
          `}
          placeholder={label}
        />
        <motion.label
          htmlFor={id}
          initial={false}
          animate={{
            y: focused || hasValue ? -15 : 6,
            scale: focused || hasValue ? 0.85 : 1,
            x: focused || hasValue ? (Icon ? 8 : -8) : Icon ? 40 : 12,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`
            absolute left-3 pointer-events-none
            text-neutral-500 dark:text-neutral-400
            origin-left
             px-1 bg-white dark:bg-neutral-950
           
             px-2 py-0.5
            ${focused || hasValue ? "text-blue-500 dark:text-blue-400" : ""}
          `}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </motion.label>
      </div>
    </div>
  );
};

interface FloatingLabelTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

// Floating Label Textarea
const FloatingLabelTextarea: React.FC<FloatingLabelTextareaProps> = ({
  id,
  label,
  value,
  onChange,
  required = false,
  rows = 4,
  className = "",
}) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-neutral-400 z-10" />
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={rows}
          className={`
            peer w-full pl-12 pr-4 py-4
            bg-white dark:bg-neutral-950 
            border border-neutral-300 dark:border-neutral-700
            rounded-lg
            text-neutral-900 dark:text-neutral-100
            placeholder-transparent
            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
            transition-all duration-200
            resize-none
            ${className}
          `}
          placeholder={label}
        />
        <motion.label
          htmlFor={id}
          initial={false}
          animate={{
            y: focused || hasValue ? -15 : 16,
            scale: focused || hasValue ? 0.85 : 1,
            x: focused || hasValue ? 8 : 40,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`
            absolute left-3 pointer-events-none
            text-neutral-500 dark:text-neutral-400
            origin-left
            px-1 bg-white dark:bg-neutral-950
      
             px-2 py-0.5
            ${focused || hasValue ? "text-blue-500 dark:text-blue-400" : ""}
          `}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </motion.label>
      </div>
    </div>
  );
};

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
}

// Glowing Button Component
const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  type = "button",
}) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative w-full h-14 px-8
        bg-gradient-to-r from-blue-600 to-purple-600
        hover:from-blue-500 hover:to-purple-500
        text-white font-semibold rounded-lg
        shadow-lg shadow-blue-500/25
        transition-all duration-300
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        overflow-hidden
        group
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

      <div className="relative flex items-center justify-center gap-3">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </motion.div>
          ) : (
            <motion.div
              key="send"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <Send className="h-5 w-5" />
              <span>{children}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sparkle effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Sparkles className="absolute top-2 left-4 h-3 w-3 text-white/60 animate-pulse" />
        <Sparkles className="absolute bottom-3 right-6 h-2 w-2 text-white/40 animate-pulse delay-150" />
        <Sparkles className="absolute top-1/2 right-4 h-2 w-2 text-white/50 animate-pulse delay-300" />
      </div>
    </motion.button>
  );
};

// Success Message Component
const SuccessMessage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    className="text-center py-8"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
    >
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
    </motion.div>
    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
      Project Inquiry Submitted!
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400">
      We&apos;ve received your project details and will get back to you within
      24 hours with next steps.
    </p>
  </motion.div>
);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export function ContactSection(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6">
        <SuccessMessage />
        <motion.button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              company: "",
              message: "",
            });
          }}
          className="mt-6 mx-auto block text-blue-600 dark:text-blue-400 hover:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit another inquiry
        </motion.button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent mb-4"
          >
            See Your Vision Come&nbsp;to&nbsp;Life
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto"
          >
            Ready to transform your idea into reality? Let&apos;s discuss your
            project and create something extraordinary together.
          </motion.p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-6 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl bg-white dark:bg-neutral-950"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FloatingLabelInput
              id="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              required
              icon={User}
            />
            <FloatingLabelInput
              id="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              required
              icon={User}
            />
          </div>

          <FloatingLabelInput
            id="email"
            type="email"
            label="Work Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            icon={Mail}
          />

          <FloatingLabelInput
            id="company"
            label="Company Name"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            required
            icon={Building}
          />

          <FloatingLabelTextarea
            id="message"
            label="Tell us about your project"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={4}
          />

          <GlowingButton loading={loading} type="submit">
            Start Your Project
          </GlowingButton>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400"
        >
          Prefer email? Reach out directly at{" "}
          <motion.a
            href="mailto:lev@aethercode.com.au"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            whileHover={{ scale: 1.05 }}
          >
            lev@aethercode.com.au
          </motion.a>
        </motion.p>
      </motion.div>
    </div>
  );
}
