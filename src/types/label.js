// Label Annotation Implementation
module.exports = function(Chart) {
    var chartHelpers = Chart.helpers;
    var helpers = require('../helpers')(Chart);

    var LabelAnnotation = Chart.Annotation.Element.extend({
        setDataLimits: function() {
            var model = this._model;
            var options = this.options;
            var chartInstance = this.chartInstance;
            var chartArea = chartInstance.chartArea;

            // Set data range for this annotation
            model.ranges = {};
            if (!chartArea) {
                return;
            }

            model.ranges[options.xScaleID] = {
                min: chartArea.left,
                max: chartArea.right
            };
            model.ranges[options.yScaleID] = {
                min: chartArea.bottom,
                max: chartArea.top
            };
        },
        configure: function() {
            var model = this._model;
            var options = this.options;
            var chartInstance = this.chartInstance;
            var ctx = chartInstance.chart.ctx;

            var chartArea = chartInstance.chartArea;
            var xScale = chartInstance.scales[options.xScaleID];
            var yScale = chartInstance.scales[options.yScaleID];

            model.clip = {
                x1: chartArea.left,
                x2: chartArea.right,
                y1: chartArea.top,
                y2: chartArea.bottom
            };

            model.backgroundColor = options.label.backgroundColor;
            model.fontFamily = options.label.fontFamily;
            model.fontSize = options.label.fontSize;
            model.fontStyle = options.label.fontStyle;
            model.fontColor = options.label.fontColor;
            model.xPadding = options.label.xPadding;
            model.yPadding = options.label.yPadding;
            model.cornerRadius = options.cornerRadius;
            model.position = options.label.position;
            model.enabled = options.label.enabled;
            model.content = options.content;
            model.x1 = helpers.isValid(options.x) ? getRelativePixel(options.x, xScale) : chartArea.left;
            model.y1 = helpers.isValid(options.y) ? getRelativePixel(options.y, yScale) : chartArea.top;

            ctx.font = chartHelpers.fontString(model.fontSize, model.fontStyle, model.fontFamily);
            var lineHeight = ctx.measureText('M').width;
            var width = typeof(model.content) === 'string' ? ctx.measureText(model.content).width : ctx.measureText(model.content.reduce(function(a, b) { return a.length > b.length ? a : b; })).width;
            var height = typeof(model.content) === 'string' ? lineHeight : lineHeight * model.content.length;
            model.maxWidth = width + 2 * model.xPadding;
            model.maxHeight = height + 2 * model.yPadding;
        },
        inRange: function(mouseX, mouseY) {
            var model = this._model;

            return (model.content &&
            mouseX >= model.x1 &&
            mouseX <= model.x1 + model.maxWidth &&
            mouseY >= model.y1 &&
            mouseY <= model.y1 + model.maxHeight
            );
        },
        getCenterPoint: function() {
            var model = this._model;

            return {
                x: (model.x1 + model.maxWidth / 2),
                y: (model.y1 + model.maxHeight / 2)
            };
        },
        getWidth: function() {
            return this._model.maxWidth;
        },
        getHeight: function() {
            return this._model.maxHeight;
        },
        getArea: function() {
            return this._model.maxWidth * this._model.maxHeight;
        },
        draw: function() {
            var view = this._view;
            var ctx = this.chartInstance.ctx;

            ctx.save();

            ctx.beginPath();
            ctx.rect(view.clip.x1, view.clip.y1, view.clip.x2 - view.clip.x1, view.clip.y2 - view.clip.y1);
            // ctx.moveTo(view.x, view.y);
            ctx.clip();
            if (view.backgroundColor) {
                ctx.fillStyle = view.backgroundColor;
                chartHelpers.drawRoundedRectangle(
                    ctx,
                    view.x1,
                    view.y1,
                    view.maxWidth,
                    view.maxHeight,
                    view.cornerRadius
                );
                ctx.fill();
            }

            ctx.font = chartHelpers.fontString(view.fontSize, view.fontStyle, view.fontFamily);
            ctx.fillStyle = view.fontColor;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var lineX = view.x1 + view.maxWidth / 2;
            var lineHeight = ctx.measureText('M').width;
            view.content.forEach(function(l, i) {ctx.fillText(l, lineX, view.y1 + (2*i+1)/2*lineHeight);});
            ctx.restore();
        }
    });

    function getRelativePixel(value, scale) {
        // Gets pixel value for linear or category scales
        var px = scale.getPixelForValue(value);
        if (isNaN(px)) {
            px = scale.getPixelForTick(value);
        }

        return px;

    }
    return LabelAnnotation;
};
