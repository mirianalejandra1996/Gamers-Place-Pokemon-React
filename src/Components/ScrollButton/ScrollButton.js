import React, { useState } from "react";
import "./ScrollButton.scss";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="go-top__container">
      <div
        className={"go-top__button " + (visible ? "show" : "")}
        onClick={scrollToTop}
      >
        <p className="go-top__icon">@</p>
      </div>
    </div>
  );
}
