// src/Home.jsx

// src/Home.jsx
import { useState } from 'react';
// Import your local image
import heroBackground from './assets/bg1.jpg'; // Adjust path as needed

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Thank you ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      {/* ========== FULL WIDTH HEADER SECTION ========== */}
      <header className="relative w-full min-h-[90vh] flex items-center">
        {/* Background Image Container - Full Width */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Optional: Dark overlay for better text contrast */}
        
        {/* Content Container - Centered content */}
        <div className="relative z-10 w-full px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-600 sm:text-6xl lg:text-7xl xl:text-8xl mb-4 tracking-tight">
                <span className="block">Wiktoria Szitenhelm</span>
                <span className="block mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  <strong className="text-indigo-300">enthusiastic</strong> developer
                </span>
              </h1>
              
              <p className="mt-8 text-lg text-gray-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                Full-stack developer with experience in React, TypeScript, Java, database migration, 
                and enterprise tools. Passionate about creating impactful solutions. Always eager to participate in innovative projects with a positive impact. 
              </p>

              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a 
                  href="#experience-section" 
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-all hover:bg-white hover:text-gray-900 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  View Experience
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition-all hover:bg-indigo-700 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
        
        
        {/* Optional: Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl">Web3 Core Competencies</h2>

    <p className="mt-4 text-lg text-pretty text-gray-700">
      Beyond technical expertise, these soft skills are essential for thriving in the fast-paced, 
      collaborative world of blockchain and decentralized technology.
    </p>
  </div>

  <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {/* Security Mindset */}
    <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 hover:shadow-lg transition-shadow">
      <div className="inline-flex rounded-lg bg-red-100 p-3 text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Security-First Mindset</h3>

      <p className="mt-2 text-pretty text-gray-600 text-sm">
        Prioritizing code immutability, thorough testing, and zero-knowledge principles for 
        secure smart contract development and data privacy.
      </p>
    </div>

    {/* Adaptability */}
    <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 hover:shadow-lg transition-shadow">
      <div className="inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Rapid Adaptation</h3>

      <p className="mt-2 text-pretty text-gray-600 text-sm">
        Quick learning across multiple blockchain ecosystems (EVM, Solana, L2s) and 
        adapting to constantly evolving Web3 standards and protocols.
      </p>
    </div>

    {/* Problem-solving */}
    <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 hover:shadow-lg transition-shadow">
      <div className="inline-flex rounded-lg bg-green-100 p-3 text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Decentralized Problem-Solving</h3>

      <p className="mt-2 text-pretty text-gray-600 text-sm">
        Creative solutions for cross-chain interoperability, gas optimization, 
        and decentralized governance within immutable environments.
      </p>
    </div>

    {/* Collaboration */}
    <div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-6 hover:shadow-lg transition-shadow">
      <div className="inline-flex rounded-lg bg-purple-100 p-3 text-purple-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Open-Source Collaboration</h3>

      <p className="mt-2 text-pretty text-gray-600 text-sm">
        Effective teamwork in distributed environments, contributing to public codebases, 
        and engaging with global developer communities.
      </p>
    </div>
  </div>
</div>

           <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg text-center">
    <h2 className="text-3xl/tight font-bold text-gray-900 sm:text-4xl">Features for growth</h2>

    <p className="mt-4 text-lg text-pretty text-gray-700">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis tenetur, nemo quam
      voluptas sunt impedit dolorem asperiores aliquid doloribus fugit.
    </p>
  </div>

  <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
    <div className="rounded-lg border border-gray-200 p-6">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Adaptability</h3>

      <p className="mt-2 text-pretty text-gray-700">
        Lightning-quick load times optimized for every device
      </p>
    </div>

    <div className="rounded-lg border border-gray-200 p-6">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Communication</h3>

      <p className="mt-2 text-pretty text-gray-700">
        Enterprise-grade security built into every layer
      </p>
    </div>

    <div className="rounded-lg border border-gray-200 p-6">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Problem-solving</h3>

      <p className="mt-2 text-pretty text-gray-700">
        Adapt every aspect to match your brand and needs
      </p>
    </div>

        <div className="rounded-lg border border-gray-200 p-6">
      <div className="inline-flex rounded-lg bg-gray-100 p-3 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"></path>
        </svg>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">Driven</h3>

      <p className="mt-2 text-pretty text-gray-700">
        Adapt every aspect to match your brand and needs
      </p>
    </div>
  </div>
