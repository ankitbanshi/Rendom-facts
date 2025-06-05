function Dashboard({ fact, setFact, error, setError, history, setHistory }) {
  const output = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) throw new Error("Network issue");
      const data = await response.json();
      setFact(data.fact);
      setHistory((prev) => [...prev, data.fact]);
      setError("");
    } catch (err) {
      setError("Failed to fetch fact");
    }
  };

  return (
    <div className="max-h-screen w-full bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 p-4 flex flex-col items-center rounded-xl">
      <div className="w-full max-w-md mt-5 mb-6 bg-white/90 rounded-lg shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-green-700 mb-4">
          Random Fact
        </h2>
        <p className="mb-2 text-slate-700 text-lg text-center min-h-[48px]">
          {fact}
        </p>
        {error && <p className="mb-2 text-red-500">{error}</p>}
      </div>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-md font-bold shadow hover:bg-green-600 transition"
        onClick={output}
      >
        Generate
      </button>
    </div>
  );
}

export default Dashboard;
