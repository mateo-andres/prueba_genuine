import Header from "./components/sections/Header";
import Mission from "./components/sections/Mission";
import WhoWeAre from "./components/sections/WhoWeAre";

function App() {
  return (
    <main className="grid gap-4 bg-[#efefef] px-4 py-8 ">
      <Header />
      <Mission />
      <WhoWeAre />
    </main>
  );
}

export default App;
