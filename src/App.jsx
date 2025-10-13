import Header from "./components/sections/Header";
import Mission from "./components/sections/Mission";
import WhoWeAre from "./components/sections/WhoWeAre";
import World from "./components/sections/World";
import Navigation from "./components/sections/Navigation";

function App() {
  return (
    <div className="relative min-h-screen bg-[#efefef]">
      {/* Fixed Navigation on the right for desktop */}
      <Navigation />

      {/* Main scrollable content on the left */}
      <main className="max-w-7xl mx-auto grid gap-8 px-4 py-8 text-blue-900 md:pr-64">
        <Header />
        <Mission />
        <WhoWeAre />
        <World />
      </main>
    </div>
  );
}

export default App;
