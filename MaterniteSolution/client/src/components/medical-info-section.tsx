import { motion } from "framer-motion";
import { AlertCircle, Heart, Target, Shield, Users, Clock } from "lucide-react";

export default function MedicalInfoSection() {
  const causes = [
    {
      icon: AlertCircle,
      title: "Troubles Hormonaux",
      description: "Syndrome des ovaires polykystiques (SOPK), insuffisance ovarienne, troubles thyroïdiens",
      color: "bg-red-500"
    },
    {
      icon: Heart,
      title: "Problèmes Tubaires",
      description: "Obstructions ou lésions des trompes de Fallope, souvent dues aux infections",
      color: "bg-pink-500"
    },
    {
      icon: Target,
      title: "Anomalies Utérines",
      description: "Fibromes, polypes, malformations congénitales affectant l'implantation",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Endométriose",
      description: "Implantation de tissu endométrial hors de l'utérus, touchant 10% des femmes",
      color: "bg-orange-500"
    }
  ];

  const symptoms = [
    "Cycles menstruels irréguliers ou absents",
    "Règles anormalement douloureuses",
    "Saignements menstruels anormaux",
    "Douleurs pelviennes chroniques",
    "Troubles hormonaux (acné, prise de poids, pilosité)"
  ];

  const preventionTips = [
    {
      icon: Users,
      title: "Maintenir un poids santé",
      description: "Alimentation équilibrée et exercice régulier pour optimiser la fertilité"
    },
    {
      icon: Shield,
      title: "Protection contre les IST",
      description: "Utilisation de préservatifs et dépistage régulier"
    },
    {
      icon: Clock,
      title: "Gestion du stress",
      description: "Techniques de relaxation et suivi médical régulier"
    }
  ];

  return (
    <section id="infertilite" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprendre l'<span className="text-leaf-green">Infertilité Féminine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            L'infertilité féminine touche environ 10-15% des couples. Elle se définit par l'incapacité 
            à concevoir après 12 mois de rapports réguliers sans contraception.
          </p>
        </motion.div>

        {/* Causes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Principales Causes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 ${cause.color} rounded-full flex items-center justify-center mb-4`}>
                  <cause.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {cause.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {cause.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Symptoms and Prevention */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Symptoms */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="text-red-500 mr-3" size={28} />
              Symptômes à Surveiller
            </h3>
            <ul className="space-y-4">
              {symptoms.map((symptom, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{symptom}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Prevention */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="text-leaf-green mr-3" size={28} />
              Prévention
            </h3>
            <div className="space-y-6">
              {preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-10 h-10 bg-leaf-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <tip.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action - Highly Visible */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-8 border-4 border-yellow-400 shadow-2xl pulse-animation"
        >
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="text-yellow-300 mr-3" size={40} />
            <h3 className="text-3xl font-bold">
              ⚠️ CONSULTATION MÉDICALE RECOMMANDÉE ⚠️
            </h3>
            <AlertCircle className="text-yellow-300 ml-3" size={40} />
          </div>
          <div className="bg-white text-red-600 rounded-xl p-6 mb-6 font-semibold text-lg border-2 border-red-400">
            <p className="mb-4">
              🔴 ATTENTION : Si vous présentez des symptômes d'infertilité ou si vous essayez de concevoir 
              depuis plus de 12 mois, une consultation médicale est INDISPENSABLE.
            </p>
            <p className="text-orange-600">
              ⏰ Ne perdez pas de temps précieux - Consultez un spécialiste maintenant !
            </p>
          </div>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-yellow-400 text-red-600 px-12 py-4 rounded-full font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg pulse-animation"
          >
            🚨 PRENDRE RENDEZ-VOUS MAINTENANT 🚨
          </button>
        </motion.div>
      </div>
    </section>
  );
}