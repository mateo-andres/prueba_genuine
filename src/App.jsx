import Header from "./components/sections/Header";
import Mission from "./components/sections/Mission";
import WhoWeAre from "./components/sections/WhoWeAre";
import World from "./components/sections/World";
import Navigation from "./components/sections/Navigation";
import Join from "./components/sections/Join";

function App() {
  return (
    <div className="relative min-h-screen bg-[#efefef]">
      <Navigation />

      <main className="max-w-[1500px] mx-auto grid gap-8 px-4 py-8 pt-4 text-blue-900 md:pr-64">
        <Header />
        <Mission />
        <WhoWeAre />
        <World />
        <Join />
      </main>
    </div>
  );
}

export default App;
