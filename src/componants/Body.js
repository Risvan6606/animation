import React, { useState, useEffect } from "react";
import "../style/Body.css";

function Body() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const sections = [
    {
      tags: [
        "Webflow Development",
        "UI/UX Design",
        "Webflow Training",
        "Graphic Design",
      ],
      heading: "Hacien",
      image:
        "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411cf4f8251ab33a7d442b_HACIEN%20Thumbnail.webp",
      description:
        "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles.",
    },
    {
      tags: [
        "Splash Screens",
        "Illustrations",
        "Graphic Design",
        "Lottie Animations",
      ],
      heading: "Mobilleo",
      image:
        "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d0755e48e6b5ec08e9a_Mobilio%20Thumbnail.webp",
      description:
        "Mobilleo is a SaaS solution making it easy for organisations to manage global business travel for their employees. The team at Mobilleo approached Phunk to provide a range of design and illustration services, building on their existing brand, for use across their website and app.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / documentHeight) * 100;
      setScrollPercentage(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="body-container">
      <div className="content">
        <div className="main-heading">
          <h1 className="title">
            Dive into the <span className="highlight">work.</span>
          </h1>
          <p className="description">
            As creatives ourselves, we know that what you really want to see is
            the work we’ve actually put live. Here’s a showcase of some of our
            recent projects, across a range of sectors.
          </p>
        </div>
        {sections.map((item, index) => (
          <div className="section" key={index} id={`section-${index}`}>
            <div className="section-img">
              <div
                className="project-image old-image"
                style={{
                  backgroundImage: `url(${
                    index > 0 ? sections[index - 1].image : item.image
                  })`,
                  clipPath: `inset(0 0 ${scrollPercentage}% 0)`, 
                }}
              ></div>
              <div
                className="project-image new-image"
                style={{
                  backgroundImage: `url(${item.image})`,
                  clipPath: `inset(${100 - scrollPercentage}% 0 0 0)`,
                }}
              ></div>
            </div>
            <div className="project-details">
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="project-title">{item.heading}</h2>
              <p className="project-description">{item.description}</p>
              <a href="#" className="case-study">
                See full case study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
