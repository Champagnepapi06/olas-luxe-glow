import React from 'react';
import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-luxury text-5xl font-light mb-8 tracking-wide">
              ABOUT OLA'S PLACE
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A sanctuary of luxury beauty where quality meets innovation, 
              and every product is crafted with meticulous attention to detail.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-luxury text-3xl font-light mb-6 tracking-wide">
                  OUR STORY
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Founded with a vision to revolutionize the beauty industry, Ola's Place 
                  emerged from a simple belief: everyone deserves access to luxury hair and 
                  skin care products that deliver exceptional results.
                </p>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our founder, inspired by years of struggling to find products that truly 
                  worked, embarked on a journey to create a curated collection of premium 
                  beauty essentials that combine cutting-edge science with natural ingredients.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Today, we continue to uphold our commitment to excellence, sourcing only 
                  the finest ingredients and partnering with renowned laboratories to bring 
                  you products that elevate your daily beauty routine.
                </p>
              </div>
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=750&fit=crop"
                  alt="Beauty products in elegant setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-luxury text-3xl font-light mb-12 text-center tracking-wide">
              OUR VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-luxury text-xl font-medium mb-4 tracking-wide">
                  QUALITY
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never compromise on quality. Every product undergoes rigorous testing 
                  to ensure it meets our exacting standards for efficacy and safety.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-luxury text-xl font-medium mb-4 tracking-wide">
                  INNOVATION
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stay at the forefront of beauty science, continuously researching and 
                  developing new formulations to address evolving skincare and haircare needs.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-luxury text-xl font-medium mb-4 tracking-wide">
                  TRUST
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building lasting relationships with our customers through transparency, 
                  authenticity, and exceptional service is at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center bg-muted p-16 rounded-lg">
            <h2 className="text-luxury text-3xl font-light mb-6 tracking-wide">
              OUR MISSION
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              To empower individuals to feel confident and beautiful in their own skin by 
              providing access to luxury beauty products that deliver transformative results 
              while honoring the principles of quality, sustainability, and ethical sourcing.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;