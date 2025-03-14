
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';

// Mock data for demonstration
const featuredArticle = {
  id: "1",
  title: "Quantum Computing Breakthrough Could Reshape the Future of AI",
  excerpt: "Scientists have achieved a major breakthrough in quantum computing that could exponentially accelerate machine learning algorithms and transform artificial intelligence as we know it.",
  category: "Technology",
  date: "June 12, 2023",
  author: {
    name: "Alex Chen",
    url: "https://example.com/authors/alexchen",
  },
  imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
};

const articles = [
  {
    id: "2",
    title: "New AI Model Can Predict Protein Structures With Unprecedented Accuracy",
    excerpt: "Researchers have developed an AI system that can predict the 3D structure of proteins with remarkable precision, potentially revolutionizing drug discovery and development.",
    category: "AI",
    date: "June 10, 2023",
    author: {
      name: "Maria Rodriguez",
      url: "https://example.com/authors/mariarodriguez",
    },
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "3",
    title: "NASA's Webb Telescope Discovers Evidence of Water on Distant Exoplanet",
    excerpt: "The James Webb Space Telescope has detected clear signatures of water vapor in the atmosphere of a potentially habitable exoplanet 40 light-years from Earth.",
    category: "Science",
    date: "June 8, 2023",
    author: {
      name: "James Wilson",
      url: "https://example.com/authors/jameswilson",
    },
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: "4",
    title: "Revolutionary Neural Interface Allows Direct Brain-to-Computer Communication",
    excerpt: "A team of neuroscientists and engineers has developed a non-invasive neural interface that enables users to control computers using thought alone, with potential applications ranging from accessibility to enhanced human cognition.",
    category: "Technology",
    date: "June 5, 2023",
    author: {
      name: "Sarah Kim",
      url: "https://example.com/authors/sarahkim",
    },
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "5",
    title: "Climate Scientists Develop New Model to Predict Extreme Weather Events",
    excerpt: "Using advanced machine learning techniques, climate researchers have created a predictive model that can forecast extreme weather events with significantly improved accuracy and lead time.",
    category: "Science",
    date: "June 3, 2023",
    author: {
      name: "David Johnson",
      url: "https://example.com/authors/davidjohnson",
    },
    imageUrl: "https://images.unsplash.com/photo-1504253163759-c23fccaebb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "6",
    title: "Machine Learning Algorithm Detects Early Signs of Alzheimer's from Speech Patterns",
    excerpt: "A new AI-powered diagnostic tool can identify subtle changes in speech and language patterns that may indicate early stages of Alzheimer's disease, years before traditional symptom onset.",
    category: "AI",
    date: "June 1, 2023",
    author: {
      name: "Emily Zhang",
      url: "https://example.com/authors/emilyzhang",
    },
    imageUrl: "https://images.unsplash.com/photo-1492962827063-e5026fba3638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16 animate-fade-in">
        {/* Featured Article */}
        <section className="container mt-8">
          <FeaturedArticle {...featuredArticle} />
        </section>
        
        {/* Latest Articles */}
        <section className="container mt-16">
          <div className="mb-8">
            <h2 className="text-2xl font-medium">Latest Articles</h2>
            <div className="h-0.5 w-16 bg-primary mt-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard 
                key={article.id} 
                {...article} 
                className="animate-slide-up"
              />
            ))}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="container mt-20">
          <div className="bg-secondary p-8 md:p-12 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                Stay up to date
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest news in science, technology, and AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
