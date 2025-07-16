import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Team from "@/pages/Team";

import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/team" component={Team} />

        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
