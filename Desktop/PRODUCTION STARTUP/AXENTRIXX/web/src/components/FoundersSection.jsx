import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function FoundersSection() {
    const founders = [
        {
            name: "Niraj Patil",
            role: "Founder & CEO",
            description: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            image: "https://ui-avatars.com/api/?name=Niraj+Patil&size=600&background=random&color=fff&bold=true&font-size=0.35",
            ringColor: "border-blue-500",
            barColor: "bg-blue-500",
            socials: [
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
            ],
        },
        {
            name: "Vandan Patel",
            role: "Co-Founder & CTO",
            description: "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum",
            image: "https://ui-avatars.com/api/?name=Vandan+Patel&size=600&background=Randomx&color=fff&bold=true&font-size=0.35",
            ringColor: "border-blue-500",
            barColor: "bg-blue-500",
            socials: [
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
            ],
        },
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Meet Our Visionaries
                    </h2>
                </div>

                {/* Team Members - Center Aligned */}
                <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full sm:w-80"
                        >
                            {/* Large Circular Image with Colored Ring */}
                            <div className="flex justify-center pt-12 pb-8">
                                <div className="relative">
                                    {/* Colored ring */}
                                    <div className={`w-64 h-64 rounded-full ${founder.ringColor} border-[10px] p-6 bg-white dark:bg-gray-900`}>
                                        {/* Inner gray background circle */}
                                        <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
                                            <img
                                                src={founder.image}
                                                alt={founder.name}
                                                className="w-full h-full object-cover grayscale"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="px-8 pb-6 text-center">
                                {/* Name */}
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {founder.name}
                                </h3>

                                {/* Role */}
                                <p className={`text-base font-semibold ${founder.ringColor.replace('border', 'text')} mb-6`}>
                                    {founder.role}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    {founder.description}
                                </p>
                            </div>

                            {/* Social Icons Bar - Full Width Colored Bar */}
                            <div className={`${founder.barColor} py-5 flex justify-center gap-6`}>
                                {founder.socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-100 transition-colors duration-200"
                                        aria-label={social.icon.name}
                                    >
                                        <social.icon size={24} strokeWidth={2} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
