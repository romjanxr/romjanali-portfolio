"use client";

import BlogNavigation from "@/components/blog/BlogNavigation";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogContent from "@/components/blog/BlogContent";
import SocialShare from "@/components/blog/SocialShare";
import BlogTags from "@/components/blog/BlogTags";
import AuthorBio from "@/components/blog/AuthorBio";
import Footer from "@/components/layout/Footer";
import { BlogPost } from "@/types/blog";
import BackToBlog from "@/components/blog/BacktoBlog";

// Mock data (replace with your data fetching logic)
const mockBlogPost: BlogPost = {
  id: 1,
  title: "Building Scalable React Applications with TypeScript",
  content: `
    <p>Building scalable React applications requires careful planning, proper architecture, and the right tools. TypeScript has become an essential part of modern React development, providing type safety and better developer experience.</p>
    
    <h2>Why TypeScript with React?</h2>
    <p>TypeScript brings several advantages to React development:</p>
    <ul>
      <li>Type safety at compile time</li>
      <li>Better IDE support with autocomplete</li>
      <li>Easier refactoring and maintenance</li>
      <li>Self-documenting code</li>
    </ul>
    
    <h2>Project Structure</h2>
    <p>A well-organized project structure is crucial for scalability. Here's a recommended structure:</p>
    <pre><code>src/
  components/
    ui/
    forms/
    layout/
  hooks/
  utils/
  types/
  services/
  pages/</code></pre>
    
    <h2>Component Patterns</h2>
    <p>Using consistent component patterns helps maintain code quality and makes it easier for team members to understand and contribute to the codebase.</p>
    
    <h2>State Management</h2>
    <p>For larger applications, consider using state management solutions like Redux Toolkit or Zustand to manage complex state interactions.</p>
    
    <h2>Conclusion</h2>
    <p>Building scalable React applications with TypeScript requires discipline and following best practices. The initial setup time is worth the long-term benefits in maintainability and developer productivity.</p>
  `,
  date: "Dec 15, 2024",
  readTime: "8 min read",
  category: "React",
  image: "/placeholder.svg?height=400&width=800",
  author: {
    name: "Romjan Ali",
    avatar: "/placeholder.svg?height=50&width=50",
    bio: "Full-stack developer passionate about React and modern web technologies",
  },
  tags: ["React", "TypeScript", "JavaScript", "Web Development"],
  likes: 42,
  comments: 8,
};

export default function BlogPostPage() {
  // In a real application, you would fetch the blog post based on the ID
  // const { blogPost, loading, error } = useBlogPost(params.id)

  const blogPost = mockBlogPost;

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <BlogNavigation />
      <BackToBlog />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <BlogHeader blogPost={blogPost} />
        <BlogContent blogPost={blogPost} />
        <SocialShare title={blogPost.title} />
        <BlogTags tags={blogPost.tags} />
        <AuthorBio author={blogPost.author} />
      </article>

      <Footer />
    </div>
  );
}
