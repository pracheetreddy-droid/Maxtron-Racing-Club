/* =========================================================================
   MAXTRON RACING CLUB — SITE LOGIC
   Renders SITE_CONTENT (js/content.js) into the DOM and wires up
   navigation, accordion, counters, and small interactions.
   ========================================================================= */
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const C = window.SITE_CONTENT;

  function el(tag, opts = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(opts).forEach(([k, v]) => {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    children.forEach((c) => c && node.appendChild(c));
    return node;
  }

  /* ---------------- Brand ---------------- */
  $("#brandName").textContent = C.brandName;
  $("#brandSub").textContent = C.brandSub;
  $("#badgeName").textContent = `${C.brandName} ${C.brandSub}`;
  $("#badgeSub").textContent = C.hero.tagline;

  /* ---------------- Nav ---------------- */
  const navLinks = $("#navLinks");
  C.nav.forEach((item, i) => {
    const li = el("li");
    const a = el("a", { href: item.href, text: item.label });
    if (i === 0) a.classList.add("active");
    li.appendChild(a);
    navLinks.appendChild(li);
  });

  /* ---------------- Hero ---------------- */
  $("#heroEyebrow").textContent = C.hero.eyebrow;
  $("#heroTitle").innerHTML = `${C.brandName}<br><span>${C.brandSub}</span>`;
  $("#heroTagline").textContent = C.hero.tagline;
  $("#heroDesc").textContent = C.hero.description;

  /* ---------------- Stats ---------------- */
  const statsGrid = $("#statsGrid");
  C.stats.forEach((s) => {
    statsGrid.appendChild(
      el("div", { class: "stat-item" }, [
        el("div", { class: "stat-num", "data-target": s.number, text: "0" }),
        el("div", { class: "stat-label", text: s.label })
      ])
    );
  });

  /* ---------------- Moto statement + Domains ---------------- */
  $("#motoStatement").textContent = C.moto.statement;
  $("#motoLead").textContent = C.moto.lead;
  const domainsGrid = $("#domainsGrid");
  C.domains.forEach((d) => {
    domainsGrid.appendChild(
      el("div", { class: "domain-card" }, [
        el("div", { class: "domain-icon", text: d.icon }),
        el("h3", { text: d.title }),
        el("p", { text: d.desc })
      ])
    );
  });

  /* ---------------- About ---------------- */
  $("#aboutTitle").textContent = C.about.title;
  $("#aboutBody1").textContent = C.about.body1;
  $("#aboutBody2").textContent = C.about.body2;
  $("#missionText").textContent = C.about.missionText;
  $("#visionText").textContent = C.about.visionText;

  /* ---------------- Project ---------------- */
  $("#projectTitle").textContent = C.project.title;
  $("#projectDesc").textContent = C.project.description;
  const featuresList = $("#projectFeatures");
  C.project.features.forEach((f) => featuresList.appendChild(el("li", { text: f })));
  const pillarsGrid = $("#pillarsGrid");
  C.project.pillars.forEach((p) => {
    pillarsGrid.appendChild(
      el("div", { class: "pillar-card" }, [
        el("div", { class: "pillar-icon", text: p.icon }),
        el("h4", { text: p.title }),
        el("p", { text: p.desc })
      ])
    );
  });

  /* ---------------- Roadmap ---------------- */
  $("#roadmapTitle").textContent = C.roadmap.title;
  $("#roadmapLead").textContent = C.roadmap.lead;
  const track = $("#roadmapTrack");
  C.roadmap.stages.forEach((s) => {
    track.appendChild(
      el("div", { class: "roadmap-card" }, [
        el("div", { class: "rc-year", text: s.year }),
        el("h3", { text: s.competition }),
        el("p", { text: s.objective })
      ])
    );
  });

  /* ---------------- Technical Specs ---------------- */
  $("#specsLead").textContent = C.specsLead;
  $("#specsNote").textContent = C.specsNote;
  const specsBody = $("#specsTable tbody");
  C.technicalSpecs.forEach(([cat, val]) => {
    specsBody.appendChild(
      el("tr", {}, [el("td", { text: cat }), el("td", { text: val })])
    );
  });

  /* ---------------- Regulations accordion ---------------- */
  $("#regsLead").textContent = C.regsLead;
  const regsWrap = $("#regsAccordion");
  C.regulations.forEach((section, idx) => {
    const item = el("div", { class: "reg-item" });
    const q = el("button", { class: "reg-q", type: "button" }, [
      el("span", { text: section.title }),
      el("span", { class: "plus", text: "+" })
    ]);
    const a = el("div", { class: "reg-a" }, [
      el("div", { class: "reg-a-inner" }, [
        el(
          "ul",
          {},
          section.points.map((pt) => el("li", { text: pt }))
        )
      ])
    ]);
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      $$(".reg-item", regsWrap).forEach((other) => {
        other.classList.remove("open");
        $(".reg-a", other).style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
    item.appendChild(q);
    item.appendChild(a);
    regsWrap.appendChild(item);
    if (idx === 0) q.click();
  });

  /* ---------------- Budget ---------------- */
  $("#budgetLead").textContent = C.budgetLead;
  $("#budgetTotal").textContent = C.budgetTotal;
  $("#budgetAsk").textContent = C.budgetAsk;
  $("#budgetExternal").textContent = C.budgetExternal;
  const budgetBars = $("#budgetBars");
  C.budgetCategories.forEach((b) => {
    const fill = el("div", { class: "bar-fill" });
    budgetBars.appendChild(
      el("div", { class: "bar-row" }, [
        el("div", { class: "bar-label", text: b.name }),
        el("div", { class: "bar-track" }, [fill]),
        el("div", { class: "bar-amt", text: "₹" + b.amount.toLocaleString("en-IN") })
      ])
    );
    requestAnimationFrame(() => {
      setTimeout(() => (fill.style.width = b.percent + "%"), 100);
    });
  });

  /* ---------------- Sponsors ---------------- */
  const sponsorsRow = $("#sponsorsRow");
  C.sponsors.forEach((s) => {
    sponsorsRow.appendChild(el("div", { class: "sponsor-slot", text: s.name }));
  });

  /* ---------------- Team ---------------- */
  const teamGrid = $("#teamGrid");
  C.team.forEach((t) => {
    const initials = t.name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    teamGrid.appendChild(
      el("div", { class: "team-card" }, [
        el("div", { class: "team-avatar", text: initials }),
        el("h4", { text: t.name }),
        el("span", { text: t.role })
      ])
    );
  });

  /* ---------------- CTA banner ---------------- */
  $("#ctaTitle").textContent = C.cta.title;
  $("#ctaDesc").textContent = C.cta.description;

  /* ---------------- Footer ---------------- */
  $("#footerAbout").textContent = C.footer.about;
  const footerLinks = $("#footerLinks");
  C.footer.quickLinks.forEach((l) => {
    footerLinks.appendChild(el("li", {}, [el("a", { href: l.href, text: l.label })]));
  });
  const footerContact = $("#footerContact");
  footerContact.appendChild(el("li", { text: "📍 " + C.footer.address }));
  footerContact.appendChild(
    el("li", {}, [el("a", { href: "mailto:" + C.footer.email, text: "✉ " + C.footer.email })])
  );
  $("#footerCopy").textContent = C.footer.copyright;

  /* ---------------- Interactions ---------------- */

  // Preloader
  window.addEventListener("load", () => document.body.classList.add("loaded"));

  // Sticky header state
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const navToggle = $("#navToggle");
  const mainNav = $("#mainNav");
  navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
  $$("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => mainNav.classList.remove("open"))
  );

  // Scroll-spy active nav link
  const sections = $$("main section[id]");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          $$("#navLinks a").forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  // Animated stat counters
  const counters = $$(".stat-num");
  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        const raw = node.getAttribute("data-target");
        const numMatch = raw.match(/\d+/);
        const suffix = raw.replace(/\d+/, "");
        const target = numMatch ? parseInt(numMatch[0], 10) : 0;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const tick = () => {
          current = Math.min(current + step, target);
          node.textContent = current + suffix;
          if (current < target) requestAnimationFrame(tick);
        };
        tick();
        obs.unobserve(node);
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((c) => counterObserver.observe(c));

  // Subscribe form (front-end only — connect to an email service to go live)
  const subForm = $("#subscribeForm");
  subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    $("#subscribeNote").hidden = false;
    subForm.reset();
  });
})();
