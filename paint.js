window.addEventListener("load", ()=>{

const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d')

canvas.height = 310
canvas.width = 430

let penDown = false;


function draw(e){
	if (!penDown) return
	context.lineTo(e.clientX, e.clientY)
	context.stroke()
}

context.lineWidth = 3;
context.strokeStyle = 'black';
canvas.addEventListener('mousedown', ()=>{penDown=true;})
canvas.addEventListener('mouseup', ()=>{context.beginPath();penDown=false;})
canvas.addEventListener('mousemove', draw)

context.font = "30px Arial";

document.querySelector('#button1').addEventListener('click',()=>{context.strokeStyle = 'red';})
document.querySelector('#button2').addEventListener('click',()=>{context.strokeStyle = 'purple';})
document.querySelector('#button3').addEventListener('click',()=>{context.strokeStyle = 'green';})
document.querySelector('#button4').addEventListener('click',()=>{context.strokeStyle = 'blue';})
document.querySelector('#button5').addEventListener('click',()=>{context.strokeStyle = 'yellow';})
document.querySelector('#button6').addEventListener('click',()=>{context.strokeStyle = 'black';})
document.querySelector('#button7').addEventListener('click',()=>{location.reload();})
document.querySelector('#button8').addEventListener('click',()=>{context.strokeStyle = 'white';})
document.querySelector('#button9').addEventListener('click',()=>{context.lineWidth++;})
document.querySelector('#button10').addEventListener('click',()=>{context.lineWidth--;})
})
