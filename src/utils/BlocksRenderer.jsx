import React from 'react';

/**
 * A custom component to render Strapi's block-based content format
 * 
 * @param {Array} blocks - The blocks array from Strapi's content field
 * @return {JSX.Element} Rendered content
 */
const BlocksRenderer = ({ blocks }) => {
  // If blocks is not an array or is empty, render nothing
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  // Recursive function to render nested children
  const renderChildren = (children) => {
    if (!Array.isArray(children)) return null;
    
    return children.map((child, index) => {
      // Handle text nodes
      if (child.type === 'text') {
        let content = child.text;
        
        // Apply formatting if available
        if (child.bold) content = <strong key={index} className="font-bold">{content}</strong>;
        if (child.italic) content = <em key={index} className="italic">{content}</em>;
        if (child.underline) content = <u key={index} className="underline">{content}</u>;
        if (child.code) content = <code key={index} className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">{content}</code>;
        
        return content;
      }
      
      // Handle link nodes
      if (child.type === 'link') {
        return (
          <a 
            key={index}
            href={child.url}
            target={child.openInNewTab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 underline-offset-2 transition-colors"
          >
            {renderChildren(child.children)}
          </a>
        );
      }
      
      // Handle other node types
      return <span key={index}>{renderChildren(child.children)}</span>;
    });
  };

  // Render each block
  return (
    <div className="prose prose-lg max-w-none blog-content">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-6 text-gray-800 leading-relaxed text-lg">
                {renderChildren(block.children)}
              </p>
            );
            
          case 'heading':
            switch (block.level) {
              case 1:
                return <h1 key={index} className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2 border-gray-200">{renderChildren(block.children)}</h1>;
              case 2:
                return <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 mt-8">{renderChildren(block.children)}</h2>;
              case 3:
                return <h3 key={index} className="text-xl font-bold mb-3 text-gray-900 mt-6">{renderChildren(block.children)}</h3>;
              case 4:
                return <h4 key={index} className="text-lg font-bold mb-2 text-gray-900">{renderChildren(block.children)}</h4>;
              case 5:
                return <h5 key={index} className="text-base font-bold mb-2 text-gray-900">{renderChildren(block.children)}</h5>;
              case 6:
                return <h6 key={index} className="text-sm font-bold mb-2 text-gray-900">{renderChildren(block.children)}</h6>;
              default:
                return <h2 key={index} className="text-2xl font-bold mb-3 text-gray-900">{renderChildren(block.children)}</h2>;
            }
            
          case 'list':
            if (block.format === 'ordered') {
              return (
                <ol key={index} className="list-decimal pl-8 mb-6 text-gray-800 leading-relaxed">
                  {block.children.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{renderChildren(item.children)}</li>
                  ))}
                </ol>
              );
            } else {
              return (
                <ul key={index} className="list-disc pl-8 mb-6 text-gray-800 leading-relaxed">
                  {block.children.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{renderChildren(item.children)}</li>
                  ))}
                </ul>
              );
            }
            
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-blue-400 bg-blue-50 pl-6 py-4 pr-4 italic mb-6 rounded-r text-gray-700">
                {renderChildren(block.children)}
              </blockquote>
            );
            
          case 'code':
            return (
              <pre key={index} className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm shadow-inner">
                <code>{block.code}</code>
              </pre>
            );
            
          case 'image':
            return (
              <figure key={index} className="mb-8 mt-8">
                <img 
                  src={`http://localhost:1337${block.image.url}`} 
                  alt={block.image.alternativeText || ''} 
                  className="w-full rounded-lg shadow-lg"
                />
                {block.image.caption && (
                  <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
                    {block.image.caption}
                  </figcaption>
                )}
              </figure>
            );
            
          default:
            // Handle unknown block types as paragraphs
            return (
              <div key={index} className="mb-6">
                {renderChildren(block.children)}
              </div>
            );
        }
      })}
    </div>
  );
};

export default BlocksRenderer; 