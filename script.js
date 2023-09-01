let container=document.getElementsByClassName("container")[0];



function createGrid()
{
    let isMouseDown = false;
    let timerId;
    let numberOfRowsAndColumns=16;

    for(let i=0;i<numberOfRowsAndColumns;i++)
    {
        for(let j=0;j<numberOfRowsAndColumns;j++)
        {
            let cell=document.createElement("div");
            cell.classList.add("cell");
            //flex basis is the width of each cell here
            cell.style.cssText='background-color:white;flex-basis:35px';
            container.appendChild(cell);
            cell.addEventListener("mousedown",()=>{
                isMouseDown=true;

                timerId=setTimeout(()=>{
                    if(isMouseDown){
                        cell.style.backgroundColor="red";
                    }
                },0.01);
            });

            cell.addEventListener("mouseup",()=>{
                isMouseDown=false;
                clearTimeout(timerId);
            });

            cell.addEventListener("mouseover",()=>{
                if(isMouseDown){
                    cell.style.backgroundColor="red";
                }});
        }  
    }

}



let cells=document.getElementsByClassName("cell");
let resetButton=document.getElementById("reset");
resetButton.addEventListener("click",()=>{
    for(i=0;i<256;i++)
    {
        cells[i].style.backgroundColor="white";
    }
       
});

createGrid();

