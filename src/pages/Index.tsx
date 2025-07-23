import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-luxury text-4xl font-light mb-4 tracking-wide">
              FEATURED PRODUCTS
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Curated selections from our most loved hair and skin care essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center text-luxury font-medium tracking-wide hover:text-muted-foreground transition-colors duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Hair Care */}
            <div className="group cursor-pointer">
              <Link to="/hair-care">
                <div className="aspect-[4/3] bg-background mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=600&fit=crop"
                    alt="Hair Care"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-luxury text-3xl font-light mb-4 tracking-wide">
                  HAIR CARE
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Transform your hair with our collection of premium shampoos, conditioners, 
                  and treatments designed to nourish and strengthen every strand.
                </p>
                <div className="flex items-center text-luxury font-medium">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>

            {/* Skin Care */}
            <div className="group cursor-pointer">
              <Link to="/skin-care">
                <div className="aspect-[4/3] bg-background mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop"
                    alt="Skin Care"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-luxury text-3xl font-light mb-4 tracking-wide">
                  SKIN CARE
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Achieve radiant, healthy skin with our expertly formulated serums, 
                  creams, and treatments for every skin type and concern.
                </p>
                <div className="flex items-center text-luxury font-medium">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-luxury text-4xl font-light mb-6 tracking-wide">
            STAY CONNECTED
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Be the first to know about new products, exclusive offers, and beauty tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="input-luxury flex-1"
            />
            <button className="btn-luxury px-8 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
