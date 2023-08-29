let container=document.getElementsByClassName("container")[0];



function createGrid()
{
    let numberOfRows=16;
    let numberOfColumns=16;

    for(let i=0;i<numberOfRows;i++)
    {
        for(let j=0;j<numberOfColumns;j++)
        {
            let cell=document.createElement("div");
            cell.style.cssText='background-color:white;flex-basis:45px';
            container.appendChild(cell);
            cell.addEventListener("click",changeColor);
            cell.addEventListener("mouseDown",changeColor);

        }
    
           
    }

}

function changeColor()
{
    this.style.backgroundColor="red";
}

createGrid();

