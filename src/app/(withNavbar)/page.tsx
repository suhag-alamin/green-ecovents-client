import AvailableEvent from "@/components/ui/Home/AvailableEvent";
import Blogs from "@/components/ui/Home/Blogs";
import Features from "@/components/ui/Home/Features";
import Hero from "@/components/ui/Home/Hero";
import Reviews from "@/components/ui/Home/Reviews";
import SearchBar from "@/components/ui/Home/SearchBar";
import UpcomingEvents from "@/components/ui/Home/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Features />
      <UpcomingEvents />
      <AvailableEvent />
      <Blogs />
      <Reviews />
    </div>
  );
};

export default Home;
