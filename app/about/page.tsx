"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  const skills = [
    { name: "React Native", level: 95, icon: "📱" },
    { name: "Android (Kotlin)", level: 80, icon: "🤖" },
    { name: "TypeScript", level: 92, icon: "💙" },
    { name: "JavaScript", level: 95, icon: "💛" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Next.js", level: 70, icon: "🔺" },
    { name: "iOS Swift", level: 45, icon: "🍎" },
    { name: "Firebase", level: 85, icon: "🔥" },
    { name: "SQL", level: 75, icon: "🗄️" },
    { name: "HTML5 + CSS", level: 85, icon: "🎨" },
    { name: "Java", level: 50, icon: "☕" },
    { name: "C#", level: 40, icon: "🔷" },
  ];

  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "Shadowboxer",
      period: "Jan 2023 - Present",
      description:
        "Fintech app development - Mobile and web developer using React Native with TypeScript, Next.js with React.js. Involved in UI decision making and backend discussions for data processing.",
      icon: "🚀",
    },
    {
      title: "Jr+/Senior Mobile Developer",
      company: "Nicasource",
      period: "Dec 2021 - Dec 2022",
      description:
        "Medical and fintech mobile app development using React Native with TypeScript. Also involved in web development with React.js and Next.js, plus UI/UX decision making.",
      icon: "💼",
    },
    {
      title: "Jr Mobile Developer",
      company: "Virtualmind",
      period: "Feb 2019 - Dec 2021",
      description:
        "Mobile app development with React Native and TypeScript. Also worked on Android Studio (Kotlin) and iOS (Swift) projects, including virtual wallet and kitchen management apps.",
      icon: "🌱",
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      period: "2019 - Present",
      description:
        "Various projects including TradeGPT (trading advice app), e-commerce apps with payment integration, and data management systems for retail automation.",
      icon: "💻",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-8">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <Image
              className="w-full h-full rounded-full object-cover object-center shadow-2xl"
              src="/images/profile.jpeg"
              alt="Alan Antar Lerner"
              width={128}
              height={128}
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">👋</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hey there! I&apos;m{" "}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Alan Antar Lerner
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Senior Mobile & Web Developer passionate about creating exceptional
            digital experiences
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Left Column - About */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">👨‍💻</span>
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I&apos;m a senior mobile and web developer with over 4 years of
              experience in mobile development using React Native and Android
              Studio (Kotlin, Java), plus extensive web development with
              React.js and Next.js. I hold a degree in System Analysis from ORT
              University.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m skilled in working with agile methodologies (SCRUM) and
              conducting bilingual client-facing conversations. I specialize in
              fintech and medical applications, with experience in both
              contractor and freelance projects.
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <span>📧</span>
                <span>alan.antarlerner@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span>📞</span>
                <span>(+54) 9 114399-8661</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span>📍</span>
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span>🌐</span>
                <span>English & Spanish (Native)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span>💼</span>
                <span>Available for Remote & On-site</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">🛠️</span>
              Skills & Technologies
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{skill.icon}</span>
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-gray-400 via-gray-300 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
          <span className="mr-2">💼</span>
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-gray-400 text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Projects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
          <span className="mr-2">⭐</span>
          Notable Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                🏥
              </div>
              <h3 className="text-lg font-semibold text-white">
                Medical Demo App
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Fully coded demo app that receives patient&apos;s blood glucose
              from external app, calculates insulin amounts for infusion and
              saves entries to patient history.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-full text-xs">
                Android Studio
              </span>
              <span className="px-2 py-1 bg-gray-700/20 text-gray-400 rounded-full text-xs">
                Kotlin
              </span>
              <span className="px-2 py-1 bg-gray-800/20 text-gray-500 rounded-full text-xs">
                MVVM
              </span>
              <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs">
                Room Database
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                💰
              </div>
              <h3 className="text-lg font-semibold text-white">TradeGPT</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              ChatGPT-like app developed for trading advice and recommendations.
              Advanced AI integration for financial insights.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-full text-xs">
                React Native
              </span>
              <span className="px-2 py-1 bg-gray-700/20 text-gray-400 rounded-full text-xs">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-gray-800/20 text-gray-500 rounded-full text-xs">
                AI Integration
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                🛒
              </div>
              <h3 className="text-lg font-semibold text-white">
                Eyewear E-commerce
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              End-to-end e-commerce app with shopping cart, delivery tracking,
              and payment platform integration (MercadoPago e-wallet).
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-full text-xs">
                Android Studio
              </span>
              <span className="px-2 py-1 bg-gray-700/20 text-gray-400 rounded-full text-xs">
                Java
              </span>
              <span className="px-2 py-1 bg-gray-800/20 text-gray-500 rounded-full text-xs">
                Firebase
              </span>
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">
                Payment Integration
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                💳
              </div>
              <h3 className="text-lg font-semibold text-white">
                Trio Rewards Virtual Wallet
              </h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Virtual wallet application allowing customers to pay in different
              merchants. Comprehensive payment solution with rewards system.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-600/20 text-gray-300 rounded-full text-xs">
                React Native
              </span>
              <span className="px-2 py-1 bg-gray-700/20 text-gray-400 rounded-full text-xs">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-gray-800/20 text-gray-500 rounded-full text-xs">
                Payment Systems
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
          <span className="mr-2">🎓</span>
          Education
        </h2>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              🎓
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">
                  Sr Technician in System Analysis
                </h3>
                <span className="text-gray-400 text-sm font-medium">
                  Feb 2019 - Dec 2020
                </span>
              </div>
              <p className="text-gray-300 font-medium mb-2">
                ORT - Buenos Aires, Argentina
              </p>
              <p className="text-gray-300 leading-relaxed mb-3">
                Comprehensive program covering system analysis, software
                development, and project management.
              </p>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-sm text-gray-300 mb-2">
                  <strong className="text-gray-200">Final Project:</strong>
                </p>
                <p className="text-sm text-gray-400">
                  Designed and coded a facial recognition based app in Android
                  Studio (Java) for an auto insurance entity which successfully
                  identified and alerted signs of fatigue and distraction in
                  drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8 border-t border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to work together?
        </h2>
        <p className="text-gray-300 mb-6">
          Let&apos;s discuss your next mobile or web project
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:alan.antarlerner@gmail.com"
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            📧 Send me an email
          </a>
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 border border-white/20 hover:border-white/30"
          >
            🚀 View my projects
          </Link>
        </div>
      </section>
    </div>
  );
}
