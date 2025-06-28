export const projectsData = [
  {
    id: 1,
    title: "RestMart - Full-Stack E-commerce Platform",
    description:
      "A full-stack e-commerce application with a Django REST Framework backend and a React frontend. Features include product listings, cart and order management, JWT-based authentication, and admin controls. API documented with Swagger.",
    image: "/images/restmart-preview.png",
    technologies: [
      "Django",
      "DRF",
      "React",
      "JWT",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    liveUrl: "https://restmart-client.vercel.app", // Replace with actual live URL
    codeUrl: "https://github.com/romjanali/restmart", // Or split into client/server repos if needed
  },
  {
    id: 2,
    title: "Taskify - Task Management System",
    description:
      "A collaborative task management web app built with Django and React. Users can create, assign, and categorize tasks with real-time completion tracking and notification handling using Django signals.",
    image: "/images/taskify-preview.png",
    technologies: [
      "Django",
      "Javascript",
      "HTML",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    liveUrl: "#", // Replace with actual live URL if available
    codeUrl: "https://github.com/romjanali/taskify",
  },
  {
    id: 3,
    title: "Portfolio - Personal Developer Website",
    description:
      "A full-stack portfolio site built with Next.js and Django. Showcases projects, blog posts (shared to LinkedIn), and embedded YouTube tutorials. Designed for visibility and job readiness.",
    image: "/images/portfolio-preview.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Cloudinary",
    ],
    liveUrl: "https://romjanali.com",
    codeUrl: "https://github.com/romjanali/portfolio",
  },
];
