import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, clearCart, decrementItem, incrementItem, removeItem, selectCartMap } from './cartSlice';
import { selectProducts } from './productsSlice';
import './App.css';

const money = (value) => `R${value.toFixed(2)}`;

const getRoute = () => {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'products' || hash === 'cart') return hash;
  return 'home';
};

const navigateTo = (route) => {
  window.location.hash = route === 'home' ? '' : route;
};

function App() {
  const [route, setRoute] = useState(getRoute());
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartMap = useSelector(selectCartMap);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const groupedProducts = useMemo(() => {
    return products.reduce((groups, product) => {
      if (!groups[product.category]) groups[product.category] = [];
      groups[product.category].push(product);
      return groups;
    }, {});
  }, [products]);

  const cartItems = useMemo(() => {
    return products
      .filter((product) => cartMap[product.id])
      .map((product) => ({
        ...product,
        quantity: cartMap[product.id],
        subtotal: cartMap[product.id] * product.price,
      }));
  }, [products, cartMap]);

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + item.quantity, 0), [cartItems]);
  const cartTotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.subtotal, 0), [cartItems]);

  return (
    <div className="site-shell">
      <div className="flying-pixie" aria-hidden="true">🧚‍♀️</div>
      <header className="topbar">
        <button className="brand-button" onClick={() => navigateTo('home')}>
          🌻 Pixie Petal Patch 🌻
        </button>

        <nav className="topnav" aria-label="Primary navigation">
          <a href="#">🏠 Home</a>
          <a href="#products">🌸 Shop Plants</a>
          <a href="#cart">🛒 Cart</a>
        </nav>

        <button className="cart-chip" onClick={() => navigateTo('cart')} aria-label={`Open cart with ${cartCount} items`}>
          <span>🛒</span>
          <strong>{cartCount}</strong>
        </button>
      </header>

      <div className="page-content">
        {route === 'home' ? (
          <LandingPage onStart={() => navigateTo('products')} />
        ) : route === 'products' ? (
          <ProductPage
            groupedProducts={groupedProducts}
            cartMap={cartMap}
            onAdd={(id) => dispatch(addToCart(id))}
            onGoToCart={() => navigateTo('cart')}
            cartCount={cartCount}
            cartTotal={cartTotal}
          />
        ) : (
          <CartPage
            items={cartItems}
            cartCount={cartCount}
            cartTotal={cartTotal}
            onContinue={() => navigateTo('products')}
            onIncrement={(id) => dispatch(incrementItem(id))}
            onDecrement={(id) => dispatch(decrementItem(id))}
            onRemove={(id) => dispatch(removeItem(id))}
            onClear={() => dispatch(clearCart())}
          />
        )}
      </div>

      <footer className="site-footer">
        <p>Made by Quantum Cupcake</p>
      </footer>
    </div>
  );
}

function LandingPage({ onStart }) {
  return (
    <main className="landing-page">
      <section className="hero-card">
        <p className="eyebrow">🌻 Sunny houseplant boutique 🌻</p>
        <h1>🌻 Pixie Petal Patch 🌿</h1>
        <p className="hero-copy">
          Welcome to our sunlit garden where every plant basks in golden warmth! 
          Discover 40 beautiful houseplants that bring the sunshine indoors. 
          Browse by category, fill your basket, and bring the warmth of a sunflower field to your home! 🌻🌿
        </p>
        <div className="hero-points">
          <span>🌻 40 sunny plants</span>
          <span>🌿 4 green categories</span>
          <span>🛒 Sunshine cart</span>
        </div>
        <button className="primary-button" onClick={onStart}>
          🌻 Begin Your Garden Journey 🌿
        </button>
      </section>
    </main>
  );
}

