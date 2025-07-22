import React, { useState } from 'react';
import { AIAvatar, AIPersonality, AIAvatarPersonalitySelector } from './AIAvatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Mic, MessageCircle, Target, Sparkles, Flame, Clock } from 'lucide-react';
import aiHeroAvatar from '@/assets/ai-hero-avatar.jpg';

interface PremiumDashboardProps {
  className?: string;
}

const QuickAction = ({ 
  icon: Icon, 
  label, 
  description, 
  onClick,
  variant = 'default'
}: {
  icon: React.ElementType;
  label: string;
  description: string;
  onClick: () => void;
  variant?: 'default' | 'primary';
}) => (
  <button
    onClick={onClick}
    className={cn(
      'glass-card p-6 rounded-xl text-left group transition-all duration-300',
      'hover:scale-105 magnetic-hover hover-glow',
      variant === 'primary' && 'bg-gradient-hero text-primary-foreground border-0'
    )}
  >
    <Icon className="w-8 h-8 mb-3 text-success group-hover:animate-confidence-pulse" />
    <h3 className="font-semibold text-lg mb-2">{label}</h3>
    <p className="text-sm opacity-80">{description}</p>
  </button>
);

const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  trend 
}: { 
  icon: React.ElementType; 
  value: string; 
  label: string; 
  trend?: 'up' | 'down' | 'neutral';
}) => (
  <div className="glass-card p-6 rounded-xl hover:shadow-elegant transition-all duration-300">
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-5 h-5 text-success" />
          <span className="text-2xl font-bold text-hero">{value}</span>
        </div>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
      {trend === 'up' && (
        <div className="text-success text-xs font-medium bg-success/10 px-2 py-1 rounded-full">
          +12%
        </div>
      )}
    </div>
  </div>
);

export const PremiumDashboard: React.FC<PremiumDashboardProps> = ({ className }) => {
  const [selectedPersonality, setSelectedPersonality] = useState<AIPersonality>('friend');
  const [userName] = useState('Sarah');

  const handleQuickAction = (action: string) => {
    console.log(`Quick action: ${action}`);
    // Add navigation or modal logic here
  };

  return (
    <div className={cn('min-h-screen bg-background p-6', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-hero mb-4">
            ✨ Welcome, {userName}
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to discover your voice today?
          </p>
        </div>

        {/* AI Conversation Hero Section */}
        <Card className="glass-card p-8 mb-12 text-center animate-scale-in">
          <div className="flex flex-col items-center gap-6">
            {/* Hero Avatar with Image */}
            <div className="relative">
              <img 
                src={aiHeroAvatar} 
                alt="AI Avatar"
                className="w-48 h-48 object-cover rounded-3xl shadow-glass"
              />
              <div className="absolute inset-0 bg-gradient-hero/20 rounded-3xl"></div>
              <AIAvatar 
                personality={selectedPersonality} 
                size="hero"
                className="absolute bottom-4 right-4"
              />
            </div>
            
            {/* AI Message */}
            <div className="glass-card p-6 rounded-2xl max-w-2xl">
              <p className="text-lg text-card-foreground leading-relaxed">
                🎭 <span className="text-celebration font-medium">
                  "I'm feeling particularly insightful today. What conversation adventure shall we embark on together?"
                </span>
              </p>
            </div>
          </div>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            icon={Clock}
            value="47"
            label="minutes of brilliance remaining"
            trend="up"
          />
          <StatCard 
            icon={Flame}
            value="12"
            label="day confidence streak"
            trend="up"
          />
          <StatCard 
            icon={Sparkles}
            value="8"
            label="breakthrough moments this week"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <QuickAction
            icon={Sparkles}
            label="Begin Transformation"
            description="Start your personalized learning journey with AI guidance"
            onClick={() => handleQuickAction('transform')}
            variant="primary"
          />
          <QuickAction
            icon={MessageCircle}
            label="Quick Spark"
            description="Jump into a 5-minute conversation boost"
            onClick={() => handleQuickAction('spark')}
          />
          <QuickAction
            icon={Target}
            label="Focus Session"
            description="Work on specific skills with targeted practice"
            onClick={() => handleQuickAction('focus')}
          />
        </div>

        {/* AI Personality Selector */}
        <Card className="glass-card p-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-hero">
            Choose Your AI Companion
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Each personality offers a unique learning experience tailored to your goals
          </p>
          <AIAvatarPersonalitySelector
            selectedPersonality={selectedPersonality}
            onPersonalityChange={setSelectedPersonality}
          />
        </Card>
      </div>
    </div>
  );
};