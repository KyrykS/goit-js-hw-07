const Array= document.querySelectorAll('li.item');
const ArLength = Array.length;
console.log(`Number of categories: ${ArLength}`);
Array.forEach(element => {
const categoryTitle = element.querySelector('h2').textContent;
const categoryElementsCount = element.querySelectorAll('ul li').length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryElementsCount}`);
});

