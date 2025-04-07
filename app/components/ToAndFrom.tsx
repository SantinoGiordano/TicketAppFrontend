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
    <div className="p-10 flex flex-col sm:flex-row items-center gap-4 bg-base-100 rounded-xl w-full max-w-md relative">
      <input
        type="text"
        value={selectedItem}
        placeholder="From Station"
        className="input input-bordered w-full"
        onFocus={() => setIsOpen(true)}
        readOnly
      />

      {isOpen && (
        <ul className="menu bg-base-100 rounded-box z-10 w-full mt-2 shadow absolute top-full left-0">
          {stations.map((station, index) => (
            <li key={index}>
              <a onClick={() => handleSelectItem(station)}>{station}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
