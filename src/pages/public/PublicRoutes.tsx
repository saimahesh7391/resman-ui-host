// resman-ui-host/src/pages/public/PublicRoutes.tsx
import { Routes, Route } from "react-router-dom";
import SOWDetail from "./SOWDetail";
import NotFoundPage from "@/components/common/NotFoundPage";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sow/:id" element={<SOWDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default PublicRoutes;