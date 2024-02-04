import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop2.css";

const Desktop2 = () => {
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

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCreateItineraryTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-3">
      <img className="china-1-icon" alt="" src="/china-1@2x.png" />
      <div
        className="icon2"
        onClick={onIconContainerClick}
        data-animate-on-scroll
      >
        <div className="sosare-travels2">Sosareé Travels</div>
        <img className="image-4-icon2" alt="" src="/image-4@2x.png" />
      </div>
      <div className="desktop-3-child" onClick={onRectangleClick} />
      <div className="desktop-3-item" />
      <div className="create-itinerary" onClick={onCreateItineraryTextClick}>
        Create Itinerary
      </div>
      <div className="join-group">Join Group</div>
      <b className="our-services">Our Services</b>
    </div>
  );
};

export default Desktop2;
