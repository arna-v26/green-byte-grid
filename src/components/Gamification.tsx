import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Target, Flame, Lock } from "lucide-react";

interface AchievementProps {
  title: string;
  description: string;
  progress: number;
  total: number;
  reward: string;
  unlocked: boolean;
  icon: React.ReactNode;
}

const Achievement = ({ title, description, progress, total, reward, unlocked, icon }: AchievementProps) => {
  const percentage = (progress / total) * 100;
  
  return (
    <Card className={`p-6 shadow-card hover:shadow-elevated transition-all ${unlocked ? 'border-primary' : 'border-border/50'}`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${unlocked ? 'gradient-eco shadow-glow' : 'bg-muted'}`}>
          {unlocked ? icon : <Lock className="w-6 h-6 text-muted-foreground" />}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            {unlocked && <Badge className="bg-success text-success-foreground">Unlocked</Badge>}
          </div>

          <div className="space-y-2 mt-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}/{total}</span>
            </div>
            <Progress value={percentage} className="h-2" />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium text-warning">{reward}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const Gamification = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Achievements & Rewards</h2>
          <p className="text-muted-foreground">Complete challenges to earn rewards and level up</p>
        </div>

        {/* Player Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 shadow-card gradient-card border-primary/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg gradient-hero">
                <Trophy className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
            <Progress value={65} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">650/1000 XP to Level 19</p>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-warning" />
              <div>
                <p className="text-sm text-muted-foreground">Total Points</p>
                <p className="text-2xl font-bold">15,420</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <p className="text-2xl font-bold">24/50</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3">
              <Flame className="w-8 h-8 text-destructive" />
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold">12 days</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Achievement
            title="Energy Saver"
            description="Save 1000 kWh of energy through efficiency improvements"
            progress={850}
            total={1000}
            reward="+100 ENT"
            unlocked={false}
            icon={<Target className="w-6 h-6 text-primary-foreground" />}
          />

          <Achievement
            title="Recycling Champion"
            description="Recycle 500kg of waste materials"
            progress={500}
            total={500}
            reward="+75 WST"
            unlocked={true}
            icon={<Trophy className="w-6 h-6 text-primary-foreground" />}
          />

          <Achievement
            title="Trading Master"
            description="Complete 100 peer-to-peer energy trades"
            progress={78}
            total={100}
            reward="+150 Points"
            unlocked={false}
            icon={<Star className="w-6 h-6 text-primary-foreground" />}
          />

          <Achievement
            title="Carbon Neutral"
            description="Offset 5 tons of CO2 emissions"
            progress={5}
            total={5}
            reward="+200 ENT"
            unlocked={true}
            icon={<Trophy className="w-6 h-6 text-primary-foreground" />}
          />

          <Achievement
            title="Community Leader"
            description="Refer 10 new users to the platform"
            progress={7}
            total={10}
            reward="+250 Points"
            unlocked={false}
            icon={<Target className="w-6 h-6 text-primary-foreground" />}
          />

          <Achievement
            title="Green Streak"
            description="Maintain a 30-day sustainability streak"
            progress={12}
            total={30}
            reward="+300 Points"
            unlocked={false}
            icon={<Flame className="w-6 h-6 text-primary-foreground" />}
          />
        </div>
      </div>
    </section>
  );
};