function PlantModal({ plant, onClose, onAdd, cartMap }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <div className="modal-image-container">
          <img src={plant.realImage} alt={plant.name} className="modal-image" />
        </div>
        <div className="modal-info">
          <h2>{plant.name}</h2>
          <p className="modal-category">{plant.category}</p>
          <p className="modal-description">{plant.description}</p>
          <div className="modal-footer">
            <strong className="modal-price">{money(plant.price)}</strong>
            <button className="secondary-button" onClick={() => { onAdd(plant.id); }}>
              {cartMap[plant.id] ? `Add another (${cartMap[plant.id]})` : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductPage({ groupedProducts, cartMap, onAdd, onGoToCart, cartCount, cartTotal }) {
  const totalProducts = Object.values(groupedProducts).reduce((sum, group) => sum + group.length, 0);
  const [realPhotoMap, setRealPhotoMap] = useState({});

  const toggleCardPhoto = (plantId) => {
    setRealPhotoMap((prev) => ({
      ...prev,
      [plantId]: !prev[plantId],
    }));
  };

  return (
    <main className="page-wrap">
      <section className="page-banner">
        <div>
          <p className="eyebrow">Product listing page</p>
          <h2>Choose your favorite houseplants</h2>
          <p>
            Browse all {totalProducts} plants below. Click a plant card image to switch between artwork and a real garden-style photo.
          </p>
        </div>
        <div className="summary-pill">
          <span>{cartCount} item{cartCount === 1 ? '' : 's'} in cart</span>
          <strong>{money(cartTotal)}</strong>
          <button className="secondary-button" onClick={onGoToCart}>View Cart</button>
        </div>
      </section>

      {Object.entries(groupedProducts).map(([category, items]) => (
        <section key={category} className="category-section">
          <div className="category-heading">
            <div>
              <p className="eyebrow">Category</p>
              <h3>{category}</h3>
            </div>
            <span className="category-count">{items.length} plants</span>
          </div>

          <div className="product-grid">
            {items.map((item) => {
              const showRealPhoto = Boolean(realPhotoMap[item.id]);

              return (
                <article key={item.id} className="product-card">
                  <button className="card-image-toggle" onClick={() => toggleCardPhoto(item.id)} aria-label={`Toggle real photo for ${item.name}`}>
                    <img
                      src={showRealPhoto ? item.realImage : item.image}
                      alt={item.name}
                      className={showRealPhoto ? 'is-real-photo' : ''}
                      onError={(e) => {
                        e.currentTarget.src = item.image;
                        e.currentTarget.classList.remove('is-real-photo');
                        setRealPhotoMap((prev) => ({
                          ...prev,
                          [item.id]: false,
                        }));
                      }}
                    />
                    <span className="photo-badge">{showRealPhoto ? 'Real photo' : 'Styled preview'}</span>
                  </button>
                  <div className="product-copy">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="product-footer">
                    <strong>{money(item.price)}</strong>
                    <button className="secondary-button" onClick={() => onAdd(item.id)}>
                      {cartMap[item.id] ? `Add another (${cartMap[item.id]})` : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

function CartPage({ items, cartCount, cartTotal, onContinue, onIncrement, onDecrement, onRemove, onClear }) {
  return (
    <main className="page-wrap">
      <section className="page-banner">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h2>Your plant basket</h2>
          <p>Adjust quantities, remove plants, and review your total before you check out.</p>
        </div>
        <div className="summary-pill">
          <span>Total items</span>
          <strong>{cartCount}</strong>
          <span>{money(cartTotal)}</span>
        </div>
      </section>

      <section className="cart-panel">
        {items.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty right now.</p>
            <button className="primary-button" onClick={onContinue}>Go to Product Listing</button>
          </div>
        ) : (
          <>
            <div className="cart-actions">
              <button className="secondary-button" onClick={onContinue}>Continue Shopping</button>
              <button className="secondary-button" onClick={onClear}>Clear Cart</button>
            </div>

            <div className="cart-list">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-copy">
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <p>Unit price: {money(item.price)}</p>
                  </div>
                  <div className="quantity-controls" aria-label={`Adjust quantity for ${item.name}`}>
                    <button onClick={() => onDecrement(item.id)}>−</button>
                    <strong>{item.quantity}</strong>
                    <button onClick={() => onIncrement(item.id)}>+</button>
                  </div>
                  <div className="cart-totals">
                    <strong>{money(item.subtotal)}</strong>
                    <button className="text-button" onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </article>
              ))}
            </div>

            <div className="checkout-summary">
              <div>
                <span>Total plants</span>
                <strong>{cartCount}</strong>
              </div>
              <div>
                <span>Total cost</span>
                <strong>{money(cartTotal)}</strong>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
