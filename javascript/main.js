document.querySelector("#title").innerText = "Inspector Clouseau"
document.querySelector("#slogan").innerText = "Police Detective of the French Sûreté"

function reDisplay() {
let windowSizes = `The Window size is ${window.innerWidth}px wide by ${window.innerHeight}px tall.`
 
let offset = `Window offset ${window.screenX}px from the left edge and ${window.screenY}px from the top of the display.`
let urlInfo = `This page's URL is ${window.location}`
let myWindow = document.querySelector("#windowProp").innerText="❌"+ windowSizes + '\n' + "❌"+ offset + '\n' + "❌"+ urlInfo
} 

reDisplay()
let docTitle = document.title    
let modTim = (document.lastModified)  
document.querySelector("#documentProp").innerText= "❌"+ "The title of this document is " + docTitle + "." + '\n' +
"❌"+"The last time this document was modified was " + modTim + "."   