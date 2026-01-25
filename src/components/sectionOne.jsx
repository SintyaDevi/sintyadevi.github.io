import file_export from "../assets/file_export.svg";

function SectionOne() {
  return (
    <>
      <div className="section-parent bg-radial from-stone-700 to-slate-800 pt-3rem">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="basis-1/2 grid place-items-center lg:mb-0 mb-5 mt-4">
            <img
              src="bg-blue.jpg"
              alt="profile"
              className="rounded-2xl h-[20rem] lg:h-3/4"
            />
          </div>
          <div className="grid place-items-center basis-1/2 px-5">
            <div className="space-y-3">
              <h3 className="text-2xl lg:text-4xl text-white font-serif underline underline-offset-4 text-center lg:text-left">
                Sintya Devi Laksana Putri
              </h3>
              <p className="text-white font-semibold font-sans text-wrap text-justify text-sm/relaxed lg:text-base">
                Adaptable and detail-oriented professional with 1–2 years of
                experience across various industries, including customer service
                in a fast-paced automotive workshop. Skilled in problem-solving,
                teamwork, and clear communication, with a track record of
                improving efficiency and client satisfaction. Handled customer
                inquiries and complaints, provided cost estimates, and advised
                on part replacements, helping build trust and long-term
                relationships. Eager to contribute to innovative organizations
                that value growth and continuous improvement.
              </p>
              <div className="flex">
                <a
                  href="https://drive.google.com/file/d/1xJqaopyoQbiivxTpAOjxbuEGZRrjRO9S/view?usp=sharing"
                  target="_blank"
                  className="flex items-center gap-2 border border-white rounded-md py-1 px-1.5"
                >
                  <img src="https://static.vecteezy.com/system/resources/previews/022/361/832/original/3d-pdf-file-icon-illustration-png.png" alt="CV" className="size-8" />
                  <span className="text-white font-semibold font-sans text-justify text-sm/relaxed lg:text-base">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
