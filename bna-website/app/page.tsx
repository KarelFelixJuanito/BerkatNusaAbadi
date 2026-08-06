"use client";
import AboutUs from "@/components/about";
import CoreServices from "@/components/services";


export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <main>
        <AboutUs />
        <CoreServices />
      </main>
    </div>
  );
}