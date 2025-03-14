
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    url: string;
  };
  imageUrl?: string;
  className?: string;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  category,
  date,
  author,
  imageUrl,
  className,
}: ArticleCardProps) => {
  return (
    <article 
      className={cn(
        "group flex flex-col h-full bg-white border border-border rounded-lg overflow-hidden transition-all hover:shadow-md",
        className
      )}
    >
      {imageUrl && (
        <Link to={`/article/${id}`} className="aspect-[16/9] w-full overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>
        </Link>
      )}
      
      <div className="flex flex-col flex-grow p-5">
        <div className="mb-2 flex items-center gap-3">
          <span className="text-xs font-medium px-2.5 py-0.5 bg-secondary text-secondary-foreground rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            {date}
          </span>
        </div>
        
        <Link to={`/article/${id}`} className="group-hover:underline underline-offset-4 decoration-1 mb-3">
          <h3 className="text-lg font-medium leading-snug">{title}</h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="mt-auto pt-3 border-t border-border">
          <div className="flex items-center justify-between">
            <a 
              href={author.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              By {author.name}
            </a>
            
            <Link 
              to={`/article/${id}`} 
              className="text-xs font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all"
            >
              Read article
              <svg 
                width="12" 
                height="12" 
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

export default ArticleCard;
