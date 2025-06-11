const TableHeader = () => (
  <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
    <tr>
      {[
        "Name",
        "Email",
        "Phone",
        "Location",
        "DOB",
        "Gender",
        "Total Spent",
        "Music Preference",
        "Status",
      ].map((header, idx) => (
        <th key={idx} className="py-4 px-6 text-left whitespace-nowrap">
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader