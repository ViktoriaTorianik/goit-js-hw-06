
const itemEl = document.querySelectorAll('.item')
const number = `Number of categories: ${itemEl.length}`
console.log(number);
itemEl.forEach(function(item){
    const titleEl = item.querySelector("h2")
    console.log(`Categories:${titleEl.textContent}`);
    const listEl = item.querySelectorAll("li")
    console.log(`Elements:${listEl.length}`);
})





