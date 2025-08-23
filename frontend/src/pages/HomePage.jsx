import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 pt-16">
      <div className="flex items-center justify-center px-6 py-8">
        <div className="bg-base-100/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-base-300/50 w-full max-w-7xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-3xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;