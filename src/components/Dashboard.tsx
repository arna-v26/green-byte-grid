import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Leaf, Zap, TrendingUp, Activity } from "lucide-react";

export const Dashboard = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Sustainability Dashboard</h2>
          <p className="text-muted-foreground">Monitor your environmental impact and efficiency metrics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Carbon Footprint */}
          <Card className="p-6 shadow-card hover:shadow-elevated transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-eco">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Carbon Offset</p>
                  <p className="text-2xl font-bold">2.4 tons</p>
                </div>
              </div>
              <Badge className="bg-success text-success-foreground">-45%</Badge>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">75% of monthly goal achieved</p>
          </Card>

          {/* Energy Efficiency */}
          <Card className="p-6 shadow-card hover:shadow-elevated transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg gradient-tech">
                  <Zap className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Efficiency Score</p>
                  <p className="text-2xl font-bold">92/100</p>
                </div>
              </div>
              <Badge className="bg-success text-success-foreground">Excellent</Badge>
            </div>
            <Progress value={92} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">Top 5% in your region</p>
          </Card>

          {/* Rewards Earned */}
          <Card className="p-6 shadow-card hover:shadow-elevated transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  <Award className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rewards Earned</p>
                  <p className="text-2xl font-bold">342</p>
                </div>
              </div>
              <Badge className="bg-warning text-warning-foreground">+28</Badge>
            </div>
            <Progress value={68} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">Next reward unlock at 400 points</p>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-6 p-6 shadow-card">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-semibold">Recent Activity</h3>
          </div>

          <div className="space-y-4">
            {[
              { action: "Energy tokens earned", amount: "+45 ENT", time: "2 hours ago", type: "eco" },
              { action: "Waste recycling reward", amount: "+12 WST", time: "5 hours ago", type: "tech" },
              { action: "P2P energy trade", amount: "-20 ENT", time: "1 day ago", type: "neutral" },
              { action: "Efficiency milestone achieved", amount: "+50 Points", time: "2 days ago", type: "success" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'eco' ? 'bg-primary' : 
                    activity.type === 'tech' ? 'bg-secondary' : 
                    activity.type === 'success' ? 'bg-success' : 
                    'bg-muted'
                  }`} />
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <span className={`font-semibold ${
                  activity.amount.startsWith('+') ? 'text-success' : 'text-muted-foreground'
                }`}>
                  {activity.amount}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
