(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{512:function(n,t,a){"use strict";a.r(t);var o=a(22),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[this._v("#")]),this._v(" Basic")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:5>\nconst DATA_COUNT = 12;\nconst MIN = 0;\nconst MAX = 100;\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'label',\n  borderColor: (ctx) => ctx.chart.data.datasets[0].backgroundColor,\n  borderRadius: 6,\n  borderWidth: 1,\n  content: ['March', 'annotated'],\n  position: {\n    x: 'center',\n    y: 'end'\n  },\n  xValue: 'March',\n  yValue: (ctx) => yValue(ctx, 'March')\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'label',\n  borderColor: (ctx) => ctx.chart.data.datasets[0].backgroundColor,\n  borderRadius: 6,\n  borderWidth: 1,\n  content: ['June', 'annotated'],\n  position: {\n    x: 'center',\n    y: 'end'\n  },\n  xValue: 'June',\n  yValue: (ctx) => yValue(ctx, 'June')\n};\n// </block:annotation2>\n\n// <block:annotation3:3>\nconst annotation3 = {\n  type: 'label',\n  borderColor: (ctx) => ctx.chart.data.datasets[0].backgroundColor,\n  borderRadius: 6,\n  borderWidth: 1,\n  content: ['October', 'annotated'],\n  position: {\n    x: 'center',\n    y: 'end'\n  },\n  xValue: 'October',\n  yValue: (ctx) => yValue(ctx, 'October')\n};\n// </block:annotation3>\n\n/* <block:config:0> */\nconst config = {\n  type: 'bar',\n  data,\n  options: {\n    scales: {\n      x: {\n        beginAtZero: true,\n        max: 120,\n        min: 0\n      },\n      y: {\n        beginAtZero: true,\n        max: 120,\n        min: 0\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2,\n          annotation3\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:4>\nfunction yValue(ctx, label) {\n  const chart = ctx.chart;\n  const dataset = chart.data.datasets[0];\n  return dataset.data[chart.data.labels.indexOf(label)];\n}\n// </block:utils>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);