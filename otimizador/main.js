(() => {
  "use strict";
  !(function () {
    function t(t) {
      t.preventDefault();
      const e = t.currentTarget.getAttribute("href");
      document
        .querySelector(e)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    document.querySelectorAll('a[href^="#"]').forEach(e => {
      e.addEventListener("click", t);
    });
  })(),
    (function () {
      const t = document.querySelectorAll(".js-scroll"),
        e = 0.8 * window.innerHeight;
      function n() {
        t.forEach(t => {
          t.getBoundingClientRect().top - e < 0 && t.classList.add("ativo");
        });
      }
      t.length && (n(), window.addEventListener("scroll", n));
    })();
})();
