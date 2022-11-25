let prevWilaya = "";
let newWilaya = "";


function handelMouseLeave(event){

    if(event.target.id === prevWilaya){
        return
    }
    let hovered = document.getElementById(event.target.id)
    hovered.style.fill="#99aab5"
    let name = document.getElementById('name1')
    name.innerText = ""
}

function handelMouseEnter(event){
    if(event.target.id === prevWilaya){
        return
    }
    let hovered = document.getElementById(event.target.id)
    hovered.style.fill="#ffffff"
    let idArr = event.target.id.split("_")
    console.log(idArr)
    let name = document.getElementById('name1')
    if(idArr.length>=5){
        name.innerText = idArr[idArr.length-2]+" "+idArr[idArr.length-1]
    }
    if(idArr.length===4){
        name.innerText = idArr[3]
    }
}


function handelSelect(event){
    newWilaya = event.target.id
    if(newWilaya===prevWilaya){
        return
    }

    if(prevWilaya != ""){
        let lastWilaya = document.getElementById(prevWilaya)
        lastWilaya.style.fill = "#99aab5"
    }
    let selectedWilaya = document.getElementById(newWilaya)
    selectedWilaya.style.fill = "#7289da"
    prevWilaya = newWilaya
}