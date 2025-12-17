import { users } from "../pages/data/UserData"
import { User} from "lucide-react";

const UsersTable = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold text-lg">Users</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </div>

    <div class="overflow-x-auto bg-white rounded-lg shadow">
  <table class="min-w-full border border-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">User</th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">Role</th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
        <th class="px-6 py-3 text-left text-sm font-semibold text-gray-600">Last Login</th>
        <th class="px-6 py-3 text-right text-sm font-semibold text-gray-600">Actions</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
       {users.map((users, index) => (
          <tr key={index}>
        <td class="px-6 py-4 flex flex-row items-center space-x-3">
          <User className="w-7 h-7 text-gray-500 bg-gray-200 rounded-full" />
         <div>
           <div class="text-gray-900 font-bold">{users.name} </div>
          <div class="text-sm text-gray-500">{users.email}</div>
         </div>
        </td>
        <td class="px-6 py-4">
          <span className={`px-3 py-1 text-sm rounded-full ${users.role === "Admin" ? "text-purple-900 bg-purple-200" : users.role === "Manager" ? "text-blue-900 bg-blue-200" : "text-gray-900 bg-gray-200"}`}>
            {users.role}
          </span>
        </td>
        <td class="px-6 py-4">
          <span class={`px-3 py-1 text-sm rounded-full  ${users.status === "Active" ? "text-green-900 bg-green-200" : users.status === "Inactive" ? "text-red-600 bg-red-200" : "text-yellow-600"}`}>
           {users.status}
          </span>
        </td>
        <td class="px-6 py-4 text-gray-600">{users.lastLogin}</td>
        <td class="px-6 py-4 text-right space-x-3">
          <button class="text-blue-600 hover:underline">Edit</button>
          <button class="text-red-600 hover:underline">Delete</button>
        </td>
      </tr>

      ))}
    </tbody>
  </table>
</div>

  
         
        
    </div>
  );
};

export default UsersTable;
