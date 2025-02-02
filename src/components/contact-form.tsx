import { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactForm = z.infer<typeof contactSchema>;

const initialFormData: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactForm>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    emailjs.init(emailConfig.publicKey);
  }, []);

  const validateField = useCallback((name: keyof ContactForm, value: string) => {
    try {
      contactSchema.shape[name].parse(value);
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({
          ...prev,
          [name]: error.errors[0].message,
        }));
      }
    }
  }, []);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name as keyof ContactForm, value);
  }, [validateField]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const validatedData = contactSchema.parse(formData);
      
      if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
        throw new Error("La configuration EmailJS est incomplète");
      }

      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message,
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData(initialFormData);
        setErrors({});
      } else {
        throw new Error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error('Erreur:', error);
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(newErrors);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formAnimation = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonAnimation = {
    rest: { scale: 1 },
    hover: { scale: shouldReduceMotion ? 1 : 1.05 },
    tap: { scale: shouldReduceMotion ? 1 : 0.95 }
  };

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={formAnimation}
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-2xl mx-auto"
      style={{ 
        willChange: "opacity, transform",
        transform: "translateZ(0)"
      }}
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-card border ${
              errors.name ? 'border-red-500' : 'border-input'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-card border ${
              errors.email ? 'border-red-500' : 'border-input'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-card border ${
              errors.subject ? 'border-red-500' : 'border-input'
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full p-3 rounded-lg bg-card border ${
              errors.message ? 'border-red-500' : 'border-input'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>
      </div>

      <div className="relative">
        <motion.button
          variants={buttonAnimation}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium 
                   hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ willChange: "transform" }}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </motion.button>

        <AnimatePresence mode="wait">
          {submitStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-green-500 text-center"
            >
              Message envoyé avec succès !
            </motion.p>
          )}

          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-red-500 text-center"
            >
              Une erreur est survenue. Veuillez réessayer.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
};
