(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{522:function(n,t,a){"use strict";a.r(t);var o=a(22),e=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"lower-and-upper-bounds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lower-and-upper-bounds"}},[this._v("#")]),this._v(" Lower and upper bounds")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:4>\nconst DATA_COUNT = 8;\nconst MIN = 10;\nconst MAX = 100;\n\nUtils.srand(8);\n\nconst labels = [];\nfor (let i = 0; i < DATA_COUNT; ++i) {\n  labels.push('' + i);\n}\n\nconst numberCfg = {count: DATA_COUNT, min: MIN, max: MAX};\n\nconst data = {\n  labels: labels,\n  datasets: [{\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }, {\n    data: Utils.numbers(numberCfg)\n  }]\n};\n// </block:setup>\n\n// <block:annotation1:1>\nconst annotation1 = {\n  type: 'line',\n  borderColor: 'black',\n  borderWidth: 3,\n  label: {\n    enabled: true,\n    backgroundColor: 'black',\n    borderColor: 'black',\n    borderRadius: 10,\n    borderWidth: 2,\n    content: (ctx) => 'Lower bound: ' + minValue(ctx).toFixed(3),\n    rotation: 'auto'\n  },\n  scaleID: 'y',\n  value: minValue\n};\n// </block:annotation1>\n\n// <block:annotation2:2>\nconst annotation2 = {\n  type: 'line',\n  borderWidth: 3,\n  borderColor: 'black',\n  label: {\n    enabled: true,\n    backgroundColor: 'black',\n    borderColor: 'black',\n    borderRadius: 10,\n    borderWidth: 2,\n    content: (ctx) => 'Upper bound: ' + maxValue(ctx).toFixed(3),\n    rotation: 'auto'\n  },\n  scaleID: 'y',\n  value: maxValue\n};\n// </block:annotation2>\n\n/* <block:config:0> */\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      y: {\n        stacked: true\n      }\n    },\n    plugins: {\n      annotation: {\n        annotations: {\n          annotation1,\n          annotation2\n        }\n      }\n    }\n  }\n};\n/* </block:config> */\n\n// <block:utils:3>\nfunction minValue(ctx) {\n  const dataset = ctx.chart.data.datasets[0];\n  const min = dataset.data.reduce((max, point) => Math.min(point, max), Infinity);\n  return isFinite(min) ? min : 0;\n}\n\nfunction maxValue(ctx) {\n  const datasets = ctx.chart.data.datasets;\n  const count = datasets[0].data.length;\n  let max = 0;\n  for (let i = 0; i < count; i++) {\n    let sum = 0;\n    for (const dataset of datasets) {\n      sum += dataset.data[i];\n    }\n    max = Math.max(max, sum);\n  }\n  return max;\n}\n// </block:utils>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler: function(chart) {\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data = dataset.data.map(() => Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add data',\n    handler: function(chart) {\n      chart.data.labels.push(chart.data.labels.length);\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.push(Utils.rand(MIN, MAX));\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove data',\n    handler: function(chart) {\n      chart.data.labels.shift();\n      chart.data.datasets.forEach(function(dataset, i) {\n        dataset.data.shift();\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Cycle position',\n    handler: function(chart) {\n      const annotations = chart.options.plugins.annotation.annotations;\n      if (annotations.annotation1.label.position === 'start') {\n        annotations.annotation1.label.position = 'end';\n        annotations.annotation2.label.position = 'end';\n      } else if (annotations.annotation1.label.position === 'center') {\n        annotations.annotation1.label.position = 'start';\n        annotations.annotation2.label.position = 'start';\n      } else {\n        annotations.annotation1.label.position = 'center';\n        annotations.annotation2.label.position = 'center';\n      }\n      chart.update();\n    }\n  }\n];\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);