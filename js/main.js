(() => {
  const OFFER = "https://martell891.online/6Qcky8Fc?sub_id_1=favbet.space";
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const clock = document.getElementById("boardClock");

  document.querySelectorAll(".js-offer").forEach((el) => {
    if (el.tagName === "A") {
      el.setAttribute("href", OFFER);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer sponsored");
    }
  });

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const onScroll = () => {
    if (header) header.classList.toggle("is-solid", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (clock) {
    const tick = () => {
      const d = new Date();
      clock.textContent = d.toTimeString().slice(0, 8);
    };
    tick();
    setInterval(tick, 1000);
  }

  const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (motionOk) {
    const tiltables = document.querySelectorAll(".stage-visual, .promo-fx");
    const setTilt = (el, x, y) => {
      el.style.setProperty("--tilt-x", y.toFixed(2) + "deg");
      el.style.setProperty("--tilt-y", x.toFixed(2) + "deg");
    };
    tiltables.forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
        setTilt(el, x, y);
      });
      el.addEventListener("pointerleave", () => setTilt(el, 0, 0));
    });
  }
})();
