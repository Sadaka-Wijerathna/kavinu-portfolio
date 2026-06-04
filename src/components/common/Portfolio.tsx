import { portfolioItems } from "@/data/portfolio";
import { useMemo, useState } from "react";
import Masonry from "react-masonry-css";

export default function Portofolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Posters",
    "Branding",
    "Event Campaign",
    "Flyers",
    "Manipulation",
  ];

  const breakpointColumns = {
    default: 3,
    1199: 2,
    767: 1,
  };

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.categories.includes(activeCategory)
        );
  }, [activeCategory]);

  return (
    <section
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">My Creative Work</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Selected Portfolio Showcase
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            A curated selection of my best work in Graphic Design, Brand
            Identity, and Video Production. Each project represents a unique
            challenge solved through creative excellence.
          </p>
        </div>
        <div className="latest-portfolio-tabs-area">
          <nav>
            <ul className="nav nav-tabs">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`nav-link ${
                      activeCategory === category ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <Masonry
                breakpointCols={breakpointColumns}
                className="portfolio-masonry-grid"
                columnClassName="portfolio-masonry-col"
              >
                {filtered.map((item) => (
                  <div className="portfolio-masonry-item" key={item.id}>
                    <div
                      className={`tmp-portfolio tmponhover image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                    >
                        <div className="portfoli-card-img">
                          <img
                            loading="lazy"
                            className="w-100"
                            alt={item.title}
                            src={item.imageSrc}
                          />
                        </div>
                        <div className="portfolio-card-content-wrap">
                          <div className="content">
                            <p className="portfoli-card-para">
                              {item.tags.join(", ")}
                            </p>
                            <h3 className="portfolio-card-title">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
