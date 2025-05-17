import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ChevronDown, Mic, X, Send } from 'lucide-react';
import QuantumOrb from '../ui/QuantumOrb';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const heroHeight = heroRef.current?.clientHeight || 0;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth',
    });
  };

  const handleChatToggle = () => {
    setIsChatOpen((prev) => !prev);
    
    if (!isChatOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          text: 'Hello! I\'m your Quantum AI assistant. How can I help you with quantum computing today?',
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_DEEPSEEK_API_KEY`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant specializing in quantum computing and artificial intelligence. Provide clear, concise, and accurate information about quantum technologies.',
            },
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
            {
              role: 'user',
              content: inputMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]?.message?.content) {
        const aiMessage: Message = {
          id: Date.now().toString(),
          text: data.choices[0].message.content,
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div ref={heroRef} className="relative flex items-center justify-center overflow-hidden min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 bg-quantum-darkest">
        <div className="absolute inset-0 quantum-gradient opacity-80"></div>
        <div className="absolute inset-0 grid-background opacity-40"></div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                <span className="gradient-text">Quantum</span> Computing <br /> Meets{' '}
                <span className="gradient-text">Artificial</span> Intelligence
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
                Pioneering the next frontier of technology with revolutionary quantum solutions.
                We're building the future, one qubit at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button
                  className="quantum-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoOpen(true)}
                >
                  <span>Watch Demo</span>
                  <PlayCircle className="h-5 w-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right column: 3D Quantum Orb */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]"
            >
              <QuantumOrb />

              {/* Voice-controlled "Ask our AI" button - Only shown when chat is closed */}
              <AnimatePresence>
                {!isChatOpen && (
                  <motion.button
                    onClick={handleChatToggle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 
                    quantum-button bg-quantum-dark border border-quantum-neon/50 hover:border-quantum-accent 
                    px-5 py-3 rounded-full shadow-neon z-10"
                  >
                    <Mic className="h-5 w-5 mr-2" />
                    <span>Ask AI</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        {!isChatOpen && (
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <button
              onClick={scrollToNextSection}
              className="flex flex-col items-center text-quantum-accent hover:text-quantum-glow transition duration-300"
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Full-screen chat overlay */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            {/* Semi-transparent overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={handleChatToggle}
              className="fixed inset-0 bg-black z-20"
            />
            
            {/* Chat container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-30 p-4 md:p-8"
            >
              <div className="relative w-full max-w-4xl h-[80vh] max-h-[800px] bg-quantum-dark/95 backdrop-blur-lg rounded-xl border border-quantum-neon/30 shadow-neon-xl overflow-hidden flex flex-col">
                {/* Chat header */}
                <div className="bg-quantum-darkest/80 p-4 border-b border-quantum-neon/20 flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-quantum-accent mr-3"></div>
                    <h3 className="font-orbitron font-medium text-xl text-quantum-glow">Quantum AI Assistant</h3>
                  </div>
                  <button 
                    onClick={handleChatToggle} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Messages container */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-3xl rounded-xl px-5 py-3 ${
                          message.sender === 'user'
                            ? 'bg-quantum-accent text-white rounded-br-none'
                            : 'bg-quantum-darkest/80 text-gray-200 rounded-bl-none'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-quantum-darkest/80 text-gray-200 rounded-xl rounded-bl-none px-5 py-3 max-w-xs">
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-quantum-glow animate-bounce"></div>
                          <div className="h-2 w-2 rounded-full bg-quantum-glow animate-bounce delay-100"></div>
                          <div className="h-2 w-2 rounded-full bg-quantum-glow animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input area */}
                <div className="p-4 border-t border-quantum-neon/20 bg-quantum-darkest/70">
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask about quantum computing..."
                      className="flex-1 bg-quantum-dark/80 border border-quantum-neon/40 rounded-l-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-quantum-accent text-lg"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputMessage.trim()}
                      className="bg-quantum-accent hover:bg-quantum-accent/90 text-white px-5 py-3 rounded-r-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <>
            {/* Semi-transparent overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />
            
            {/* Video container - now smaller */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="relative w-full max-w-2xl aspect-video">
                <button 
                  onClick={() => setIsVideoOpen(false)} 
                  className="absolute -top-12 right-0 text-white hover:text-quantum-accent transition-colors z-10"
                >
                  <X className="h-8 w-8" />
                </button>
                
                {/* Updated YouTube embed with a working quantum computing video */}
                <iframe
                  className="w-full h-full rounded-xl shadow-neon-xl"
                  src="https://www.youtube.com/embed/PeY9pWJ2Mbk?autoplay=1&rel=0&modestbranding=1&color=white&vq=4k2160"
                  title="Quantum Computer in Action"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;