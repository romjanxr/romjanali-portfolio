"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "@/types/blog";

export function useBlogPost(id: string) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch(`/api/blog/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog post");

        const data = await response.json();
        setBlogPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  return { blogPost, loading, error };
}
