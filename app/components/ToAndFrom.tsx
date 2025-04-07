import { useState } from 'react';

const stations = [
  "New York Penn Station (NYP)",
  "Philadelphia 30th Street Station (PHL)",
  "Pittsburgh Union Station (PGH)",
  "Cleveland Lakefront Station (CLE)",
  "Chicago Union Station (CHI)",
  "Minneapolis–St. Paul Union Depot (MSP)",
  "Fargo Station (FAR)",
  "Spokane Station (SPK)",
  "Seattle King Street Station (SEA)",
];

const DropdownInput = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative flex justify-center items-center py-10">
      <div className="w-full max-w-md">
        <input
          type="text"
          value={selectedItem}
          placeholder="From Station"
          className="w-full px-4 py-2 text-black bg-blue-50 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onFocus={() => setIsOpen(true)}
          readOnly
        />

        {isOpen && (
          <ul className="absolute z-20 w-64 mt-2 bg-white border border-black rounded-md shadow-lg max-h-60 overflow-y-auto">
            {stations.map((station, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSelectItem(station)}
                  className="w-full text-left px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition"
                >
                  {station}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownInput;
