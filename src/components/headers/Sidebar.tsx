import { useModalUI } from "@/context/ModalUIContext";

export default function Sidebar() {
  const { openModals, closeModal } = useModalUI();
  return (
    <div className="d-none d-xl-block">
      <div
        className={`tmp-sidebar-area tmp_side_bar ${
          openModals.sidebar ? "tmp_side_bar_open" : ""
        }`}
      >
        <div className="inner">
          <div className="top-area">
            <a href="index.html" className="logo">
              <img
                loading="lazy"
                className="logo-dark"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/logo/kp.png"
                width={121}
                height={41}
              />
              <img
                loading="lazy"
                className="logo-white"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/logo/kp.png"
                width={121}
                height={40}
              />
            </a>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={() => closeModal("sidebar")}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="index.html">
                <img
                  loading="lazy"
                  alt="personal-logo"
                  src="/assets/images/banner/ft.webp"
                  width={340}
                  height={196}
                />
              </a>
            </div>
            <h5 className="title mt--30">
              Kavinu Pasandul — Founder & Owner of Frame Toque Digital Media.
            </h5>
            <p className="disc">
              Frame Toque Digital Media crafts fast websites, bold graphics, and cinematic
              videos that make your brand look serious and unforgettable. We specialize
              in turning vision into high-end digital experiences.
            </p>
            <div className="short-contact-area">
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Call Now</span>
                  <a href="tel:+94785907963" className="number">
                    +94 70 190 1461
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>Mail Us</span>
                  <a href="mailto:pasandulk12@gmail.com" className="number">
                    pasandulk12@gmail.com
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>My Address</span>
                  <span className="number">Piliyandala, Sri Lanka</span>
                </div>
              </div>
              {/* single contact information end */}
            </div>
            {/* social area start */}
            <div className="social-wrapper mt--20">
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
      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={() => closeModal("sidebar")}
        href="#"
      />
    </div>
  );
}
