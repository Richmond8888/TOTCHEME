import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  age?: number;
  conceptionDuration?: string;
  message?: string;
}

export function useContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Succès !",
        description: data.message || "Votre demande a été envoyée avec succès!",
      });
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  return {
    submitContactForm: submitContactForm.mutate,
    isSubmitting,
    isError: submitContactForm.isError,
    isSuccess: submitContactForm.isSuccess,
  };
}
