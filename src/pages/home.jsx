import React from "react";
import { Link } from "react-router-dom";
import Navbar from "/src/components/navbar.jsx";
import Footer from "/src/components/footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import motorcycle from "/src/assets/motorcycle.jpg";
import "/src/styles/Home.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1, // default for mobile

    responsive: [
      {
        breakpoint: 2560, // screens <2560px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440, // screens <1440px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // screens <1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // screens <768px
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />
      <main>
        {/* /Homepage: Hero Image/Text/ */}
        <section className="hero-container">
          <div className="hero-centered--image">
            <img src={motorcycle} alt="Motorcycle Riders" />
          </div>
          <div className="hero-left--text">
            <h1>Royal Enfield Classic 350 - Limited Edition</h1>
            <p>Experience the thrill of the throttle with our latest models</p>
            <button className="nav_button">
              <Link to="/product">Explore Models</Link>
            </button>
          </div>
        </section>

        {/* /Homepage: Card Slider/ */}
        <section className="card-slider">
          <div className="card-lists">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="card-style">
                  <div className="card-image--background">
                    <img
                      src={d.img}
                      alt="Motorcycle Card Images"
                      className="cards-image"
                    />
                  </div>

                  <div className="card-paragraph">
                    <p className="card-title">{d.title}</p>
                    <p className="card-message">{d.message}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* /Homepage: Bottom Paragraph/ */}
        <section className="paragraph-content">
          <p id="top-paragraph">
            At <i>HorizonRide</i>, we're passionate about motorcycles, and even
            more passionate about the people who ride them. We support riders of
            all levels, from complete beginners to seasoned motorcycle
            enthusiasts, in finding the right gear and equipment. Our mission is
            to ensure every rider feels confident, safe, and well-equipped on
            the road.
          </p>
          <p id="bottom-paragraph">
            From top-quality helmets and armored jackets to gloves, boots, and
            performance riding gear, we provide the essential equipment you need
            to ride with confidence, without compromising on style or safety.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Card Slider Data
const data = [
  {
    title: "Gear Up With Confidence",
    img: "src/assets/card-image1.webp",
    message:
      "We've got you covered with beginner friendly gear, expert guidance, and honest advice, so you can hit the road with confidence from day one.",
  },
  {
    title: "Ride Like a Pro",
    img: "src/assets/card-image2.jpeg",
    message:
      "Explore high-performance gear, advanced accessories, and the latest tech to elevate your experience. Designed for riders who demand the best.",
  },
  {
    title: "Safety First, Always",
    img: "src/assets/card-image3.jpeg",
    message:
      "From helmets to protective wear, we provide only trusted, road-tested gear to help you ride smart, and stay safe.",
  },
  {
    title: "Comfort, purpose, and expression",
    img: "src/assets/card-image4.jpeg",
    message:
      "Great gear should do more than protect, it should fit well and reflect your style. We help you find the perfect balance of comfort, function, and personal flair.",
  },
  {
    title: "The Right Gear for Every Road",
    img: "src/assets/card-image5.jpeg",
    message:
      "Whether you're commuting, touring, or hitting the trails, we connect you with gear tailored to your ride, your bike, and your goals.",
  },
];
