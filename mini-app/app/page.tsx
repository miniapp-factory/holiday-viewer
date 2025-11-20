import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import Quiz from "@/components/quiz";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-6 place-items-center place-content-center px-4 grow">
      <section className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Beach Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/beach.png" alt="Beach 1" className="w-full h-auto rounded-md" />
          <img src="/beach.png" alt="Beach 2" className="w-full h-auto rounded-md" />
          <img src="/beach.png" alt="Beach 3" className="w-full h-auto rounded-md" />
        </div>
      </section>
      <Quiz />
    </main>
  );
}
