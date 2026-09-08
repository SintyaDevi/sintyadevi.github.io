const listPorto = [
  {
    icon: "",
    category: "UI/UX Design",
    name: "MyMed Alarm App",
    desc: "Designed the UI/UX prototype and user flow for the MyMed Alarm health management mobile application in Figma, featuring a medication reminder and health tracking interface.",
    link: "https://www.figma.com/proto/AsXABInCO0EDW2rWu51Gmx/PROJEK-UAS-UI-UX?node-id=11-92&starting-point-node-id=11%3A63&t=4yaTR6tRw4dKWdnn-1",
  },
  {
    icon: "",
    category: "UI/UX Design",
    name: "Car Service Administration System App",
    desc: "Designed the UI/UX prototype and user flow for the car-service administration system in Figma, prior to frontend development.",
    link: "https://www.figma.com/proto/2xpMHxDW5DSWKuKOcd1gv5/TA-Sintya?node-id=182-455&p=f&t=P6WeLramG0Eeb0nK-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=182%3A455&show-proto-sidebar=1",
  },
  {
    icon: "",
    category: "Frontend",
    name: "Car Service Administration System App",
    desc: "Designed and developed the frontend interface for a car-service administration system as the final capstone project (Tugas Akhir) for the D3 Information Management program.",
    link: "https://drive.google.com/file/d/1mJsALz8h94icSKLQxAOz1xdi0173PI1Y/view?usp=drive_link",
  },
  {
    icon: "",
    category: "Website Portofolio",
    name: "Personal Portfolio Website",
    desc: "Built and published a personal portfolio website using React.js to showcase projects, skills, and certifications.",
    link: "https://sintyadevi-portofolio.edgeone.dev/",
  },
  {
    icon: "",
    category: "Finance App",
    name: "Personal Finance Application (Development)",
    desc: "Developed a personal finance tracking application using Next.js as an individual project.",
    link: "https://github.com/SintyaDevi/Finance-app",
  },
];

function SectionTwo() {
  return (
    <section
      id="portfolio"
      className="relative py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
            ✨ My Projects
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            A collection of projects that reflect my interests in UI/UX
            Design, Digital Creativity, and Software Development.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">4+</h2>
            <p className="text-slate-400">Projects</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">UI/UX</h2>
            <p className="text-slate-400">Design</p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Website</h2>
            <p className="text-slate-400">Portfolio</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {listPorto.map((project, index) => (
            <CardItem
              key={index}
              icon={project.icon}
              category={project.category}
              name={project.name}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({ icon, category, name, desc, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        p-6
        hover:border-cyan-400/50
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {/* Gradient Hover Effect */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/10
          via-transparent
          to-purple-500/10
          opacity-0
          group-hover:opacity-100
          transition
        "
      />

      <div className="relative z-10">
        <div className="text-5xl mb-4">{icon}</div>

        <span
          className="
            inline-block
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            bg-cyan-500/20
            text-cyan-300
            border
            border-cyan-500/20
          "
        >
          {category}
        </span>

        <h2 className="mt-4 text-xl font-bold text-white">
          {name}
        </h2>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
          {desc}
        </p>

        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            text-cyan-400
            font-medium
          "
        >
          View Project
          <span className="group-hover:translate-x-1 transition">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

export default SectionTwo;