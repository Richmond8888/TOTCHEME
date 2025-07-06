import { motion } from "framer-motion";
import { ClipboardCheck, Eye, Leaf, Users } from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Examens Médicaux",
      description: "Examens médicaux complets pour comprendre votre situation et faciliter une prise en charge optimale.",
      color: "bg-leaf-green"
    },
    {
      icon: Eye,
      title: "Diagnostic Spirituel",
      description: "Diagnostic spirituel par géomancie pour comprendre les blocages énergétiques influençant votre fertilité.",
      color: "bg-soft-gold"
    },
    {
      icon: Leaf,
      title: "Kits de Traitement",
      description: "Deux kits spécialisés : phyto-médicaments et produits spirituels pour un traitement complet.",
      color: "bg-pale-pink"
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Soutien continu et conseils avisés tout au long de votre parcours vers la maternité.",
      color: "bg-emerald"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="approche" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Approche <span className="text-leaf-green">Unique</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours structuré en 4 étapes pour une prise en charge complète et personnalisée
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-warm-beige rounded-2xl p-8 shadow-lg card-hover"
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <step.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
