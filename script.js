let container=document.getElementsByClassName("container")[0];
let cell=document.createElement("div");


function createRow()
{
    let numberOfRows=16;
    let numberOfColumns=16;

    for(let i=0;i<numberOfRows;i++)
    {
        for(let j=0;j<numberOfColumns;j++)
        {
            let cell=document.createElement("div");
            cell.style.cssText='width: 49px;height:49px;outline:0.0001px black solid;background-color:white;display:inline-block;margin-top:-2px'
            container.appendChild(cell);

        }
    
           
    }

}

createRow()

