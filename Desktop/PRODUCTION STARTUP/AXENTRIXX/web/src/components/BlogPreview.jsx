import React from "react";
import { ArrowRight, Clock, User } from "lucide-react";

export default function BlogPreview() {
  const blogPosts = [
    {
      title: "The Future of Healthcare Technology: AI and Data Analytics",
      excerpt:
        "Discover how artificial intelligence and advanced analytics are transforming healthcare delivery and patient outcomes.",
      author: "Sarah Chen",
      date: "November 2, 2025",
      readTime: "5 min read",
      category: "Healthcare Tech",
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/blog/future-healthcare-technology-ai-analytics",
    },
    {
      title: "Building Scalable Web Applications: Best Practices for 2025",
      excerpt:
        "Essential strategies for developing web applications that can handle growth while maintaining performance and security.",
      author: "Michael Rodriguez",
      date: "October 28, 2025",
      readTime: "7 min read",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/blog/scalable-web-applications-best-practices-2025",
    },
    {
      title: "Data Visualization Trends: Making Complex Data Accessible",
      excerpt:
        "Learn about the latest trends in data visualization and how to make complex datasets understandable for decision-makers.",
      author: "Alex Johnson",
      date: "October 24, 2025",
      readTime: "6 min read",
      category: "Data Analytics",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      href: "/blog/data-visualization-trends-complex-data-accessible",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div
            className="mb-4 font-medium tracking-[0.12em] uppercase text-[rgba(85,85,85,0.7)] dark:text-white/50"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "12px",
            }}
          >
            BLOG & INSIGHTS
          </div>

          <h2
            className="mb-6 font-bold leading-tight max-w-[700px] mx-auto text-[#111] dark:text-white/90"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: "1.2",
            }}
          >
            Latest Technology Insights
          </h2>

          <p
            className="max-w-[600px] mx-auto text-[#606060] dark:text-white/60"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(14px, 1.2vw, 18px)",
              lineHeight: "1.6",
            }}
          >
            Stay updated with the latest trends, best practices, and insights
            from our technology experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out dark:opacity-90"
                />
                {/* Dark mode overlay */}
                <div className="absolute inset-0 dark:bg-black/20 pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 bg-[#2563EB] text-white rounded-full text-[12px] font-medium"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <User
                      size={14}
                      className="text-[#606060] dark:text-white/60"
                    />
                    <span
                      className="text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "12px",
                      }}
                    >
                      {post.author}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Clock
                      size={14}
                      className="text-[#606060] dark:text-white/60"
                    />
                    <span
                      className="text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "12px",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="mb-3 font-bold text-[#111] dark:text-white/90 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors duration-200"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="mb-4 text-[#606060] dark:text-white/60"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Date */}
                <div className="mb-6">
                  <span
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "12px",
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Read More Link */}
                <a
                  href={post.href}
                  className="inline-flex items-center text-[#2563EB] hover:text-[#1D4ED8] transition-all duration-200 ease-in-out group-hover:translate-x-1 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-opacity-50 focus-visible:ring-offset-2"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                  }}
                >
                  Read Article
                  <ArrowRight
                    size={14}
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#2563EB] text-[#2563EB] dark:text-[#60A5FA] rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#2563EB] hover:text-white dark:hover:bg-[#60A5FA] dark:hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 group"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "16px",
            }}
          >
            View All Articles
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
