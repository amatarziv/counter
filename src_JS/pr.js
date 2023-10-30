const height = document.getElementById('height')
const width = document.getElementById('width')
const btn = document.getElementById('btn')
const resalt = document.getElementById('resalt')


btn.onclick = function(){
    resalt.textContent = Number(height.value) + Number(width.value)
}