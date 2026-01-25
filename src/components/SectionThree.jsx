function SectionThree() {
  return (
    <>
      <div className="section-parent section-parent bg-radial from-emerald-800 to-cyan-900 pt-[3rem]">
        <h1 className="text-center text-4xl text-white font-sans font-bold py-3">
          About
        </h1>
        <div>
          <DetailCard
            title="About Me"
            desc="Adaptable and detail-oriented professional with 1–2 years of experience across various industries, including customer service in a fast-paced automotive workshop. Skilled in problem-solving, teamwork, and clear communication, with a track record of improving efficiency and client satisfaction. Handled customer inquiries and complaints, provided cost estimates, and advised on part replacements, helping build trust and long-term relationships. Eager to contribute to innovative organizations that value growth and continuous improvement."
          />
          <DetailCard
            title="Education"
            desc="Industrial Electronics Engineering (Vocational High School Program), Tangerang Indonesia 2019-2022. The Industrial Electronics Engineering program is a vocational education major that focuses on the study and application of electronic systems used in industrial environments. Students learn about electronic circuits, sensors, actuators, microcontrollers, automation systems, and industrial control technologies.
            Informatics Management (Associate Degree – LP3I Jakarta), Tangerang Indonesia 2023-2026. The Informatics Management program at LP3I Jakarta is a three-year associate degree designed to prepare students for professional careers in the field of information technology and business management. This program integrates computer science, information systems, and managerial principles to develop graduates who are skilled in both technical and organizational aspects of IT."
          />
        </div>
      </div>
    </>
  );
}

function DetailCard({ title, desc }) {
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-white font-sans text-xl">
          <span>- </span>
          {title ?? "Title"}
          <span> -</span>
        </h1>
        <p className="capitalize px-10 text-sm/relaxed lg:text-lg/relaxed text-justify text-white my-2 py-1">
          {desc ?? "desc"}
        </p>
      </div>
    </>
  );
}

export default SectionThree;
