import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Bot, Sparkles } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const LiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm QuantumAI. How can I assist you with our quantum computing solutions today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const demoResponses: string[] = [
        "Our quantum processors currently achieve coherence times of up to 300 microseconds, allowing complex algorithms to run effectively.",
        "QuantumLeap's hybrid cloud solution lets you leverage quantum acceleration without replacing your existing infrastructure.",
        "Our quantum encryption uses the principles of quantum entanglement to create keys that cannot be intercepted without detection.",
        "The QuantumAI platform can process optimization problems with up to 10,000 variables, far beyond classical computing capabilities."
      ];
      
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
      
      const aiMessage: Message = {
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
    }, 1500);
  };
  
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };
  
  const chatVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6
      }
    }
  };

  return (
    <div className="section-container" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading">
          <span className="gradient-text">Live</span> Demo
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Experience the power of our quantum AI assistant. Ask questions about our technology and see how our quantum systems respond in real-time.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <div className="quantum-card p-0 overflow-hidden border border-quantum-purple/30">
          {/* Header */}
          <div className="bg-quantum-blue/30 p-4 border-b border-quantum-purple/30">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-quantum-purple/30 flex items-center justify-center mr-3">
                <Bot className="h-6 w-6 text-quantum-accent" />
              </div>
              <div>
                <h3 className="font-orbitron font-medium text-white">QuantumAI Assistant</h3>
                <div className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-xs text-gray-400">Online | Quantum-Enhanced</span>
                </div>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-quantum-accent/20 text-quantum-accent">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Live Demo
                </span>
              </div>
            </div>
          </div>
          
          {/* Chat area */}
          <motion.div 
            variants={chatVariants}
            className="h-96 overflow-y-auto p-4 bg-quantum-darkest/80"
          >
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-quantum-purple/40 rounded-tr-none' 
                        : 'bg-quantum-dark/70 rounded-tl-none border border-quantum-purple/30'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      <div className="h-6 w-6 rounded-full bg-quantum-blue/30 flex items-center justify-center mr-2">
                        {message.sender === 'user' ? (
                          <User className="h-3 w-3 text-white" />
                        ) : (
                          <Bot className="h-3 w-3 text-quantum-accent" />
                        )}
                      </div>
                      <span className="text-xs text-gray-400">
                        {message.sender === 'user' ? 'You' : 'QuantumAI'}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-white">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-quantum-dark/70 rounded-tl-none border border-quantum-purple/30">
                    <div className="flex items-center mb-1">
                      <div className="h-6 w-6 rounded-full bg-quantum-blue/30 flex items-center justify-center mr-2">
                        <Bot className="h-3 w-3 text-quantum-accent" />
                      </div>
                      <span className="text-xs text-gray-400">QuantumAI</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-quantum-accent animate-pulse"></div>
                      <div className="h-2 w-2 rounded-full bg-quantum-accent animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 w-2 rounded-full bg-quantum-accent animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
          
          {/* Input area */}
          <div className="p-4 border-t border-quantum-purple/30 bg-quantum-dark/40">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our quantum technology..."
                className="flex-grow py-2 px-4 bg-quantum-darkest/50 border border-quantum-purple/30 rounded-l-lg text-white 
                focus:outline-none focus:border-quantum-accent transition-colors duration-300"
              />
              <button
                type="submit"
                className="py-2 px-4 bg-quantum-purple hover:bg-quantum-purple/90 text-white rounded-r-lg 
                transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isProcessing || input.trim() === ''}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              This is a demo simulation. Try asking about our quantum computing solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveDemo;