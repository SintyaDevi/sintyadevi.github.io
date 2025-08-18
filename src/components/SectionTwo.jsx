const listPorto = [
  {
    name: "Video Perkenalan",
    desc: "Video singkat perkenalan diri saya",
    link: "https://drive.google.com/file/d/1mJsALz8h94icSKLQxAOz1xdi0173PI1Y/view?usp=drive_link",
  },
  {
    name: "Poster",
    desc: "Portofolio Poster bertemakan 17 agustus - Canva",
    link: "https://www.canva.com/design/DAGwaBqnLns/INxqSK8RDccJS_ynxSS0Qw/edit?utm_content=DAGwaBqnLns&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "Undangan Onlie",
    desc: "Portofolio design undangan online - Canva",
    link: "https://www.canva.com/design/DAGwaXulYB8/cjnvBevBxtRrsflY-ZjHmg/edit?utm_content=DAGwaXulYB8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
];

function SectionTwo() {
  return (
    <>
      <div className="section-parent section-parent bg-radial from-blue-700 to-stone-800 p-3 pt-[3rem]">
        <h1 className="text-center text-4xl text-white font-sans font-bold py-3">
          Portofolio
        </h1>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 gap-y-10 place-items-center px-5">
          {listPorto.map((param) => (
            <CardItem name={param.name} desc={param.desc} link={param.link} />
          ))}
        </div>
      </div>
    </>
  );
}

function CardItem({ name, desc, link }) {
  return (
    <>
      <a
        href={link ?? "/"}
        target="_blank"
        className="border border-white bg-gradient-to-b from from-blue-400 to-blue-600 rounded w-[10rem] min-h-[10rem] p-2 font-sans2 inline-block drop-shadow-xl hover:drop-shadow-white transition-all"
      >
        <h1 className="text-center text-xl capitalize font-semibold truncate text-wrap">
          {name ?? "Nama porto"}
        </h1>
        <p className="text-wrap py-2">{desc ?? "deskripsi"}</p>
      </a>
    </>
  );
}

export default SectionTwo;
