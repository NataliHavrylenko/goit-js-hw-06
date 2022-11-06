const arrayItem = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${arrayItem.length}`);

arrayItem.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
   console.log(`Elements: ${element.querySelectorAll("li").length}`);
});