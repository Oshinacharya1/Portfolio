function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-900">
      <div className="max-w-3xl p-8 bg-gray-800 text-center rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2 text-white">Oshin Acharya</h1>
        <h2 className="text-xl font-semibold mb-4 text-indigo-400">
          Full Stack Engineer
        </h2>
        <p className="text-lg text-gray-300 mb-5">
          Explore my projects, learn more about me, and feel free to reach out.
        </p>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Home;
