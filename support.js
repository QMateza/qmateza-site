"use strict";

(function () {
  // Gate animation CSS behind JS
  document.documentElement.classList.add("js");

  // ── Mobile nav toggle ──
  const hambBtn = document.getElementById("hamb-toggle");
  const navDrop = document.getElementById("nav-drop");
  if (hambBtn && navDrop) {
    const closeMenu = () => {
      navDrop.classList.remove("open");
      hambBtn.setAttribute("aria-expanded", "false");
    };
    hambBtn.addEventListener("click", () => {
      const isOpen = navDrop.classList.toggle("open");
      hambBtn.setAttribute("aria-expanded", String(isOpen));
    });
    navDrop.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  }

  // ── Hero entrance orchestration ──
  const heroEnterEls = [...document.querySelectorAll(".hero-enter")];
  const heroVisual = document.querySelector(".hero-visual");
  requestAnimationFrame(() => {
    heroEnterEls.forEach((el, i) => {
      el.style.transitionDelay = 80 + i * 90 + "ms";
      el.classList.add("is-visible");
    });
    if (heroVisual) setTimeout(() => heroVisual.classList.add("is-visible"), 360);
  });

  // ── WhatsApp conversation demo ──
  const msgs = [
    { text: "Hi, do you build websites for small businesses?", dir: "in", time: "10:14" },
    { text: "Hi Thandi 👋 Yes — sites, WhatsApp automation, the works. What does your business do?", dir: "out", time: "10:14" },
    { text: "I run a hair salon in Soweto. Clients always message at odd hours 😅", dir: "in", time: "10:15" },
    { text: "That's exactly what I fix. A booking system that handles enquiries automatically — 24/7, no missed clients.", dir: "out", time: "10:15" },
    { text: "How much does something like that cost?", dir: "in", time: "10:16" },
    { text: "From R3 999, live in 2 weeks. Want to see an example? 👇", dir: "out", time: "10:16" },
  ];
  const delays = [600, 1700, 2900, 3900, 5100, 6000];
  let waStarted = false;
  function startWaDemo(waEl) {
    if (waStarted) return;
    waStarted = true;
    msgs.forEach(({ text, dir, time }, i) => {
      setTimeout(() => {
        const bubble = document.createElement("div");
        bubble.className = "wa-bubble wa-bubble--" + (dir === "in" ? "in" : "out");
        const p = document.createElement("p");
        p.textContent = text;
        const ts = document.createElement("span");
        ts.className = "wa-time";
        ts.textContent = time;
        bubble.appendChild(p);
        bubble.appendChild(ts);
        bubble.style.cssText = "opacity:0;transform:translateY(10px) scale(0.96)";
        waEl.appendChild(bubble);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            bubble.style.cssText =
              "transition:opacity .45s cubic-bezier(.16,1,.3,1),transform .45s cubic-bezier(.16,1,.3,1);opacity:1;transform:none";
          }),
        );
        waEl.scrollTop = waEl.scrollHeight;
      }, delays[i]);
    });
  }
  const waWrap = document.querySelector(".wa-mock-wrap");
  const waEl = document.getElementById("wa-body");
  if (waWrap && waEl) {
    const waObs = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          startWaDemo(waEl);
          waObs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    waObs.observe(waWrap);
  }

  // ── Nav active state ──
  const links = [...document.querySelectorAll("[data-navlink]")];
  const map = {};
  links.forEach((l) => {
    map[l.getAttribute("data-navlink")] = l;
  });
  const navObs = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        const a = map[e.target.id];
        if (!a) return;
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          a.classList.add("active");
        } else {
          a.classList.remove("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  ["work", "services", "how-it-works", "contact"].forEach((id) => {
    const s = document.getElementById(id);
    if (s) navObs.observe(s);
  });

  // ── Scroll reveal animations ──
  const animObs = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          animObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -48px 0px" },
  );
  document.querySelectorAll(".fade-up, .stagger").forEach((el) => animObs.observe(el));

  const footYear = document.getElementById("foot-year");
  if (footYear) footYear.textContent = new Date().getFullYear();

  // ── Contact info decode (keeps email/phone out of static HTML source to deter scraping) ──
  const emailAddr = String.fromCharCode(104, 101, 108, 108, 111, 64, 113, 109, 97, 116, 101, 122, 97, 46, 99, 111, 46, 122, 97);
  const phoneNum = String.fromCharCode(43, 50, 55, 32, 55, 51, 32, 48, 49, 56, 32, 57, 50, 55, 57);
  const emailLink = document.getElementById("email-cta-link");
  if (emailLink) emailLink.href = "mailto:" + emailAddr;
  const ctaEmail = document.getElementById("cta-email");
  if (ctaEmail) ctaEmail.textContent = emailAddr;
  const ctaPhone = document.getElementById("cta-phone");
  if (ctaPhone) ctaPhone.textContent = phoneNum;
  const footEmail = document.getElementById("foot-email");
  if (footEmail) footEmail.textContent = emailAddr;
  const footPhone = document.getElementById("foot-phone");
  if (footPhone) footPhone.textContent = phoneNum;

  // ── FAQ accordion ──
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
