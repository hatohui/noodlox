import React from "react";

const HatohuiPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-gray-900 text-white flex flex-col items-center py-10 space-y-10">
        <h2 className="text-xl font-bold">Menu</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            About
          </a>
          <a href="#" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
        <div className="mt-auto">
          <h3 className="text-lg font-semibold">Connect</h3>
          <div className="flex flex-col space-y-2 mt-2">
            <a href="#" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="hover:text-pink-400">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-700">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-10">
        <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-10">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
        </header>
        <section className="w-full bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700">
            Hello! I'm a web developer passionate about creating beautiful and
            functional websites.
          </p>
        </section>
        <section className="w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-gray-700">Check out some of my work below.</p>
        </section>
      </main>
    </div>
  );
};

export default HatohuiPage;
