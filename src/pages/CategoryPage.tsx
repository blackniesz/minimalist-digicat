
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';

// Mock data for categories
const categoryData = {
  science: {
    title: "Science",
    description: "Discover the latest breakthroughs and research in the world of science.",
    articles: [
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
        id: "7",
        title: "Biologists Discover Unique Microorganism With Potential for Plastic Degradation",
        excerpt: "Scientists have identified a newly discovered microorganism that naturally breaks down certain types of plastic, offering potential solutions to plastic pollution.",
        category: "Science",
        date: "May 28, 2023",
        author: {
          name: "Lisa Patel",
          url: "https://example.com/authors/lisapatel",
        },
        imageUrl: "https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
    ],
  },
  ai: {
    title: "Artificial Intelligence",
    description: "Stay updated on the latest developments in artificial intelligence and machine learning.",
    articles: [
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
      {
        id: "8",
        title: "Autonomous Vehicles Reach New Milestone in Urban Navigation Testing",
        excerpt: "The latest generation of self-driving cars has demonstrated significant improvements in navigating complex urban environments, bringing full autonomy closer to reality.",
        category: "AI",
        date: "May 26, 2023",
        author: {
          name: "Robert Martinez",
          url: "https://example.com/authors/robertmartinez",
        },
        imageUrl: "https://images.unsplash.com/photo-1654690957333-87b5ad786c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
    ],
  },
  technology: {
    title: "Technology",
    description: "Explore the cutting-edge innovations and trends shaping the technology landscape.",
    articles: [
      {
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
        id: "9",
        title: "New Energy Storage Technology Could Make Renewable Power More Viable",
        excerpt: "Engineers have developed a novel energy storage system that addresses the intermittency issues of renewable energy sources, potentially accelerating the transition to green power.",
        category: "Technology",
        date: "May 22, 2023",
        author: {
          name: "Michael Kwon",
          url: "https://example.com/authors/michaelkwon",
        },
        imageUrl: "https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
    ],
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!category || !categoryData[category as keyof typeof categoryData]) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 container">
          <div className="text-center py-16">
            <h1 className="text-3xl font-medium mb-4">Category Not Found</h1>
            <p className="text-muted-foreground">
              The category you are looking for does not exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentCategory = categoryData[category as keyof typeof categoryData];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 animate-fade-in">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-medium mb-3">{currentCategory.title}</h1>
            <p className="text-muted-foreground">
              {currentCategory.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.articles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                {...article} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
