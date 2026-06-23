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

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Get To Know{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Passionate about technology, design, and continuous learning.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          <StatCard title="2023" desc="Started College" />
          <StatCard title="4+" desc="Projects Completed" />
          <StatCard title="UI/UX" desc="Design Interest" />
          <StatCard title="AI" desc="Technology Enthusiast" />
        </div>

        {/* Main Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

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
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-white mb-10">
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
              title="UI/UX, QA & AI Exploration"
              desc="Actively learning UI/UX Design, QA Testing, and Artificial Intelligence through projects and self-study."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, desc }) {
  return (
    <div
      className="
        rounded-2xl
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        p-5
        text-center
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-2 text-sm">
        {desc}
      </p>
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
        p-8
        hover:border-cyan-400/40
        transition-all
        duration-300
      "
    >
      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      <p className="text-slate-300 leading-8 text-justify">
        {desc}
      </p>
    </div>
  );
}

function TimelineItem({ year, title, desc }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-cyan-400" />

      <div
        className="
          bg-white/5
          backdrop-blur-lg
          border
          border-white/10
          rounded-2xl
          p-5
          hover:border-cyan-400/40
          transition-all
          duration-300
        "
      >
        <span className="text-cyan-400 font-semibold">
          {year}
        </span>

        <h3 className="text-white font-bold text-lg mt-1">
          {title}
        </h3>

        <p className="text-slate-400 mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default SectionThree;