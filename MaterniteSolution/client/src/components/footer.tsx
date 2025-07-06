import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import totchemeLogo from "@/assets/totcheme-logo.jpg";

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/2290191858525",
      label: "WhatsApp"
    }
  ];

  const quickLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#approche", label: "Notre Approche" },
    { href: "#infertilite", label: "Infertilité" },
    { href: "#pourquoi", label: "Pourquoi Nous" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src={totchemeLogo} 
                alt="Logo TOTCHEME SANTÉ ET VIE" 
                className="h-12 w-12 mr-3 rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold text-leaf-green">
                TOTCHEME SANTÉ ET VIE
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Redonnez vie à vos rêves de maternité avec la sagesse ancestrale africaine.
              Notre approche holistique combine tradition et modernité pour vous accompagner
              vers la joie de la maternité.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-leaf-green rounded-full flex items-center justify-center hover:bg-emerald transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-leaf-green transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-2"></i>
                +229 01 91 85 85 25
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                gnanhapolivier@gmail.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-2"></i>
                Lun - Dim: 8h - 20h
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 TOTCHEME SANTÉ ET VIE. Tous droits réservés. |{" "}
            <a href="#" className="hover:text-leaf-green transition-colors">
              Mentions Légales
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-leaf-green transition-colors">
              Politique de Confidentialité
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
