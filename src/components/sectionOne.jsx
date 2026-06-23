function SectionOne() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Native CRUD",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-[150px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[45%_55%] min-h-screen">
          {/* Desktop Photo */}
          <div className="relative hidden lg:flex items-end justify-center overflow-hidden px-10">
            {/* Glow Behind Photo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />

            <img
              src="formal-removebg-small.png"
              alt="Sintya Devi"
              className="
                relative
                h-[100vh]
                object-contain
                drop-shadow-[0_25px_60px_rgba(34,211,238,0.35)]
                hover:scale-105
                transition-all
                duration-500
              "
            />
          </div>

          {/* Mobile Photo */}
          <div className="lg:hidden flex justify-center pt-28 px-6">
            <img
              src="formal-removebg.png"
              alt="Sintya Devi"
              className="
                w-[260px]
                object-contain
                drop-shadow-[0_20px_50px_rgba(34,211,238,0.3)]
              "
            />
          </div>

          {/* Content */}
          <div className="flex items-center px-6 lg:px-16 py-16">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-sm">
                ✨ Informatics Management Student
              </span>

              {/* Heading */}
              <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Sintya Devi
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="mt-4 text-2xl lg:text-3xl text-slate-300 font-medium">
                UI/UX Designer, QA Tester &
                <br />
                Aspiring AI Enginer
              </h2>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-slate-400 text-lg leading-9">
                I am an Informatics Management student with a strong interest in UI/UX Design, QA Testing, and Artificial Intelligence. 
                As an aspiring AI Engineer, I enjoy leveraging AI tools to analyze problems, improve user experiences, 
                and support data-driven decision-making. I am passionate about information systems, web development, and digital technologies, 
                while continuously developing my technical, communication, and collaboration skills.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-slate-900/70
                      border
                      border-slate-700
                      text-slate-300
                      text-sm
                      hover:border-cyan-400
                      hover:text-cyan-300
                      transition-all
                      duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="https://drive.google.com/file/d/1xJqaopyoQbiivxTpAOjxbuEGZRrjRO9S/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-8
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-violet-600
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-cyan-500/20
                  "
                >
                  Download CV
                </a>

                <a
                  href="#contact"
                  className="
                    px-8
                    py-4
                    rounded-xl
                    border
                    border-slate-700
                    text-white
                    hover:bg-slate-800
                    hover:border-cyan-400
                    transition-all
                    duration-300
                  "
                >
                  Contact Me
                </a>
              </div>

              {/* Quick Stats (Optional) */}
              {/*
              <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Years Experience
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Internship Relations
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center backdrop-blur-sm">
                  <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Project Reviews
                  </p>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;