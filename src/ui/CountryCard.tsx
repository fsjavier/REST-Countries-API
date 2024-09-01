import { Country } from "./CountriesList";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div className="bg-element rounded-lg shadow-md flex flex-col h-72">
      <img src={country.flags.svg} className="h-32 w-full object-cover" />
      <div className="p-4 flex-1">
        <p className="font-bold mb-2">{country.name.common}</p>
        <div className="flex flex-col gap-1 text-sm">
          <p>
            Population: <span>{country.population.toLocaleString()}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>

          <p>
            Capital: <span>{country.capital?.at(0)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
