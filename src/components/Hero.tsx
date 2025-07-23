import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero-section px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-up">
          <h1 className="text-oversized text-luxury mb-6">
            ELEVATE
            <br />
            YOUR
            <br />
            GLOW
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light tracking-wide">
            Discover luxury hair and skin care products crafted with the finest ingredients 
            for those who demand excellence in their beauty routine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/hair-care">
              <Button className="btn-luxury">
                Explore Hair Care
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link to="/skin-care">
              <Button variant="outline" className="btn-outline-luxury">
                Discover Skin Care
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-muted-foreground"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;