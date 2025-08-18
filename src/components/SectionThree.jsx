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
          <DetailCard title="Experience" desc="Customer Service representative at CV Tangerang Motor, I am responsible for managing customer interactions, including handling inquiries, providing service consultations, and negotiating pricing for vehicle service units. My role also involves coordinating work orders to ensure timely and accurate execution of service tasks, as well as overseeing the invoicing process to confirm agreed charges and facilitate smooth transactions." />
          <DetailCard title="Education" desc="" />
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
        <p className="capitalize px-10 text-sm/relaxed lg:text-lg/relaxed text-justify text-white my-2 py-1">{desc ?? "desc"}</p>
      </div>
    </>
  );
}

export default SectionThree;
