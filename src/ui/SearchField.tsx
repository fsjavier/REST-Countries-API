interface SearchFieldProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function SearchField({
  searchQuery,
  setSearchQuery,
}: SearchFieldProps) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      className="p-3 rounded-lg sm:w-2/5"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}
