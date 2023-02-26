const allCategories = document.querySelectorAll('.item');

console.log('Number of categories: ' + allCategories.length);


allCategories.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    const categoryItemsCount = category.lastElementChild.children.length;

    console.log('Category: ' + categoryName)
    console.log('Elements ' + categoryItemsCount)
})
