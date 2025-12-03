import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import TDAH from "./pages/TDAH";
import TesteTDAH from "./pages/TesteTDAH";
import TesteAutismoAQ10 from "./pages/TesteAutismoAQ10";
import TesteAutismoAQ50 from "./pages/TesteAutismoAQ50";
import TesteDepressaoPHQ9 from "./pages/TesteDepressaoPHQ9";
import TesteTDAHAdulto from "./pages/TesteTDAHAdulto";
import TesteAnsiedadeGAD7 from "./pages/TesteAnsiedadeGAD7";
import TesteBurnout from "./pages/TesteBurnout";
import TesteTranstornoBipolar from "./pages/TesteTranstornoBipolar";
import TesteSofrimentoMental from "./pages/TesteSofrimentoMental";
import TesteCompulsaoAlimentar from "./pages/TesteCompulsaoAlimentar";
import Testes from "./pages/Testes";
import ModeloLocal from "./pages/ModeloLocal";
import ConsultaTDAHOnline from "./pages/ConsultaTDAHOnline";
import PsiquiatraDeTDAH from "./pages/PsiquiatraDeTDAH";
import Ansiedade from "./pages/Ansiedade";
import TranstornoBipolar from "./pages/TranstornoBipolar";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Depressao from "./pages/Depressao";
import Contato from "./pages/Contato";
import DrGabriel from "./pages/DrGabriel";
import Especialidades from "./pages/Especialidades";
import AdminLayout from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Login from "@/pages/admin/Login";
import DashboardTabs from "@/pages/admin/DashboardTabs";
import ContentTabs from "@/pages/admin/ContentTabs";
import PostCreate from "@/pages/admin/posts/PostCreate";
import PostEdit from "@/pages/admin/posts/PostEdit";
import PageList from "@/pages/admin/pages/PageList";
import PageEditor from "@/pages/admin/pages/PageEditor";
import DynamicPage from "@/pages/DynamicPage";
import ScrollToTop from "@/components/ScrollToTop";
import SmartlookAnalytics from "@/components/SmartlookAnalytics";
import PageTracker from "@/components/PageTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SmartlookAnalytics />
          <PageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dr-gabriel-lopes" element={<DrGabriel />} />
            <Route path="/especialidades" element={<Especialidades />} />
            <Route path="/tdah" element={<TDAH />} />
            <Route path="/testes-de-saude-mental" element={<Testes />} />
            <Route path="/teste-tdah-hiperatividade" element={<TesteTDAH />} />
            <Route path="/autismo-adulto-aq-10" element={<TesteAutismoAQ10 />} />
            <Route path="/teste-de-autismo-adulto-aq-50" element={<TesteAutismoAQ50 />} />
            <Route path="/teste-de-depressao-phq9" element={<TesteDepressaoPHQ9 />} />
            <Route path="/teste-de-deficit-de-atencao-tdah-adulto" element={<TesteTDAHAdulto />} />
            <Route path="/teste-ansiedade-gad7" element={<TesteAnsiedadeGAD7 />} />
            <Route path="/teste-burnout" element={<TesteBurnout />} />
            <Route path="/teste-de-transtorno-bipolar" element={<TesteTranstornoBipolar />} />
            <Route path="/teste-de-sofrimento-mental" element={<TesteSofrimentoMental />} />
            <Route path="/teste-compulsao-alimentar" element={<TesteCompulsaoAlimentar />} />
            <Route path="/modelo-local" element={<ModeloLocal />} />
            <Route path="/psiquiatra-de-tdah" element={<PsiquiatraDeTDAH />} />
            <Route path="/consulta-para-tdah-online" element={<ConsultaTDAHOnline />} />
            <Route path="/ansiedade" element={<Ansiedade />} />
            <Route path="/transtorno-bipolar" element={<TranstornoBipolar />} />
            <Route path="/depressao" element={<Depressao />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<DashboardTabs />} />
              <Route path="posts" element={<ContentTabs />} />
              <Route path="posts/new" element={<PostCreate />} />
              <Route path="posts/edit/:id" element={<PostEdit />} />
              <Route path="pages" element={<PageList />} />
              <Route path="pages/new" element={<PageEditor />} />
              <Route path="pages/edit/:id" element={<PageEditor />} />
              {/* Redirects for old routes */}
              <Route path="categories" element={<Navigate to="/admin/posts?tab=categories" replace />} />
              <Route path="import" element={<Navigate to="/admin/posts?tab=import" replace />} />
              <Route path="analytics" element={<Navigate to="/admin?tab=analytics" replace />} />
              <Route path="leads" element={<Navigate to="/admin?tab=leads" replace />} />
            </Route>
            
            {/* Dynamic routes - BEFORE catch-all */}
            <Route path="/:slug" element={<DynamicPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
