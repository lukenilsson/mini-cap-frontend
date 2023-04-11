function Header() {
  return (
    <header>
      <a href="#">Home</a> |<a href="#products-index"> All Products</a> |
      <a href="#products-new"> New Products</a>
      <h1>Nostalgia Toy Store</h1>
    </header>
  );
}

function ProductsNew() {
  return (
    <div id="products-new">
      <h2>New Product</h2>
      <form>
        <div>
          Name:{" "}
          <input type="text" id="Name" name="Name" placeholder="Willy Wonka" />
        </div>
        <div>
          Price: <input type="text" id="Name" name="Name" placeholder="$$$" />
        </div>
        <div>
          Description:{" "}
          <input type="text" id="Name" name="Name" placeholder="Super Rad!" />
        </div>
      </form>
    </div>
  );
}

function ProductsIndex() {}

function Footer() {}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
