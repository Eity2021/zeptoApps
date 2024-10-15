import { Suspense, lazy } from "react";
import HashLoader from "react-spinners/HashLoader";
import About from "../pages/component-overview/about/About";
import Contact from "../pages/component-overview/contact/Contact";
import WishList from "../pages/component-overview/wishList/WishList";
import BooksDetailsPage from "../pages/component-overview/booksDetailsPage/BooksDetailsPage";
const Home = lazy(() => import("../pages/component-overview/home/Home"));

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <Home />
        </Suspense>
      ),
    },
    {
      path: "about",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <About />
        </Suspense>
      ),
    },

    {
      path: "contact",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <Contact />
        </Suspense>
      ),
    },
    {
    path: "bookDetails/:id",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <BooksDetailsPage />
        </Suspense>
      ),
    },

    {
      path: "wishList",
      element: (
        <Suspense
          fallback={
            <div className="h-screen  flex justify-center items-center">
              <HashLoader color="#f7ba01" />
            </div>
          }
        >
          <WishList></WishList>
        </Suspense>
      ),
    },
  ],
};

export default MainRoutes;
