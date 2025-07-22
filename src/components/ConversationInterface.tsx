import React, { useState, useRef } from 'react';
import { AIAvatar, AIPersonality } from './AIAvatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Mic, Send, Volume2, Heart, Lightbulb } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  aiPersonality?: AIPersonality;
}

interface ConversationInterfaceProps {
  personality?: AIPersonality;
  className?: string;
}

const MessageBubble: React.FC<{
  message: Message;
  isUser: boolean;
  personality?: AIPersonality;
}> = ({ message, isUser, personality }) => (
  <div className={cn(
    'flex gap-4 mb-6 animate-fade-in-up',
    isUser && 'flex-row-reverse'
  )}>
    {!isUser && (
      <AIAvatar personality={personality} size="md" className="mt-1" />
    )}
    
    <div className={cn(
      'flex flex-col max-w-[80%]',
      isUser && 'items-end'
    )}>
      <Card className={cn(
        'p-4 rounded-2xl shadow-glass',
        isUser ? 'bg-gradient-success text-success-foreground' : 'glass-card'
      )}>
        <p className="leading-relaxed">{message.content}</p>
      </Card>
      <span className="text-xs text-muted-foreground mt-1 px-2">
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
    </div>
    
    {isUser && (
      <div className="w-12 h-12 rounded-full bg-gradient-champagne flex items-center justify-center mt-1">
        <span className="text-lg font-semibold text-primary">S</span>
      </div>
    )}
  </div>
);

const SuggestionChip: React.FC<{
  text: string;
  icon?: React.ElementType;
  onClick: () => void;
}> = ({ text, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="glass-card px-4 py-2 rounded-full text-sm hover:shadow-glow transition-all duration-300 hover:scale-105 magnetic-hover"
  >
    <div className="flex items-center gap-2">
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </div>
  </button>
);

const VoiceActivationButton: React.FC<{
  isListening: boolean;
  onToggle: () => void;
}> = ({ isListening, onToggle }) => (
  <button
    onClick={onToggle}
    className={cn(
      'w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300',
      'border-2 border-success/30 hover:border-success',
      isListening 
        ? 'bg-success text-success-foreground animate-confidence-pulse' 
        : 'glass-card hover:shadow-glow magnetic-hover'
    )}
  >
    <Mic className="w-6 h-6" />
  </button>
);

export const ConversationInterface: React.FC<ConversationInterfaceProps> = ({ 
  personality = 'friend',
  className 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "I noticed you used 'articulate' beautifully just now. That word carries such power when you own it like that.",
      sender: 'ai',
      timestamp: new Date(Date.now() - 60000),
      aiPersonality: personality
    },
    {
      id: '2', 
      content: "Really? I wasn't sure if I used it correctly.",
      sender: 'user',
      timestamp: new Date(Date.now() - 30000)
    },
    {
      id: '3',
      content: "Absolutely. Your intuition guided you perfectly. Let's explore more words that feel natural to you...",
      sender: 'ai', 
      timestamp: new Date(),
      aiPersonality: personality
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "That's a wonderful observation! I can see your confidence growing with each exchange. What would you like to explore next?",
        sender: 'ai',
        timestamp: new Date(),
        aiPersonality: personality
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <div className={cn('flex flex-col h-screen bg-background', className)}>
      {/* Header */}
      <Card className="glass-card p-4 m-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AIAvatar personality={personality} size="lg" className="animate-avatar-breathe" />
            <div>
              <h2 className="text-xl font-semibold text-hero">AI Companion</h2>
              <p className="text-sm text-muted-foreground capitalize">{personality} mode</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="hover-glow">
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isUser={message.sender === 'user'}
              personality={message.aiPersonality || personality}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      <div className="px-4 mb-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            <SuggestionChip 
              text="Could you help me express this better?"
              icon={Lightbulb}
              onClick={() => handleSuggestionClick("Could you help me express this better?")}
            />
            <SuggestionChip 
              text="I'm feeling more confident today"
              icon={Heart}
              onClick={() => handleSuggestionClick("I'm feeling more confident today")}
            />
            <SuggestionChip 
              text="Let's practice job interview scenarios"
              onClick={() => handleSuggestionClick("Let's practice job interview scenarios")}
            />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <Card className="glass-card m-4 p-4 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-4">
            <VoiceActivationButton 
              isListening={isListening}
              onToggle={() => setIsListening(!isListening)}
            />
            
            <div className="flex-1">
              <div className="glass-card rounded-xl border focus-within:ring-2 focus-within:ring-success transition-all duration-300">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Breathe. Speak. Shine. ✨"
                  className="w-full p-4 bg-transparent resize-none focus:outline-none text-card-foreground placeholder:text-muted-foreground"
                  rows={2}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
              </div>
            </div>
            
            <Button 
              variant="hero"
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="w-12 h-12"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};