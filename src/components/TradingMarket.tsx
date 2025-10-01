import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, TrendingUp, Users, MapPin } from "lucide-react";

interface TradeListingProps {
  seller: string;
  amount: string;
  price: string;
  location: string;
  type: "buy" | "sell";
  token: "ENT" | "WST";
}

const TradeListing = ({ seller, amount, price, location, type, token }: TradeListingProps) => {
  return (
    <Card className="p-4 shadow-card hover:shadow-elevated transition-all border-l-4" 
          style={{ borderLeftColor: type === "buy" ? "hsl(var(--success))" : "hsl(var(--secondary))" }}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={type === "buy" ? "default" : "secondary"}>
              {type === "buy" ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownLeft className="w-3 h-3 mr-1" />}
              {type === "buy" ? "Buy Offer" : "Sell Offer"}
            </Badge>
            <Badge variant="outline">{token}</Badge>
          </div>
          
          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">{seller}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{location}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Amount</p>
              <p className="text-lg font-bold">{amount}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Price</p>
              <p className="text-lg font-bold text-primary">{price}</p>
            </div>
          </div>
        </div>

        <Button variant="eco" size="sm" className="ml-4">
          {type === "buy" ? "Sell" : "Buy"}
        </Button>
      </div>
    </Card>
  );
};

export const TradingMarket = () => {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">P2P Energy Trading</h2>
              <p className="text-muted-foreground">Trade tokens directly with other users in your region</p>
            </div>
            <div className="flex gap-3">
              <Button variant="eco">Create Offer</Button>
              <Button variant="outline">My Trades</Button>
            </div>
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "24h Volume", value: "12,450 ENT", change: "+15.2%", isPositive: true },
            { label: "Active Trades", value: "247", change: "+8", isPositive: true },
            { label: "Avg. Price", value: "$3.20", change: "-2.1%", isPositive: false },
            { label: "Total Users", value: "3,421", change: "+124", isPositive: true },
          ].map((stat, i) => (
            <Card key={i} className="p-4 shadow-card">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className={`text-sm font-medium ${stat.isPositive ? 'text-success' : 'text-destructive'}`}>
                  {stat.change}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trading Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <ArrowUpRight className="w-5 h-5 text-success" />
              Buy Offers
            </h3>
            <TradeListing
              seller="SolarHub_21"
              amount="150 ENT"
              price="$3.25/token"
              location="California, USA"
              type="buy"
              token="ENT"
            />
            <TradeListing
              seller="GreenFactory_07"
              amount="320 ENT"
              price="$3.18/token"
              location="Texas, USA"
              type="buy"
              token="ENT"
            />
            <TradeListing
              seller="EcoHome_99"
              amount="75 WST"
              price="$2.95/token"
              location="New York, USA"
              type="buy"
              token="WST"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <ArrowDownLeft className="w-5 h-5 text-secondary" />
              Sell Offers
            </h3>
            <TradeListing
              seller="WindPower_42"
              amount="200 ENT"
              price="$3.15/token"
              location="Oregon, USA"
              type="sell"
              token="ENT"
            />
            <TradeListing
              seller="RecycleHub_88"
              amount="450 WST"
              price="$2.88/token"
              location="Florida, USA"
              type="sell"
              token="WST"
            />
            <TradeListing
              seller="CleanEnergy_55"
              amount="180 ENT"
              price="$3.10/token"
              location="Washington, USA"
              type="sell"
              token="ENT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
