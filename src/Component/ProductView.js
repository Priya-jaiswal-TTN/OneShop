import "./ProductView.css";
import ProductImage from "../Assets/p1.1.jpg";

const ProductView = () => {
  return (
    <section class="Product-view">
      <div class="container">
        <div class="row">
          <div class="col col-lg-6">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="false"
            >
              <div class="carousel-indicators">
                <img
                  src={ProductImage}
                  alt=""
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <img
                  src={ProductImage}
                  alt=""
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                />
                <img
                  src={ProductImage}
                  alt=""
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                />
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={ProductImage} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={ProductImage} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={ProductImage} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col col-lg-6 product-details">
            <h2>Product Title</h2>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <span>5 Reviews</span>
            </div>
            <div class="other-details">
              <p>$1232</p>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              nobis ratione enim numquam, saepe consequuntur.
            </p>
            <button class="btn btn-dark">ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
