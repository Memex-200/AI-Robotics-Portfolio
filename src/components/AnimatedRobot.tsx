import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';

interface AnimatedRobotProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  delay?: number;
}

export const AnimatedRobot: React.FC<AnimatedRobotProps> = ({ 
  size = 'md', 
  color = 'text-blue-500',
  delay = 0 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const newX = prev.x + direction.x * 2;
        const newY = prev.y + direction.y * 1;
        
        // Bounce off edges
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;
        
        if (newX > 100 || newX < -100) newDirectionX *= -1;
        if (newY > 50 || newY < -50) newDirectionY *= -1;
        
        setDirection({ x: newDirectionX, y: newDirectionY });
        
        return { x: newX, y: newY };
      });
    }, 100 + delay);

    return () => clearInterval(interval);
  }, [direction, delay]);

  return (
    <div
      className={`absolute ${sizeClasses[size]} ${color} transition-all duration-100 ease-linear animate-pulse`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        animationDelay: `${delay}ms`
      }}
    >
      <Bot className="w-full h-full drop-shadow-lg" />
    </div>
  );
};