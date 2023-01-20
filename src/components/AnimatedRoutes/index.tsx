import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Layout = lazy(() => import("../../Layout"));
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};
export default AnimatedRoutes;
