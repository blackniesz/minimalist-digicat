
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';

// Mock data for demonstration
const articleData = {
  id: "1",
  title: "Quantum Computing Breakthrough Could Reshape the Future of AI",
  content: `
    <p>Scientists have achieved a major breakthrough in quantum computing that could exponentially accelerate machine learning algorithms and transform artificial intelligence as we know it.</p>
    
    <p>The research team at the Quantum AI Institute announced yesterday that they have successfully demonstrated a 128-qubit quantum processor specifically designed for machine learning operations. This specialized quantum architecture enables certain AI algorithms to run up to 100 times faster than on current supercomputers.</p>
    
    <h2>Breaking the Computational Barrier</h2>
    
    <p>"What makes this advancement particularly significant is that we've overcome the decoherence problem that has limited quantum computing in the past," explains Dr. Elena Simmons, lead researcher on the project. "Our new approach maintains quantum coherence long enough to run complex machine learning operations."</p>
    
    <p>The breakthrough hinges on a novel approach to quantum error correction that allows the system to perform reliable calculations even in the presence of noise and interference that typically disrupt quantum states.</p>
    
    <h2>Implications for AI Development</h2>
    
    <p>Industry experts suggest this development could lead to AI systems capable of tackling previously impossible problems in fields ranging from drug discovery to climate modeling.</p>
    
    <p>"The computational constraints on today's AI systems mean that certain classes of problems remain out of reach," notes Dr. Marcus Chen, an AI researcher not involved with the study. "Quantum-accelerated machine learning could change that entirely, potentially leading to breakthroughs across multiple scientific domains."</p>
    
    <p>Several major tech companies have already expressed interest in the technology, with potential applications including:</p>
    
    <ul>
      <li>Advanced materials discovery</li>
      <li>Complex biological system modeling</li>
      <li>Climate prediction at unprecedented resolution</li>
      <li>Financial system risk analysis</li>
    </ul>
    
    <h2>The Road to Practical Applications</h2>
    
    <p>While the current prototype operates in laboratory conditions that would be impractical for widespread deployment, the research team is already working on more accessible versions of the technology.</p>
    
    <p>"Our goal is to have a cloud-accessible quantum machine learning platform within three years," says Dr. Simmons. "This would democratize access to this computational power and potentially accelerate innovation across industries."</p>
    
    <p>The researchers caution that significant challenges remain, particularly in scaling the technology and developing quantum-ready algorithms for specific applications. However, the demonstration represents a critical milestone in the convergence of quantum computing and artificial intelligence.</p>
  `,
  category: "Technology",
  date: "June 12, 2023",
  author: {
    name: "Alex Chen",
    url: "https://example.com/authors/alexchen",
  },
  imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
};

// Related articles
const relatedArticles = [
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
];

const Article = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // In a real application, you would fetch the article based on the ID
  // For demonstration, we're using the mock data
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16 animate-fade-in">
        {/* Article Hero */}
        <div className="w-full h-[50vh] md:h-[60vh] relative">
          <img 
            src={articleData.imageUrl} 
            alt={articleData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <Link 
                    to={`/category/${articleData.category.toLowerCase()}`}
                    className="text-xs font-medium px-2.5 py-0.5 bg-white/90 text-black rounded-full hover:bg-white transition-colors"
                  >
                    {articleData.category}
                  </Link>
                  <span className="text-xs text-white/80">
                    {articleData.date}
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight mb-4">
                  {articleData.title}
                </h1>
                
                <a 
                  href={articleData.author.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  By {articleData.author.name}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container my-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose prose-sm sm:prose lg:prose-lg max-w-none article-content">
                <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
              </article>
              
              <div className="mt-10 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Published on {articleData.date}
                  </span>
                  
                  <div className="flex items-center">
                    <a 
                      href={articleData.author.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-medium hover:underline underline-offset-4"
                    >
                      Visit author's website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <h3 className="text-lg font-medium mb-6">Related Articles</h3>
                
                <div className="space-y-6">
                  {relatedArticles.map((article) => (
                    <ArticleCard 
                      key={article.id} 
                      {...article} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
