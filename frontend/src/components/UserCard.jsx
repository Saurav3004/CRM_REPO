import { useEffect, useState } from "react";
import { topUsers } from "../constants/topUsers";
import UserRow from "../utils/UserRow";
import TableHeader from "../utils/TableHeader";
import axios from 'axios'





const UserCard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [allLeadsUsers,setAllLeadsUsers] = useState([])

  useEffect(() => {
    
    const leads = async () => {
     try {
      const response = await axios.get("http://localhost:5000/api/leads/getallleads")
      console.log(response.data.allLeads)
      setAllLeadsUsers(response.data.allLeads)
     } catch (error) {
      console.log(error)
     }
    }
    // console.log(leads)
    return leads
  },[])

  const handleTagSelection = async (userId, tag) => {
    try {
      const res = await fetch(`/api/users/${userId}/tag-and-contact`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tag }),
      });

      const result = await res.json();
      alert(result.message);
    } catch (error) {
      console.error("Error tagging user:", error);
      alert("Error tagging user");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">All Leads</h1>

      {allLeadsUsers.length > 0 ? <div className="overflow-x-auto">
        <table className="min-w-[1300px] w-full bg-white rounded-lg shadow border">
          <TableHeader />
          <tbody className="text-gray-700 text-sm font-light">
            {allLeadsUsers?.map((user, index) => (
              <UserRow
                key={index}
                user={user}
                onTagChange={handleTagSelection}
                onSelect={setSelectedUser}
              />
            ))}
          </tbody>
        </table>
      </div> : (
        <div>
          <h1>There are no leads</h1>
        </div>
      )}
    </div>
  );
};

export default UserCard;
