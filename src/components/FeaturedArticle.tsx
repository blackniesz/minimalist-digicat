
import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedArticleProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    url: string;
  };
  imageUrl: string;
}

const FeaturedArticle = ({
  id,
  title,
  excerpt,
  category,
  date,
  author,
  imageUrl,
}: FeaturedArticleProps) => {
  return (
    <article className="relative group overflow-hidden rounded-xl">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end min-h-[500px]">
        <div className="max-w-3xl animate-slide-up">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium px-2.5 py-0.5 bg-white/90 text-black rounded-full">
              {category}
            </span>
            <span className="text-xs text-white/80">
              {date}
            </span>
          </div>
          
          <Link to={`/article/${id}`} className="block group-hover:underline underline-offset-4 decoration-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-tight mb-4">
              {title}
            </h2>
          </Link>
          
          <p className="text-white/80 mb-6 max-w-2xl line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <a 
              href={author.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              By {author.name}
            </a>
            
            <Link 
              to={`/article/${id}`} 
              className="text-sm font-medium text-white flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Read article
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
