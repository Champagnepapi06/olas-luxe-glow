import React from 'react';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <Layout>
        <div className="py-20 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-8" />
            <h1 className="text-luxury text-4xl font-light mb-4 tracking-wide">
              YOUR CART IS EMPTY
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Discover our luxury collection and find your next beauty essential.
            </p>
            <Link to="/">
              <Button className="btn-luxury">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-luxury text-4xl font-light tracking-wide">
              SHOPPING CART
            </h1>
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-sm tracking-wide uppercase"
            >
              Clear Cart
            </Button>
          </div>

          <div className="space-y-8">
            {state.items.map((item) => (
              <div key={item.id} className="border-b border-border pb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full md:w-48 aspect-square bg-muted overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-luxury text-xl font-light mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                          {item.category} care
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium uppercase tracking-wide">
                          Quantity
                        </span>
                        <div className="flex items-center border border-border">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-4 py-2 text-sm">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-luxury text-xl font-light">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${item.price.toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-12 border-t border-border pt-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-muted-foreground">
                  {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in cart
                </p>
              </div>
              <div className="text-right">
                <div className="text-luxury text-3xl font-light">
                  ${state.total.toFixed(2)}
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Total
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <Button className="btn-luxury flex-1">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;