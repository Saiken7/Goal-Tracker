export const scrollToHero = () => {
  document.getElementById("hero-scroll")?.scrollIntoView({ behavior: "smooth" })
}

export const scrollToAbout = () => {
  document.getElementById("about-scroll")?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToFeatures = () => {
  document.getElementById("features-scroll")?.scrollIntoView({ behavior: "smooth" });
};

