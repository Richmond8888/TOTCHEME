import { motion } from "framer-motion";
import { Sprout, Moon } from "lucide-react";

export default function KitDetailsSection() {
  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos <span className="text-leaf-green">Kits Spécialisés</span>
            </h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-leaf-green mb-3 flex items-center">
                  <Sprout className="mr-2" size={24} />
                  Kit 1: Phyto-médicaments
                </h3>
                <p className="text-gray-600">
                  Ensemble de phyto-médicaments spécialement formulés pour corriger les
                  déséquilibres responsables de l'infertilité.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-soft-gold mb-3 flex items-center">
                  <Moon className="mr-2" size={24} />
                  Kit 2: Produits Spirituels
                </h3>
                <p className="text-gray-600">
                  Produits spirituels destinés à purifier les corps subtils, rééquilibrer
                  l'énergie et instaurer une harmonie propice à la conception.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Plantes médicinales africaines traditionnelles"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
