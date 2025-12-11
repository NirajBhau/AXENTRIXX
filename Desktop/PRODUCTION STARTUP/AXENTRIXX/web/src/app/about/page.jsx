"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Users, Award, Globe, TrendingUp, Lightbulb, Handshake, Target, Eye, BookOpen, X } from "lucide-react";

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const [visibleFounder, setVisibleFounder] = useState(null);
  const nirajRef = useRef(null);
  const dandanRef = useRef(null);

  // Timeline data
  const timelineData = [
    {
      id: "beginning",
      label: "The Beginning",
      year: "2016",
      title: "The Beginning",
      icon: "🚀",
      content: [
        "It all started with a simple belief: technology should solve real problems, not create new ones. As a young developer working with various startups, I noticed a recurring pattern - businesses struggled with complex, expensive solutions that didn't fit their actual needs.",
        "In 2016, armed with just a laptop and determination, I founded Axentrixx with a mission: to democratize access to enterprise-grade technology. Small companies needed the same core functionalities, but packaged in a way that made sense for their specific industry and scale.",
      ],
    },
    {
      id: "breakthrough",
      label: "First Breakthrough",
      year: "2018",
      title: "First Breakthrough",
      icon: "💡",
      content: [
        "Our first major success came when we developed a custom healthcare management system for a mid-sized clinic. The solution reduced their administrative overhead by 60% and improved patient satisfaction scores significantly.",
        "This project validated our approach and opened doors to more opportunities. We realized that combining industry-specific knowledge with cutting-edge technology was our competitive advantage.",
      ],
    },
    {
      id: "expansion",
      label: "Global Expansion",
      year: "2020",
      title: "Global Expansion",
      icon: "🌍",
      content: [
        "By 2020, we had expanded our operations to serve clients across 15 countries. The pandemic accelerated digital transformation, and businesses needed reliable technology partners more than ever.",
        "We scaled our team, refined our processes, and invested heavily in cloud infrastructure to support our growing client base. Our commitment to quality and customer success remained unwavering.",
      ],
    },
    {
      id: "innovation",
      label: "AI Innovation Era",
      year: "2023",
      title: "AI Innovation Era",
      icon: "🤖",
      content: [
        "The AI revolution transformed how we approach problem-solving. We integrated machine learning and AI capabilities into our solutions, enabling predictive analytics, automation, and intelligent decision-making.",
        "Today, we're at the forefront of AI-powered business solutions, helping companies leverage cutting-edge technology to gain competitive advantages and drive growth.",
      ],
    },
  ];

  // Phase data
  const phaseData = [
    {
      label: "Discovery & Strategy",
      icon: "🔍",
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      description: "We begin every project by deeply understanding your business, challenges, and goals.",
      steps: [
        "Comprehensive business analysis and stakeholder interviews",
        "Market research and competitive landscape evaluation",
        "Technical infrastructure assessment and gap analysis",
        "Strategic roadmap development with clear milestones",
      ],
      outcome: "A detailed project blueprint that aligns technology solutions with business objectives.",
    },
    {
      label: "Design & Architecture",
      icon: "🎨",
      title: "Design & Architecture",
      subtitle: "Crafting the Blueprint",
      description: "We create intuitive designs and robust architectures that scale with your business.",
      steps: [
        "User experience research and persona development",
        "Wireframing and interactive prototyping",
        "System architecture design and technology stack selection",
        "Security and compliance framework establishment",
      ],
      outcome: "A comprehensive design system and technical architecture ready for implementation.",
    },
    {
      label: "Development & Integration",
      icon: "💻",
      title: "Development & Integration",
      subtitle: "Building Your Solution",
      description: "Our expert developers bring designs to life with clean, efficient, and maintainable code.",
      steps: [
        "Agile development with bi-weekly sprint cycles",
        "Continuous integration and automated testing",
        "API development and third-party integrations",
        "Performance optimization and code reviews",
      ],
      outcome: "A fully functional, tested solution ready for deployment and user acceptance.",
    },
    {
      label: "AI Enhancement",
      icon: "⚡",
      title: "AI Enhancement",
      subtitle: "Intelligent Automation",
      description: "We integrate AI capabilities to automate processes and provide intelligent insights.",
      steps: [
        "Machine learning model development and training",
        "Natural language processing implementation",
        "Predictive analytics and forecasting systems",
        "Intelligent automation and workflow optimization",
      ],
      outcome: "AI-powered features that provide competitive advantages and operational efficiency.",
    },
    {
      label: "Launch & Optimization",
      icon: "🚀",
      title: "Launch & Optimization",
      subtitle: "Going Live Successfully",
      description: "We ensure smooth deployment and provide ongoing support for continuous improvement.",
      steps: [
        "Staged deployment with rollback capabilities",
        "User training and documentation delivery",
        "Performance monitoring and analytics setup",
        "Continuous optimization based on user feedback",
      ],
      outcome: "A successfully launched solution with ongoing support and optimization.",
    },
  ];

  // Values data
  const valuesData = [
    {
      label: "Innovation Excellence",
      icon: Lightbulb,
      title: "Innovation Excellence",
      subtitle: "Pushing Boundaries",
      description: "We constantly explore emerging technologies and methodologies to deliver cutting-edge solutions that give our clients competitive advantages.",
      points: [
        "Embrace emerging technologies and AI advancements",
        "Invest 20% of time in research and development",
        "Foster a culture of experimentation and learning",
        "Challenge conventional approaches to find better solutions",
      ],
      example: {
        title: "AI-Powered Restaurant Analytics",
        description: "When a client needed better inventory management, we didn't just build a tracking system. We created an AI-powered solution that predicts demand patterns, optimizes ordering schedules, and reduces food waste by 40%. This innovation became a core feature of our Restaurant Management System.",
        impact: "40% reduction in food waste, 25% improvement in profit margins",
      },
    },
    {
      label: "Client Partnership",
      icon: Handshake,
      title: "Client Partnership",
      subtitle: "Your Success is Our Success",
      description: "We build long-term relationships based on trust, transparency, and mutual growth. Your challenges become our challenges, and your victories are our victories.",
      points: [
        "Dedicated account managers for personalized support",
        "Regular communication and progress updates",
        "Collaborative approach to problem-solving",
        "Flexible engagement models to fit your needs",
      ],
      example: {
        title: "Healthcare Clinic Digital Transformation",
        description: "We partnered with a growing healthcare clinic to completely digitize their operations. Through close collaboration and iterative feedback, we delivered a comprehensive system that improved patient care and operational efficiency.",
        impact: "60% reduction in administrative time, 95% patient satisfaction rate",
      },
    },
    {
      label: "Quality Commitment",
      icon: Target,
      title: "Quality Commitment",
      subtitle: "Excellence in Every Detail",
      description: "We maintain the highest standards in everything we do, from code quality to customer service. Quality isn't just a goal—it's our standard operating procedure.",
      points: [
        "Rigorous code reviews and testing protocols",
        "Industry best practices and coding standards",
        "Comprehensive documentation and knowledge transfer",
        "Continuous quality improvement processes",
      ],
      example: {
        title: "Enterprise E-commerce Platform",
        description: "For a major retail client, we built an e-commerce platform that handles millions of transactions. Our commitment to quality ensured 99.9% uptime and zero critical bugs in the first year of operation.",
        impact: "99.9% uptime, zero critical bugs, 3x faster page load times",
      },
    },
    {
      label: "Global Perspective",
      icon: Globe,
      title: "Global Perspective",
      subtitle: "Thinking Worldwide",
      description: "With clients across 25+ countries, we bring a global perspective to every project. We understand diverse markets, cultures, and regulatory requirements.",
      points: [
        "Multi-language and multi-currency support",
        "Compliance with international standards and regulations",
        "24/7 support across multiple time zones",
        "Cultural sensitivity in design and implementation",
      ],
      example: {
        title: "Global Supply Chain Management",
        description: "We developed a supply chain management system for a multinational corporation operating in 30 countries. The solution handles multiple currencies, languages, and regulatory requirements seamlessly.",
        impact: "30% improvement in supply chain efficiency, 50% reduction in compliance issues",
      },
    },
    {
      label: "Continuous Learning",
      icon: BookOpen,
      title: "Continuous Learning",
      subtitle: "Always Growing",
      description: "Technology evolves rapidly, and so do we. We invest in continuous learning and development to stay ahead of the curve and bring the latest innovations to our clients.",
      points: [
        "Regular training and certification programs",
        "Knowledge sharing sessions and tech talks",
        "Participation in industry conferences and events",
        "Contribution to open-source projects and communities",
      ],
      example: {
        title: "AI Integration Workshop Series",
        description: "We conducted an internal workshop series on the latest AI technologies, which led to the development of three new AI-powered features for our clients, including predictive maintenance and intelligent chatbots.",
        impact: "3 new AI features launched, 100% team AI literacy, 5 industry certifications earned",
      },
    },
  ];

  // Scroll-triggered reveal using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const founderId = entry.target.getAttribute('data-founder');
          setVisibleFounder(founderId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (nirajRef.current) observer.observe(nirajRef.current);
    if (dandanRef.current) observer.observe(dandanRef.current);

    return () => {
      if (nirajRef.current) observer.unobserve(nirajRef.current);
      if (dandanRef.current) observer.unobserve(dandanRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main>
        {/* Founder's Vision Section - Scroll Reveal */}
        <section className="relative bg-gray-900 overflow-hidden">
          {/* Niraj Section */}
          <div
            ref={nirajRef}
            data-founder="niraj"
            className="relative min-h-screen flex items-center justify-center py-20 bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ${visibleFounder === 'niraj' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="transition-all duration-700 delay-200">
                  <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 bg-white/5 backdrop-blur-xl">
                    <img
                      src="https://ui-avatars.com/api/?name=Niraj+Patil&size=800&background=transparent&color=fff&bold=true&font-size=0.35"
                      alt="Niraj Patil"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-blue-400/20"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="text-left">
                  <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">Founder & CEO</h2>
                  <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
                    Niraj <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Patil</span>
                  </h1>

                  <div className="space-y-8 max-w-xl">
                    <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                      "Technology should empower, not complicate. Our mission is to make enterprise-grade solutions accessible to every growing business."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vandan Section */}
          <div
            ref={dandanRef}
            data-founder="vandan"
            className="relative min-h-screen flex items-center justify-center py-20 bg-fixed bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className={`relative z-10 max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ${visibleFounder === 'vandan' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div className="text-right lg:order-1 order-2">
                  <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">Co-Founder & CTO</h2>
                  <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight">
                    Vandan <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Patel</span>
                  </h1>

                  <div className="space-y-8 max-w-xl ml-auto">
                    <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                      "Innovation happens at the intersection of vision and execution. We build systems that scale with your ambition."
                    </p>
                  </div>
                </div>

                {/* Image Side */}
                <div className="lg:order-2 order-1 transition-all duration-700 delay-200">
                  <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 bg-white/5 backdrop-blur-xl">
                    <img
                      src="https://ui-avatars.com/api/?name=Vandan+Patel&size=800&background=transparent&color=fff&bold=true&font-size=0.35"
                      alt="Vandan Patel"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-blue-400/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* The Story Behind Axentrixx Section */}
        < section className="py-20 bg-gray-50 dark:bg-[#0F0F0F]" >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-500/10 rounded-full mb-4">
                <Users size={16} className="text-[#2563EB]" />
                <span className="text-[#2563EB] text-sm font-medium">Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-4">
                The Story Behind <span className="text-blue-600 dark:text-blue-400">Axentrixx Global</span>
              </h2>
              <p className="text-[#606060] dark:text-white/70 text-lg max-w-3xl mx-auto">
                Every great company has a story. Ours is about turning challenges into opportunities and building technology that truly serves people.
              </p>
            </div>

            {/* Timeline Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {timelineData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTimeline(index)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm ${activeTimeline === index
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "bg-white dark:bg-[#1A1A1A] text-[#606060] dark:text-white/60 hover:bg-blue-50 dark:hover:bg-[#252525] border border-gray-200 dark:border-gray-800"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Story Content */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Image Side */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-[#2563EB] text-white px-6 py-3 rounded-xl font-bold text-2xl shadow-xl z-10">
                  {timelineData[activeTimeline].year}
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <Users size={80} className="text-gray-400 dark:text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{timelineData[activeTimeline].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111] dark:text-white">{timelineData[activeTimeline].title}</h3>
                </div>

                {timelineData[activeTimeline].content.map((paragraph, idx) => (
                  <p key={idx} className="text-[#606060] dark:text-white/70 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}

                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveTimeline(Math.max(0, activeTimeline - 1))}
                    disabled={activeTimeline === 0}
                    className="px-6 py-2.5 bg-gray-100 dark:bg-white/5 text-[#606060] dark:text-white/70 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveTimeline(Math.min(timelineData.length - 1, activeTimeline + 1))}
                    disabled={activeTimeline === timelineData.length - 1}
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next Chapter →
                  </button>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-6">💬</div>
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
                    "Every line of code we write, every solution we build, every client we serve - it all comes back to our core belief that technology should empower people, not overwhelm them."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Users size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Niraj Patil & Vandan Patel</div>
                      <div className="text-white/80 text-sm">Co-Founders, Axentrixx Global</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Our Proven Approach Section */}
        < section className="py-20 bg-white dark:bg-[#121212]" >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-500/10 rounded-full mb-4">
                <Award size={16} className="text-[#2563EB]" />
                <span className="text-[#2563EB] text-sm font-medium">Our Methodology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-4">
                Our Proven <span className="text-blue-600 dark:text-blue-400">Approach</span>
              </h2>
              <p className="text-[#606060] dark:text-white/70 text-lg max-w-3xl mx-auto">
                A systematic methodology that combines business strategy, technical excellence, and AI innovation to deliver transformative results.
              </p>
            </div>

            {/* Phase Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {phaseData.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm ${activePhase === index
                    ? "bg-[#2563EB] text-white shadow-md"
                    : "bg-white dark:bg-[#1A1A1A] text-[#606060] dark:text-white/60 hover:bg-blue-50 dark:hover:bg-[#252525] border border-gray-200 dark:border-gray-800"
                    }`}
                >
                  {phase.label}
                </button>
              ))}
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Visual Side - Team Working Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-50 dark:from-blue-900/20 dark:via-cyan-800/10 dark:to-sky-900/10 rounded-3xl overflow-hidden shadow-2xl relative">
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-cyan-500/50 to-sky-400/40 z-10 flex flex-col items-center justify-center text-white p-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                      {phaseData[activePhase].title}
                    </h3>
                    <p className="text-white/90 text-center text-lg">
                      {phaseData[activePhase].subtitle}
                    </p>
                  </div>

                  {/* Placeholder for team working image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <Users size={80} className="text-gray-400 dark:text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <p className="text-[#606060] dark:text-white/70 text-lg leading-relaxed">
                  {phaseData[activePhase].description}
                </p>

                {/* Process Steps */}
                <div>
                  <h4 className="text-[#111] dark:text-white font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-sm">📋</span>
                    </div>
                    Process Steps:
                  </h4>
                  <div className="space-y-3">
                    {phaseData[activePhase].steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-xl hover:shadow-md transition-shadow">
                        <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">{index + 1}</span>
                        </div>
                        <span className="text-[#606060] dark:text-white/70 text-sm leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expected Outcome */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-[#111] dark:text-white font-bold mb-2">Expected Outcome</h4>
                      <p className="text-[#606060] dark:text-white/70 text-sm leading-relaxed">
                        {phaseData[activePhase].outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* Company Values in Action Section */}
        < section className="py-20 bg-gray-50 dark:bg-[#0F0F0F]" >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-500/10 rounded-full mb-4">
                <Award size={16} className="text-[#2563EB]" />
                <span className="text-[#2563EB] text-sm font-medium">Our Foundation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-4">
                Company Values <span className="text-blue-600 dark:text-blue-400">in Action</span>
              </h2>
              <p className="text-[#606060] dark:text-white/70 text-lg max-w-3xl mx-auto">
                Our values aren't just words on a wall - they're principles that guide every decision, every project, and every client interaction. See how they translate into real results.
              </p>
            </div>

            {/* Values Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {valuesData.map((value, index) => {
                const Icon = value.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all text-sm ${activeValue === index
                      ? "bg-[#2563EB] dark:bg-[#2563EB] text-white shadow-lg"
                      : "bg-white dark:bg-[#1A1A1A] text-[#606060] dark:text-white/60 hover:bg-blue-50 dark:hover:bg-[#252525]"
                      }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{value.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Visual Side - Innovation Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 via-cyan-50 to-sky-50 dark:from-blue-900/20 dark:via-cyan-800/10 dark:to-sky-900/10 rounded-3xl overflow-hidden shadow-2xl relative">
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 via-cyan-500/50 to-sky-400/40 z-10 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      {(() => {
                        const Icon = valuesData[activeValue].icon;
                        return <Icon size={40} />;
                      })()}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                      {valuesData[activeValue].title}
                    </h3>
                    <p className="text-white/90 text-center text-lg">
                      {valuesData[activeValue].subtitle}
                    </p>
                  </div>

                  {/* Placeholder for innovation image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    {(() => {
                      const Icon = valuesData[activeValue].icon;
                      return <Icon size={80} className="text-gray-400 dark:text-gray-600" />;
                    })()}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-6">
                <p className="text-[#606060] dark:text-white/70 text-lg leading-relaxed">
                  {valuesData[activeValue].description}
                </p>

                {/* How We Live This Value */}
                <div>
                  <h4 className="text-[#111] dark:text-white font-bold mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Eye size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    How We Live This Value:
                  </h4>
                  <div className="space-y-3">
                    {valuesData[activeValue].points.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-[#1A1A1A] rounded-xl hover:shadow-md transition-shadow">
                        <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                        </div>
                        <span className="text-[#606060] dark:text-white/70 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Project Example */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-500/20">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      {(() => {
                        const Icon = valuesData[activeValue].icon;
                        return <Icon size={20} className="text-white" />;
                      })()}
                    </div>
                    <div>
                      <h4 className="text-[#111] dark:text-white font-bold mb-1">Real Project Example</h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{valuesData[activeValue].example.title}</p>
                    </div>
                  </div>
                  <p className="text-[#606060] dark:text-white/70 text-sm leading-relaxed mb-4">
                    {valuesData[activeValue].example.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    <span>📊 Impact:</span>
                    <span>{valuesData[activeValue].example.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >

      <Footer />
    </div >
  );
}
