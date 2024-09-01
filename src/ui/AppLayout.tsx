import CountriesList from "./CountriesList";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      <Header />
      <main className="bg-background pb-8">
        <CountriesList />
      </main>
    </div>
  );
};

export default AppLayout;
