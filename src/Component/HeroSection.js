import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-section-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum
            ab animi voluptatem voluptate sit excepturi voluptatibus eius
            veritatis quisquam.
          </p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
