import React, { FormEvent } from "react";

interface SearchFormProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ query, setQuery, onSearch }) => {
  return (
    <form
      data-testid="search-form"
      className="flex flex-col items-center space-y-4 py-2 px-4"
      onSubmit={onSearch}
      method="#"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter username"
        className="w-full px-4 py-2 rounded-md border border-slate-300"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 font-medium text-white bg-sky-700 rounded-md hover:bg-sky-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
