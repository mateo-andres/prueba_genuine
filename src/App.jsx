import Header from "./components/sections/Header";
import Mission from "./components/sections/Mission";
import WhoWeAre from "./components/sections/WhoWeAre";
import World from "./components/sections/World";

function App() {
  return (
    <main className="max-w-7xl mx-auto grid gap-8 bg-[#efefef] px-4 py-8 text-blue-900">
      <Header />
      <Mission />
      <WhoWeAre />
      <World />
    </main>
  );
}

export default App;
