import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { User, Package, Heart, Eye, MapPin, Clock, LogOut } from "lucide-react";
import { useAppContext } from "../context/AppContext";

type TabType = "personal" | "orders" | "wishlist" | "saved-looks" | "addresses" | "recently-viewed";

export function Profile() {
  const navigate = useNavigate();
  const { currentUser, isAuthenticated, logout, likedProducts } = useAppContext();
  const [activeTab, setActiveTab] = useState<TabType>("personal");

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-archive-black text-dust-ivory flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-serif italic text-[32px] mb-6">Please Log In</h2>
          <p className="font-body text-raw-linen mb-8">You need to be logged in to access your profile.</p>
          <button
            onClick={() => navigate("/auth")}
            className="px-8 py-3 bg-terracotta text-archive-black font-condensed text-[13px] uppercase tracking-[2px] hover:bg-terracotta/80 transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "saved-looks", label: "Saved Looks", icon: Eye },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "recently-viewed", label: "Recently Viewed", icon: Clock },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-archive-black text-dust-ivory py-12 lg:py-20 px-6 lg:px-[80px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="font-serif italic text-[48px] lg:text-[64px] text-dust-ivory mb-2">
          My Profile
        </h1>
        <p className="font-body text-raw-linen text-[16px]">
          Welcome back, {currentUser?.name}!
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap gap-2 lg:gap-4 mb-12 pb-4 border-b border-indigo-deep overflow-x-auto no-scrollbar"
      >
        {tabs.map((tab) => {
          const TabIcon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-4 py-2 font-condensed text-[12px] uppercase tracking-[1px] whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? "border-thread-gold text-thread-gold"
                  : "border-transparent text-raw-linen hover:text-thread-gold"
              }`}
            >
              <TabIcon size={16} />
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        key={activeTab}
      >
        {/* Personal Information */}
        {activeTab === "personal" && (
          <div className="max-w-2xl">
            <h2 className="font-serif italic text-[32px] text-dust-ivory mb-8">Personal Information</h2>
            <div className="space-y-6 border border-indigo-deep p-8">
              <div>
                <label className="block font-condensed text-[11px] uppercase tracking-[1px] text-raw-linen mb-2">
                  Full Name
                </label>
                <p className="font-body text-[16px] text-dust-ivory">{currentUser?.name}</p>
              </div>
              <div>
                <label className="block font-condensed text-[11px] uppercase tracking-[1px] text-raw-linen mb-2">
                  Mobile Number
                </label>
                <p className="font-body text-[16px] text-dust-ivory">{currentUser?.mobile}</p>
              </div>
              <button
                onClick={handleLogout}
                className="mt-6 flex items-center gap-2 px-6 py-3 border border-terracotta text-terracotta font-condensed text-[13px] uppercase tracking-[2px] hover:bg-terracotta hover:text-archive-black transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <div className="max-w-4xl">
            <h2 className="font-serif italic text-[32px] text-dust-ivory mb-8">Order History</h2>
            <div className="text-center py-12 border border-indigo-deep">
              <Package size={32} className="mx-auto mb-4 text-ash-grey" />
              <p className="font-body text-raw-linen">No orders yet</p>
              <p className="text-ash-grey text-[14px] mt-2">Start shopping to see your orders here</p>
            </div>
          </div>
        )}

        {/* Wishlist */}
        {activeTab === "wishlist" && (
          <div className="max-w-4xl">
            <h2 className="font-serif italic text-[32px] text-dust-ivory mb-8">Wishlist</h2>
            {likedProducts && likedProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {likedProducts.map((productId) => (
                  <div key={productId} className="bg-indigo-deep/20 aspect-square flex items-center justify-center border border-indigo-deep">
                    <span className="text-ash-grey text-[14px]">Product {productId}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-indigo-deep">
                <Heart size={32} className="mx-auto mb-4 text-ash-grey" />
                <p className="font-body text-raw-linen">No items in wishlist</p>
              </div>
            )}
          </div>
        )}

        {/* Saved Looks */}
        {activeTab === "saved-looks" && (
          <div className="max-w-4xl">
            <h2 className="font-serif italic text-[32px] text-dust-ivory mb-8">Saved Looks</h2>
            <div className="text-center py-12 border border-indigo-deep">
              <Eye size={32} className="mx-auto mb-4 text-ash-grey" />
              <p className="font-body text-raw-linen">No saved looks yet</p>
              <p className="text-ash-grey text-[14px] mt-2">Create an outfit in Studio and save it here</p>
            </div>
          </div>
        )}

        {/* Addresses */}
        {activeTab === "addresses" && (
          <div className="max-w-2xl">
            <h2 className="font-serif italic text-[32px] text-dust-ivory mb-8">Saved Addresses</h2>
            <div className="text-center py-12 border border-indigo-deep mb-6">
              <MapPin size={32} className="mx-auto mb-4 text-ash-grey" />
              <p className="font-body text-raw-linen">No addresses saved</p>
            </div>
            <button className="px-6 py-3 border-2 border-thread-gold text-thread-gold font-condensed text-[13px] uppercase tracking-[2px] hover:bg-thread-gold hover:text-archive-black transition-colors">
              Add Address
            </button>
          </div>
        )}

        {/* Recently Viewed */}
        {activeTab === "recently-viewed" && (
          <div className="max-w-4xl">
            <h2 className="font-serif italic text-[32px] text-dust-ivory mb-8">Recently Viewed</h2>
            <div className="text-center py-12 border border-indigo-deep">
              <Clock size={32} className="mx-auto mb-4 text-ash-grey" />
              <p className="font-body text-raw-linen">No recently viewed products</p>
              <p className="text-ash-grey text-[14px] mt-2">Browse our collections to see items here</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
