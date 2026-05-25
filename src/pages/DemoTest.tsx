// import { useEffect, useState } from "react";

// function DemoTest() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://randomuser.me/api/?results=5")
//       .then((res) => res.json())
//       .then((data) => setUsers(data.results));
//   }, []);

//   return (
//     <div>
//       {users.map((user, index) => (
//         <div key={index}>
//           <h2>{user.name.first}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DemoTest;
import { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    medium: string;
  };
  login: {
    username: string;
  };
  location: {
    country: string;
  };
}

export default function DemoTest() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Users Dashboard</h1>

          <p className="text-slate-400 mt-2">API Table</p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-2xl outline-none w-full lg:w-80 focus:border-blue-500 transition"
        />
      </div>

      {/* Table Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Head */}
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="text-left px-6 py-5 font-semibold">User</th>
                <th className="text-left px-6 py-5 font-semibold">Email</th>
                <th className="text-left px-6 py-5 font-semibold">Country</th>
                <th className="text-left px-6 py-5 font-semibold">Phone</th>
                <th className="text-left px-6 py-5 font-semibold">Status</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-slate-400">
                    Loading users...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-slate-400">
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user: User, index: number) => (
                  <tr
                    key={index}
                    className="border-t border-slate-800 hover:bg-slate-800/40 transition duration-300"
                  >
                    {/* User */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <img
                          src={user.picture.medium}
                          alt={`${user.name.first} ${user.name.last}`}
                          className="w-12 h-12 rounded-full border border-slate-700"
                        />

                        <div>
                          <h2 className="font-semibold text-white">
                            {user.name.first} {user.name.last}
                          </h2>

                          <p className="text-sm text-slate-400">
                            @{user.login.username}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-5 text-slate-300">{user.email}</td>

                    {/* Country */}
                    <td className="px-6 py-5 text-slate-300">
                      {user.location.country}
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-5 text-slate-300">{user.phone}</td>

                    {/* Status */}
                    <td className="px-6 py-5">
                      <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 text-slate-500 text-sm">
        Showing {filteredUsers.length} users from API
      </div>
    </div>
  );
}
