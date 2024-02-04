import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop4.css";

const Desktop4 = () => {
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
    <div className="desktop-5">
      <img className="image-22-icon" alt="" src="/image-22@2x.png" />
      <div
        className="icon5"
        onClick={onIconContainerClick}
        data-animate-on-scroll
      >
        <div className="sosare-travels5">Sosareé Travels</div>
        <img className="image-4-icon5" alt="" src="/image-4@2x.png" />
      </div>
      <b className="greece">Greece</b>
      <div className="santorini">Santorini</div>
      <img className="image-23-icon" alt="" src="/image-23@2x.png" />
      <img className="image-24-icon" alt="" src="/image-24@2x.png" />
      <img className="image-25-icon" alt="" src="/image-25@2x.png" />
      <img className="image-26-icon" alt="" src="/image-26@2x.png" />
      <img className="image-27-icon" alt="" src="/image-27@2x.png" />
      <img className="image-28-icon" alt="" src="/image-28@2x.png" />
      <img className="image-29-icon" alt="" src="/image-29@2x.png" />
      <img className="image-30-icon" alt="" src="/image-30@2x.png" />
      <img className="image-31-icon" alt="" src="/image-31@2x.png" />
      <img className="image-32-icon" alt="" src="/image-32@2x.png" />
      <img className="image-33-icon" alt="" src="/image-33@2x.png" />
      <img className="image-34-icon" alt="" src="/image-34@2x.png" />
    </div>
  );
};

export default Desktop4;