</div>



<div id="experience-section" className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-3xl font-bold text-gray-900 !leading-tight mb-8 text-center">Professional Experience & Projects</h3>
    
    <div className="space-y-8">

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
  <div className="flex items-center gap-4 mb-4">
    <div className="shrink-0">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      </div>
    </div>
    <div>
      <p className="text-lg font-bold text-gray-900">Independent Study & Professional Development</p>
      <p className="text-sm text-gray-600">Oct 2025 - Present</p>
    </div>
  </div>
  <div className="mt-4">
    <h6 className="text-xl font-semibold text-gray-900 mb-3">Advanced Blockchain Research & Skill Enhancement</h6>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">Self-Directed Learning</span>
      <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">Technical Research</span>
      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Protocol Analysis</span>
    </div>
    <div className="text-gray-700 space-y-3">
      <p className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Conducted in-depth research on emerging blockchain protocols, Layer 2 solutions, and zero-knowledge proof advancements
      </p>
      <p className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Developed expertise in advanced smart contract security patterns and gas optimization techniques
      </p>
      <p className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Contributed to open-source blockchain projects and participated in technical communities
      </p>
      <p className="flex items-start">
        <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Focused on sustainable work practices and maintaining optimal performance in high-intensity development environments
      </p>
    </div>
  </div>
</div>

<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 border border-blue-100">
  <div className="flex items-center gap-4 mb-4">
    <div className="shrink-0">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
    </div>
    <div>
      <p className="text-lg font-bold text-gray-900">Technical Sabbatical & Strategic Development</p>
      <p className="text-sm text-gray-600">Oct 2025 - Feb 2026</p>
    </div>
  </div>
  <div className="mt-4">
    <div className="text-gray-700 space-y-3">
      <p className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span className="font-medium">Strategic Skill Development:</span> Focused on deepening expertise in Rust, advanced cryptography, and cross-chain architecture
      </p>
      <p className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span className="font-medium">Industry Research:</span> Analyzed emerging trends in DeFi, NFTs, and blockchain scalability solutions
      </p>
      <p className="flex items-start">
        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        <span className="font-medium">Health & Performance Optimization:</span> Implemented sustainable work practices to ensure long-term career resilience
      </p>
    </div>
  </div>
