(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{513:function(n,t,a){"use strict";a.r(t);var e=a(22),o=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"callout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#callout"}},[this._v("#")]),this._v(" Callout")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:3>\nconst DATA_COUNT = 12;\nconst MIN = 0;\nconst MAX = 100;\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation:1>\nconst annotation = {\n  type: 'label',\n  backgroundColor: 'rgba(245, 245, 245)',\n  callout: {\n    enabled: true,\n    borderColor: (ctx) => ctx.chart.data.datasets[0].borderColor\n  },\n  content: (ctx) => 'Maximum value is ' + maxValue(ctx).toFixed(2),\n  font: {\n    size: 16\n  },\n  position: {\n    x: (ctx) => maxIndex(ctx) <= 3 ? 'start' : maxIndex(ctx) >= 10 ? 'end' : 'center',\n    y: 'center'\n  },\n  xAdjust: (ctx) => maxIndex(ctx) <= 3 ? 60 : maxIndex(ctx) >= 10 ? -60 : 0,\n  xValue: (ctx) => maxLabel(ctx),\n  yAdjust: -60,\n  yValue: (ctx) => maxValue(ctx)\n};\n// </block:annotation>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true,\n        max: 140,\n        min: 0\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:2>\nfunction maxValue(ctx) {\n  const values = ctx.chart.data.datasets[0].data;\n  return Math.max(...values);\n}\n\nfunction maxIndex(ctx) {\n  const max = maxValue(ctx);\n  const dataset = ctx.chart.data.datasets[0];\n  return dataset.data.indexOf(max);\n}\n\nfunction maxLabel(ctx) {\n  return ctx.chart.data.labels[maxIndex(ctx)];\n}\n// </block:utils>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);