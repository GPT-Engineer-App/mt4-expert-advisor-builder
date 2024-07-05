import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, User, FileText, CreditCard, History, BarChart2 } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import KYC from "./pages/KYC.jsx";
import Plans from "./pages/Plans.jsx";
import BillingHistory from "./pages/BillingHistory.jsx";
import AccountsHistory from "./pages/AccountsHistory.jsx";
import TradeHistory from "./pages/TradeHistory.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "KYC",
    to: "/kyc",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Plans",
    to: "/plans",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Billing History",
    to: "/billing-history",
    icon: <CreditCard className="h-4 w-4" />,
  },
  {
    title: "Accounts History",
    to: "/accounts-history",
    icon: <History className="h-4 w-4" />,
  },
  {
    title: "Trade History",
    to: "/trade-history",
    icon: <History className="h-4 w-4" />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <BarChart2 className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="kyc" element={<KYC />} />
              <Route path="plans" element={<Plans />} />
              <Route path="billing-history" element={<BillingHistory />} />
              <Route path="accounts-history" element={<AccountsHistory />} />
              <Route path="trade-history" element={<TradeHistory />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;