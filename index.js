grid()

function grid() {
    const reset = document.querySelector('#reset');    
    const black = document.querySelector('#black');    
    const RGB = document.querySelector('#RGB');   
    const eraser = document.querySelector('#eraser');
    const color = document.querySelector('#color');
    const spanGrid = document.querySelector('.spanGrid')
    const grid = document.querySelector('#grid');
// Creating the start Div Table
    for (i = 0; i < 12*12; i++){
        const newDiv = document.createElement('div');
        newDiv.style.boxSizing = 'border-box';
        newDiv.style.border = '1px solid grey';
        newDiv.style.width = (500/12) +'px';
        newDiv.style.height = (500/12) +'px';
// Without clicking anything, starting color is set to orange
        newDiv.addEventListener('mouseover', function () {
            newDiv.style.backgroundColor = 'orange';
        })
// Clicking Eraser changes background to grey
        eraser.addEventListener('click', function (){
            newDiv.addEventListener('mouseenter', function() {
                newDiv.style.backgroundColor = "rgb(226, 225, 225)"
            })
        })
// Choosing color lets you paint with it
        color.addEventListener('input',function () {
            newDiv.addEventListener('mouseenter', function () {
                newDiv.style.backgroundColor = document.getElementById('color').innerHTML = color.value;
            })
        })
// Clicking RGB changes background to random color
        RGB.addEventListener('click', function() {
            newDiv.addEventListener('mouseenter', function() {
                const r = Math.floor(Math.random()*256);
                const g = Math.floor(Math.random()*256);
                const b = Math.floor(Math.random()*256);
                newDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            })
        })
// Clicking Black changes background to black
        black.addEventListener('click', function() {
            newDiv.addEventListener('mouseenter', function() {
                newDiv.style.backgroundColor = 'black';
            })
        })
// Clicking Reset resets the board to the default background color
        reset.addEventListener('click', function() {
            newDiv.style.backgroundColor = "rgb(226, 225, 225)";
    });
        grid.appendChild(newDiv);
    }
// Changes the whole Div Table by removing the old one and making a new one
    const input = document.querySelector('#slider');
    input.addEventListener('change', function(e) {
        randomNumber = e.target.value;
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
          }
// Changes the span text indicating what is the grid size
            while (spanGrid.firstChild) {
                spanGrid.removeChild(spanGrid.firstChild);
              }
            spanGridNew = document.createElement('span');
            spanGridNew.classList.add('spanGrid');
            if (randomNumber == 1) {
                spanGrid.appendChild(document.createTextNode(`${randomNumber}`));
            } else
            spanGrid.appendChild(document.createTextNode(`${randomNumber} x ${randomNumber}`));
            spanGrid.appendChild(spanGridNew);
// Creating Div Table based on the slider`s input
        for (i = 0; i < randomNumber*randomNumber; i++){
            const newDiv = document.createElement('div');
            newDiv.style.boxSizing = 'border-box';
            newDiv.style.border = '1px solid grey';
            newDiv.style.width = (500/(randomNumber)) +'px';
            newDiv.style.height = (500/(randomNumber)) +'px';
// Same EventListenets as above
            newDiv.addEventListener('mouseover', function () {
                newDiv.style.backgroundColor = 'orange';
            })
            eraser.addEventListener('click', function (){
                newDiv.addEventListener('mouseenter', function() {
                    newDiv.style.backgroundColor = "rgb(226, 225, 225)"
                })
            })
            color.addEventListener('input',function () {
                newDiv.addEventListener('mouseenter', function () {
                    newDiv.style.backgroundColor = document.getElementById('color').innerHTML = color.value;
                })
            })
            RGB.addEventListener('click', function() {
                newDiv.addEventListener('mouseenter', function() {
                    const r = Math.floor(Math.random()*256);
                    const g = Math.floor(Math.random()*256);
                    const b = Math.floor(Math.random()*256);
                    newDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
                })
            })
            black.addEventListener('click', function() {
                newDiv.addEventListener('mouseenter', function() {
                    newDiv.style.backgroundColor = 'black';
                })
            })
            reset.addEventListener('click', function() {
                newDiv.style.backgroundColor = "rgb(226, 225, 225)";
        });
            grid.appendChild(newDiv);
        }
    })
}
