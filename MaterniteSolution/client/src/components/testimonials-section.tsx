import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Aminata K.",
      initial: "A",
      age: "32 ans",
      location: "Cotonou",
      text: "Après 3 ans d'essais infructueux et plusieurs consultations médicales sans résultat, j'ai découvert TOTCHEME. Leur approche combinant phyto-médecines et soins spirituels m'a redonné espoir. Aujourd'hui, je suis maman d'une magnifique petite fille de 8 mois.",
      duration: "Traitement de 6 mois",
      color: "bg-leaf-green"
    },
    {
      name: "Fatou M.",
      initial: "F",
      age: "28 ans",
      location: "Porto-Novo",
      text: "Diagnostiquée avec un SOPK, j'avais perdu espoir. L'équipe de TOTCHEME a pris le temps de comprendre ma situation. Leur accompagnement personnalisé et leurs remèdes naturels ont régulé mes cycles. Je suis maintenant enceinte de 5 mois.",
      duration: "Traitement de 4 mois",
      color: "bg-soft-gold"
    },
    {
      name: "Marie S.",
      initial: "M",
      age: "35 ans",
      location: "Parakou",
      text: "À 35 ans, on m'a dit qu'il était trop tard. TOTCHEME a prouvé le contraire. Leur diagnostic spirituel a révélé des blocages que je ne soupçonnais pas. Grâce à leur kit complet et leur suivi, je vis maintenant ma première grossesse.",
      duration: "Traitement de 8 mois",
      color: "bg-pale-pink"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className="text-yellow-400 fill-current" size={16} />
    ));
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages de <span className="text-leaf-green">Réussite</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez les histoires inspirantes de nos clientes
          </p>
          
          {/* Happy Couple Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae4099d4e6ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Couple heureux s'embrassant dans un cadre naturel avec des fleurs"
              className="rounded-2xl shadow-xl w-full max-w-md h-64 object-cover"
            />
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  <span className="text-white font-bold">{testimonial.initial}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.location}</p>
                  <div className="flex mt-1">
                    {renderStars()}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-xs text-leaf-green font-medium bg-green-50 px-3 py-2 rounded-full inline-block">
                {testimonial.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
