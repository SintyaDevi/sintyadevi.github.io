function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-blue-600 text-white h-[3rem]">
        <div className="flex justify-between font-semibold h-full items-center px-4">
          <div>
            <a href="/">Sintya Devi</a>
          </div>
          <div className="flex gap-4">
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#portofolio">Portofolio</a>
            </div>
            <div>
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
