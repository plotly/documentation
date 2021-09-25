(function ($) {
  $(document).on("ready", function () {
    var db = new Object();

    db.switchMode = function () {
      $(".switch-mode .switch").click(function () {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
          javascript: document.querySelectorAll(".js-plotly-plot").forEach(function (gd) {
            Plotly.relayout(gd, {
              "template.layout": {
                annotationdefaults: {
                  arrowcolor: "#f2f5fa",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                autotypenumbers: "strict",
                coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                colorscale: {
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                  sequential: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
                font: { color: "#f2f5fa" },
                geo: {
                  bgcolor: "#161a1d",
                  lakecolor: "#161a1d",
                  landcolor: "#161a1d",
                  showlakes: true,
                  showland: true,
                  subunitcolor: "#506784",
                },
                hoverlabel: { align: "left" },
                hovermode: "closest",
                mapbox: { style: "dark" },
                paper_bgcolor: "#161a1d",
                plot_bgcolor: "#161a1d",
                polar: {
                  angularaxis: {
                    gridcolor: "#506784",
                    linecolor: "#506784",
                    ticks: "",
                  },
                  bgcolor: "#161a1d",
                  radialaxis: {
                    gridcolor: "#506784",
                    linecolor: "#506784",
                    ticks: "",
                  },
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#161a1d",
                    gridcolor: "#506784",
                    gridwidth: 2,
                    linecolor: "#506784",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "#C8D4E3",
                  },
                  yaxis: {
                    backgroundcolor: "#161a1d",
                    gridcolor: "#506784",
                    gridwidth: 2,
                    linecolor: "#506784",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "#C8D4E3",
                  },
                  zaxis: {
                    backgroundcolor: "#161a1d",
                    gridcolor: "#506784",
                    gridwidth: 2,
                    linecolor: "#506784",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "#C8D4E3",
                  },
                },
                shapedefaults: { line: { color: "#f2f5fa" } },
                sliderdefaults: {
                  bgcolor: "#C8D4E3",
                  bordercolor: "#161a1d",
                  borderwidth: 1,
                  tickwidth: 0,
                },
                ternary: {
                  aaxis: {
                    gridcolor: "#506784",
                    linecolor: "#506784",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "#506784",
                    linecolor: "#506784",
                    ticks: "",
                  },
                  bgcolor: "#161a1d",
                  caxis: {
                    gridcolor: "#506784",
                    linecolor: "#506784",
                    ticks: "",
                  },
                },
                title: { x: 0.05 },
                updatemenudefaults: { bgcolor: "#506784", borderwidth: 0 },
                xaxis: {
                  automargin: true,
                  gridcolor: "#283442",
                  linecolor: "#506784",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "#283442",
                  zerolinewidth: 2,
                },
                yaxis: {
                  automargin: true,
                  gridcolor: "#283442",
                  linecolor: "#506784",
                  ticks: "",
                  title: { standoff: 15 },
                  zerolinecolor: "#283442",
                  zerolinewidth: 2,
                },
              },
            });
          });
        } else {
          javascript: document.querySelectorAll(".js-plotly-plot").forEach(function (gd) {
            Plotly.relayout(gd, {
              "template.layout": {
                annotationdefaults: {
                  arrowcolor: "#2a3f5f",
                  arrowhead: 0,
                  arrowwidth: 1,
                },
                autotypenumbers: "strict",
                coloraxis: {
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                },
                colorscale: {
                  diverging: [
                    [0, "#8e0152"],
                    [0.1, "#c51b7d"],
                    [0.2, "#de77ae"],
                    [0.3, "#f1b6da"],
                    [0.4, "#fde0ef"],
                    [0.5, "#f7f7f7"],
                    [0.6, "#e6f5d0"],
                    [0.7, "#b8e186"],
                    [0.8, "#7fbc41"],
                    [0.9, "#4d9221"],
                    [1, "#276419"],
                  ],
                  sequential: [
                    [0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1, "#f0f921"],
                  ],
                  sequentialminus: [
                    [0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1, "#f0f921"],
                  ],
                },
                colorway: [
                  "#1F77B4",
                  "#EF553B",
                  "#00cc96",
                  "#ab63fa",
                  "#FFA15A",
                  "#19d3f3",
                  "#FF6692",
                  "#B6E880",
                  "#FF97FF",
                  "#FECB52",
                ],
                font: {
                  color: "#2a3f5f",
                },
                geo: {
                  bgcolor: "white",
                  lakecolor: "white",
                  landcolor: "#E5ECF6",
                  showlakes: true,
                  showland: true,
                  subunitcolor: "white",
                },
                hoverlabel: {
                  align: "left",
                },
                hovermode: "closest",
                mapbox: {
                  style: "light",
                },
                paper_bgcolor: "white",
                plot_bgcolor: "#fff",
                polar: {
                  angularaxis: {
                    gridcolor: "white",
                    linecolor: "#EEEEEE",
                    ticks: "",
                  },
                  bgcolor: "#E5ECF6",
                  radialaxis: {
                    gridcolor: "white",
                    linecolor: "#EEEEEE",
                    ticks: "",
                  },
                },
                scene: {
                  xaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    gridwidth: 2,
                    linecolor: "#EEEEEE",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                  },
                  yaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    gridwidth: 2,
                    linecolor: "#EEEEEE",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                  },
                  zaxis: {
                    backgroundcolor: "#E5ECF6",
                    gridcolor: "white",
                    gridwidth: 2,
                    linecolor: "#EEEEEE",
                    showbackground: true,
                    ticks: "",
                    zerolinecolor: "white",
                  },
                },
                shapedefaults: {
                  line: {
                    color: "#2a3f5f",
                  },
                },
                ternary: {
                  aaxis: {
                    gridcolor: "white",
                    linecolor: "#EEEEEE",
                    ticks: "",
                  },
                  baxis: {
                    gridcolor: "white",
                    linecolor: "#EEEEEE",
                    ticks: "",
                  },
                  bgcolor: "whi",
                  caxis: {
                    gridcolor: "white",
                    linecolor: "#EEEEEE",
                    ticks: "",
                  },
                },
                title: {
                  x: 0.05,
                },
                xaxis: {
                  automargin: true,
                  gridcolor: "#EEEEEE",
                  linecolor: "#EEEEEE",
                  ticks: "",
                  title: {
                    standoff: 15,
                  },
                  zerolinecolor: "white",
                  zerolinewidth: 2,
                },
                yaxis: {
                  automargin: true,
                  gridcolor: "#EEEEEE",
                  linecolor: "#EEEEEE",
                  ticks: "",
                  title: {
                    standoff: 15,
                  },
                  zerolinecolor: "white",
                  zerolinewidth: 2,
                },
              },
            });
          });
        }
      });
    };

    db.switchMode();
  });
})(jQuery);
