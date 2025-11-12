import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import plate from "@/public/image.png"
import MealsList from "@/components/MealsList";

export default async function Home({ searchParams }: { searchParams: Promise<{ query: string }> }) {
  const query = (await searchParams).query

  return (
    <main className="">
      <section id="food-hero-section" className="food-hero-section">
        <div className="xl:col-span-3 flex flex-col max-xl:text-center">
          <div className="text-white mb-6">
            <h3 className="font-bold x7l">Are you starving?</h3>
            <p className="font-normal text-lg">Within a few clicks, find meals that are accessible near you</p>
          </div>
          <SearchForm query={query} />
        </div>
        <div className="w-full max-w-96 xl:col-span-2 relative self-end place-self-center">
          <div className="absolute bg-black/15 blur-lg z-10 rounded-full h-[420px] right-0 top-10 w-[420px]"></div>
          <div className="absolute bg-black/15 blur-3xl rounded-full h-[500px] right-0 top-10 w-[500px]"></div>
          <Image src={plate} height={plate.height} width={plate.width} className="h-auto relative z-20 w-full" alt="An image of a plate with a good meal" />
        </div>
      </section>
      <section id="food-meal-section" className="p-5 py-14 gap-14 flex flex-col items-center overflow-hidden min-h-[494px] px-6 xl:px-40">
        <h3 className="font-bold text-center text-4xl">{query ? `Results for '${query}'` : "Featured Meals"}</h3>
        <MealsList search={query} />
      </section>
    </main>
  );
}
