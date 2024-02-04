import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop6.css";

const Desktop6 = () => {
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
    <div className="desktop-7">
      <img className="image-49-icon" alt="" src="/image-49@2x.png" />
      <div
        className="icon7"
        onClick={onIconContainerClick}
        data-animate-on-scroll
      >
        <div className="sosare-travels7">Sosareé Travels</div>
        <img className="image-4-icon7" alt="" src="/image-4@2x.png" />
      </div>
      <b className="vietnam1">Vietnam</b>
      <b className="halong-bay">Halong Bay</b>
      <img className="image-52-icon" alt="" src="/image-52@2x.png" />
      <img className="image-53-icon" alt="" src="/image-53@2x.png" />
      <img className="image-54-icon" alt="" src="/image-54@2x.png" />
      <img className="image-55-icon" alt="" src="/image-55@2x.png" />
      <img className="image-56-icon" alt="" src="/image-56@2x.png" />
      <img className="image-57-icon" alt="" src="/image-57@2x.png" />
      <img className="image-58-icon" alt="" src="/image-58@2x.png" />
      <img className="image-59-icon" alt="" src="/image-59@2x.png" />
      <img className="image-60-icon" alt="" src="/image-60@2x.png" />
      <img className="image-61-icon" alt="" src="/image-61@2x.png" />
      <img className="image-62-icon" alt="" src="/image-62@2x.png" />
      <img className="image-63-icon" alt="" src="/image-63@2x.png" />
    </div>
  );
};

export default Desktop6;
