import "./Products.css"; // Make sure to import the CSS

const spices = [
  {
    name: "Turmeric",
    img: "https://t3.ftcdn.net/jpg/01/82/27/42/360_F_182274289_RvpPTYZmC3n98ZXuH85d31XBfyEhk6b1.jpg"
  },
  {
    name: "Red Chilli",
    img: "https://images.pexels.com/photos/9185580/pexels-photo-9185580.jpeg"
  },
  {
    name: "Kal Uppu",
    img: "https://images.pexels.com/photos/2624397/pexels-photo-2624397.jpeg"
  },
  {
    name: "Cumin Seeds",
    img: "https://images.pexels.com/photos/4198113/pexels-photo-4198113.jpeg"
  },
  {
    name: "Shunti",
    img: "https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg"
  },
  {
    name: "Lavanga",
    img: "https://images.pexels.com/photos/247113/anise-spices-seeds-sprockets-247113.jpeg"
  },
  {
    name: "Menshinu Kaalu",
    img: "https://images.pexels.com/photos/39069/pepper-pepper-mill-pfefferkorn-pepper-ground-39069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Wholesale Products</h2>
      <div className="products-grid">
        {spices.map((spice) => (
          <div key={spice.name} className="product-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={spice.img} alt={spice.name} />
                <h3>{spice.name}</h3>
              </div>
              <div className="card-back">
                <h3>{spice.name}</h3>
                <p>Pure and fresh spices directly from the source.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
