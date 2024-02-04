import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
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

  const onWhatWeDoClick = useCallback(() => {
    window.open("/desktop-2");
  }, []);

  const onOurServicesTextClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onGetItineraryTextClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onGetItineraryText1Click = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onGetItineraryText2Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  const onGetItineraryText3Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className="main-page">
      <img className="image-5-icon" alt="" src="/image-5@2x.png" />
      <div className="icon4" data-animate-on-scroll>
        <div className="sosare-travels4">Sosareé Travels</div>
        <img className="image-4-icon4" alt="" src="/image-4@2x.png" />
      </div>
      <div className="navbar" data-animate-on-scroll>
        <div className="navbar-child" />
        <div className="what-we-do" onClick={onWhatWeDoClick}>
          what we do
        </div>
        <div className="our-services1" onClick={onOurServicesTextClick}>
          our services
        </div>
        <div className="about-us1" onClick={onAboutUsTextClick}>
          about us
        </div>
      </div>
      <div className="antelope-canyon1" data-animate-on-scroll>
        <img
          className="antelope-canyon-child"
          alt=""
          src="/rectangle-4@2x.png"
        />
        <div className="antelope-canyon-item" />
        <b className="b">1</b>
        <b className="antelope-canyon2" />
        <div className="united-states">united states</div>
      </div>
      <div className="padang-noah" data-animate-on-scroll>
        <img
          className="antelope-canyon-child"
          alt=""
          src="/rectangle-5@2x.png"
        />
        <div className="padang-noah-item" />
        <b className="b1">2</b>
        <b className="padang-noah1" />
        <div className="nigeria">Greece</div>
      </div>
      <div className="image-7" data-animate-on-scroll>
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <div className="image-7-child" />
        <b className="b2">3</b>
        <b className="padang-noah2" />
        <div className="nigeria1">Australia</div>
      </div>
      <div className="component-1" data-animate-on-scroll>
        <img className="component-1-child" alt="" src="/rectangle-7@2x.png" />
        <div className="ellipse-parent">
          <div className="group-child" />
          <div className="div">4</div>
        </div>
        <div className="hang-son-doong-parent">
          <b className="hang-son-doong">Hang Son doong</b>
          <div className="vietnam">vietnam</div>
        </div>
      </div>
      <div className="main-page-child" onClick={onRectangleClick} />
      <div className="get-itinerary" onClick={onGetItineraryTextClick}>
        Get Itinerary
      </div>
      <div className="main-page-item" onClick={onRectangle1Click} />
      <div className="get-itinerary1" onClick={onGetItineraryText1Click}>
        Get Itinerary
      </div>
      <div className="main-page-inner" onClick={onRectangle2Click} />
      <div className="get-itinerary2" onClick={onGetItineraryText2Click}>
        Get Itinerary
      </div>
      <div className="main-page-child1" onClick={onRectangle3Click} />
      <div className="get-itinerary3" onClick={onGetItineraryText3Click}>
        Get Itinerary
      </div>
    </div>
  );
};

export default MainPage;
