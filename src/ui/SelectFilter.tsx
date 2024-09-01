interface SelectFilterProps {
  value: string;
  setFilter: (e: string) => void;
  options: string[];
}

export default function SelectFilter({
  value,
  setFilter,
  options,
}: SelectFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => setFilter(e.target.value)}
      className="bg-elements text-text rounded-md p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
    >
      <option value={""}>Filter by Region</option>
      {options.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
