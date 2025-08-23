import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300/50 flex flex-col transition-all duration-200 bg-base-100/50 backdrop-blur-sm">
      <div className="border-b border-base-300/50 w-full p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-lg hidden lg:block text-base-content/90">Contacts</span>
        </div>
        {/* Online filter toggle */}
        <div className="mt-4 hidden lg:flex items-center gap-3">
          <label className="cursor-pointer flex items-center gap-3 group">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-primary"
            />
            <span className="text-sm font-medium text-base-content/80 group-hover:text-base-content transition-colors">Show online only</span>
          </label>
          <span className="text-xs text-base-content/60 bg-primary/10 px-2 py-1 rounded-full">
            {onlineUsers.length - 1} online
          </span>
        </div>
      </div>

      <div className="overflow-y-auto overflow-x-hidden w-full py-4">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-4 mx-2 mb-2 flex items-center gap-4 rounded-xl
              hover:bg-base-200/70 transition-all duration-200 group
              ${selectedUser?._id === user._id ? "bg-primary/10 border border-primary/20 shadow-lg" : "hover:shadow-md"}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="w-12 h-12 object-cover rounded-full ring-2 ring-base-300/50 group-hover:ring-primary/30 transition-all duration-200"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 
                  rounded-full ring-2 ring-base-100 shadow-lg"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="font-semibold truncate text-base-content/90 group-hover:text-base-content transition-colors">
                {user.fullName}
              </div>
              <div className={`text-sm transition-colors ${
                onlineUsers.includes(user._id) ? "text-green-600 font-medium" : "text-base-content/60"
              }`}>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-base-content/60 py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-base-200/80 flex items-center justify-center">
              <Users className="w-8 h-8 text-base-content/40" />
            </div>
            <p className="font-medium">No online users</p>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;