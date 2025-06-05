function History({ history }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 p-4 flex flex-col items-center rounded-xl">
      <div className="w-full max-w-xl mt-5 mb-8 bg-white/90 rounded-lg shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-green-700 mb-4">History</h2>
        {history.length === 0 ? (
          <p className="text-slate-500">No facts generated yet.</p>
        ) : (
          <ul className="list-disc pl-5 text-slate-700 w-full">
            {history.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default History;
