import Sidebar from "./components/Sidebar.jsx";

function App({ auth, sidebar }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 text-[#0f172a] font-['Space_Grotesk']">
      <div className="mx-auto max-w-sm">
        <Sidebar auth={auth} sidebar={sidebar} />
      </div>
    </div>
  );
}

export default App;
