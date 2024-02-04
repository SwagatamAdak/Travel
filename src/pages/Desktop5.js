import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop5.css";

const Desktop5 = () => {
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
    <div className="desktop-6">
      <img className="image-36-icon" alt="" src="/image-36@2x.png" />
      <div
        className="icon6"
        onClick={onIconContainerClick}
        data-animate-on-scroll
      >
        <div className="sosare-travels6">Sosareé Travels</div>
        <img className="image-4-icon6" alt="" src="/image-4@2x.png" />
      </div>
      <b className="australia">Australia</b>
      <b className="sydney">Sydney</b>
      <img className="image-37-icon" alt="" src="/image-37@2x.png" />
      <img className="image-38-icon" alt="" src="/image-38@2x.png" />
      <img className="image-39-icon" alt="" src="/image-39@2x.png" />
      <img className="image-40-icon" alt="" src="/image-40@2x.png" />
      <img className="image-41-icon" alt="" src="/image-41@2x.png" />
      <img className="image-42-icon" alt="" src="/image-42@2x.png" />
      <img className="image-43-icon" alt="" src="/image-43@2x.png" />
      <img className="image-44-icon" alt="" src="/image-44@2x.png" />
      <img className="image-45-icon" alt="" src="/image-45@2x.png" />
      <img className="image-46-icon" alt="" src="/image-46@2x.png" />
      <img className="image-47-icon" alt="" src="/image-47@2x.png" />
      <img className="image-48-icon" alt="" src="/image-48@2x.png" />
    </div>
  );
};

export default Desktop5;
