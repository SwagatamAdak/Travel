import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop3.css";

const Desktop3 = () => {
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
    <div className="desktop-4">
      <img className="image-9-icon" alt="" src="/image-9@2x.png" />
      <div
        className="icon3"
        onClick={onIconContainerClick}
        data-animate-on-scroll
      >
        <div className="sosare-travels3">Sosareé Travels</div>
        <img className="image-4-icon3" alt="" src="/image-4@2x.png" />
      </div>
      <div className="united-states-of">United States of America</div>
      <div className="antelope-canyon">Antelope Canyon</div>
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon" alt="" src="/image-12@2x.png" />
      <img className="image-13-icon" alt="" src="/image-13@2x.png" />
      <img className="image-14-icon" alt="" src="/image-14@2x.png" />
      <img className="image-15-icon" alt="" src="/image-15@2x.png" />
      <img className="image-16-icon" alt="" src="/image-16@2x.png" />
      <img className="image-17-icon" alt="" src="/image-17@2x.png" />
      <img className="image-18-icon" alt="" src="/image-18@2x.png" />
      <img className="image-19-icon" alt="" src="/image-19@2x.png" />
      <img className="image-20-icon" alt="" src="/image-20@2x.png" />
      <img className="image-21-icon" alt="" src="/image-21@2x.png" />
    </div>
  );
};

export default Desktop3;
