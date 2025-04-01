import React, { useState, useEffect } from 'react';
import { fetchBlogPost } from '../services/blogService';
import BlocksRenderer from '../utils/BlocksRenderer';
import { Link } from 'react-router-dom';

const BlogPost = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadBlogPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchBlogPost(slug);
        console.log('Blog post data:', data);
        setPost(data);
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post. Please try again later.');
        setLoading(false);
      }
    };
    
    loadBlogPost();
  }, [slug]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }
  
  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error || 'Blog post not found.'}
        </div>
      </div>
    );
  }
  
  const { title, content, category, image, publishedAt } = post;
  
  if (!title || !content) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
          Incomplete blog post data.
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary mb-6 hover:underline"
        >
          ← Back to all posts
        </Link>
        
        {/* Category */}
        {category && (
          <div className="text-sm text-primary font-medium mb-2">
            {category}
          </div>
        )}
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h1>
        
        {/* Date */}
        {publishedAt && (
          <div className="text-gray-500 text-sm mb-8">
            {new Date(publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        )}
        
        {/* Featured Image */}
        {image && Array.isArray(image) && image.length > 0 && image[0].url && (
          <div className="mb-8">
            <img 
              src={`http://localhost:1337${image[0].url}`} 
              alt={title} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
        
        {/* Content - Using our custom BlocksRenderer */}
        <BlocksRenderer blocks={content} />
        
        {/* Call to Action Button */}
        <div className="mt-10 text-center">
          <a
            href="/#search" 
            className="btn-primary inline-block px-8 py-3 text-lg font-medium"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 