import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from '../services/blogService';

const Blog = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchBlogPosts(category);
        console.log('Blog posts data:', data);
        // Ensure data is an array before setting
        setPosts(Array.isArray(data) ? data : []); 
        
        setLoading(false);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };
    
    loadBlogPosts();
  }, [category]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }
  
  // Check if posts is actually an array before checking length
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 mt-16">
        <h2 className="text-2xl font-bold mb-8">Sky Blog {category ? `- ${category}` : ''}</h2>
        <p className="text-gray-600">No blog posts found. Check back soon for new content!</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h2 className="text-2xl font-bold mb-8">Sky Blog {category ? `- ${category}` : ''}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => {
          // Skip rendering if post is missing essential fields
          if (!post || !post.id || !post.title) { 
            console.warn('Skipping post due to missing essential data:', post);
            return null;
          }
          
          return (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Access image directly from post, check if it's an array and has items */}
              {post.image && Array.isArray(post.image) && post.image.length > 0 && post.image[0].url && (
                <img 
                  src={`http://localhost:1337${post.image[0].url}`} 
                  alt={post.title || 'Blog post'} 
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-6">
                {/* Access category directly from post */}
                {post.category && (
                  <div className="text-xs text-primary font-medium mb-1">
                    {post.category}
                  </div>
                )}
                
                {/* Access title directly from post */}
                <h3 className="text-xl font-bold mb-2">
                  {post.title || 'Untitled Post'}
                </h3>
                
                {/* Access summary directly from post */}
                {post.summary && (
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                )}
                
                {/* Access slug directly from post */}
                {post.slug && (
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-primary font-medium hover:underline"
                  >
                    Read More
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog; 