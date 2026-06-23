import LinkedIn from "/linkedin.png";
import Instagram from "/ins.png";
import GitHub from "/github.png";
import Tiktok from "/tiktok.png";

const listCard = [
  {
    logo: LinkedIn,
    nama: "LinkedIn",
    username: "sintya-devi-laksana-putri",
    link: "https://www.linkedin.com/in/sintya-devi-laksana-putri",
  },
  {
    logo: GitHub,
    nama: "GitHub",
    username: "SintyaDevi",
    link: "https://github.com/SintyaDevi",
  },
  {
    logo: Instagram,
    nama: "Instagram",
    username: "@sin_devlp",
    link: "https://www.instagram.com/sin_devlp/",
  },
  {
    logo: Tiktok,
    nama: "TikTok",
    username: "@sintyadevilp4",
    link: "https://www.tiktok.com/@sintyadevilp4",
  },
];

function SectionFour() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm">
            📬 Contact Me
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mt-5 text-slate-400 max-w-xl mx-auto">
            I'm always open to discussing new opportunities,
            collaborations, internships, or technology-related projects.
          </p>
        </div>

        {/* Email Card */}
        <div className="max-w-2xl mx-auto mb-14">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-lg
              p-8
              text-center
              hover:border-cyan-400/40
              transition-all
            "
          >
            <div className="text-5xl mb-4">📧</div>

            <h2 className="text-white text-2xl font-bold mb-2">
              Email Me
            </h2>

            <p className="text-slate-400 mb-5">
              Feel free to reach out via email.
            </p>

            <a
              href="mailto:sintyadevilaksanaputri@gmail.com"
              className="
                inline-block
                px-6
                py-3
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-purple-600
                text-white
                font-medium
                hover:scale-105
                transition
              "
            >
              sintyadevilaksanaputri@gmail.com
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-center text-white text-2xl font-bold mb-8">
            Find Me On
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {listCard.map((item, index) => (
              <ItemCard
                key={index}
                logo={item.logo}
                nama={item.nama}
                username={item.username}
                link={item.link}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Sintya Devi. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

function ItemCard({ logo, nama, username, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        p-6
        text-center
        hover:border-cyan-400/40
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <img
        src={logo}
        alt={nama}
        className="
          w-14
          h-14
          mx-auto
          mb-4
          group-hover:scale-110
          transition
        "
      />

      <h3 className="text-white font-semibold">
        {nama}
      </h3>

      <p className="text-slate-400 text-sm mt-1">
        {username}
      </p>

      <div className="mt-4 text-cyan-400 font-medium">
        Visit →
      </div>
    </a>
  );
}

export default SectionFour;