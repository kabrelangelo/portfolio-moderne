import { motion } from 'framer-motion';

const articles = [
  {
    title: "Les Meilleures Pratiques du Développement React en 2024",
    date: "23 Dec 2023",
    category: "React",
    excerpt: "Découvrez les dernières tendances et meilleures pratiques pour développer des applications React modernes et performantes.",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070",
    author: {
      name: "Votre Nom",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780"
    }
  },
  {
    title: "Comment Optimiser les Performances de Vos Applications Web",
    date: "20 Dec 2023",
    category: "Performance",
    excerpt: "Guide complet sur l'optimisation des performances web : du chargement initial à l'expérience utilisateur.",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    author: {
      name: "Votre Nom",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780"
    }
  },
  {
    title: "L'Impact de l'IA sur le Développement Web",
    date: "18 Dec 2023",
    category: "Innovation",
    excerpt: "Exploration de l'influence croissante de l'IA dans le développement web et son potentiel pour l'avenir.",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad095?q=80&w=2070",
    author: {
      name: "Votre Nom",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780"
    }
  },
  {
    title: "Le Guide Complet du Développement Mobile avec Flutter",
    date: "15 Dec 2023",
    category: "Mobile",
    excerpt: "Tout ce que vous devez savoir pour créer des applications mobiles performantes avec Flutter.",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974",
    author: {
      name: "Votre Nom",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780"
    }
  },
];

const categories = [
  "Tous", "React", "Performance", "Innovation", "Mobile", "Design", "Architecture"
];

export const BlogPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Blog <span className="gradient-text">Tech</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Découvrez mes derniers articles sur le développement web, mobile et les tendances tech
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Categories */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-primary/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mb-20"
        >
          <div className="relative h-[60vh] rounded-2xl overflow-hidden group">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={articles[0].author.avatar}
                  alt={articles[0].author.name}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <div>
                  <p className="font-medium">{articles[0].author.name}</p>
                  <p className="text-sm text-muted-foreground">{articles[0].date}</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{articles[0].title}</h2>
              <p className="text-lg text-muted-foreground mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="px-4 py-1 rounded-full bg-primary/20 text-sm">
                  {articles[0].category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {articles[0].readTime} de lecture
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.2 }}
              className="group"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full border-2 border-primary"
                />
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">{article.date}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-sm">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {article.readTime} de lecture
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl" />
          <div className="relative glass rounded-2xl p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Restez à jour avec ma <span className="gradient-text">Newsletter</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Recevez mes derniers articles et conseils directement dans votre boîte mail.
                Pas de spam, promis !
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border"
                />
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
