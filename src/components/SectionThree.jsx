import React, { Fragment } from "react";

function SectionThree() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
            👋 About Me
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Get To Know{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Passionate about technology, design, and continuous learning.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-14">
          <StatCard title="2023" desc="Started College" />
          <StatCard title="4+" desc="Projects Development" />
          <StatCard title="UI/UX" desc="Design Interest" />
          <StatCard title="Website" desc="Enthusiast" />
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <DetailCard
            icon="🙋‍♀️"
            title="About Me"
            desc="I am an Informatics Management student with a strong interest in UI/UX Design, QA Testing, and Artificial Intelligence. I enjoy creating user-centered digital experiences, analyzing problems, and leveraging technology to build practical solutions. My background in customer service has strengthened my communication, teamwork, and problem-solving abilities, while my academic journey continues to enhance my technical skills in software development and information systems."
          />

          <DetailCard
            icon="🎓"
            title="Education"
            desc="I graduated from Vocational High School with a major in Industrial Electronics Engineering (2019–2022), where I studied electronics, automation systems, sensors, and industrial technologies. Currently, I am pursuing an Associate Degree in Informatics Management at LP3I Jakarta (2023–2026), focusing on information systems, database management, software development, web technologies, and digital business solutions."
          />
        </div>

        {/* Timeline */}
        <div className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-10">
            My Journey
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <TimelineItem
              year="2019 - 2022"
              title="Industrial Electronics Engineering"
              desc="Vocational High School graduate with a focus on electronics and industrial automation."
            />
            <TimelineItem
              year="2023 - Present"
              title="Informatics Management"
              desc="Learning information systems, software development, databases, and web technologies at LP3I Jakarta."
            />
            <TimelineItem
              year="2024 - Present"
              title="UI/UX and Website Enthusiast"
              desc="Actively learning UI/UX Design, Website personal through projects and self-study."
            />
          </div>
        </div>

        {/* Experience Section */}
        <Experience />

        {/* Certificate Section */}
        <Certificate />
        
      </div>
    </section>
  );
}

function Experience() {
  return (
    <div className="mt-24 sm:mt-32">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-12">
        PROFESSIONAL EXPERIENCE
      </h2>

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        {/* 1. Experience as Field Education Consultant */}
        <ExperienceCard 
          role="Field Education Consultant"
          company="RUANGGURU & BRAIN ACADEMY"
          date="Nov 2025 – Mei 2026"
          description="Melakukan konsultasi pendidikan untuk lebih dari 50 siswa/orang tua setiap bulan. Mengadakan presentasi promosi di lebih dari 10 sekolah yang menghasilkan peningkatan minat siswa sebesar 15%. Bertanggung jawab atas pengelolaan database lebih dari 200 siswa dengan akurasi pelaporan 100%."
          highlights={["200+ Siswa Terkelola", "10+ Sekolah Terjangkau", "15% Kenaikan Minat"]}
        />

        {/* 2. Experience as Academic Tutor Coding */}
        <ExperienceCard 
          role="Academic Coding Education"
          company="KALANANTI BY RUANGGURU"
          date="Agustus 2026 – Sekarang"
          description="Mengajar koding secara online dan offline dengan format hybrid yang fleksibel dan adaptif. Menerapkan metode pembelajaran interaktif untuk menjelaskan konsep pemrograman melalui pendekatan visual dan praktis. Berperan aktif dalam membimbing peserta didik mengembangkan kemampuan analitis dan pemecahan masalah (problem-solving)."
          highlights={["Hybrid Learning", "Interactive Visual Method", "Problem Solving Focus"]}
        />
      </div>

      {/* 3. Documentation Experience */}
      <div className="mt-16 sm:mt-20">
        <h3 className="text-center text-xl sm:text-2xl font-bold text-cyan-400 mb-8 sm:mb-10">
          Field Documentation
        </h3>
        
        {/* Grid Layout untuk Dokumentasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Pastikan imgSrc mengarah ke path gambar yang benar di folder public kamu */}
          <DocumentationCard 
            title="Booth Edukasi & Presentasi"
            desc="Educational booth at SMPN 1 Tangerang to present programs to students and parents. The direct, on-the-ground approach helped build trust and significantly increased student interest."
            imgSrc="/OP2.jpeg" 
          />
          <DocumentationCard 
            title="Tutor coding"
            desc="Mentoring and educational consultation sessions with students using a personalized approach to understand their needs, build rapport, and ensure optimal comprehension."
            imgSrc="/coding.jpeg" 
          />
          <DocumentationCard 
            title="Kolaborasi Tim Regional"
            desc="The regional team collaborated cross-functionally to support the success of educational programs. Solid collaboration served as the main foundation for achieving targets and expanding educational impact."
            imgSrc="/Kolaborasi.jpeg" 
          />
        </div>
      </div>
    </div>
  );
}

