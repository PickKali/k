import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";

cytoscape.use(dagre);

$(function () {
  let cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),

    boxSelectionEnabled: false,
    autounselectify: true,
    autoungrabify: true,

    layout: {
      name: "dagre",
    },

    style: [
      {
        selector: "node",
        style: {
          color: "#FFFFFF",
          "text-background-color": "#242424",
          "text-outline-width": 2,
          label: "data(label)",
          "text-valign": "bottom",
          "text-halign": "center",
          "text-wrap": "wrap",
          "text-max-width": 80,
        },
      },
      {
        selector: 'node[type="legend"]',
        style: {
          shape: "right-rhomboid",
          "background-color": "#242424",
          "border-color": "#3C3C3C",
          "corner-radius": "10",
          "text-valign": "top",
        },
      },
      {
        selector: 'node[type="pk"]',
        style: {
          shape: "round-rectangle",
          "background-color": "#FA8072",
        },
      },
      {
        selector: 'node[type="kit"]',
        style: {
          shape: "round-diamond",
          "background-color": "#C871FF",
        },
      },
      {
        selector: ".done",
        style: {
          opacity: 0.3,
        },
      },

      {
        selector: "edge",
        style: {
          width: 4,
          "target-arrow-shape": "triangle",
          "line-color": "#3C3C3C",
          "target-arrow-color": "#3C3C3C",
          "curve-style": "round-taxi",
        },
      },
    ],

    elements: {
      nodes: [
        { data: { label: "What Am I Working On?", id: "a", type: "legend" } },
        { data: { label: "PickKali", parent: "a", type: "pk" } },
        { data: { label: "Kali Is Trying", parent: "a", type: "kit" } },

        {
          data: {
            label: "Undiagnosed ADHD Productivity Tools",
            id: "uapt",
            type: "legend",
          },
        },
        {
          data: {
            label: "Overchoice Wheel",
            parent: "uapt",
            id: "wheel",
            type: "kit",
            href: "https://pickkali.github.io/growing-wheel/",
          },
          classes: "done",
        },
        {
          data: {
            label: "This Graph",
            parent: "uapt",
            id: "graph",
            type: "kit",
          },
        },

        { data: { label: "NG+ Minesweeper", id: "ngms", type: "legend" } },
        {
          data: {
            label: "Datastore Problem",
            parent: "ngms",
            id: "dp",
            type: "pk",
          },
        },
        {
          data: {
            label: "R15R6 User Manual",
            parent: "ngms",
            id: "um",
            type: "kit",
          },
        },
        {
          data: { label: "Tile Revamp", parent: "ngms", id: "tr", type: "kit" },
        },
        {
          data: {
            label: "Anti-guessing",
            parent: "ngms",
            id: "ag",
            type: "pk",
          },
        },
        {
          data: { label: "Tickets", parent: "ngms", id: "ticket", type: "pk" },
        },
        { data: { label: "How to Stop The Slop", id: "sts", type: "pk" } },
        { data: { label: "/k/posts", id: "kposts", type: "kit" } },

        { data: { label: "Vanta^Black", id: "v^b", type: "legend" } },
        { data: { label: "Walking++", parent: "v^b", id: "w++", type: "pk" } },
        {
          data: {
            label: "The Last CCOs",
            parent: "v^b",
            id: "ccos",
            type: "kit",
          },
        },
        {
          data: {
            label: "Sound Design > OST",
            parent: "v^b",
            id: "nomusic",
            type: "kit",
          },
        },
        {
          data: {
            label: "Building in Minecraft and Roblox",
            parent: "v^b",
            id: "build",
            type: "pk",
          },
        },
        {
          data: {
            label: "Plastic+",
            parent: "v^b",
            id: "plastic",
            type: "kit",
          },
        },
        { data: { label: "/k/market", id: "market", type: "kit" } },
        {
          data: {
            label: "Designing Vanta^Black",
            parent: "v^b",
            id: "design",
            type: "pk",
          },
        },

        { data: { label: "Unsorted Video Ideas", id: "uvi", type: "legend" } },
        {
          data: {
            label: "This Video Isn't About Air Purifiers",
            parent: "uvi",
            id: "air",
            type: "pk",
          },
        },
        {
          data: {
            label: "Impossible Game Design Is Awesome",
            parent: "uvi",
            id: "combos",
            type: "pk",
          },
        },
        {
          data: {
            label: "The 103 Sticks Experiment",
            parent: "uvi",
            id: "sticks",
            type: "pk",
          },
        },
      ],
      edges: [
        { data: { source: "graph", target: "dp" } },
        { data: { source: "um", target: "sts" } },
        { data: { source: "sts", target: "kposts" } },
        { data: { source: "dp", target: "kposts" } },
        { data: { source: "ticket", target: "w++" } },
        { data: { source: "kposts", target: "w++" } },
        { data: { source: "ag", target: "market" } },
        { data: { source: "combos", target: "sticks" } },
      ],
    },
  }));

  cy.zoom(1.0);
  cy.pan({ x: 100, y: 100 });
  cy.on("mouseover", "node[href]", function () {
    document.body.style.cursor = "pointer";
  });
  cy.on("mouseout", "node[href]", function () {
    document.body.style.cursor = "default";
  });
  cy.on("tap", "node[href]", function () {
    try {
      window.open(this.data("href"));
    } catch (e) {
      window.location.href = this.data("href");
    }
  });

  $("#reset").on("click", function () {
    cy.animate({
      zoom: 1.0,
      pan: { x: 100, y: 100 },
      duration: 500,
    });
  });
});
