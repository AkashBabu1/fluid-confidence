import React from 'react';
import { cn } from '@/lib/utils';

export type AIPersonality = 'friend' | 'professional' | 'coach';

interface AIAvatarProps {
  personality?: AIPersonality;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16', 
  lg: 'w-24 h-24',
  hero: 'w-32 h-32'
};

const personalityClasses = {
  friend: 'avatar-friend bg-gradient-friend',
  professional: 'avatar-professional bg-gradient-professional',
  coach: 'avatar-coach bg-gradient-coach'
};

export const AIAvatar: React.FC<AIAvatarProps> = ({ 
  personality = 'friend',
  size = 'md',
  className,
  onClick
}) => {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center cursor-pointer transition-all duration-500',
        'border-2 border-white/20 shadow-glass hover:shadow-glow',
        'backdrop-blur-sm',
        sizeClasses[size],
        personalityClasses[personality],
        className
      )}
      onClick={onClick}
    >
      {/* Inner glow effect */}
      <div className="w-3/4 h-3/4 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

export const AIAvatarPersonalitySelector: React.FC<{
  selectedPersonality: AIPersonality;
  onPersonalityChange: (personality: AIPersonality) => void;
  className?: string;
}> = ({ selectedPersonality, onPersonalityChange, className }) => {
  const personalities: { key: AIPersonality; label: string; description: string }[] = [
    { key: 'friend', label: 'Friend', description: 'Warm, encouraging, supportive' },
    { key: 'professional', label: 'Professional', description: 'Structured, precise, authoritative' },
    { key: 'coach', label: 'Coach', description: 'Motivational, energetic, goal-focused' }
  ];

  return (
    <div className={cn('flex gap-4', className)}>
      {personalities.map(({ key, label, description }) => (
        <button
          key={key}
          onClick={() => onPersonalityChange(key)}
          className={cn(
            'glass-card p-4 rounded-xl transition-all duration-300',
            'hover:scale-105 magnetic-hover group',
            selectedPersonality === key && 'ring-2 ring-success shadow-glow'
          )}
        >
          <div className="flex flex-col items-center gap-3">
            <AIAvatar personality={key} size="lg" />
            <div className="text-center">
              <h3 className="font-semibold text-card-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};