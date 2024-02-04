import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onIconContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-2" data-animate-on-scroll>
      <div className="desktop-2-child" />
      <div className="desktop-2-item" />
      <div className="desktop-2-inner" />
      <div className="rectangle-div" />
      <div className="desktop-2-child1" />
      <div className="tailored-experiences-we-container">
        <span className="tailored-experiences">Tailored Experiences</span>
        <span className="we-understand-that-every-trave">
          <span className="span">{`: `}</span>
          <span>
            We understand that every traveler is unique. That's why our team of
            expert travel enthusiasts crafts personalized itineraries, ensuring
            that each journey is perfectly suited to your preferences and
            desires.
          </span>
        </span>
      </div>
      <div className="global-destinations-from-container">
        <span className="tailored-experiences">{`Global Destinations: `}</span>
        <span className="we-understand-that-every-trave">
          From the mesmerizing beaches of Bali to the historic streets of Rome,
          Sosareé Travels opens the door to an array of global destinations.
          Explore the world with confidence, knowing that every detail has been
          meticulously planned.
        </span>
      </div>
      <div className="unmatched-hospitality-immerse-container">
        <span className="tailored-experiences">{` Unmatched Hospitality: `}</span>
        <span className="we-understand-that-every-trave">
          Immerse yourself in a world of luxury and comfort. Sosareé Travels
          partners with top-notch accommodations and amenities, ensuring that
          your stay is as delightful as your exploration.
        </span>
      </div>
      <div className="adventure-awaits-for-container">
        <span className="tailored-experiences">{`  Adventure Awaits: `}</span>
        <span className="we-understand-that-every-trave">
          For the thrill-seekers, we offer curated adventure packages that
          promise an adrenaline rush. Whether it's trekking through lush
          landscapes or diving into vibrant underwater worlds, we've got your
          adventure covered.
        </span>
      </div>
      <div className="exclusive-events-elevate-container">
        <span className="tailored-experiences">{`Exclusive Events:  `}</span>
        <span className="we-understand-that-every-trave">
           Elevate your travel experience with our exclusive events and
          gatherings. From cultural festivals to private gatherings, Sosareé
          Travels turns your trip into a celebration of life.
        </span>
      </div>
      <img className="image-8-icon" alt="" src="/image-8@2x.png" />
      <div className="what-do-we">What do We do</div>
      <div
        className="icon1"
        onClick={onIconContainerClick}
        data-animate-on-scroll
      >
        <div className="sosare-travels1">Sosareé Travels</div>
        <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
      </div>
    </div>
  );
};

export default Desktop1;
