import { Suspense, lazy } from "react";
import HashLoader from "react-spinners/HashLoader";
import About from "../pages/component-overview/about/About";
import Contact from "../pages/component-overview/contact/Contact";
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
    
  
   
    //   {
    //     path: "wishList",
    //     element: (
    //       <Suspense
    //         fallback={
    //           <div className="h-screen  flex justify-center items-center">
    //             <HashLoader color="#f7ba01" />
    //           </div>
    //         }
    //       >
    //         <WishList />
    //       </Suspense>
    //     ),
    //   },



    ],
  };
  
  export default MainRoutes;