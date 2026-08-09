/* =========================================================================
   MAXTRON RACING CLUB — SITE CONTENT
   -------------------------------------------------------------------------
   Edit ANY text, number, or list below to update the live website.
   You do NOT need to touch index.html, style.css, or main.js.
   Just edit the values inside the quotes / arrays, save, and re-publish.
   ========================================================================= */

window.SITE_CONTENT = {

  brandName: "MAXTRON",
  brandSub: "RACING CLUB",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Project", href: "#project" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Tech Specs", href: "#specs" },
    { label: "Regulations", href: "#regulations" },
    { label: "Budget", href: "#budget" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "NMIT · STUDENT MOTORSPORTS ENGINEERING",
    tagline: "DRIVEN TO DOMINATE",
    description: "A newly established student-led motorsports engineering team at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru — designing, building, and racing prototype motorcycles."
  },

  stats: [
    { number: "08+", label: "Team Members" },
    { number: "02",  label: "Prototype Motorcycles" },
    { number: "01",  label: "Mission" },
    { number: "2026", label: "Established" }
  ],

  moto: {
    statement: "Engineering excellence, innovation, and teamwork — built to compete, built to dominate.",
    lead: "MAXTRON Racing Club exists to give students hands-on engineering experience by designing, manufacturing, testing, and racing competitive prototype motorcycles for national and international student motorsport competitions."
  },

  // "What domains we offer" — shown on the home page
  domains: [
    {
      icon: "CH",
      title: "Chassis & Frame",
      desc: "Self-manufactured tubular chassis design, triangulated frame structures, and crash-protection engineering."
    },
    {
      icon: "PT",
      title: "Powertrain & Engine",
      desc: "Petrol (240–340cc 4-stroke) and Electric (≤10kW) propulsion integration, cooling, and transmission systems."
    },
    {
      icon: "SB",
      title: "Suspension & Braking",
      desc: "Front/rear suspension tuning, hydraulic disc brake systems, and steering geometry design."
    },
    {
      icon: "EE",
      title: "Electricals & Electronics",
      desc: "ECU integration, wiring, data acquisition, dashboards, and (for EV) high-voltage system safety."
    },
    {
      icon: "AF",
      title: "Aerodynamics & Fairing",
      desc: "Fairing design, bodywork, wings, and aerodynamic packaging within FMAE dimensional limits."
    },
    {
      icon: "MF",
      title: "Manufacturing & Fabrication",
      desc: "CNC machining, TIG welding, precision fabrication, and assembly of both prototypes."
    },
    {
      icon: "VT",
      title: "Vehicle Dynamics & Testing",
      desc: "Static scrutineering prep, dynamic safety testing, performance evaluation, and race-day tuning."
    },
    {
      icon: "MS",
      title: "Management & Sponsorship",
      desc: "Budgeting, sponsor relations, documentation, logistics, and competition project management."
    }
  ],

  about: {
    title: "Engineering Tomorrow's Motorsport Champions",
    body1: "MAXTRON Racing Club is a student-driven initiative focused on designing, building, and racing high-performance prototype motorcycles in national and international competitions.",
    body2: "We aim to develop engineering excellence, promote innovation, and put NMIT on the global motorsport map — building a sustainable platform that future student teams can continue to grow.",
    missionText: "To design, develop, and race competitive prototype motorcycles while providing students with practical experience in engineering, manufacturing, testing, and motorsport operations — through innovation, teamwork, industry collaboration, and continuous improvement.",
    visionText: "To establish MAXTRON Racing Club as a respected student motorsports engineering team, proudly representing Nitte Meenakshi Institute of Technology in national and international student motorcycle engineering competitions."
  },

  project: {
    title: "Two Identical. One Mission.",
    description: "We are building two identical Formula Moto Student prototype motorcycles as per FMAE MotoStudent (India) regulations. Developing two identical machines lets us run parallel testing, compare performance data, and improve reliability — while reducing overall development time.",
    features: [
      "Advanced Engineering Design",
      "Data Driven Performance",
      "Precision Manufacturing",
      "Reliability & Safety First",
      "Rigorous Testing & Validation",
      "Built For Competition"
    ],
    pillars: [
      { icon: "◎", title: "Compete", desc: "Participate in FMAE MotoStudent (India) and other national events." },
      { icon: "🌐", title: "Achieve", desc: "Compete internationally at MotoStudent (Spain) and beyond." },
      { icon: "🎓", title: "Learn", desc: "Provide hands-on experience and skill development." },
      { icon: "👥", title: "Inspire", desc: "Motivate future engineers to innovate and excel." },
      { icon: "🏆", title: "Represent", desc: "Proudly represent NMIT on national and global platforms." }
    ]
  },

  roadmap: {
    title: "Competition Development Roadmap",
    lead: "A structured roadmap — building a strong engineering foundation before progressing to international student motorcycle engineering competitions.",
    stages: [
      {
        year: "2027",
        competition: "FMAE MotoStudent (India)",
        objective: "Design, manufacture, test, and successfully compete with two Formula Moto Student prototype motorcycles while establishing the team's engineering foundation and gaining competition experience."
      },
      {
        year: "Future",
        competition: "MotoStudent (Spain)",
        objective: "Represent NMIT on an international stage by competing against leading universities and continuously improving the team's engineering capabilities."
      },
      {
        year: "Long-Term",
        competition: "International Student Motorcycle Engineering Competitions",
        objective: "Expand participation in globally recognized student motorsport events, strengthen industry collaborations, and establish MAXTRON as a sustainable, competitive motorsports program."
      }
    ]
  },

  specsLead: "The proposed motorcycles are being developed with a focus on performance, safety, reliability, and compliance with FMAE MotoStudent (India) regulations. Specifications may be refined during detailed design based on validation, availability, and technical partnerships.",
  specsNote: "Note: These specifications represent the team's preferred technical configuration. Final component selection depends on validation, sponsorship, budget approval, and competition regulations.",

  technicalSpecs: [
    ["Project", "Development of Two Identical Formula Moto Student Prototype Motorcycles"],
    ["Competition", "FMAE MotoStudent (India)"],
    ["Engine Platform", "321cc Parallel-Twin (Yamaha YZF-R3/MT-03 or Kawasaki Ninja 300 — subject to partnership)"],
    ["Cooling System", "Liquid Cooled"],
    ["Fuel System", "Electronic Fuel Injection (EFI)"],
    ["Transmission", "6-Speed Manual"],
    ["Frame / Chassis", "Custom fabricated 4130 Chromoly steel tubular chassis"],
    ["Swingarm", "Custom lightweight racing swingarm"],
    ["Front Suspension", "WP Suspension — adjustable USD forks (or equivalent)"],
    ["Rear Suspension", "WP Suspension — adjustable monoshock (or equivalent)"],
    ["Front / Rear Brakes", "Brembo / ByBre racing brake system, braided steel lines"],
    ["Tyres", "Pirelli racing slick tyres — 110/70-17 front, 150/60-17 rear"],
    ["Wheels", "17-inch lightweight alloy racing wheels"],
    ["Exhaust System", "Akrapovič / SC-Project / Arrow full racing exhaust (subject to partnership)"],
    ["Electronics", "Competition-ready ECU, wiring harness, sensors & data acquisition"],
    ["Rider Safety Gear", "AGV Pista GP RR helmet, Alpinestars GP Tech V4 suit, gloves & boots"],
    ["Design & Simulation", "CAD modelling, CAE analysis, vehicle simulation"],
    ["Manufacturing", "CNC machining, precision fabrication, TIG welding & assembly"],
    ["Testing & Validation", "Static inspection, dynamic testing, performance & track validation"]
  ],

  regsLead: "A condensed reference to the FMAE MotoStudent Technical Rulebook (Version 5.1, released 4th April 2026) that governs our prototype build.",

  regulations: [
    {
      title: "General Design & Dimensions",
      points: [
        "Minimum width between semi-handlebar ends: 450mm",
        "Minimum tilt angle without touching ground: 50°",
        "Minimum ground clearance (unloaded, fully equipped): 100mm",
        "Maximum fairing width: 600mm · Maximum saddle width: 450mm",
        "Minimum total unladen weight (both categories): 95kg, including fluids"
      ]
    },
    {
      title: "Frame & Crash Protection",
      points: [
        "Frame, subframe, and swingarm must be fully self-manufactured — commercial frames are forbidden",
        "Frame must protect engine, fuel, and electrical/electronic systems in a fall",
        "Mandatory nylon/fibre crash protectors on chassis and propulsion system"
      ]
    },
    {
      title: "Fairing & Mudguards",
      points: [
        "All edges rounded to a minimum 1mm radius",
        "Lower fairing must contain at least 2.5 litres of liquid in an incident",
        "Front and rear mudguards compulsory"
      ]
    },
    {
      title: "Brake System",
      points: [
        "Disc hydraulic brakes required, front and rear — completely independent circuits",
        "Steel alloy discs only — carbon/ceramic and internally-ventilated discs forbidden",
        "Anti-lock braking systems (ABS) are not allowed"
      ]
    },
    {
      title: "Suspension & Steering",
      points: [
        "Any suspension configuration allowed — active/electronic control systems are forbidden",
        "Adjustments must be manual (mechanical/hydraulic) only",
        "Minimum steering turning angle: 15° on either side, with mechanical stoppers"
      ]
    },
    {
      title: "Rims & Tyres",
      points: [
        "Rims: steel, aluminium, or magnesium only — composite rims forbidden",
        "Slick tyres required: 110/70-17 front, 150/60-17 rear (both categories)"
      ]
    },
    {
      title: "Electronic Systems",
      points: [
        "Traction control, ABS, and anti-wheelie systems are forbidden",
        "Live telemetry is prohibited — data may only be downloaded during pit stops",
        "Rider information systems on the dashboard are freely configurable"
      ]
    },
    {
      title: "Rider Equipment",
      points: [
        "Closed-face helmet with integral chin guard — Snell, SFI, or FIA approved standards only",
        "One-piece leather (or equivalent) suit with EN 1621-2 back and EN 1621-3 chest protectors",
        "Leather gloves and boots with protection are mandatory"
      ]
    },
    {
      title: "MotoStudent Petrol Category",
      points: [
        "4-stroke piston engine, 240cc–340cc total displacement",
        "Original ECU and engine map must remain unmodified",
        "Official fuel only: unleaded, 98 octane or less",
        "Maximum exhaust noise: 105 dB/A at 5,000 RPM"
      ]
    },
    {
      title: "MotoStudent Electric Category",
      points: [
        "Electric motor: ≤10kW DC, maximum 126 VDC system voltage",
        "Mandatory Battery Management System (BMS) and Insulation Monitoring Device (IMD)",
        "Precharge circuit required before contactor closes; galvanic separation of HV and LV systems",
        "Charging connector must be IP-65 rated when closed; red HV warning light mandatory"
      ]
    },
    {
      title: "Static & Dynamic Scrutineering",
      points: [
        "Structural bench test: 300kg horizontal load (front wheel), 250kg vertical load (saddle)",
        "Brake test minimums: front shaft ≥ 0.30kN, rear shaft ≥ 0.25kN",
        "EV insulation check: disconnection circuit must open within 30 seconds of a 50kΩ fault resistance",
        "Dynamic Safety Check: official rider verifies start-up, braking, and cornering before race approval"
      ]
    }
  ],

  budgetLead: "Estimated budget for designing, manufacturing, testing, and racing two Formula Moto Student prototype motorcycles — prepared for review by NMIT and prospective sponsors.",

  budgetTotal: "₹60,00,000",
  budgetAsk: "₹10,00,000",
  budgetExternal: "₹50,00,000",

  budgetCategories: [
    { name: "Rider Safety Equipment",              amount: 1400000, percent: 23.3 },
    { name: "Motorcycle Platform & Powertrain",     amount: 1200000, percent: 20.0 },
    { name: "Chassis, Suspension & Braking",        amount: 850000,  percent: 14.2 },
    { name: "Manufacturing & Fabrication",          amount: 550000,  percent: 9.2  },
    { name: "Wheels, Tyres & Exhaust System",       amount: 500000,  percent: 8.3  },
    { name: "Competition Registration & Logistics", amount: 450000,  percent: 7.5  },
    { name: "Electronics & Data Acquisition",       amount: 400000,  percent: 6.7  },
    { name: "Testing & Validation",                 amount: 300000,  percent: 5.0  },
    { name: "Tools & Workshop Equipment",           amount: 200000,  percent: 3.3  },
    { name: "Documentation, Branding & Misc.",      amount: 150000,  percent: 2.5  }
  ],

  sponsors: [
    { name: "Your Logo Here" },
    { name: "Your Logo Here" },
    { name: "Your Logo Here" },
    { name: "Your Logo Here" },
    { name: "Your Logo Here" }
  ],

  // Add / edit team members here — one object per person.
  team: [
    { name: "Dhruva Naik", role: "Club Representative" },
    { name: "Mahantayya K. Hiremath", role: "Faculty In-charge" },
    { name: "Team Member", role: "Chassis & Frame Lead" },
    { name: "Team Member", role: "Powertrain Lead" },
    { name: "Team Member", role: "Electronics Lead" },
    { name: "Team Member", role: "Suspension & Braking" },
    { name: "Team Member", role: "Manufacturing Lead" },
    { name: "Team Member", role: "Sponsorship & Management" }
  ],

  cta: {
    title: "DRIVEN TO DOMINATE",
    description: "Support young engineers in building, racing, and achieving excellence on the track."
  },

  footer: {
    about: "A newly established student-led motorsports engineering team at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Project", href: "#project" },
      { label: "Team", href: "#team" },
      { label: "Sponsors", href: "#sponsors" },
      { label: "Contact", href: "#contact" }
    ],
    address: "Nitte Meenakshi Institute of Technology, Yelahanka, Bengaluru – 560064",
    email: "maxtronracingclub@nmit.ac.in",
    social: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" }
    ],
    copyright: "© 2026 MAXTRON RACING CLUB. All rights reserved."
  }
};  ],

  moto: {
    statement: "Engineering excellence, innovation, and teamwork — built to compete, built to dominate.",
    lead: "MAXTRON Racing Club exists to give students hands-on engineering experience by designing, manufacturing, testing, and racing competitive prototype motorcycles for national and international student motorsport competitions."
  },

  // "What domains we offer" — shown on the home page
  domains: [
    {
      icon: "CH",
      title: "Chassis & Frame",
      desc: "Self-manufactured tubular chassis design, triangulated frame structures, and crash-protection engineering."
    },
    {
      icon: "PT",
      title: "Powertrain & Engine",
      desc: "Petrol (240–340cc 4-stroke) and Electric (≤10kW) propulsion integration, cooling, and transmission systems."
    },
    {
      icon: "SB",
      title: "Suspension & Braking",
      desc: "Front/rear suspension tuning, hydraulic disc brake systems, and steering geometry design."
    },
    {
      icon: "EE",
      title: "Electricals & Electronics",
      desc: "ECU integration, wiring, data acquisition, dashboards, and (for EV) high-voltage system safety."
    },
    {
      icon: "AF",
      title: "Aerodynamics & Fairing",
      desc: "Fairing design, bodywork, wings, and aerodynamic packaging within FMAE dimensional limits."
    },
    {
      icon: "MF",
      title: "Manufacturing & Fabrication",
      desc: "CNC machining, TIG welding, precision fabrication, and assembly of both prototypes."
    },
    {
      icon: "VT",
      title: "Vehicle Dynamics & Testing",
      desc: "Static scrutineering prep, dynamic safety testing, performance evaluation, and race-day tuning."
    },
    {
      icon: "MS",
      title: "Management & Sponsorship",
      desc: "Budgeting, sponsor relations, documentation, logistics, and competition project management."
    }
  ],

  about: {
    title: "Engineering Tomorrow's Motorsport Champions",
    body1: "MAXTRON Racing Club is a student-driven initiative focused on designing, building, and racing high-performance prototype motorcycles in national and international competitions.",
    body2: "We aim to develop engineering excellence, promote innovation, and put NMIT on the global motorsport map — building a sustainable platform that future student teams can continue to grow.",
    missionText: "To design, develop, and race competitive prototype motorcycles while providing students with practical experience in engineering, manufacturing, testing, and motorsport operations — through innovation, teamwork, industry collaboration, and continuous improvement.",
    visionText: "To establish MAXTRON Racing Club as a respected student motorsports engineering team, proudly representing Nitte Meenakshi Institute of Technology in national and international student motorcycle engineering competitions."
  },

  project: {
    title: "Two Identical. One Mission.",
    description: "We are building two identical Formula Moto Student prototype motorcycles as per FMAE MotoStudent (India) regulations. Developing two identical machines lets us run parallel testing, compare performance data, and improve reliability — while reducing overall development time.",
    features: [
      "Advanced Engineering Design",
      "Data Driven Performance",
      "Precision Manufacturing",
      "Reliability & Safety First",
      "Rigorous Testing & Validation",
      "Built For Competition"
    ],
    pillars: [
      { icon: "◎", title: "Compete", desc: "Participate in FMAE MotoStudent (India) and other national events." },
      { icon: "🌐", title: "Achieve", desc: "Compete internationally at MotoStudent (Spain) and beyond." },
      { icon: "🎓", title: "Learn", desc: "Provide hands-on experience and skill development." },
      { icon: "👥", title: "Inspire", desc: "Motivate future engineers to innovate and excel." },
      { icon: "🏆", title: "Represent", desc: "Proudly represent NMIT on national and global platforms." }
    ]
  },

  roadmap: {
    title: "Competition Development Roadmap",
    lead: "A structured roadmap — building a strong engineering foundation before progressing to international student motorcycle engineering competitions.",
    stages: [
      {
        year: "2027",
        competition: "FMAE MotoStudent (India)",
        objective: "Design, manufacture, test, and successfully compete with two Formula Moto Student prototype motorcycles while establishing the team's engineering foundation and gaining competition experience."
      },
      {
        year: "Future",
        competition: "MotoStudent (Spain)",
        objective: "Represent NMIT on an international stage by competing against leading universities and continuously improving the team's engineering capabilities."
      },
      {
        year: "Long-Term",
        competition: "International Student Motorcycle Engineering Competitions",
        objective: "Expand participation in globally recognized student motorsport events, strengthen industry collaborations, and establish MAXTRON as a sustainable, competitive motorsports program."
      }
    ]
  },

  specsLead: "The proposed motorcycles are being developed with a focus on performance, safety, reliability, and compliance with FMAE MotoStudent (India) regulations. Specifications may be refined during detailed design based on validation, availability, and technical partnerships.",
  specsNote: "Note: These specifications represent the team's preferred technical configuration. Final component selection depends on validation, sponsorship, budget approval, and competition regulations.",

  technicalSpecs: [
    ["Project", "Development of Two Identical Formula Moto Student Prototype Motorcycles"],
    ["Competition", "FMAE MotoStudent (India)"],
    ["Engine Platform", "321cc Parallel-Twin (Yamaha YZF-R3/MT-03 or Kawasaki Ninja 300 — subject to partnership)"],
    ["Cooling System", "Liquid Cooled"],
    ["Fuel System", "Electronic Fuel Injection (EFI)"],
    ["Transmission", "6-Speed Manual"],
    ["Frame / Chassis", "Custom fabricated 4130 Chromoly steel tubular chassis"],
    ["Swingarm", "Custom lightweight racing swingarm"],
    ["Front Suspension", "WP Suspension — adjustable USD forks (or equivalent)"],
    ["Rear Suspension", "WP Suspension — adjustable monoshock (or equivalent)"],
    ["Front / Rear Brakes", "Brembo / ByBre racing brake system, braided steel lines"],
    ["Tyres", "Pirelli racing slick tyres — 110/70-17 front, 150/60-17 rear"],
    ["Wheels", "17-inch lightweight alloy racing wheels"],
    ["Exhaust System", "Akrapovič / SC-Project / Arrow full racing exhaust (subject to partnership)"],
    ["Electronics", "Competition-ready ECU, wiring harness, sensors & data acquisition"],
    ["Rider Safety Gear", "AGV Pista GP RR helmet, Alpinestars GP Tech V4 suit, gloves & boots"],
    ["Design & Simulation", "CAD modelling, CAE analysis, vehicle simulation"],
    ["Manufacturing", "CNC machining, precision fabrication, TIG welding & assembly"],
    ["Testing & Validation", "Static inspection, dynamic testing, performance & track validation"]
  ],

  regsLead: "A condensed reference to the FMAE MotoStudent Technical Rulebook (Version 5.1, released 4th April 2026) that governs our prototype build.",

  regulations: [
    {
      title: "General Design & Dimensions",
      points: [
        "Minimum width between semi-handlebar ends: 450mm",
        "Minimum tilt angle without touching ground: 50°",
        "Minimum ground clearance (unloaded, fully equipped): 100mm",
        "Maximum fairing width: 600mm · Maximum saddle width: 450mm",
        "Minimum total unladen weight (both categories): 95kg, including fluids"
      ]
    },
    {
      title: "Frame & Crash Protection",
      points: [
        "Frame, subframe, and swingarm must be fully self-manufactured — commercial frames are forbidden",
        "Frame must protect engine, fuel, and electrical/electronic systems in a fall",
        "Mandatory nylon/fibre crash protectors on chassis and propulsion system"
      ]
    },
    {
      title: "Fairing & Mudguards",
      points: [
        "All edges rounded to a minimum 1mm radius",
        "Lower fairing must contain at least 2.5 litres of liquid in an incident",
        "Front and rear mudguards compulsory"
      ]
    },
    {
      title: "Brake System",
      points: [
        "Disc hydraulic brakes required, front and rear — completely independent circuits",
        "Steel alloy discs only — carbon/ceramic and internally-ventilated discs forbidden",
        "Anti-lock braking systems (ABS) are not allowed"
      ]
    },
    {
      title: "Suspension & Steering",
      points: [
        "Any suspension configuration allowed — active/electronic control systems are forbidden",
        "Adjustments must be manual (mechanical/hydraulic) only",
        "Minimum steering turning angle: 15° on either side, with mechanical stoppers"
      ]
    },
    {
      title: "Rims & Tyres",
      points: [
        "Rims: steel, aluminium, or magnesium only — composite rims forbidden",
        "Slick tyres required: 110/70-17 front, 150/60-17 rear (both categories)"
      ]
    },
    {
      title: "Electronic Systems",
      points: [
        "Traction control, ABS, and anti-wheelie systems are forbidden",
        "Live telemetry is prohibited — data may only be downloaded during pit stops",
        "Rider information systems on the dashboard are freely configurable"
      ]
    },
    {
      title: "Rider Equipment",
      points: [
        "Closed-face helmet with integral chin guard — Snell, SFI, or FIA approved standards only",
        "One-piece leather (or equivalent) suit with EN 1621-2 back and EN 1621-3 chest protectors",
        "Leather gloves and boots with protection are mandatory"
      ]
    },
    {
      title: "MotoStudent Petrol Category",
      points: [
        "4-stroke piston engine, 240cc–340cc total displacement",
        "Original ECU and engine map must remain unmodified",
        "Official fuel only: unleaded, 98 octane or less",
        "Maximum exhaust noise: 105 dB/A at 5,000 RPM"
      ]
    },
    {
      title: "MotoStudent Electric Category",
      points: [
        "Electric motor: ≤10kW DC, maximum 126 VDC system voltage",
        "Mandatory Battery Management System (BMS) and Insulation Monitoring Device (IMD)",
        "Precharge circuit required before contactor closes; galvanic separation of HV and LV systems",
        "Charging connector must be IP-65 rated when closed; red HV warning light mandatory"
      ]
    },
    {
      title: "Static & Dynamic Scrutineering",
      points: [
        "Structural bench test: 300kg horizontal load (front wheel), 250kg vertical load (saddle)",
        "Brake test minimums: front shaft ≥ 0.30kN, rear shaft ≥ 0.25kN",
        "EV insulation check: disconnection circuit must open within 30 seconds of a 50kΩ fault resistance",
        "Dynamic Safety Check: official rider verifies start-up, braking, and cornering before race approval"
      ]
    }
  ],

  budgetLead: "Estimated budget for designing, manufacturing, testing, and racing two Formula Moto Student prototype motorcycles — prepared for review by NMIT and prospective sponsors.",

  budgetTotal: "₹60,00,000",
  budgetAsk: "₹10,00,000",
  budgetExternal: "₹50,00,000",

  budgetCategories: [
    { name: "Rider Safety Equipment",              amount: 1400000, percent: 23.3 },
    { name: "Motorcycle Platform & Powertrain",     amount: 1200000, percent: 20.0 },
    { name: "Chassis, Suspension & Braking",        amount: 850000,  percent: 14.2 },
    { name: "Manufacturing & Fabrication",          amount: 550000,  percent: 9.2  },
    { name: "Wheels, Tyres & Exhaust System",       amount: 500000,  percent: 8.3  },
    { name: "Competition Registration & Logistics", amount: 450000,  percent: 7.5  },
    { name: "Electronics & Data Acquisition",       amount: 400000,  percent: 6.7  },
    { name: "Testing & Validation",                 amount: 300000,  percent: 5.0  },
    { name: "Tools & Workshop Equipment",           amount: 200000,  percent: 3.3  },
    { name: "Documentation, Branding & Misc.",      amount: 150000,  percent: 2.5  }
  ],

  sponsors: [
    { name: "Your Logo Here" },
    { name: "Your Logo Here" },
    { name: "Your Logo Here" },
    { name: "Your Logo Here" },
    { name: "Your Logo Here" }
  ],

  // Add / edit team members here — one object per person.
  team: [
    { name: "Mahantayya K. Hiremath", role: "Faculty In-charge" },
    { name: "Dhruva Naik", role: "Club Representative" },
    { name: "N Sai Pracheet Reddy", role: "Managing Partner" },
    { name: "Team Member", role: "Powertrain Lead" },
    { name: "Team Member", role: "Electronics Lead" },
    { name: "Team Member", role: "Suspension & Braking" },
    { name: "Team Member", role: "Manufacturing Lead" },
    { name: "Team Member", role: "Chassis & Frame Lead" }
  ],

  cta: {
    title: "DRIVEN TO DOMINATE",
    description: "Support young engineers in building, racing, and achieving excellence on the track."
  },

  footer: {
    about: "A newly established student-led motorsports engineering team at Nitte Meenakshi Institute of Technology (NMIT), Bengaluru.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Our Project", href: "#project" },
      { label: "Team", href: "#team" },
      { label: "Sponsors", href: "#sponsors" },
      { label: "Contact", href: "#contact" }
    ],
    address: "Nitte Meenakshi Institute of Technology, Yelahanka, Bengaluru – 560064",
    email: "maxtronracingclub@nmit.ac.in",
    social: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" }
    ],
    copyright: "© 2026 MAXTRON RACING CLUB. All rights reserved."
  }
};
