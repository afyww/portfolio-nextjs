import Contactsection from "./components/Contactsection";
import Aboutsection from "./components/Aboutsection";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projectsection from "./components/Projectsection";
import Footersection from "./components/Footersection";
import Scrolldown from "./components/Scrolldown";
import Techstack from "./components/Techstack";
import Expsection from "./components/Expsection";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex-col">
      <Navbar />
      <div class="max-w-full sm:max-w-full md:max-w-2xl xl:max-w-7xl 2xl:w-full mx-auto p-3 space-y-5">
        <Herosection />
        <Scrolldown />
        <Aboutsection />
        <Expsection />
        <Projectsection />
        <Techstack />
        <Contactsection />
      </div>
      <div>
        <Footersection />
      </div>
    </main>
  )
}
