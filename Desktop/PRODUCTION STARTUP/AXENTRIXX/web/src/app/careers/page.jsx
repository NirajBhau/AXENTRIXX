import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ChevronRight,
  CheckCircle,
  Upload,
  ArrowLeft,
  Users,
  Zap,
  Globe,
  TrendingUp,
  Heart,
  Award,
  Target,
  Lightbulb,
  Shield,
  BookOpen,
  Rocket,
  Star,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    portfolio: "",
    introduction: "",
    resume: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobOpenings = [];

  const whyWorkWithUs = [
    {
      icon: Users,
      title: "Remote-Friendly Culture",
      description: "Work from anywhere with flexible hours that fit your lifestyle.",
    },
    {
      icon: TrendingUp,
      title: "Rapid Growth Environment",
      description: "Join a fast-growing startup and take ownership of impactful projects.",
    },
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Continuous learning with access to courses, conferences, and certifications.",
    },
    {
      icon: Globe,
      title: "Global Client Exposure",
      description: "Work with international clients across diverse industries.",
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Use cutting-edge technologies and tools to build innovative solutions.",
    },
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "Diverse, welcoming team where everyone's voice matters.",
    },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and encourage experimentation.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency and honesty guide every decision we make.",
    },
    {
      icon: BookOpen,
      title: "Learning Mindset",
      description: "Continuous growth and knowledge-sharing are at our core.",
    },
    {
      icon: Target,
      title: "Customer Obsession",
      description: "We put our clients first and deliver exceptional value.",
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "We take pride in building high-quality solutions.",
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "We own our work and deliver on our commitments.",
    },
  ];

  const departments = ["All", ...new Set(jobOpenings.map((job) => job.department))];
  const locations = ["All", ...new Set(jobOpenings.map((job) => job.location))];

  const filteredJobs = jobOpenings.filter((job) => {
    const matchDept = departmentFilter === "All" || job.department === departmentFilter;
    const matchLoc = locationFilter === "All" || job.location === locationFilter;
    return matchDept && matchLoc;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, resume: file }));
    } else {
      alert("Please upload a PDF file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData to send file
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('linkedin', formData.linkedin || '');
      formDataToSend.append('portfolio', formData.portfolio || '');
      formDataToSend.append('introduction', formData.introduction);

      // Append resume file if it exists
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch("http://localhost:5000/api/careers/apply", {
        method: "POST",
        body: formDataToSend, // Send FormData (no Content-Type header needed)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setShowApplicationForm(false);
          setSelectedJob(null);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            position: "",
            linkedin: "",
            portfolio: "",
            introduction: "",
            resume: null,
          });
        }, 3000);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Career application error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setFormData((prev) => ({ ...prev, position: job.title }));
    setTimeout(() => {
      document.getElementById("job-details")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleGeneralApplication = () => {
    setSelectedJob(null);
    setShowApplicationForm(true);
    setFormData((prev) => ({ ...prev, position: 'General Application' }));
    setTimeout(() => {
      document.getElementById("job-details")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleViewMore = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
    setTimeout(() => {
      document.getElementById("job-details")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBack = () => {
    setSelectedJob(null);
    setShowApplicationForm(false);
  };
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF] to-[#DBEAFE] dark:from-[#0F0F0F] dark:via-[#1A1A2E] dark:to-[#1E293B]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div
              className="mb-6 font-medium tracking-[0.12em] uppercase text-[#2563EB]"
              style={{
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "14px",
              }}
            >
              CAREERS AT AXENTRIXX
            </div>

            <h1
              className="mb-6 font-bold leading-tight text-[#111] dark:text-white/90"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: "1.1",
              }}
            >
              Build the Future With Us
            </h1>

            <p
              className="mb-10 text-[#606060] dark:text-white/60 max-w-3xl mx-auto"
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "clamp(18px, 1.5vw, 22px)",
                lineHeight: "1.7",
              }}
            >
              Join Axentrixx, an emerging tech startup empowering innovation across industries through
              cutting-edge Web Development, Data Analytics, and SaaS solutions. Work on impactful projects
              with global clients and shape the future of technology.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  document.getElementById('open-positions')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95 shadow-lg"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                }}
              >
                Explore Roles
              </button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2
                className="mb-4 font-bold text-[#111] dark:text-white/90"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(32px, 4vw, 48px)",
                }}
              >
                Why Work With Us?
              </h2>
              <p
                className="text-[#606060] dark:text-white/60 max-w-3xl mx-auto"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "clamp(16px, 1.3vw, 18px)",
                  lineHeight: "1.6",
                }}
              >
                At Axentrixx, we foster a collaborative and innovative work culture where you can take
                ownership of impactful projects in a rapid-growth environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyWorkWithUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FAFAF6] dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-[#2563EB] dark:hover:border-[#2563EB] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-3 font-bold text-[#111] dark:text-white/90"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "20px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#606060] dark:text-white/60"
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] dark:from-[#0F0F0F] dark:to-[#1A1A2E]">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2
                className="mb-6 font-bold text-[#111] dark:text-white/90"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                Our Culture
              </h2>
            </div>

            <div className="bg-white/60 dark:bg-[#1E1E1E]/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="mb-4 font-bold text-[#111] dark:text-white/90 flex items-center gap-3" style={{ fontFamily: '"Inter", sans-serif', fontSize: "22px" }}>
                    <Target className="w-6 h-6 text-[#2563EB]" />
                    Transparency
                  </h3>
                  <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                    Open communication and honest feedback are the foundation of our team dynamics.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 font-bold text-[#111] dark:text-white/90 flex items-center gap-3" style={{ fontFamily: '"Inter", sans-serif', fontSize: "22px" }}>
                    <Lightbulb className="w-6 h-6 text-[#2563EB]" />
                    Problem-Solving Mindset
                  </h3>
                  <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                    We embrace challenges as opportunities to innovate.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 font-bold text-[#111] dark:text-white/90 flex items-center gap-3" style={{ fontFamily: '"Inter", sans-serif', fontSize: "22px" }}>
                    <Heart className="w-6 h-6 text-[#2563EB]" />
                    Customer-First Attitude
                  </h3>
                  <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                    Every decision delivers exceptional value to our clients.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 font-bold text-[#111] dark:text-white/90 flex items-center gap-3" style={{ fontFamily: '"Inter", sans-serif', fontSize: "22px" }}>
                    <Rocket className="w-6 h-6 text-[#2563EB]" />
                    Experimentation + Innovation
                  </h3>
                  <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                    We encourage trying new approaches and learning.
                  </p>
                </div>
              </div>

              <div className="bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-2xl p-8 border-l-4 border-[#2563EB]">
                <p className="text-[#606060] dark:text-white/70 italic mb-4" style={{ fontFamily: '"Inter", sans-serif', fontSize: "17px" }}>
                  "At Axentrixx, we're building more than just software—we're creating solutions that make a real difference. Join us on this exciting journey."
                </p>
                <p className="font-semibold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                  — Niraj Patil, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#121212]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(32px, 4vw, 48px)" }}>
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-[#F8FAFC] to-white dark:from-[#1E1E1E] dark:to-[#121212] rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-[#2563EB] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563EB]/10 dark:bg-[#2563EB]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="mb-2 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "18px" }}>
                        {value.title}
                      </h3>
                      <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at Axentrixx */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] dark:from-[#0F0F0F] dark:to-[#1A1A2E]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(32px, 4vw, 48px)" }}>
                Life at Axentrixx
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 dark:bg-[#1E1E1E]/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="mb-3 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}>
                  Innovation Days
                </h3>
                <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>
                  Quarterly hackathons where we experiment with new ideas.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-[#1E1E1E]/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="mb-3 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}>
                  Team Collaboration
                </h3>
                <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>
                  Daily standups and knowledge-sharing workshops.
                </p>
              </div>

              <div className="bg-white/70 dark:bg-[#1E1E1E]/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-800">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="mb-3 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}>
                  Celebrations
                </h3>
                <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>
                  Milestones, birthdays, and wins celebrated together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        {!selectedJob && !showApplicationForm && (
          <section id="open-positions" className="py-16 md:py-24 bg-white dark:bg-[#121212]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Open Positions
                </h2>
                <p className="text-[#606060] dark:text-white/60 max-w-2xl mx-auto" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                  Explore our current openings and find the perfect role.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div>
                  <label className="block mb-2 text-[#606060] dark:text-white/60 font-medium text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
                    Department
                  </label>
                  <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className="px-4 py-2 bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-[#606060] dark:text-white/60 font-medium text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
                    Location
                  </label>
                  <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="px-4 py-2 bg-white dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredJobs.length > 0 ? (
                <div className="grid gap-6 md:gap-8">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-[#2563EB] transition-all duration-200 hover:shadow-lg">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="mb-3 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(20px, 2vw, 28px)" }}>
                            {job.title}
                          </h3>

                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center gap-2 text-[#606060] dark:text-white/60 text-[14px]">
                              <Briefcase size={16} />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#606060] dark:text-white/60 text-[14px]">
                              <MapPin size={16} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#606060] dark:text-white/60 text-[14px]">
                              <Clock size={16} />
                              <span>{job.workMode}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#606060] dark:text-white/60 text-[14px]">
                              <DollarSign size={16} />
                              <span>{job.salary}</span>
                            </div>
                          </div>

                          <p className="text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                            {job.description}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:ml-4">
                          <button onClick={() => handleApplyNow(job)} className="px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95 whitespace-nowrap" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                            Apply Now
                          </button>
                          <button onClick={() => handleViewMore(job)} className="px-6 py-3 border-2 border-[#2563EB] text-[#2563EB] rounded-lg font-semibold transition-all duration-200 hover:bg-[#2563EB] hover:text-white active:scale-95 inline-flex items-center justify-center gap-2 whitespace-nowrap" style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}>
                            View More
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-[#2563EB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-10 h-10 text-[#2563EB]" />
                  </div>
                  <h3 className="mb-4 font-bold text-[#111] dark:text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "24px" }}>
                    No Active Positions
                  </h3>
                  <p className="mb-6 text-[#606060] dark:text-white/60" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                    We're always looking for talented people.
                  </p>
                  <button onClick={handleGeneralApplication} className="px-8 py-3 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                    Submit Your Resume
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Job Details Section */}
        {selectedJob && !showApplicationForm && (
          <section id="job-details" className="py-16 md:py-24 bg-white dark:bg-[#121212]">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] mb-8 transition-colors"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
              >
                <ArrowLeft size={20} />
                Back to Listings
              </button>

              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                <h2
                  className="mb-4 font-bold text-[#111] dark:text-white/90"
                  style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 3vw, 36px)" }}
                >
                  {selectedJob.title}
                </h2>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-[#606060] dark:text-white/60">
                    <Briefcase size={18} />
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>{selectedJob.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#606060] dark:text-white/60">
                    <MapPin size={18} />
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#606060] dark:text-white/60">
                    <Clock size={18} />
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>{selectedJob.workMode}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#606060] dark:text-white/60">
                    <DollarSign size={18} />
                    <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}>{selectedJob.salary}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3
                    className="mb-4 font-bold text-[#111] dark:text-white/90"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                  >
                    About the Role
                  </h3>
                  <p
                    className="text-[#606060] dark:text-white/60"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px", lineHeight: "1.7" }}
                  >
                    {selectedJob.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3
                    className="mb-4 font-bold text-[#111] dark:text-white/90"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                  >
                    Responsibilities
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <span
                          className="text-[#606060] dark:text-white/60"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px", lineHeight: "1.6" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3
                    className="mb-4 font-bold text-[#111] dark:text-white/90"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                  >
                    Qualifications
                  </h3>
                  <ul className="space-y-3">
                    {selectedJob.qualifications.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <span
                          className="text-[#606060] dark:text-white/60"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px", lineHeight: "1.6" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedJob.niceToHave && selectedJob.niceToHave.length > 0 && (
                  <div className="mb-8">
                    <h3
                      className="mb-4 font-bold text-[#111] dark:text-white/90"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                    >
                      Nice to Have
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span
                            className="text-[#606060] dark:text-white/60"
                            style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px", lineHeight: "1.6" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedJob.benefits && selectedJob.benefits.length > 0 && (
                  <div className="mb-8">
                    <h3
                      className="mb-4 font-bold text-[#111] dark:text-white/90"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "20px" }}
                    >
                      Benefits
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Heart className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
                          <span
                            className="text-[#606060] dark:text-white/60"
                            style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px", lineHeight: "1.6" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <button
                    onClick={() => handleApplyNow(selectedJob)}
                    className="px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                  >
                    Apply for this Position
                  </button>
                  <button
                    onClick={handleBack}
                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-[#111] dark:text-white/90 rounded-lg font-semibold transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB] active:scale-95"
                    style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                  >
                    View Other Roles
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Application Form Section */}
        {showApplicationForm && (
          <section id="job-details" className="py-16 md:py-24 bg-white dark:bg-[#121212]">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] mb-8 transition-colors"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
              >
                <ArrowLeft size={20} />
                Back to Listings
              </button>

              <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                {!isSubmitted ? (
                  <>
                    <h2
                      className="mb-2 font-bold text-[#111] dark:text-white/90"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(28px, 3vw, 36px)" }}
                    >
                      Apply for {formData.position || "a Position"}
                    </h2>
                    <p
                      className="mb-8 text-[#606060] dark:text-white/60"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                    >
                      Fill out the form below and we'll get back to you soon.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Position Applying For *
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="e.g., Senior Full Stack Developer"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Portfolio/Website
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="https://yourportfolio.com"
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Tell Us About Yourself *
                        </label>
                        <textarea
                          name="introduction"
                          value={formData.introduction}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90 resize-none"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "15px" }}
                          placeholder="Share your experience, skills, and why you're interested in this role..."
                        />
                      </div>

                      <div>
                        <label
                          className="block mb-2 text-[#111] dark:text-white/90 font-medium"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                        >
                          Resume (PDF) *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            required
                            className="w-full px-4 py-3 bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-[#111] dark:text-white/90 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#2563EB] file:text-white file:cursor-pointer hover:file:bg-[#1D4ED8]"
                            style={{ fontFamily: '"Inter", sans-serif', fontSize: "14px" }}
                          />
                        </div>
                        {formData.resume && (
                          <p
                            className="mt-2 text-[#2563EB] text-sm"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                          >
                            Selected: {formData.resume.name}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-4 bg-[#2563EB] text-white rounded-lg font-semibold transition-all duration-200 hover:bg-[#1D4ED8] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#2563EB] disabled:active:scale-100 inline-flex items-center justify-center gap-2"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                              Submitting Application...
                            </>
                          ) : (
                            "Submit Application"
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={handleBack}
                          className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-[#111] dark:text-white/90 rounded-lg font-semibold transition-all duration-200 hover:border-[#2563EB] hover:text-[#2563EB] active:scale-95"
                          style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3
                      className="mb-4 font-bold text-[#111] dark:text-white/90"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "28px" }}
                    >
                      Application Submitted!
                    </h3>
                    <p
                      className="text-[#606060] dark:text-white/60"
                      style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}
                    >
                      Thank you for your interest. We'll review your application and get back to you soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Join The Team CTA */}
        {!selectedJob && !showApplicationForm && (
          <section className="py-20 md:py-32 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="mb-6 font-bold text-white" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(32px, 4vw, 48px)" }}>
                Let's Build Something Amazing Together
              </h2>
              <p className="mb-8 text-white/90" style={{ fontFamily: '"Inter", sans-serif', fontSize: "clamp(16px, 1.3vw, 18px)" }}>
                Ready to make an impact? Join our team and shape the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#open-positions" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2563EB] rounded-lg font-semibold transition-all duration-200 hover:bg-gray-100 active:scale-95 shadow-lg" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                  View Open Roles
                </a>
                <button onClick={handleGeneralApplication} className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold transition-all duration-200 hover:bg-white hover:text-[#2563EB] active:scale-95" style={{ fontFamily: '"Inter", sans-serif', fontSize: "16px" }}>
                  Apply Now
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
