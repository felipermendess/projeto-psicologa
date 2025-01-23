(() => {
  "use strict";
  !(function () {
    function t(t) {
      t.preventDefault();
      var e = t.currentTarget.getAttribute("href");
      document
        .querySelector(e)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
    document.querySelectorAll('a[href^="#"]').forEach(function (e) {
      e.addEventListener("click", t);
    });
  })(),
    (function () {
      var t = document.querySelectorAll(".js-scroll"),
        e = 0.8 * window.innerHeight;
      function n() {
        t.forEach(function (t) {
          t.getBoundingClientRect().top - e < 0 && t.classList.add("ativo");
        });
      }
      t.length && (n(), window.addEventListener("scroll", n));
    })();
})();
