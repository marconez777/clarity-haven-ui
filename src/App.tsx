import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import TDAH from "./pages/TDAH";
import Ansiedade from "./pages/Ansiedade";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Depressao from "./pages/Depressao";
import AdminLayout from "@/components/admin/AdminLayout";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import PostList from "@/pages/admin/posts/PostList";
import PostCreate from "@/pages/admin/posts/PostCreate";
import PostEdit from "@/pages/admin/posts/PostEdit";
import CategoryManager from "@/pages/admin/categories/CategoryManager";
import PageList from "@/pages/admin/pages/PageList";
import PageEditor from "@/pages/admin/pages/PageEditor";
import WordPressImport from "@/pages/admin/import/WordPressImport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tdah" element={<TDAH />} />
            <Route path="/ansiedade" element={<Ansiedade />} />
            <Route path="/depressao" element={<Depressao />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<Dashboard />} />
              <Route path="posts" element={<PostList />} />
              <Route path="posts/new" element={<PostCreate />} />
              <Route path="posts/edit/:id" element={<PostEdit />} />
              <Route path="categories" element={<CategoryManager />} />
              <Route path="pages" element={<PageList />} />
              <Route path="pages/new" element={<PageEditor />} />
              <Route path="pages/edit/:id" element={<PageEditor />} />
              <Route path="import" element={<WordPressImport />} />
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
