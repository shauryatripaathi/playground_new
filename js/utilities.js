let bodyImg = document.createElement("img");
bodyImg.classList.add("bodyImg");
bodyImg.src = "img/wallpaper1.jpg";
document.body.append(bodyImg);

let grid = document.getElementById("grid");
let cross = document.createElement("div");
cross.classList.add("cross");



function bindEvent(tileId) {
    let variable = document.getElementById(tileId);

    variable.addEventListener("click", handleOnClick);
    function handleOnClick(e) {

        let row = parseInt(e.target.getAttribute("data-row"));
        let col = parseInt(e.target.getAttribute("data-column"));
        console.log(row, col);
        
        // TODO:Find a way to pass these variables without declaring them globally.
        rowIndex = row - 1;
        colIndex = col - 1;
        console.log(rowIndex, colIndex);
        
      
        if (gridBox[rowIndex][colIndex] == null) {
            let getImg = document.createElement("img");
            getImg.classList.add("getImg");
            getImg.src = nextMove === "X" ? "/img/X.png" : "/img/O.png";
            e.target.append(getImg);
            gridBox[rowIndex][colIndex] = nextMove;

            // next move
            nextMove = nextMove === "X" ? "O" : "X";
            console.log(nextMove);
        }      
       
        checkIfPlayerWon();
        checkIfGameOver();
        console.log(gridBox)
    }
}


function checkIfPlayerWon() {
    // horizontal
    if (
        gridBox[rowIndex][0] == gridBox[rowIndex][1] &&
        gridBox[rowIndex][1] == gridBox[rowIndex][2]
    ) {
        let distance = rowIndex * 80 + 40;
        cross.style.marginTop = `${distance}px`;
        cross.style.marginLeft = "-17px";
        grid.append(cross);
        setTimeout(function () {
            alert(`player ${gridBox[rowIndex][0]} won`);
            location.reload();
        }, 300);
    }
    // vertical
    else if (
        gridBox[0][colIndex] === gridBox[1][colIndex] &&
        gridBox[1][colIndex] === gridBox[2][colIndex]
    ) {
        let distance = colIndex*80 - 100
        switch (colIndex) {
            case 0:
                cross.style.marginLeft = `${distance}px`;
                break;

            case 1:
                cross.style.marginLeft = `${distance}px`;
                break;

            case 2:
                cross.style.marginLeft = `${distance}px`;
                break;      
        }
        cross.style.marginTop = "120px"
        cross.style.transform = "rotate(90deg)";
        grid.append(cross);
        setTimeout(function () {
            alert(`player ${gridBox[0][colIndex]} won`)
            location.reload();
        }, 300);
    }

    else if (
        // diagonal1
        gridBox[0][0] == gridBox[1][1] &&
        gridBox[1][1] == gridBox[2][2] &&
        gridBox[1][1] != null) {

        cross.style.transform = "rotate(45deg)";
        cross.style.marginTop = "121px";
        cross.style.marginLeft = "-67px";
        cross.style.width = "380px"
        grid.append(cross);
        setTimeout(function () {
            alert(`player ${gridBox[1][1]} won`);
            location.reload();
        }, 300);
    }

    else if (
        // diagonal2
        gridBox[0][2] == gridBox[1][1] &&
        gridBox[1][1] == gridBox[2][0] &&
        gridBox[1][1] != null) {

        cross.style.transform = "rotate(135deg)";
        cross.style.marginTop = "121px";
        cross.style.marginLeft = "-70px";
        cross.style.width = "380px"
        grid.append(cross);

        setTimeout(function () {
            alert(`player ${gridBox[1][1]} won`);
            location.reload();
        }, 300)
    }
}


function checkIfGameOver() {
    if (gridBox[0][0] !== null &&
        gridBox[0][1] !== null &&
        gridBox[0][2] !== null &&
        gridBox[1][0] !== null &&
        gridBox[1][1] !== null &&
        gridBox[1][2] !== null &&
        gridBox[2][0] !== null &&
        gridBox[2][1] !== null &&
        gridBox[2][2] !== null
    ) {

        setTimeout(function () {
            alert("game is over")
            location.reload();
        }, 300);
    }
}

let text = document.createElement("p");
text.id = "text";
text.innerText = "Tic Tac Toe";
document.body.append(text);

setInterval (function(){
   let x = Math.floor(Math.random()*150);
   let y = Math.floor(Math.random()*150);
   let z = Math.floor(Math.random()*150);

   text.style.color = `rgb(${x} ${y} ${z})`;
},300)
