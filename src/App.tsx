import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BridalMakeup from "./pages/BridalMakeup.tsx";
import PartyMakeup from "./pages/PartyMakeup.tsx";
import SimpleMakeup from "./pages/SimpleMakeup.tsx";
import BridalPremium from "./pages/BridalPremium.tsx";
import Gallery from "./pages/Gallery.tsx";
import Reviews from "./pages/Reviews.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bridal-makeup" element={<BridalMakeup />} />
          <Route path="/party-makeup" element={<PartyMakeup />} />
          <Route path="/simple-makeup" element={<SimpleMakeup />} />
          <Route path="/bridal-premium" element={<BridalPremium />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
