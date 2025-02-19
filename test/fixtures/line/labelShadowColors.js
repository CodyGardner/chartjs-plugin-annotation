module.exports = {
  config: {
    type: 'scatter',
    options: {
      scales: {
        x: {
          display: false,
          min: 0,
          max: 100
        },
        y: {
          display: false,
          min: 0,
          max: 100
        }
      },
      plugins: {
        annotation: {
          annotations: {
            left: {
              type: 'line',
              scaleID: 'y',
              value: 25,
              borderColor: 'black',
              borderWidth: 5,
              label: {
                position: 'start',
                backgroundColor: 'red',
                borderColor: 'rgb(101, 33, 171)',
                borderWidth: 2,
                content: 'no offset',
                enabled: true,
                backgroundShadowColor: 'black',
                borderShadowColor: 'orange',
                shadowBlur: 12
              },
            },
            hCenter: {
              type: 'line',
              scaleID: 'y',
              value: 50,
              borderColor: 'black',
              borderWidth: 5,
              label: {
                position: 'center',
                backgroundColor: 'red',
                borderColor: 'rgb(101, 33, 171)',
                borderWidth: 2,
                content: 'offset x: 10',
                enabled: true,
                backgroundShadowColor: 'black',
                borderShadowColor: 'orange',
                shadowBlur: 3,
                shadowOffsetX: 10
              },
            },
            right: {
              type: 'line',
              scaleID: 'y',
              value: 75,
              borderColor: 'black',
              borderWidth: 5,
              label: {
                position: 'end',
                backgroundColor: 'black',
                borderColor: 'rgb(101, 33, 171)',
                borderWidth: 2,
                content: 'offset y: 10',
                enabled: true,
                backgroundShadowColor: 'black',
                borderShadowColor: 'orange',
                shadowBlur: 3,
                shadowOffsetY: 10
              },
            },
            top: {
              type: 'line',
              scaleID: 'x',
              value: 50,
              borderColor: 'blue',
              borderWidth: 5,
              label: {
                position: 'start',
                backgroundColor: 'red',
                borderColor: 'rgb(101, 33, 171)',
                borderWidth: 2,
                content: 'offset x: 10, y:10',
                enabled: true,
                backgroundShadowColor: 'black',
                borderShadowColor: 'orange',
                shadowBlur: 3,
                shadowOffsetX: 10,
                shadowOffsetY: 10
              }
            }
          }
        }
      }
    }
  },
  options: {
    spriteText: true
  }
};
