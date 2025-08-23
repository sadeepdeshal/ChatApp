import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, MessageCircle, Shield } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 pt-16">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-2xl space-y-8">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="flex flex-col items-center gap-4 group">
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">
                  Profile Settings
                </h1>
                <p className="text-base-content/70 text-lg">Manage your account information</p>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-300/50 backdrop-blur-sm">
            {/* Avatar Upload Section */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="relative group">
                <img
                  src={selectedImg || authUser.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-base-300/50 group-hover:border-primary/30 transition-all duration-200 shadow-xl"
                />
                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-2 right-2 
                    bg-primary hover:bg-primary-focus hover:scale-105
                    p-3 rounded-full cursor-pointer 
                    transition-all duration-200 shadow-lg
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                  `}
                >
                  <Camera className="w-5 h-5 text-primary-content" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
              <p className="text-sm text-base-content/60 text-center max-w-xs">
                {isUpdatingProfile ? (
                  <span className="flex items-center gap-2 justify-center">
                    <div className="loading loading-spinner loading-sm"></div>
                    Uploading...
                  </span>
                ) : (
                  "Click the camera icon to update your photo"
                )}
              </p>
            </div>

            {/* User Information */}
            <div className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/80 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </span>
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    className="input input-bordered w-full h-12 rounded-xl bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 transition-all duration-200"
                    value={authUser?.fullName || ""}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-base-content/80 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </span>
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    className="input input-bordered w-full h-12 rounded-xl bg-base-200/50 border-base-300 focus:border-primary focus:bg-base-100 transition-all duration-200"
                    value={authUser?.email || ""}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Information Card */}
          <div className="bg-base-100 p-6 rounded-3xl shadow-xl border border-base-300/50 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-base-content/90">Account Information</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 px-4 bg-base-200/50 rounded-xl border border-base-300/30">
                <span className="font-medium text-base-content/80">Member Since</span>
                <span className="text-base-content/90 font-semibold">
                  {authUser.createdAt?.split("T")[0]}
                </span>
              </div>
              <div className="flex items-center justify-between py-3 px-4 bg-base-200/50 rounded-xl border border-base-300/30">
                <span className="font-medium text-base-content/80">Account Status</span>
                <span className="text-green-600 font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Active
                </span>
              </div>
            </div>
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
    </div>
  );
};
export default ProfilePage;