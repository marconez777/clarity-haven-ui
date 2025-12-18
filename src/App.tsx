import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import SmartlookAnalytics from "@/components/SmartlookAnalytics";
import PageTracker from "@/components/PageTracker";

// Lazy load all pages except Index (main landing page)
const TDAH = lazy(() => import("./pages/TDAH"));
const TesteTDAH = lazy(() => import("./pages/TesteTDAH"));
const TesteAutismoAQ10 = lazy(() => import("./pages/TesteAutismoAQ10"));
const TesteAutismoAQ50 = lazy(() => import("./pages/TesteAutismoAQ50"));
const TesteDepressaoPHQ9 = lazy(() => import("./pages/TesteDepressaoPHQ9"));
const TesteTDAHAdulto = lazy(() => import("./pages/TesteTDAHAdulto"));
const TesteAnsiedadeGAD7 = lazy(() => import("./pages/TesteAnsiedadeGAD7"));
const TesteBurnout = lazy(() => import("./pages/TesteBurnout"));
const TesteTranstornoBipolar = lazy(() => import("./pages/TesteTranstornoBipolar"));
const TesteSofrimentoMental = lazy(() => import("./pages/TesteSofrimentoMental"));
const TesteCompulsaoAlimentar = lazy(() => import("./pages/TesteCompulsaoAlimentar"));
const Testes = lazy(() => import("./pages/Testes"));
const ModeloLocal = lazy(() => import("./pages/ModeloLocal"));
const ConsultaTDAHOnline = lazy(() => import("./pages/ConsultaTDAHOnline"));
const PsiquiatraDeTDAH = lazy(() => import("./pages/PsiquiatraDeTDAH"));
const Ansiedade = lazy(() => import("./pages/Ansiedade"));
const TranstornoBipolar = lazy(() => import("./pages/TranstornoBipolar"));
const Team = lazy(() => import("./pages/Team"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Depressao = lazy(() => import("./pages/Depressao"));
const Contato = lazy(() => import("./pages/Contato"));
const DrGabriel = lazy(() => import("./pages/DrGabriel"));
const Especialidades = lazy(() => import("./pages/Especialidades"));
const DynamicPage = lazy(() => import("./pages/DynamicPage"));

// Admin pages - lazy loaded
const AdminLayout = lazy(() => import("@/components/admin/AdminLayout"));
const Login = lazy(() => import("@/pages/admin/Login"));
const DashboardTabs = lazy(() => import("@/pages/admin/DashboardTabs"));
const ContentTabs = lazy(() => import("@/pages/admin/ContentTabs"));
const PostCreate = lazy(() => import("@/pages/admin/posts/PostCreate"));
const PostEdit = lazy(() => import("@/pages/admin/posts/PostEdit"));
const PageList = lazy(() => import("@/pages/admin/pages/PageList"));
const PageEditor = lazy(() => import("@/pages/admin/pages/PageEditor"));

// Lazy load ProtectedRoute
const ProtectedRoute = lazy(() => import("@/components/admin/ProtectedRoute").then(m => ({ default: m.ProtectedRoute })));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground">Carregando...</p>
    </div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dr-gabriel-lopes" element={<DrGabriel />} />
              <Route path="/especialidades" element={<Especialidades />} />
              <Route path="/tdah" element={<TDAH />} />
              <Route path="/testes-de-saude-mental" element={<Testes />} />
              <Route path="/teste-tdah-hiperatividade" element={<TesteTDAH />} />
              <Route path="/teste-autismo-aq10" element={<TesteAutismoAQ10 />} />
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
              
              {/* Redirects de URLs antigas */}
              <Route path="/autismo-adulto-aq-10" element={<Navigate to="/teste-autismo-aq10" replace />} />
              <Route path="/teste-de-tdah-hiperatividade-adulto" element={<Navigate to="/teste-de-deficit-de-atencao-tdah-adulto" replace />} />
              <Route path="/teste-transtorno-bipolar" element={<Navigate to="/teste-de-transtorno-bipolar" replace />} />
              <Route path="/teste-depressao-phq9" element={<Navigate to="/teste-de-depressao-phq9" replace />} />
              
              {/* Dynamic routes - BEFORE catch-all */}
              <Route path="/:slug" element={<DynamicPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;