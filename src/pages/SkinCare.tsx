import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { skinCareProducts } from '@/data/products';

const SkinCare = () => {
  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-luxury text-5xl font-light mb-8 tracking-wide">
              SKIN CARE
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Achieve radiant, healthy skin with our expertly formulated collection of 
              serums, creams, and treatments designed for every skin type and concern.
            </p>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/6] bg-muted mb-16 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&h=600&fit=crop"
              alt="Skin care collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skinCareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-20 text-center">
            <h2 className="text-luxury text-3xl font-light mb-12 tracking-wide">
              WHY CHOOSE OUR SKIN CARE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-luxury text-xl font-medium mb-4">
                  ADVANCED FORMULATIONS
                </h3>
                <p className="text-muted-foreground">
                  Cutting-edge ingredients like vitamin C, hyaluronic acid, and peptides for maximum efficacy.
                </p>
              </div>
              <div>
                <h3 className="text-luxury text-xl font-medium mb-4">
                  ALL SKIN TYPES
                </h3>
                <p className="text-muted-foreground">
                  Carefully formulated to work with sensitive, dry, oily, and combination skin types.
                </p>
              </div>
              <div>
                <h3 className="text-luxury text-xl font-medium mb-4">
                  VISIBLE RESULTS
                </h3>
                <p className="text-muted-foreground">
                  See improvements in skin texture, hydration, and radiance within weeks of consistent use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SkinCare;