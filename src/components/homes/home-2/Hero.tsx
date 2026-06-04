import TyperComponent from "@/components/common/TyperComponent";

export default function Hero() {
  return (
    <div className="rpp-banner-two-area">
      <div className="container">
        <div className="banner-two-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <div className="main-img">
                  <img
                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                    alt="banner-img"
                    src="/assets/images/banner/banner-user-image-two.png"
                    width={444}
                    height={711}
                  />

                  <div className="benner-two-bg-red-img">
                    <img
                      alt="red-img"
                      src="/assets/images/banner/banner-user-image-two-red-bg.png"
                      width={630}
                      height={285}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1 mt--100">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  I am
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Kavinu Pasandul, a Creative <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                          "Graphic Designer.",
                          "Brand Identity Designer.",
                          "Visual Designer.",
                          "Freelancer.",
                          "Illustrator.",
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-title-split tmp-fade-in animation-order-3">
                  I craft compelling <span>visual identities</span> and design
                  experiences that tell your brand's story. From bold
                  <span> brand design</span> to stunning print and digital
                  graphics — I bring ideas to life with purpose and precision.
                </p>
                <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <a
                    className="tmp-btn hover-icon-reverse radius-round"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">More About Us</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                </div>
                <div className="find-me-on tmp-scroll-trigger tmp-fade-in animation-order-5">
                  <h2 className="find-me-on-title">Find me on</h2>
                  <div className="social-link banner">
                    <a href="#">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://wa.me/94785907963" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp" />
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-shape-two">
        <img
          alt=""
          src="/assets/images/banner/banner-shape-two.png"
          width={778}
          height={900}
        />
      </div>
    </div>
  );
}
