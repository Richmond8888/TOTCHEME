import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(100, "Nom trop long"),
  email: z.string().email("Email invalide").max(255, "Email trop long"),
  phone: z.string().min(8, "Numéro de téléphone invalide").max(20, "Numéro trop long"),
  age: z.coerce.number().min(18, "Âge minimum 18 ans").max(100, "Âge maximum 100 ans").optional(),
  conceptionDuration: z.string().optional(),
  message: z.string().max(1000, "Message trop long (maximum 1000 caractères)").optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: undefined,
      conceptionDuration: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const response = await apiRequest("POST", "/api/contact", data);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Erreur lors de l'envoi:", error);
        throw error;
      }
    },
    onSuccess: (data) => {
      toast({
        title: "Succès !",
        description: data.message,
      });
      form.reset();
      
      // Redirection vers l'email avec toutes les données
      const formData = data; // Utiliser les données validées
      const subject = encodeURIComponent("🌿 Nouvelle demande de consultation - TOTCHEME SANTÉ ET VIE");
      const body = encodeURIComponent(`
═══════════════════════════════════════════════════════════════
          🌿 TOTCHEME SANTÉ ET VIE - DEMANDE DE CONSULTATION 🌿
═══════════════════════════════════════════════════════════════

📋 INFORMATIONS PERSONNELLES:
────────────────────────────────────────────────────────────
👤 Nom complet: ${formData.fullName}
📧 Email: ${formData.email}
📞 Téléphone: ${formData.phone}
🎂 Âge: ${formData.age || 'Non spécifié'}

🏥 INFORMATIONS MÉDICALES:
────────────────────────────────────────────────────────────
⏰ Durée des difficultés de conception: ${formData.conceptionDuration || 'Non spécifiée'}

💬 MESSAGE DU PATIENT:
────────────────────────────────────────────────────────────
${formData.message || 'Aucun message personnalisé'}

📅 Date de la demande: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}

═══════════════════════════════════════════════════════════════
⚡ ACTION REQUISE: Veuillez contacter cette personne dans les 24h pour planifier une consultation.
═══════════════════════════════════════════════════════════════
      `);
      
      // Ouvrir l'email automatiquement avec fallback
      try {
        setTimeout(() => {
          const mailtoLink = `mailto:totchemesanteetvie@gmail.com?subject=${subject}&body=${body}`;
          
          // Essayer d'ouvrir le client email
          const mailWindow = window.open(mailtoLink, '_blank');
          
          // Fallback si l'ouverture échoue
          if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
            // Proposer de copier les informations
            toast({
              title: "📧 Email à envoyer",
              description: "Votre client email ne s'est pas ouvert automatiquement. Copiez et envoyez ces informations à totchemesanteetvie@gmail.com",
            });
            
            // Copier dans le presse-papier si possible
            const emailContent = `${decodeURIComponent(subject)}\n\n${decodeURIComponent(body)}`;
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(emailContent).catch(() => {
                console.log("Impossible de copier automatiquement");
              });
            }
          }
        }, 1500);
      } catch (error) {
        console.error("Erreur lors de l'ouverture de l'email:", error);
        toast({
          title: "📧 Contactez-nous",
          description: "Envoyez vos informations à totchemesanteetvie@gmail.com",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    // Validation supplémentaire avant envoi
    if (!data.fullName.trim() || !data.email.trim() || !data.phone.trim()) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }
    
    console.log("📋 Envoi des données:", data);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      content: "+229 01 91 85 85 25",
      href: "https://wa.me/2290191858525",
      color: "bg-leaf-green"
    },
    {
      icon: Mail,
      title: "Email",
      content: "totchemesanteetvie@gmail.com",
      href: "mailto:totchemesanteetvie@gmail.com",
      color: "bg-soft-gold"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi - Dimanche: 8h - 20h",
      href: null,
      color: "bg-pale-pink"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Commencez Votre <span className="text-leaf-green">Parcours</span>
          </h2>
          <p className="text-xl text-gray-600">
            Contactez-nous dès aujourd'hui pour une consultation personnalisée
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mr-4`}>
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-leaf-green hover:text-emerald transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Séance de guérison spirituelle paisible avec bougies et éléments naturels"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-warm-beige rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Demande de Consultation
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" autoComplete="on">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom complet *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Votre nom complet" 
                            autoComplete="name"
                            {...field} 
                          />
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="votre@email.com" 
                            autoComplete="email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="XX XX XX XX" 
                            autoComplete="tel"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Âge</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Votre âge"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="conceptionDuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Durée des difficultés de conception</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez une durée" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="moins-6-mois">Moins de 6 mois</SelectItem>
                            <SelectItem value="6-mois-1-an">6 mois - 1 an</SelectItem>
                            <SelectItem value="1-2-ans">1 - 2 ans</SelectItem>
                            <SelectItem value="2-5-ans">2 - 5 ans</SelectItem>
                            <SelectItem value="plus-5-ans">Plus de 5 ans</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez votre situation et vos attentes..."
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-leaf-green hover:bg-emerald text-white"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Envoi en cours..." : "Envoyer la Demande"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
