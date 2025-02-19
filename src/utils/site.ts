const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://Rachad.vercel.app";

export const siteConfig = {
  name: "RACHAD | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    instagram: "https://www.instagram.com/ra.chad_art/",
    linkedin: "https://www.linkedin.com/in/rachad-wadie-b0a2422a0/",
  },
  mailSupport: "rachadwadie@gmail.com",
};
