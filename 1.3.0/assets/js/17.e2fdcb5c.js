(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{500:function(t,e,o){"use strict";o.r(e);var n=o(22),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"point-annotations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#point-annotations"}},[t._v("#")]),t._v(" Point Annotations")]),t._v(" "),o("p",[t._v("Point annotations are used to mark points on the chart area. This can be useful for highlighting values that are of interest.")]),t._v(" "),o("chart-editor",{attrs:{code:"/* <block:options:0> */\nconst options = {\n  plugins: {\n    autocolors: false,\n    annotation: {\n      annotations: {\n        point1: {\n          type: 'point',\n          xValue: 1,\n          yValue: 60,\n          backgroundColor: 'rgba(255, 99, 132, 0.25)'\n        }\n      }\n    }\n  }\n};\n/* </block:options> */\n\n/* <block:config:1> */\nconst config = {\n  type: 'line',\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, 80, 81, 56, 55, 40],\n      fill: false,\n      borderColor: 'rgb(75, 192, 192)',\n      tension: 0.1\n    }]\n  },\n  options\n};\n/* </block:config> */\n\nmodule.exports = {\n  config\n};\n"}}),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("The following options are available for point annotations.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[o("a",{attrs:{href:"../options#scriptable-options"}},[t._v("Scriptable")])]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("adjustScaleRange")])])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("true")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("backgroundColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("options.color")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("backgroundShadowColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'transparent'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("options.color")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderDash")])])]),t._v(" "),o("td",[o("code",[t._v("number[]")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("[]")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderDashOffset")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderShadowColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'transparent'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderWidth")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("1")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("display")])])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("true")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("drawTime")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'afterDatasetsDraw'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("pointStyle")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#point-style"}},[o("code",[t._v("PointStyle")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'circle'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("radius")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("10")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("rotation")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("shadowBlur")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("shadowOffsetX")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("shadowOffsetY")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xAdjust")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xMax")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xMin")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xScaleID")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'x'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xValue")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yAdjust")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yMax")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yMin")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yScaleID")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'y'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yValue")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])])])]),t._v(" "),o("h3",{attrs:{id:"general"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),o("p",[t._v("If one of the axes does not match an axis in the chart, the point annotation will take the center of the chart as point. The 2 coordinates, xValue, yValue are optional. If not specified, the point annotation will take the center of the chart as point.")]),t._v(" "),o("p",[t._v("The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction and the box size is used to calculated the center of the point. To enable to use the box positioning, the "),o("code",[t._v("radius")]),t._v(" must be set to "),o("code",[t._v("0")]),t._v(" or "),o("code",[t._v("NaN")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("adjustScaleRange")])]),t._v(" "),o("td",[t._v("Should the scale range be adjusted if this annotation is out of range.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("display")])]),t._v(" "),o("td",[t._v("Whether or not this annotation is visible.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("drawTime")])]),t._v(" "),o("td",[t._v("See "),o("a",{attrs:{href:"../options#draw-time"}},[t._v("drawTime")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("radius")])]),t._v(" "),o("td",[t._v("Size of the point in pixels.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("rotation")])]),t._v(" "),o("td",[t._v("Rotation of point, in degrees.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xAdjust")])]),t._v(" "),o("td",[t._v("Adjustment along x-axis (left-right) of point relative to computed position. Negative values move the point left, positive right.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xMax")])]),t._v(" "),o("td",[t._v("Right edge of the box in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xMin")])]),t._v(" "),o("td",[t._v("Left edge of the box in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xScaleID")])]),t._v(" "),o("td",[t._v("ID of the X scale to bind onto, default is 'x'.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xValue")])]),t._v(" "),o("td",[t._v("X coordinate of the point in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yAdjust")])]),t._v(" "),o("td",[t._v("Adjustment along y-axis (top-bottom) of point relative to computed position. Negative values move the point up, positive down.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yMax")])]),t._v(" "),o("td",[t._v("Bottom edge of the box in units along the y axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yMin")])]),t._v(" "),o("td",[t._v("Top edge of the box in units along the y axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yScaleID")])]),t._v(" "),o("td",[t._v("ID of the Y scale to bind onto, default is 'y'.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yValue")])]),t._v(" "),o("td",[t._v("Y coordinate of the point in units along the y axis.")])])])]),t._v(" "),o("h3",{attrs:{id:"styling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[t._v("Fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("backgroundShadowColor")])]),t._v(" "),o("td",[t._v("The color of shadow. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[t._v("Stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDash")])]),t._v(" "),o("td",[t._v("Length and spacing of dashes. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDashOffset")])]),t._v(" "),o("td",[t._v("Offset for line dashes. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderShadowColor")])]),t._v(" "),o("td",[t._v("The color of border shadow. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[t._v("Stroke width.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("pointStyle")])]),t._v(" "),o("td",[t._v("Style of the point.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("shadowBlur")])]),t._v(" "),o("td",[t._v("The amount of blur applied to shadow. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("shadowOffsetX")])]),t._v(" "),o("td",[t._v("The distance that shadow will be offset horizontally. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("shadowOffsetY")])]),t._v(" "),o("td",[t._v("The distance that shadow will be offset vertically. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);