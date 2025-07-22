import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TrendingUp, Award, Sparkles, Target, Calendar, Star } from 'lucide-react';

interface ProgressData {
  day: string;
  confidence: number;
  achievement: string;
  color: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'breakthrough' | 'milestone' | 'streak';
  icon: React.ElementType;
}

const progressData: ProgressData[] = [
  { day: 'Monday', confidence: 80, achievement: "Discovered 'articulate'", color: 'from-friend-light to-friend-DEFAULT' },
  { day: 'Tuesday', confidence: 70, achievement: '8-minute flowing conversation', color: 'from-professional-light to-professional-DEFAULT' },
  { day: 'Wednesday', confidence: 100, achievement: 'Initiated small talk', color: 'from-coach-light to-coach-DEFAULT' },
  { day: 'Thursday', confidence: 80, achievement: 'Nailed job interview prep', color: 'from-success to-success-glow' },
  { day: 'Friday', confidence: 100, achievement: 'Confidence breakthrough!', color: 'from-primary to-success' }
];

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Conversation Catalyst',
    description: 'Initiated 5 conversations this week',
    date: new Date(Date.now() - 86400000),
    type: 'milestone',
    icon: Sparkles
  },
  {
    id: '2', 
    title: 'Vocabulary Virtuoso',
    description: 'Mastered 15 new sophisticated words',
    date: new Date(Date.now() - 172800000),
    type: 'breakthrough',
    icon: Award
  },
  {
    id: '3',
    title: 'Confidence Streak',
    description: '12 days of consistent practice',
    date: new Date(),
    type: 'streak',
    icon: Star
  }
];

const ProgressBar: React.FC<{ 
  percentage: number; 
  className?: string; 
  animated?: boolean;
}> = ({ percentage, className, animated = true }) => (
  <div className={cn('progress-bar bg-muted rounded-full h-2 overflow-hidden', className)}>
    <div 
      className={cn(
        'h-full bg-gradient-success rounded-full transition-all duration-1000',
        animated && 'animate-progress-flow'
      )}
      style={{ width: `${percentage}%` }}
    />
  </div>
);

const WeeklyConfidenceArc: React.FC = () => (
  <Card className="glass-card p-6 rounded-xl">
    <div className="flex items-center gap-3 mb-6">
      <TrendingUp className="w-6 h-6 text-success animate-confidence-pulse" />
      <h3 className="text-xl font-semibold text-hero">This Week's Transformation</h3>
    </div>
    
    <div className="space-y-4">
      {progressData.map((data, index) => (
        <div 
          key={data.day}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground min-w-[80px]">
                ✨ {data.day}
              </span>
              <span className="text-sm text-card-foreground">{data.achievement}</span>
            </div>
            <span className="text-xs text-success font-medium">
              {data.confidence}%
            </span>
          </div>
          <ProgressBar percentage={data.confidence} />
        </div>
      ))}
    </div>
    
    <div className="mt-6 text-center">
      <Button 
        variant="hero" 
        className="px-6 py-2 rounded-full text-sm font-medium"
      >
        Explore Your Growth Story
      </Button>
    </div>
  </Card>
);

const AchievementConstellation: React.FC = () => {
  const getTypeColor = (type: Achievement['type']) => {
    switch (type) {
      case 'breakthrough': return 'text-success';
      case 'milestone': return 'text-professional-DEFAULT';  
      case 'streak': return 'text-friend-DEFAULT';
      default: return 'text-muted-foreground';
    }
  };

  const getTypeBg = (type: Achievement['type']) => {
    switch (type) {
      case 'breakthrough': return 'bg-success/10';
      case 'milestone': return 'bg-professional-DEFAULT/10';
      case 'streak': return 'bg-friend-DEFAULT/10';
      default: return 'bg-muted/10';
    }
  };

  return (
    <Card className="glass-card p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-6 h-6 text-success animate-liquid-float" />
        <h3 className="text-xl font-semibold text-hero">Achievement Constellation</h3>
      </div>
      
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div 
            key={achievement.id}
            className={cn(
              'glass-card p-4 rounded-lg hover:shadow-glow transition-all duration-300',
              'hover:scale-105 magnetic-hover animate-fade-in-up'
            )}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                'p-3 rounded-full',
                getTypeBg(achievement.type)
              )}>
                <achievement.icon className={cn('w-5 h-5', getTypeColor(achievement.type))} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-card-foreground">{achievement.title}</h4>
                  <span className="text-xs text-muted-foreground">
                    {achievement.date.toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                <div className="mt-2">
                  <span className={cn(
                    'text-xs px-2 py-1 rounded-full capitalize',
                    getTypeBg(achievement.type),
                    getTypeColor(achievement.type)
                  )}>
                    {achievement.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const LearningGoals: React.FC = () => (
  <Card className="glass-card p-6 rounded-xl">
    <div className="flex items-center gap-3 mb-6">
      <Target className="w-6 h-6 text-success animate-avatar-breathe" />
      <h3 className="text-xl font-semibold text-hero">Learning Goals</h3>
    </div>
    
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-card-foreground">Job Interview Mastery</span>
          <span className="text-xs text-success">85%</span>
        </div>
        <ProgressBar percentage={85} />
        <p className="text-xs text-muted-foreground mt-1">3 more practice sessions to complete</p>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-card-foreground">Vocabulary Expansion</span>
          <span className="text-xs text-success">92%</span>
        </div>
        <ProgressBar percentage={92} />
        <p className="text-xs text-muted-foreground mt-1">12 new words learned this week</p>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-card-foreground">Confidence Building</span>
          <span className="text-xs text-success">78%</span>
        </div>
        <ProgressBar percentage={78} />
        <p className="text-xs text-muted-foreground mt-1">Breakthrough moment achieved!</p>
      </div>
    </div>
    
    <div className="mt-6">
      <button className="w-full glass-card p-3 rounded-lg hover:shadow-glow transition-all duration-300 magnetic-hover text-sm font-medium text-card-foreground">
        <Calendar className="w-4 h-4 inline mr-2" />
        Schedule Next Learning Session
      </button>
    </div>
  </Card>
);

export const ProgressVisualization: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('space-y-6', className)}>
      <WeeklyConfidenceArc />
      
      <div className="grid md:grid-cols-2 gap-6">
        <AchievementConstellation />
        <LearningGoals />
      </div>
    </div>
  );
};