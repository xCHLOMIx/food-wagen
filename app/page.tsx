import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="">
      <section className="bg-secondary min-h-[494px] p-4 flex items-center lg:px-40">
        <div>
          <div className="text-white mb-6">
            <h3 className="text-7xl font-bold">Are you starving?</h3>
            <p className="font-normal text-lg">Within a few clicks, find meals that are accessible near you</p>
          </div>
          <SearchForm />
        </div>
      </section>
    </main>
  );
}
