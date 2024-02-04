import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop = () => {
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
    <div className="desktop-1" data-animate-on-scroll>
      <img className="image-2-icon" alt="" src="/Taj.png"/>
      <div className="explore-the-wonders">
        Explore the wonders of this world
      </div>
      <div className="about-us">About us</div>
      <div className="desktop-1-child" />
      <div className="desktop-1-item" />
      <div className="welcome-to-sosare-container">
        <p className="welcome-to-sosare">
          Welcome to Sosareé Travels, your gateway to unforgettable journeys and
          unparalleled adventures!
        </p>
        <p className="welcome-to-sosare">
          At Sosareé Travels, we believe that every trip should be a
          celebration, an elevated experience that goes beyond just traveling.
        </p>
        <p className="welcome-to-sosare">
          Our mission is to curate seamless and joyous travel experiences that
          leave a lasting imprint on your heart.
        </p>
      </div>
      <div className="icon" onClick={onIconContainerClick}>
        <div className="sosare-travels">Sosareé Travels</div>
        <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      </div>
    </div>
  );
};

export default Desktop;
