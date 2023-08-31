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
            cell.style.cssText='background-color:white;flex-basis:45px';
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

function changeColor()
{
    
}

createGrid();

