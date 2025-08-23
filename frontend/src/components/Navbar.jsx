import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Zap, MessageCircle } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100/95 border-b border-base-300/50 fixed w-full top-0 z-40 
    backdrop-blur-xl shadow-sm"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-200 group">
              <div className="size-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-200">Talksy</h1>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={"/"}
              className="btn btn-ghost btn-sm gap-2 hover:bg-base-200/70 transition-all duration-200 rounded-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Chat</span>
            </Link>

            <Link
              to={"/settings"}
              className="btn btn-ghost btn-sm gap-2 hover:bg-base-200/70 transition-all duration-200 rounded-xl"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link 
                  to={"/profile"} 
                  className="btn btn-ghost btn-sm gap-2 hover:bg-base-200/70 transition-all duration-200 rounded-xl"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                <button 
                  className="btn btn-ghost btn-sm gap-2 hover:bg-error/10 hover:text-error transition-all duration-200 rounded-xl" 
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;