import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import highway from "/src/assets/highway.jpeg";
import "./App.css"; 

function App() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar /> 
      <main> 
        {/* /Homepage: Hero Image/Text/ */}
        <section className="hero-container">
          <div className="hero-centered--image">
            <img id="hero-highway" src={highway} alt="Highway Motorcycle Riders" />
          </div>
          <div className="hero-centered--text">
            <h1>RaceRev Motorsport</h1>
          </div>
        </section>

        <section className="top-paragraph">
          <p>At <i>RaceRev Motorsport</i>, we're passionate about motorcycles, and even more passionate about the people who ride them. 
            Whether you're gearing up for your very first ride or you've been riding for years, we're here to support every step of your journey.
            We support riders of all levels, from complete beginners to seasoned motorcycle enthusiasts, in finding the right gear and equipment. 
            Our mission is to ensure every rider feels confident, safe, and well-equipped on the road.</p>
        </section>

        {/* /Homepage: Card Slider/ */}
        <section className="card-slider"> 
          <div className="card-lists">
            <Slider {...settings}>
            {data.map((d) => (
              <div className="card-style">
                <div className="card-image--background">
                  <img src ={d.img} alt="Motorcycle Card Images" className="cards-image"/>
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
        <section className="bottom-paragraph">
          <p id="bottom-paragraph--primarily">As a trusted destination for motorcycle lovers, we offer a carefully curated selection of motorcycles, protective gear, and riding accessories. 
            From top-quality helmets and armored jackets to gloves, boots, and performance riding gear, we provide the essential equipment you need to ride with confidence,
            without compromising on style or safety.</p>
          <p id="bottom-paragraph--secondary">In addition to gear, we also offer a range of motorcycles, catering to different riding styles and experience levels. 
            Whether you're looking for your first bike, a powerful upgrade, or a dependable daily ride, our team is here to help you find the perfect fit.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Card Slider Data
const data =[
  {
    title: "Gear Up With Confidence",
    img: "src/assets/card-image1.webp",
    message: "We've got you covered with beginner friendly gear, expert guidance, and honest advice, so you can hit the road with confidence from day one.",
  },
  {
    title: "Ride Like a Pro",
    img: "src/assets/card-image2.jpeg",
    message: "Explore high-performance gear, advanced accessories, and the latest tech to elevate your experience. Designed for riders who demand the best.",
  },
  {
    title: "Safety First, Always",
    img: "src/assets/card-image3.jpeg",
    message: "From helmets to protective wear, we provide only trusted, road-tested gear to help you ride smart, and stay safe.",
  },
  {
    title: "Comfort, purpose, and expression",
    img: "src/assets/card-image4.jpeg",
    message: "Great gear should do more than protect, it should fit well and reflect your style. We help you find the perfect balance of comfort, function, and personal flair.",
  },
  {
    title: "The Right Gear for Every Road",
    img: "src/assets/card-image5.jpeg",
    message: "Whether you're commuting, touring, or hitting the trails, we connect you with gear tailored to your ride, your bike, and your goals.",
  }
]
export default App;