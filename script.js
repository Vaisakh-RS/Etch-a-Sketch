let container=document.getElementsByClassName("container")[0];
let colorPicker=document.getElementById("cpick");
let eraserButton=document.getElementById("eraser");

let isEraserClicked=false;
let isColorPicked=false;

const defaultColor="#000000";
window.addEventListener("load",onStartup);
function onStartup()
{
    pickedColor=defaultColor;
    isColorPicked=true;
    isEraserClicked=false;
}

let pickedColor;
colorPicker.addEventListener("input", (e)=>
{
    pickedColor= e.target.value;
    isColorPicked=true;
    isEraserClicked=false;
});

eraserButton.addEventListener("click",()=>{
    isEraserClicked=true;
    isColorPicked=false;
});


function main()
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
                    if(isMouseDown&&isColorPicked){
                        cell.style.backgroundColor=pickedColor;
                    }
                    else if(isMouseDown){
                        cell.style.backgroundColor="white";
                    }
                },0.0001);
            });

            cell.addEventListener("mouseup",()=>{
                isMouseDown=false;
                //clearTimeout(timerId);
            });

            cell.addEventListener("mouseover",()=>{
                if(isMouseDown&&isColorPicked){
                    cell.style.backgroundColor=pickedColor;
                }
                else if(isMouseDown){
                    cell.style.backgroundColor="white";
                }
            });
        }  
    }

}

//reset button
let cells=document.getElementsByClassName("cell");
let resetButton=document.getElementById("reset");
resetButton.addEventListener("click",()=>{
    for(i=0;i<256;i++)
    {
        cells[i].style.backgroundColor="white";
    }
       
});


main();

