import React from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { hairCareProducts } from '@/data/products';

const HairCare = () => {
  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-luxury text-5xl font-light mb-8 tracking-wide">
              HAIR CARE
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your hair with our premium collection of shampoos, conditioners, 
              serums, and treatments designed to nourish, strengthen, and revitalize every strand.
            </p>
          </div>

          {/* Hero Image */}
          <div className="aspect-[16/6] bg-muted mb-16 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1600&h=600&fit=crop"
              alt="Hair care collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairCareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-20 text-center">
            <h2 className="text-luxury text-3xl font-light mb-12 tracking-wide">
              WHY CHOOSE OUR HAIR CARE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-luxury text-xl font-medium mb-4">
                  SULFATE-FREE FORMULAS
                </h3>
                <p className="text-muted-foreground">
                  Gentle cleansing without stripping natural oils, perfect for all hair types including color-treated hair.
                </p>
              </div>
              <div>
                <h3 className="text-luxury text-xl font-medium mb-4">
                  NATURAL INGREDIENTS
                </h3>
                <p className="text-muted-foreground">
                  Enriched with argan oil, keratin, and botanical extracts for maximum nourishment and protection.
                </p>
              </div>
              <div>
                <h3 className="text-luxury text-xl font-medium mb-4">
                  CLINICALLY TESTED
                </h3>
                <p className="text-muted-foreground">
                  All products are dermatologist-tested and proven to improve hair health and appearance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HairCare;