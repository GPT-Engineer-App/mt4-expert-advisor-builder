import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2, Trophy, DollarSign, Calendar, Users, Settings, LogOut, Star, Heart } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <img src="/path/to/logo.png" alt="Funding Pips" className="h-6 w-6" />
            <span>Funding Pips</span>
          </NavLink>
          <MobileSidebar />
          <div className="w-full flex-1">{/* Add nav bar content here! */}</div>
          <DarkModeToggle />
          <UserDropdown />
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <AccountOverview />
          <NewChallengeSection />
          <AccountDetails />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>Acme Inc</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
          <SidebarNavLink to="/new-challenge">
            <Trophy className="h-5 w-5" />
            New Challenge
          </SidebarNavLink>
          <SidebarNavLink to="/payouts">
            <DollarSign className="h-5 w-5" />
            Payouts
          </SidebarNavLink>
          <SidebarNavLink to="/competitions">
            <Users className="h-5 w-5" />
            Competitions
          </SidebarNavLink>
          <SidebarNavLink to="/leaderboard">
            <Star className="h-5 w-5" />
            Leaderboard
          </SidebarNavLink>
          <SidebarNavLink to="/calendar">
            <Calendar className="h-5 w-5" />
            Calendar
          </SidebarNavLink>
          <SidebarNavLink to="/affiliate">
            <Heart className="h-5 w-5" />
            Affiliate
          </SidebarNavLink>
          <SidebarNavLink to="/settings">
            <Settings className="h-5 w-5" />
            Settings
          </SidebarNavLink>
          <SidebarNavLink to="/logout">
            <LogOut className="h-5 w-5" />
            Logout
          </SidebarNavLink>
        </nav>
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold mb-4"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </NavLink>
        {navItems.map((item) => (
          <SidebarNavLink key={item.to} to={item.to}>
            {item.title}
          </SidebarNavLink>
        ))}
        <SidebarNavLink to="/new-challenge">
          <Trophy className="h-5 w-5" />
          New Challenge
        </SidebarNavLink>
        <SidebarNavLink to="/payouts">
          <DollarSign className="h-5 w-5" />
          Payouts
        </SidebarNavLink>
        <SidebarNavLink to="/competitions">
          <Users className="h-5 w-5" />
          Competitions
        </SidebarNavLink>
        <SidebarNavLink to="/leaderboard">
          <Star className="h-5 w-5" />
          Leaderboard
        </SidebarNavLink>
        <SidebarNavLink to="/calendar">
          <Calendar className="h-5 w-5" />
          Calendar
        </SidebarNavLink>
        <SidebarNavLink to="/affiliate">
          <Heart className="h-5 w-5" />
          Affiliate
        </SidebarNavLink>
        <SidebarNavLink to="/settings">
          <Settings className="h-5 w-5" />
          Settings
        </SidebarNavLink>
        <SidebarNavLink to="/logout">
          <LogOut className="h-5 w-5" />
          Logout
        </SidebarNavLink>
      </nav>
    </SheetContent>
  </Sheet>
);

const UserDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

const DarkModeToggle = () => (
  <Button variant="outline" size="icon" className="shrink-0">
    <span className="sr-only">Toggle dark mode</span>
    {/* Add dark mode toggle icon here */}
  </Button>
);

const AccountOverview = () => (
  <section className="mb-4">
    <h2 className="text-xl font-semibold mb-2">Account Overview</h2>
    {/* Add account overview details here */}
  </section>
);

const NewChallengeSection = () => (
  <section className="mb-4">
    <h2 className="text-xl font-semibold mb-2">New Challenge</h2>
    <Button variant="primary">Create New Challenge</Button>
  </section>
);

const AccountDetails = () => (
  <section className="mb-4">
    <h2 className="text-xl font-semibold mb-2">Account Details</h2>
    {/* Add account details list here */}
  </section>
);

export default Layout;