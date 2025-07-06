import { motion } from "framer-motion";
import { Star, Heart, Users, CheckCircle } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Star,
      title: "Expertise Ancestrale",
      description: "Nous combinons la sagesse ancienne africaine avec des approches modernes pour un traitement complet et harmonieux.",
      color: "bg-leaf-green"
    },
    {
      icon: Heart,
      title: "Approche Holistique",
      description: "Notre solution traite à la fois les aspects physiques et spirituels de l'infertilité pour une guérison complète.",
      color: "bg-soft-gold"
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description: "Vous ne serez jamais seule dans ce parcours. Nous vous guidons et soutenons à chaque étape.",
      color: "bg-pale-pink"
    }
  ];

  const benefits = [
    "Traitement 100% naturel",
    "Approche personnalisée",
    "Accompagnement continu"
  ];

  return (
    <section id="pourquoi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir <span className="text-leaf-green">TOTCHEME SANTÉ ET VIE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche unique qui combine tradition ancestrale et accompagnement moderne
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae4099d03718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Couple heureux s'embrassant dans un cadre naturel"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transformez Votre Rêve en <span className="text-leaf-green">Réalité</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Ne laissez pas l'infertilité vous priver de la joie d'être mère.
              Découvrez comment notre approche unique peut transformer votre vie et
              apporter la paix dans votre foyer.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="text-leaf-green mr-3" size={24} />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
