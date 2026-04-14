export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  featured: boolean;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
