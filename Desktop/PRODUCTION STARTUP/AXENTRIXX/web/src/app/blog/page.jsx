import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus(null), 3000);
    }
  };

  const featuredPost = {
    title: "The Future of Healthcare Technology: 5 Trends to Watch in 2025",
    excerpt:
      "Explore the transformative technologies reshaping healthcare delivery, from AI-powered diagnostics to blockchain-based patient records.",
    category: "Industry Insights",
    date: "January 15, 2025",
    readTime: "8 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "CEO & Healthcare Technology Expert",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    image:
      "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    featured: true,
  };

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Medical Diagnostics",
      excerpt:
        "Discover how artificial intelligence is improving accuracy and speed in medical diagnostics, saving lives and reducing costs.",
      category: "Technology",
      date: "January 10, 2025",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "HIPAA Compliance: A Complete Guide for Healthcare Providers",
      excerpt:
        "Everything you need to know about maintaining HIPAA compliance in the digital age, with practical tips and best practices.",
      category: "Compliance",
      date: "January 5, 2025",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/6519899/pexels-photo-6519899.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Cloud Migration for Healthcare: Best Practices and Pitfalls",
      excerpt:
        "Learn from real-world experiences as we share the do's and don'ts of migrating healthcare systems to the cloud.",
      category: "Cloud Solutions",
      date: "December 28, 2024",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Improving Patient Engagement Through Digital Tools",
      excerpt:
        "Explore strategies and technologies that healthcare providers are using to boost patient engagement and satisfaction.",
      category: "Patient Care",
      date: "December 20, 2024",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "The ROI of Healthcare Management Systems",
      excerpt:
        "A detailed analysis of how HMS implementations deliver measurable returns on investment for healthcare organizations.",
      category: "Business Intelligence",
      date: "December 15, 2024",
      readTime: "9 min read",
      image:
        "https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Cybersecurity in Healthcare: Protecting Patient Data",
      excerpt:
        "Essential security measures every healthcare organization must implement to protect sensitive patient information.",
      category: "Security",
      date: "December 8, 2024",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Mobile Health Apps: Development Best Practices",
      excerpt:
        "Key considerations for building secure, user-friendly, and compliant mobile health applications.",
      category: "Mobile Development",
      date: "December 1, 2024",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Interoperability in Healthcare Systems: Breaking Down Silos",
      excerpt:
        "How healthcare organizations are achieving true interoperability to improve care coordination and patient outcomes.",
      category: "System Integration",
      date: "November 25, 2024",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Telemedicine Success Stories: Lessons from the Field",
      excerpt:
        "Real-world case studies showing how telemedicine platforms are expanding access to quality healthcare.",
      category: "Telehealth",
      date: "November 18, 2024",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const categories = [
    "All Posts",
    "Technology",
    "Compliance",
    "Patient Care",
    "Business Intelligence",
    "Security",
    "Industry Insights",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div
                className="mb-4 font-medium tracking-[0.12em] uppercase text-[rgba(85,85,85,0.7)] dark:text-white/50"
                style={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "12px",
                }}
              >
                OUR BLOG
              </div>

              <h1
                className="mb-6 font-bold leading-tight max-w-[900px] mx-auto text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(32px, 5vw, 64px)",
                  lineHeight: "1.2",
                }}
              >
                Insights, Trends & Best Practices
              </h1>

              <p
                className="max-w-[700px] mx-auto text-[#606060] dark:text-white/60"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(16px, 1.4vw, 20px)",
                  lineHeight: "1.6",
                }}
              >
                Stay updated with the latest in healthcare technology, industry
                trends, and expert insights from our team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold z-10">
                  <span
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "12px",
                    }}
                  >
                    FEATURED
                  </span>
                </div>
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-auto object-cover rounded-2xl dark:opacity-90"
                  style={{ aspectRatio: "4/3" }}
                />
                <div className="absolute inset-0 dark:bg-black/20 rounded-2xl pointer-events-none" />
              </div>

              {/* Content */}
              <div>
                <div className="mb-4 flex items-center space-x-4">
                  <span
                    className="inline-block px-4 py-2 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] rounded-full font-semibold"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "12px",
                    }}
                  >
                    {featuredPost.category}
                  </span>
                </div>

                <h2
                  className="mb-6 font-bold text-[#111] dark:text-white/90"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "clamp(24px, 3vw, 36px)",
                  }}
                >
                  {featuredPost.title}
                </h2>

                <p
                  className="mb-6 text-[#606060] dark:text-white/60"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {featuredPost.excerpt}
                </p>

                <div className="mb-6 flex items-center space-x-4 text-[#606060] dark:text-white/60">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" strokeWidth={1.5} />
                    <span
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      {featuredPost.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                    <span
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                  <img
                    src={featuredPost.author.image}
                    alt={featuredPost.author.name}
                    className="w-12 h-12 rounded-full object-cover dark:opacity-90"
                  />
                  <div>
                    <p
                      className="font-semibold text-[#111] dark:text-white/90"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                      }}
                    >
                      {featuredPost.author.name}
                    </p>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "13px",
                      }}
                    >
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#2563EB] font-semibold hover:underline transition-all duration-150 ease-in-out"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "16px",
                  }}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-[#121212] sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-150 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 ${
                    selectedCategory === category
                      ? "bg-[#2563EB] text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-[#606060] dark:text-white/60 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "14px",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-white dark:bg-[#1E1E1E] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 dark:opacity-90"
                    />
                    <div className="absolute inset-0 dark:bg-black/20 pointer-events-none" />
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-[#2563EB]" strokeWidth={1.5} />
                      <span
                        className="text-[#2563EB] font-semibold"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "12px",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h3
                      className="mb-3 font-bold text-[#111] dark:text-white/90 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-150"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "18px",
                        lineHeight: "1.3",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      className="mb-4 text-[#606060] dark:text-white/60 line-clamp-3"
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: "14px",
                        lineHeight: "1.5",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-[#606060] dark:text-white/60">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" strokeWidth={1.5} />
                        <span
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "12px",
                          }}
                        >
                          {post.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" strokeWidth={1.5} />
                        <span
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "12px",
                          }}
                        >
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <a
                        href="#"
                        className="inline-flex items-center space-x-2 text-[#2563EB] font-semibold hover:underline transition-all duration-150 ease-in-out"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: "14px",
                        }}
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-20 bg-[#FAFAF6] dark:bg-[#1E1E1E]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2
              className="mb-6 font-bold text-[#111] dark:text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(24px, 3vw, 42px)",
              }}
            >
              Subscribe to Our Newsletter
            </h2>
            <p
              className="mb-8 text-[#606060] dark:text-white/60"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Get the latest insights, industry trends, and updates delivered
              directly to your inbox every week.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 bg-white dark:bg-[#121212] text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 ease-in-out hover:bg-[#1D4ED8] active:bg-[#1E40AF] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-opacity-50 focus:ring-offset-2 whitespace-nowrap"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                }}
              >
                Subscribe
              </button>
            </form>
            {subscribeStatus === "success" && (
              <p className="mt-4 text-green-600 dark:text-green-400 text-sm">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
