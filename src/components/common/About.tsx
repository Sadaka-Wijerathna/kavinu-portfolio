import OdometerComponent from "./OdometerComponent";
export default function About({ parentClass = "about-us-area" }) {
  return (
    <section className={parentClass} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h2 className="counter card-title">
                  <OdometerComponent max={6} /> +
                </h2>
                <p className="card-para">years of experience</p>
              </div>
              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-lock" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">Graphic Design</h3>
                  <p className="card-para">250+ Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle">About Me</span>
                </div>
                <h2
                  className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2"
                  style={{ fontSize: "clamp(26px, 4.5vw, 42px)" }}
                >
                  <span className="d-block">I Work With Companies & Brands</span>
                  <span className="d-block">
                    Who Want More Eyes On Their Brands
                  </span>
                </h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                  Helping brands elevate their visual presence through expert
                  Graphic Design, Brand Identity, and high-end Video production.
                  As a Full Stack Creator, I blend Photography and Videography
                  with professional Editing to tell stories that capture
                  attention and drive real engagement.
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <div className="card-head">
                      <div className="logo-img">
                        <i className="fa-sharp fa-light fa-bezier-curve" />
                      </div>
                      <h3 className="card-title">Brand Identity</h3>
                    </div>
                    <p className="card-para">
                      Crafting unique visual identities that reflect the core
                      values of every brand I work with.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                    <div className="card-head">
                      <div className="logo-img">
                        <i className="fa-sharp fa-light fa-video" />
                      </div>
                      <h3 className="card-title">Video & Photography</h3>
                    </div>
                    <p className="card-para">
                      Capturing and editing cinematic visuals that tell powerful
                      stories and engage audiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
