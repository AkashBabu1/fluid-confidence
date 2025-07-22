import React, { useState } from 'react';
import { PremiumDashboard } from '@/components/PremiumDashboard';
import { ConversationInterface } from '@/components/ConversationInterface';
import { ProgressVisualization } from '@/components/ProgressVisualization';
import { CelebrationModal } from '@/components/CelebrationModal';
import { AIPersonality } from '@/components/AIAvatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, BarChart3, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

type ViewMode = 'dashboard' | 'conversation' | 'progress';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [aiPersonality, setAiPersonality] = useState<AIPersonality>('friend');
  const [showCelebration, setShowCelebration] = useState(false);

  const mockAchievement = {
    title: 'Conversation Catalyst',
    description: 'You\'ve successfully initiated 5 meaningful conversations this week! Your confidence is radiating through every interaction.',
    type: 'milestone' as const
  };

  const NavigationBar = () => (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="glass-card px-6 py-3 rounded-full shadow-elegant">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView('dashboard')}
            className={cn(
              'rounded-full transition-all duration-300',
              currentView === 'dashboard' 
                ? 'bg-gradient-hero text-primary-foreground shadow-glow' 
                : 'hover:bg-success/10 text-muted-foreground hover:text-success'
            )}
          >
            <Home className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView('conversation')}
            className={cn(
              'rounded-full transition-all duration-300',
              currentView === 'conversation' 
                ? 'bg-gradient-hero text-primary-foreground shadow-glow' 
                : 'hover:bg-success/10 text-muted-foreground hover:text-success'
            )}
          >
            <MessageCircle className="w-4 h-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView('progress')}
            className={cn(
              'rounded-full transition-all duration-300',
              currentView === 'progress' 
                ? 'bg-gradient-hero text-primary-foreground shadow-glow' 
                : 'hover:bg-success/10 text-muted-foreground hover:text-success'
            )}
          >
            <BarChart3 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );

  const ProgressView = () => (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-hero mb-4">
            📊 Your Growth Story
          </h1>
          <p className="text-xl text-muted-foreground">
            Every step forward is a victory worth celebrating
          </p>
        </div>
        
        <ProgressVisualization />
        
        <div className="text-center mt-12">
          <Button 
            variant="hero"
            onClick={() => setShowCelebration(true)}
            className="px-8 py-3 rounded-full"
          >
            🎉 Celebrate Recent Achievement
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {/* Main Content */}
      {currentView === 'dashboard' && <PremiumDashboard />}
      {currentView === 'conversation' && <ConversationInterface personality={aiPersonality} />}
      {currentView === 'progress' && <ProgressView />}
      
      {/* Navigation */}
      <NavigationBar />
      
      {/* Celebration Modal */}
      <CelebrationModal 
        isOpen={showCelebration}
        onClose={() => setShowCelebration(false)}
        achievement={mockAchievement}
      />
    </div>
  );
};

export default Index;
