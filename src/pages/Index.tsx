import { Hero } from "@/components/Hero";
import { TokenBalance } from "@/components/TokenBalance";
import { Dashboard } from "@/components/Dashboard";
import { TradingMarket } from "@/components/TradingMarket";
import { Gamification } from "@/components/Gamification";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TokenBalance />
      <Dashboard />
      <TradingMarket />
      <Gamification />
    </div>
  );
};

export default Index;
