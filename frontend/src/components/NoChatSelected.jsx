import { MessageCircle } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-base-100/50 to-base-200/30 backdrop-blur-sm">
      <div className="max-w-lg text-center space-y-8">
        {/* Icon Display */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-xl">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-30"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-base-content">
            Welcome to Talksy!
          </h2>
          <p className="text-base-content/70 text-xl leading-relaxed max-w-md mx-auto">
            Select a conversation from the sidebar to start chatting with your friends
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-3">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;