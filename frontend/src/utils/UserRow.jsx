const UserRow = ({ user, onTagChange, onSelect }) => {
  const {
    id,
    _id,
    name,
    email,
    phone_number,
    location,
    dob,
    gender,
    totalSpent,
    music,
  } = user;

  return (
    <tr
      onClick={() => onSelect(user)}
      className="border-b border-gray-200 hover:bg-gray-100 text-[12px]"
    >
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{name}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{email}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{phone_number}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{location}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{new Date(dob).toLocaleString().split(',')[0]}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{gender || "Null"}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">
        ₹ {totalSpent}
      </td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">{music || "Null"}</td>
      <td className="py-5 px-6 font-semibold whitespace-nowrap">
        <select
          className="border px-2 py-1 rounded bg-white text-gray-700"
          onChange={(e) => onTagChange(id || _id, e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            Status
          </option>
          <option value="new">New</option>
          <option value="interested">Interested</option>
          <option value="converted">Converted</option>
        </select>
      </td>
    </tr>
  );
};

export default UserRow