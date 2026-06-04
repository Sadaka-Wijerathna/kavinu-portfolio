import { useEffect, useRef } from "react";
import OnepageNavMobile from "./OnepageNavMobile";
import { useModalUI } from "@/context/ModalUIContext";

export default function MobileMenuOnepage() {
  const menuRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { openModals, closeModal } = useModalUI();
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;

      if (menuRef.current && menuRef.current.contains(target)) {
        if (innerRef.current && innerRef.current.contains(target)) {
          // Click inside innerRef — do nothing
        } else {
          closeModal("mobileMenu2");
        }
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [closeModal]);

  return (
    <div className="d-block d-xl-none">
      <div
        ref={menuRef}
        className={`tmp-popup-mobile-menu mobile-menu-onepage ${
          openModals.mobileMenu2 ? "active" : ""
        }`}
      >
        <div ref={innerRef} className="inner">
          <div className="header-top">
            <div className="logo">
              <a href="index.html" className="logo-area">
                <img
                  loading="lazy"
                  className="logo-dark"
                  alt="Frame Toque Digital Media Logo"
                  src="/assets/images/logo/kp.png"
                  width={121}
                  height={41}
                />
                <img
                  loading="lazy"
                  className="logo-white"
                  alt="Frame Toque Digital Media Logo"
                  src="/assets/images/logo/kp.png"
                  width={121}
                  height={40}
                />
              </a>
            </div>
            <div className="close-menu">
              <button
                className="close-button tmp-round-action-btn"
                onClick={() => closeModal("mobileMenu2")}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <OnepageNavMobile />
          <div className="social-wrapper mt--40">
            <span className="subtitle">find with me</span>
            <div className="social-link">
              <a href="https://www.instagram.com/skingod.frrr/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/kavinudigitalworks" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a href="https://wa.me/94785907963" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a href="https://www.facebook.com/PodiSmoka/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </div>
          </div>
          {/* social area end */}
        </div>
      </div>
    </div>
  );
}
