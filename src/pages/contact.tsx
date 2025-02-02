import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import { 
    Mail, Phone, MapPin, Clock
  } from 'lucide-react';


const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+237 652 480 684', '+237 697 296 199'],
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['ngoumkwa.kenne@gmail.com', 'prentisoft@gmail.com'],
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Yaoudé, Cameroun', 'Ekounou'],
      color: 'pink'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 8h - 20h', 'Sam: 9h - 17h'],
      color: 'emerald'
    }
  ];


export default function Contact() {
  return (
         <div className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0f1729] to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -360],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl my-6 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contactez-nous
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un projet ? N'hésitez pas à nous contacter.
              Notre équipe est là pour vous répondre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                custom={index}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-${info.color}-500/20 flex items-center justify-center mb-4`}>
                  <info.icon className={`w-6 h-6 text-${info.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div id="contact" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 lg:mx-24 gap-12 items-center">
      <ContactForm/>
     </div>
     </div>
        </div>
    </div>
  )
}
