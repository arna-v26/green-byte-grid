import { Card } from "@/components/ui/card";
import { Zap, Recycle, TrendingUp, TrendingDown } from "lucide-react";
import energyToken from "@/assets/energy-token.png";
import wasteToken from "@/assets/waste-token.png";

interface TokenCardProps {
  title: string;
  balance: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  gradient: "eco" | "tech";
}

const TokenCard = ({ title, balance, value, change, isPositive, icon, gradient }: TokenCardProps) => {
  return (
    <Card className="p-6 shadow-card hover:shadow-elevated transition-all duration-300 border-border/50 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold">{balance}</h3>
        </div>
        <div className={`p-3 rounded-xl ${gradient === 'eco' ? 'gradient-eco' : 'gradient-tech'} shadow-glow`}>
          <img src={icon} alt={title} className="w-8 h-8" />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Current Value</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${isPositive ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="text-sm font-medium">{change}</span>
        </div>
      </div>
    </Card>
  );
};

export const TokenBalance = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Your Token Balance</h2>
          <p className="text-muted-foreground">Track your energy and waste tokens in real-time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TokenCard
            title="Energy Tokens (ENT)"
            balance="1,247.5"
            value="$3,742.50"
            change="+12.5%"
            isPositive={true}
            icon={energyToken}
            gradient="eco"
          />
          <TokenCard
            title="Waste Tokens (WST)"
            balance="856.2"
            value="$2,568.60"
            change="+8.3%"
            isPositive={true}
            icon={wasteToken}
            gradient="tech"
          />
        </div>
      </div>
    </section>
  );
};
