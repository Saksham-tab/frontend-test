import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { AnnouncementStrip } from "./components/layout/AnnouncementStrip";
import { Home } from "./pages/Home";
import { Women } from "./pages/Women";
import { Men } from "./pages/Men";
import { Journal } from "./pages/Journal";
import { Studio } from "./pages/Studio";
import { Auth } from "./pages/Auth";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search";
import { Liked } from "./pages/Liked";
import { Cart } from "./pages/Cart";
import { ProductDetail } from "./pages/ProductDetail";
import { AppProvider } from "./context/AppContext";

const Root = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-archive-black text-dust-ivory font-body flex flex-col">
        <ScrollRestoration />
        <AnnouncementStrip />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "women", Component: Women },
      { path: "men", Component: Men },
      { path: "journal", Component: Journal },
      { path: "studio", Component: Studio },
      { path: "auth", Component: Auth },
      { path: "profile", Component: Profile },
      { path: "search", Component: Search },
      { path: "liked", Component: Liked },
      { path: "cart", Component: Cart },
      { path: "product/:id", Component: ProductDetail },
    ],
  },
]);
