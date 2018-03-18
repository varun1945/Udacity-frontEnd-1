// Select color input
let color = $("#colorPicker");

// Select size input
var height = $("#input_height");
var width = $("#input_width");

const table = document.getElementById('pixel_canvas');

$("#input_submit").click(function (e) {
    e.preventDefault();
    makeGrid();
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {

    table.innerHTML = '';
    let x = height.val();
    let y = width.val();

    let addColor = function (cell) {
        
        cell.addEventListener('click', function () {
            
            cell.style.backgroundColor = color.val();
        });
    }

    for (let i = 0; i < x; i++) {
        
        let row = table.insertRow(i);
        
        for (var j = 0; j < y; j++) {
            
            let cell = row.insertCell(j);
            cell.addEventListener('click', addColor(cell));
        }
    }
}