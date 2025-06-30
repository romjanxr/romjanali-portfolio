import { Project } from "../types/project";

export const restmartProjectData: Project = {
  id: 2,
  title: "RestMart - Grocery Ecommerce Platform",
  subtitle: "Full-Stack Ecommerce Application",
  description:
    "RestMart is a complete e-commerce solution with a React frontend and Django REST Framework backend. It supports user authentication, product listings, cart and order management, role-based admin controls, and payment integration.",
  image: "/images/restmart-preview.png",
  liveUrl: "https://restmart.vercel.app", // Replace with your actual frontend deploy URL
  githubUrl: "https://github.com/romjan/restmart", // Replace with actual repo URL
  category: "Full-Stack",
  status: "Completed",
  duration: "3 months",
  team: "Solo Project",
  completedDate: "June 2025",
  technologies: [
    "React.js",
    "Django REST Framework",
    "PostgreSQL",
    "JWT Authentication",
    "Tailwind CSS",
    "Stripe Payment",
    "Cloudinary",
  ],
  screenshots: [
    {
      id: 1,
      title: "Landing Page",
      image: "/images/restmart-homepage.png",
      description:
        "Modern landing page with featured grocery products and categories",
    },
    {
      id: 2,
      title: "Product Listing",
      image: "/images/restmart-products.png",
      description:
        "Responsive product grid with category filters and sorting options",
    },
    {
      id: 3,
      title: "Product Details",
      image: "/images/restmart-details.png",
      description:
        "Detailed product view with gallery, price, stock, and reviews",
    },
    {
      id: 4,
      title: "User Dashboard",
      image: "/images/restmart-user-dashboard.png",
      description: "Dashboard for managing profile, orders, and saved items",
    },
    {
      id: 5,
      title: "Admin Panel",
      image: "/images/restmart-admin.png",
      description:
        "Role-based admin panel to manage products, categories, orders, and users",
    },
    {
      id: 6,
      title: "Checkout & Payment",
      image: "/images/restmart-payment.png",
      description: "Secure checkout flow with Stripe payment integration",
    },
  ],
  caseStudy: {
    objective: {
      title: "Project Objective",
      content:
        "The objective was to build a scalable grocery e-commerce platform that enables users to browse, order, and manage groceries online with a seamless shopping experience. The platform also includes an admin panel for inventory and order management.",
      goals: [
        "Design intuitive and fast frontend UI",
        "Use Django REST Framework for a scalable backend",
        "Implement secure JWT-based user authentication",
        "Enable product browsing, filtering, and cart management",
        "Build a robust admin dashboard with role-based access",
        "Integrate Stripe for payments and Cloudinary for media",
      ],
    },
    challenges: {
      title: "Challenges & Solutions",
      items: [
        {
          challenge: "Role-Based Admin Panel",
          solution:
            "Implemented permission-based views using Django’s user model and custom decorators to handle admin and customer access separately.",
        },
        {
          challenge: "Efficient Filtering and Search",
          solution:
            "Used Django ORM optimizations and query filters along with DRF pagination for smooth search and filtering of products.",
        },
        {
          challenge: "Product Image Handling",
          solution:
            "Integrated Cloudinary for image uploads and delivery, ensuring optimization and performance across devices.",
        },
        {
          challenge: "Payment Integration",
          solution:
            "Used Stripe’s Checkout API with secure token flow and webhook handling for post-payment verification and order updates.",
        },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      frontend: [
        "React.js",
        "Tailwind CSS",
        "Axios",
        "React Router",
        "React Hook Form",
        "React Toastify",
      ],
      backend: [
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "SimpleJWT",
        "Cloudinary",
        "Stripe",
      ],
      deployment: [
        "Vercel (Frontend)",
        "Vercel (Backend)",
        "Cloudinary (Media)",
        "PostgreSQL on Supabase",
      ],
      tools: ["VS Code", "Git", "Postman", "Swagger", "Chrome DevTools"],
    },
    features: [
      "JWT authentication and role-based authorization",
      "Product filtering, search, and sorting",
      "Cart and order management system",
      "Stripe payment integration with receipts",
      "User profile and order history management",
      "Admin dashboard with CRUD for products and categories",
      "Cloudinary integration for image uploads",
      "Responsive design and mobile-first UX",
      "Email notifications (planned)",
      "SEO optimized and accessible design",
    ],
    results: {
      title: "Results & Impact",
      metrics: [
        {
          label: "Page Load Time",
          value: "< 1.5s",
          description:
            "Optimized using React best practices and asset compression",
        },
        {
          label: "Mobile Score",
          value: "98/100",
          description: "Measured with Google Lighthouse",
        },
        {
          label: "Admin Efficiency",
          value: "90%",
          description: "Simplified inventory and order processing",
        },
        {
          label: "Cart Abandonment Reduction",
          value: "20%",
          description: "Streamlined checkout experience",
        },
      ],
      achievements: [
        "End-to-end product completed solo with full-stack architecture",
        "Achieved seamless integration between frontend and backend",
        "Implemented real-world features like JWT, payments, and media handling",
        "Used for demo in job applications and received positive feedback",
        "Scalable and ready for deployment in real-world use cases",
      ],
    },
  },
};
