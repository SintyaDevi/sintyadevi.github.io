import LinkedIn from "/linkedin.png";
import Instagram from "/ins.png";
import GitHub from "/github.png";
import Tiktok from "/tiktok.png";

const listCard = [
  {
    logo: LinkedIn,
    nama: "LinkedIn",
    link: "https://www.linkedin.com/in/sintya-devi-laksana-putri",
  },
  {
    logo: GitHub,
    nama: "GitHub",
    link: "https://github.com/SintyaDevi",
  },
  {
    logo: Instagram,
    nama: "Instagram",
    link: "https://www.instagram.com/sin_devlp/",
  },
  {
    logo: Tiktok,
    nama: "TikTok",
    link: "https://www.tiktok.com/@sintyadevilp4",
  },
];

function SectionFour() {
  return (
    <>
      <div className="section-parent section-parent bg-radial from-blue-700 to-stone-800 p-3">
        <h1 className="text-center text-4xl text-white font-sans font-bold py-3">
          Contact
        </h1>
        <div className="flex flex-col text-white items-center space-y-5">
          <h3 className="text-lg">You can contact me via email</h3>
          <div className="border rounded border-white p-5 relative">
            <p className="absolute top-0 left-1/2 -translate-1/2 bg-blue-800 rounded px-2">
              Email
            </p>
            <a
              href="mailto:sintyadevilaksanaputri@gmail.com"
              className="text-blue-200 underline underline-offset-2"
            >
              sintyadevilaksanaputri@gmail.com
            </a>
          </div>
          <h3 className="text-lg">or</h3>
          <div className="flex flex-wrap justify-center gap-4 mx-4">
            {listCard.map((pram) => (
              <ItemCard link={pram.link} logo={pram.logo} nama={pram.nama} />
            ))}
            {/* <ItemCard /> */}
          </div>
        </div>
      </div>
    </>
  );
}

function ItemCard({ logo, nama, link }) {
  return (
    <>
      <a
        className="border inline-block border-black rounded p-3 size-20"
        href={link ?? ""}
        target="_blank"
      >
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="size-10" />
          {nama ?? ""}
        </div>
      </a>
    </>
  );
}

export default SectionFour;