function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "CODEPOLITAN Certified Learning Path",
      issuer: "DevHandal",
      year: "2024",
      icon: "",
      link: "https://drive.google.com/file/d/1XleaAdo97gYTdUONqZvy5gSSRwosLqfK/view",
    },
    {
      id: 2,
      title: "Workshop Collage",
      issuer: "Collage",
      year: "2024",
      icon: "",
      link: "https://drive.google.com/file/d/12t7fPsTe2T5J1QmVLvp_WJjVlvkiu4VJ/view?usp=sharing",
    },
    {
      id: 3,
      title: "Dicoding Certified Learning Path",
      issuer: "Dicoding",
      year: "Jul 2024",
      icon: "",
      link: "https://drive.google.com/file/d/1VcR_ItaKFtPDb7YJ-mwAWvF9U57aiBFD/view?usp=sharing",
    },
  ];

  const certificates2 = [
    {
      id: 1,
      title: "Reference Letter",
      issuer: "DevHandal",
      year: "2024",
      icon: "",
      link: "https://drive.google.com/file/d/1fOp6C7cx9eEACBInF7BW464lRPCNMYvb/view",
    },
    {
      id: 2,
      title: "Alibaba Cloud Certified Developer",
      issuer: "DevHandal",
      year: "2024",
      icon: "",
      link: "https://drive.google.com/file/d/1KuBpt9DFy-vr0HSJpWdfPCv_lGaOeKkI/view",
    },
    {
      id: 3,
      title: "BNSP Certificate of Competence",
      issuer: "BNSP",
      year: "2024",
      icon: "",
      link: "https://drive.google.com/file/d/1HFVDM9ZYmiTBpXS5mts30hmDFR5OSmAE/view",
    },
    {
      id: 4,
      title: "Certificate of Accomplishment AI",
      issuer: "PT Hactivate Teknologi Indonesia",
      year: "2024",
      icon: "",
      link: "https://drive.google.com/file/d/1HFVDM9ZYmiTBpXS5mts30hmDFR5OSmAE/view",
    },
    {
      id: 5,
      title: "Sales Trainee Academy (STAR)",
      issuer: "PT Ruang Raya Indonesia",
      year: "2025",
      icon: "",
      link: "https://drive.google.com/file/d/1N0uvzkam7u4ftiFpHlG3I5Tbd68Q5e-i/view",
    },
    {
      id: 6,
      title: "Shine Sales Trainee Academy",
      issuer: "PT Ruang Raya Indonesia",
      year: "2025",
      icon: "",
      link: "https://drive.google.com/drive/u/0/search?q=Shine",
    },
  ];

  return (
    <div className="mt-24 sm:mt-32">
      <Fragment>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">
          ONLINE COURSES & SELF-DIRECTED LEARNING
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              title={cert.title}
              issuer={cert.issuer}
              year={cert.year}
              icon={cert.icon}
              link={cert.link}
            />
          ))}
        </div>
      </Fragment>

      <Fragment>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-10 mt-20">
          PROFESSIONAL DEVELOPMENT & TRAINING
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {certificates2.map((cert) => (
            <CertificateCard
              key={cert.id}
              title={cert.title}
              issuer={cert.issuer}
              year={cert.year}
              icon={cert.icon}
              link={cert.link}
            />
          ))}
        </div>
      </Fragment>
    </div>
  );
}

// Sub-komponen Card Experience
function ExperienceCard({ role, company, date, description, highlights }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-8 hover:border-cyan-400/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{role}</h3>
          <span className="inline-block mt-1.5 px-3 py-1 bg-cyan-500/20 text-cyan-300 text-[10px] sm:text-xs font-semibold rounded-full border border-cyan-500/30">
            {company}
          </span>
        </div>
        <div className="text-slate-400 text-xs sm:text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full w-fit">
          {date}
        </div>
      </div>
      
      <p className="text-slate-300 text-sm leading-relaxed mb-6 text-justify">
        {description}
      </p>

      {/* Highlights / Badges */}
      <div className="flex flex-wrap gap-2">
        {highlights.map((item, index) => (
          <span key={index} className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-[10px] sm:text-xs rounded-lg border border-slate-700 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// Sub-komponen Card Dokumentasi
function DocumentationCard({ title, desc, imgSrc }) {
  return (
    <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 flex flex-col">
      {/* Container Foto */}
      <div className="w-full h-48 sm:h-52 bg-slate-800 overflow-hidden relative">
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] to-transparent opacity-90"></div>
      </div>
      
      {/* Konten Teks */}
      <div className="p-5 flex-1 flex flex-col bg-white/5">
        <h4 className="text-white font-bold text-base sm:text-lg mb-2">{title}</h4>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
          {desc}
        </p>
      </div>
    </div>
  );
}

// Sub-komponen Certificate
function CertificateCard({ icon, title, issuer, year, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
      <div
        className="
        bg-white/5 
        backdrop-blur-lg 
        border 
        border-white/10 
        rounded-2xl 
        p-5 sm:p-6 
        flex flex-col 
        items-center 
        text-center 
        group 
        h-full
        hover:border-cyan-400/40 
        hover:-translate-y-2 
        transition-all 
        duration-300
      "
      >
        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-white font-bold text-sm sm:text-lg mb-2 leading-tight flex-1">
          {title}
        </h3>
        <span className="text-cyan-400 text-xs sm:text-sm font-medium mb-1">{issuer}</span>
        <span className="text-slate-500 text-[10px] sm:text-xs">{year}</span>
      </div>
    </a>
  );
}

// Sub-komponen Basic Info
function StatCard({ title, desc }) {
  return (
    <div
      className="
        rounded-2xl
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        p-4 sm:p-5
        text-center
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      <p className="text-slate-400 mt-1 sm:mt-2 text-xs sm:text-sm">{desc}</p>
    </div>
  );
}

function DetailCard({ icon, title, desc }) {
  return (
    <div
      className="
        rounded-3xl
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        p-6 sm:p-8
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-5">{icon}</div>
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{title}</h2>
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify">{desc}</p>
    </div>
  );
}

function TimelineItem({ year, title, desc }) {
  return (
    <div className="relative pl-6 sm:pl-8">
      <div className="absolute left-0 top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
      <div
        className="
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          rounded-2xl
          p-4 sm:p-5
          hover:border-cyan-400/40
          transition-all
          duration-300
        "
      >
        <span className="text-cyan-400 font-semibold text-xs sm:text-sm">{year}</span>
        <h3 className="text-white font-bold text-base sm:text-lg mt-1">{title}</h3>
        <p className="text-slate-400 mt-2 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default SectionThree;