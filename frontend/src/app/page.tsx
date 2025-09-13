export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-light to-secondary/10 flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-6 bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 rounded-b-xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www .w3.org/2000/svg"
            className="w-8 h-8 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7v7c0 5 4 9 10 9s10-4 10-9V7l-10-5z" />
          </svg>
          <h1 className="text-2xl font-bold text-primary tracking-tight">ReferNet</h1>
        </div>

        {/* Menu */}
        <div className="flex gap-6 items-center">
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#features" className="hover:text-primary transition">
            Features
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
          <button className="px-5 py-2 bg-primary text-white rounded-lg shadow hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
          Bridging <span className="text-primary">Students</span> &{" "}
          <span className="text-secondary">Professionals</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-8">
          A trustworthy referral network where students get connected to
          professionals for real job opportunities and meaningful feedback.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-blue-700 hover:scale-105 transition">
            Upload Resume
          </button>
          <button className="px-6 py-3 bg-secondary text-white rounded-xl shadow hover:bg-green-700 hover:scale-105 transition">
            Join as Professional
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
      >
        {[
          {
            title: "AI Screening",
            text: "Smart resume analysis & short interviews to pre-verify candidates.",
          },
          {
            title: "Verified Referrals",
            text: "Professionals get only the most qualified candidates, saving time.",
          },
          {
            title: "Faster Jobs",
            text: "Students gain access to real opportunities and professional feedback.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-semibold text-primary mb-3">
              {f.title}
            </h3>
            <p className="text-gray-600">{f.text}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 bg-dark text-light text-center rounded-t-xl">
        <p className="text-sm">
          © {new Date().getFullYear()} ReferNet. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
