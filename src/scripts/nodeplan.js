import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";

cytoscape.use(dagre);

$(function () {
  let cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),

    boxSelectionEnabled: false,
    autounselectify: true,

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
        { data: { label: "thing", id: "n0", type: "pk" } },
        { data: { label: "thing 2", id: "n1", type: "kit" } },
      ],
      edges: [{ data: { source: "n0", target: "n1" } }],
    },
  }));

  cy.zoom(1.0);
  cy.pan({ x: 100, y: 100 });

  $("#reset").on("click", function () {
    cy.animate({
      zoom: 1.0,
      pan: { x: 100, y: 100 },
      duration: 500,
    });
  });
});
