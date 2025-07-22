import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, Share2, Trophy, Sparkles } from 'lucide-react';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  achievement: {
    title: string;
    description: string;
    type: 'breakthrough' | 'milestone' | 'streak';
  };
  className?: string;
}

const CelebrationParticles: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-celebration-burst opacity-70"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      >
        <Sparkles className="w-4 h-4 text-success" />
      </div>
    ))}
  </div>
);

const getAchievementGradient = (type: string) => {
  switch (type) {
    case 'breakthrough': return 'bg-gradient-success';
    case 'milestone': return 'bg-gradient-professional';
    case 'streak': return 'bg-gradient-friend';
    default: return 'bg-gradient-hero';
  }
};

const getAchievementEmoji = (type: string) => {
  switch (type) {
    case 'breakthrough': return '🚀';
    case 'milestone': return '🏆';
    case 'streak': return '🔥';
    default: return '✨';
  }
};

export const CelebrationModal: React.FC<CelebrationModalProps> = ({
  isOpen,
  onClose,
  achievement,
  className
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in-up">
      <CelebrationParticles />
      
      <Card className={cn(
        'glass-card p-8 max-w-md w-full text-center relative',
        'animate-celebration-burst shadow-celebration border-2 border-success/20',
        getAchievementGradient(achievement.type),
        className
      )}>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:bg-white/20"
        >
          <X className="w-4 h-4" />
        </Button>

        <div className="mb-6">
          <div className="text-6xl mb-4 animate-liquid-float">
            {getAchievementEmoji(achievement.type)}
          </div>
          <Trophy className="w-16 h-16 mx-auto text-white animate-confidence-pulse mb-4" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">
          Incredible Achievement!
        </h2>
        
        <h3 className="text-xl font-semibold text-white/90 mb-3">
          {achievement.title}
        </h3>
        
        <p className="text-white/80 leading-relaxed mb-8">
          {achievement.description}
        </p>

        <div className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => {
              // Share functionality
              console.log('Sharing achievement...');
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Your Success
          </Button>
          
          <Button 
            onClick={onClose}
            className="w-full bg-white text-primary font-semibold hover:bg-white/90"
          >
            Continue Learning Journey
          </Button>
        </div>

        <div className="mt-6 text-xs text-white/60">
          You're building incredible momentum! 🌟
        </div>
      </Card>
    </div>
  );
};