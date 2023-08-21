import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AboutMe } from "@views/about-me";
import { Portfolio } from "@views/portfolio";
import { ServicePricing } from "@views/service-pricing";
import { Resume } from "@views/resume";
import { Blog } from "@views/blog";
import { Contact } from "@views/contact";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service_pricing" element={<ServicePricing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
