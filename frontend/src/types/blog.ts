export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content?: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  featured: boolean;
  author?: Author;
  tags?: string[];
  likes?: number;
  comments?: number;
}

export interface BlogStats {
  totalArticles: number;
  totalCategories: number;
  totalViews: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
}
