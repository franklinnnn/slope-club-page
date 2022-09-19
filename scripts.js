const sr = ScrollReveal({
  distance: "20px",
  duration: 1000,
});

sr.reveal(".main", { origin: "bottom" });

sr.reveal(".header__image", {
  scale: 0.65,
  rotate: { z: 46 },
  delay: 200,
});
sr.reveal(".header__name", { origin: "left", delay: 100 });
sr.reveal(".header__subtitle", { origin: "right", delay: 100 });

sr.reveal(".sns__link-logo .bx", { rotate: { z: 46 } });
sr.reveal(".sns__link-name", { origin: "rght" });

sr.reveal(".button", { origin: "top" });