</div>
      {/* XSwap Experience */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              XS
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">XSwap | Smart Contract Engineer</p>
            <p className="text-sm text-gray-600">May 2025 - Oct 2025 • Remote</p>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="text-xl font-semibold text-gray-900 mb-3">Cross-Chain Swap System</h6>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Solidity</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Rust</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Chainlink CCIP</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Solana</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">EVM ↔ SVM</span>
          </div>
          <div className="text-gray-700 space-y-3">
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Built cross-chain token and message swap system between EVM and SVM networks
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Developed On-Ramp/Off-Ramp programs on Solana using Rust (Anchor)
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Implemented custom payload decoding, secure validation, and token management
            </p>
          </div>
        </div>
      </div>

      {/* J.P. Morgan Experience */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold">
              JP
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">J.P. Morgan | Software Engineer Intern</p>
            <p className="text-sm text-gray-600">Jun 2023 - Jun 2024 • Glasgow, UK</p>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="text-xl font-semibold text-gray-900 mb-3">Legacy System Modernization</h6>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">React</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Spring Boot</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">AWS</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Terraform</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">PostgreSQL</span>
          </div>
          <div className="text-gray-700 space-y-3">
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Migrated legacy Sybase/PowerBuilder system to modern full-stack JavaScript solution
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Developed React frontend and Spring Boot backend with RESTful APIs
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Managed AWS cloud infrastructure and conducted data migration to PostgreSQL
            </p>
          </div>
        </div>
      </div>

{/* Academic & Technical Projects Section */}
<div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-indigo-100">


  <h4 className="text-2xl font-bold from-indigo-600 mb-8 text-center">Academic & Technical Projects</h4>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Featured: Dissertation Project (Spans 2 columns) */}
    <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-indigo-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900 text-lg">Featured Research: Solidity vs Rust in Smart Contract Development</p>
          <p className="text-sm text-gray-600">MSc Dissertation Project (2025)</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4">
        Comparative analysis of smart contract development across Ethereum (Solidity) and Solana (Rust) ecosystems, 
        focusing on security patterns, performance, and developer experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h6 className="font-semibold text-gray-900 mb-2 text-sm">Solidity Implementation</h6>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <svg className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Secure e-voting smart contract with financial staking
            </li>
            <li className="flex items-start">
              <svg className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Commit-reveal scheme with hashing & digital signatures
            </li>
            <li className="flex items-start">
              <svg className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              On-chain security and privacy mechanisms
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-gray-900 mb-2 text-sm">Rust + Anchor Implementation</h6>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-start">
              <svg className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Parallel implementation on Solana blockchain
            </li>
            <li className="flex items-start">
              <svg className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Solana account model & state serialization
            </li>
            <li className="flex items-start">
              <svg className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cross-ecosystem deployment & testing
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Solidity</span>
        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Rust</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Anchor Framework</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Smart Contracts</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Blockchain Security</span>
      </div>
    </div>

    {/* New: Dividend Distribution Smart Contract */}
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900">Dividend Distribution dApp</p>
          <p className="text-xs text-gray-600">ERC20 Token Pool System</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Smart contract application enabling token deposits and proportional dividend distributions.
      </p>
      <div className="space-y-3 mb-4">
        <div className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></div>
          <p className="text-xs text-gray-700">Dual-token system: USD Token (ERC20) & Pool Token</p>
        </div>
        <div className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></div>
          <p className="text-xs text-gray-700">1:1 deposit/withdrawal mechanism</p>
        </div>
        <div className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></div>
          <p className="text-xs text-gray-700">Proportional dividend distribution based on pool share</p>
        </div>
        <div className="flex items-start">
          <div className="w-2 h-2 bg-green-500 rounded-full mt-1 mr-2"></div>
          <p className="text-xs text-gray-700">Automated proceeds withdrawal system</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Solidity</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">ERC20</span>
        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">DeFi</span>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Tokenomics</span>
      </div>
    </div>

    {/* Existing Projects (4 of them) */}
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900">NLP Pipeline (2024)</p>
          <p className="text-xs text-gray-600">Grade A</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Text-processing workflows using spaCy, NumPy, NLTK</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">spaCy</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">NumPy</span>
        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">NLTK</span>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900">Hash Cracking (2024)</p>
          <p className="text-xs text-gray-600">Grade A</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Brute force, dictionary attacks, salted hash cracking in Python</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Security</span>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Benchmarking</span>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900">3D Truck Packing (2022)</p>
          <p className="text-xs text-gray-600">Grade A</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">2D/3D box-packing optimization with human-chain simulation</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">Optimization</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">3D Algorithms</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Simulation</span>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold text-gray-900">Python DSA Projects (2021)</p>
          <p className="text-xs text-gray-600">Grade A</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">Core data structures & algorithms implementations</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Data Structures</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Algorithms</span>
      </div>
    </div>
  </div>
</div>

      {/* Academic & Technical Projects Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-indigo-100">
        <h4 className="text-2xl font-bold text-black mb-8 text-center">Academic & Technical Projects</h4>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* NLP Pipeline */}
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">NLP Pipeline (2024)</p>
                <p className="text-xs text-gray-600">Grade A</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Text-processing workflows using spaCy, NumPy, NLTK</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">spaCy</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">NumPy</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">NLTK</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
            </div>
          </div>

          {/* Hash Cracking */}
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Hash Cracking (2024)</p>
                <p className="text-xs text-gray-600">Grade A</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Brute force, dictionary attacks, salted hash cracking in Python</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Security</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Benchmarking</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Rainbow Tables</span>
            </div>
          </div>

          {/* Virtual Disk Filesystem */}
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Virtual Disk Filesystem (2022)</p>
                <p className="text-xs text-gray-600">Grade A</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">In-memory file system in C with directory management</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">C Programming</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">File Systems</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Memory Management</span>
            </div>
          </div>

          {/* Automated Planner */}
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Automated Planner (2022)</p>
                <p className="text-xs text-gray-600">Grade A</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Heuristic functions, plan validation, and A* search algorithm</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">AI Algorithms</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">A* Search</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Heuristics</span>
            </div>
          </div>

          {/* 3D Truck Packing Algorithm */}
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">3D Truck Packing (2022)</p>
                <p className="text-xs text-gray-600">Grade A</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">2D/3D box-packing optimization with human-chain simulation</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded">Optimization</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">3D Algorithms</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Simulation</span>
            </div>
          </div>

          {/* Python DSA Projects */}
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Python DSA Projects (2021)</p>
                <p className="text-xs text-gray-600">Grade A</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">Core data structures & algorithms implementations</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Python</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Data Structures</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Algorithms</span>
              <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Binary Trees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hackathon Projects */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">Hackathon Achievements</p>
            <p className="text-sm text-gray-600">Award-winning blockchain projects</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl">
            <h6 className="font-semibold text-gray-900 mb-2">Base Bounty Winner (2025)</h6>
            <p className="text-sm text-gray-600 mb-3">Decentralized tutor-student matchmaking dApp</p>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Solidity</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">dApp</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Smart Contracts</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl">
            <h6 className="font-semibold text-gray-900 mb-2">ZKPassport Bounty (2025)</h6>
            <p className="text-sm text-gray-600 mb-3">Anonymous ZK-based form submission with zero-knowledge proofs</p>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">ZK Proofs</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Privacy</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded">Solady</span>
            </div>
          </div>
        </div>
      </div>

      {/* University Project */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
              UoA
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">University of Aberdeen | Dissertation</p>
            <p className="text-sm text-gray-600">MSc Computing Science - First Class</p>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="text-xl font-semibold text-gray-900 mb-3">"Solidity vs Rust in Smart Contract Development"</h6>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Solidity</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Rust</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Anchor</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Ethereum</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Solana</span>
          </div>
          <div className="text-gray-700 space-y-3">
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Implemented secure e-voting smart contract with commit-reveal, hashing, and digital signatures
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Built parallel systems in Solidity (Ethereum) and Rust + Anchor (Solana) for comparison
            </p>
            <p className="flex items-start">
              <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Gained hands-on experience with Solana's account model and state serialization
            </p>
          </div>
        </div>
      </div>

      {/* Skills Showcase */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-lg p-6 border border-indigo-100">
        <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Expertise</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">Blockchain & Web3</h5>
            <p className="text-sm text-gray-600">Solidity, Ethereum, EVM, Chainlink CCIP, Rust (Anchor), Solana, ZK Proofs, Smart Contract Security</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">Full-Stack Development</h5>
            <p className="text-sm text-gray-600">React, Spring Boot, Node.js, TypeScript, REST APIs, PostgreSQL, AWS, Terraform</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h5 className="font-semibold text-gray-900 mb-2">Languages & Tools</h5>
            <p className="text-sm text-gray-600">Java, Python, JavaScript, Git, Agile/Scrum, CI/CD, Testing (Jest, JUnit)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 



      {/* ========== REST OF YOUR CONTENT ========== */}
      {/* Keep your contact form section here */}
      {/* ========== CONTACT FORM SECTION ========== */}
      <div id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Are you working on something innovative?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Let's collaborate and build something amazing together!
            </p>
            
            {/* Contact Button - Shows when form is hidden */}
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Start a Conversation
              </button>
            )}
            
            {/* ========== CONTACT FORM (Shows on Click) ========== */}
            {showForm && (
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute -top-4 -right-4 z-10 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-900 focus:outline-none"
                  aria-label="Close form"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                
                {/* Form */}
                <form 
                  onSubmit={handleSubmit} 
                  className="mx-auto space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="name">
                      Name
                    </label>
                    <input 
                      className="w-full rounded-xl border border-gray-300 p-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition" 
                      id="name" 
                      type="text" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input 
                      className="w-full rounded-xl border border-gray-300 p-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition" 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea 
                      className="w-full resize-none rounded-xl border border-gray-300 p-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition" 
                      id="message" 
                      rows="5" 
                      placeholder="Tell me about your project, ideas, or how we can collaborate..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 rounded-xl border border-gray-300 bg-gray-50 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

