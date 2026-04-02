import { useState } from "react";
import { countryPhoneCodes } from "../components/countryPhoneCodes";

export default function CountryCodeSearchSelect({ value, onChange }) {
  const selectedCountry = countryPhoneCodes.find(
    (c) => c.code === value
  );

  const [search, setSearch] = useState(
    selectedCountry
      ? `${selectedCountry.name} (${selectedCountry.code})`
      : ""
  );
  const [open, setOpen] = useState(false);

  const filteredCountries = countryPhoneCodes.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (country) => {
    onChange(country.code);
    setSearch(`${country.name} (${country.code})`);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={search}
        placeholder="Type country name..."
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        className="w-full border px-4 py-3 rounded-lg"
      />

      {open && (
        <ul className="absolute z-10 w-full max-h-60 overflow-y-auto bg-white border rounded-lg mt-1 shadow-lg">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <li
                key={country.iso}
                onClick={() => handleSelect(country)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {country.name} ({country.code})
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">
              No country found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
