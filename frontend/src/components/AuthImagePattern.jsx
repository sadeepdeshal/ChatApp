const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Static chat bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-16 h-2 bg-primary/60 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <div className="bg-secondary/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-secondary/60 rounded"></div>
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
          <div className="bg-accent/20 p-3 rounded-xl shadow-lg backdrop-blur-sm">
            <div className="w-12 h-1.5 bg-accent/60 rounded mb-1"></div>
            <div className="w-8 h-1.5 bg-accent/40 rounded"></div>
          </div>
        </div>
      </div>

      <div className="max-w-lg text-center relative z-10">
        {/* Modern chat interface mockup */}
        <div className="mb-16">
          <div className="bg-base-100/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-base-300/40">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-base-300/30">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
              </div>
              <div className="text-left">
                <div className="w-24 h-3 bg-base-content/25 rounded mb-2"></div>
                <div className="w-16 h-2 bg-base-content/15 rounded"></div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-start">
                <div className="bg-base-200/90 p-4 rounded-2xl rounded-bl-md max-w-[75%]">
                  <div className="w-32 h-2.5 bg-base-content/25 rounded mb-2"></div>
                  <div className="w-20 h-2.5 bg-base-content/20 rounded"></div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-primary/25 p-4 rounded-2xl rounded-br-md max-w-[75%]">
                  <div className="w-28 h-2.5 bg-primary/70 rounded mb-2"></div>
                  <div className="w-16 h-2.5 bg-primary/50 rounded"></div>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-base-200/90 p-4 rounded-2xl rounded-bl-md max-w-[75%]">
                  <div className="w-36 h-2.5 bg-base-content/25 rounded"></div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-primary/25 p-4 rounded-2xl rounded-br-md max-w-[75%]">
                  <div className="w-24 h-2.5 bg-primary/70 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Input area */}
            <div className="pt-4 border-t border-base-300/30">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-10 bg-base-200/70 rounded-full"></div>
                <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary/80 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-base-content/70 text-xl leading-relaxed max-w-md mx-auto">{subtitle}</p>
        </div>
        
        {/* Static decorative elements */}
        <div className="mt-12 flex justify-center">
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

export default AuthImagePattern;