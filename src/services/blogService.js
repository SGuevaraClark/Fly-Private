/**
 * Service for fetching blog data from Strapi CMS
 */

const API_URL = 'http://localhost:1337/api';

/**
 * Fetch blog posts from Strapi
 * @param {string} category - Optional category to filter by (Destinations, Technology, News)
 * @returns {Promise<Array>} - Blog posts data
 */
export const fetchBlogPosts = async (category) => {
  try {
    // Build the URL with proper filters and populate the media
    const url = `${API_URL}/articles?populate=*${category ? `&filters[category][$eq]=${category}` : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

/**
 * Fetch a single blog post by slug
 * @param {string} slug - The slug of the blog post
 * @returns {Promise<Object>} - Blog post data
 */
export const fetchBlogPost = async (slug) => {
  try {
    const url = `${API_URL}/articles?filters[slug][$eq]=${slug}&populate=*`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}; 