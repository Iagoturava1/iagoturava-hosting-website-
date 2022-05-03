const sec4cont = [...document.querySelectorAll('.sec4cont')];
const arr01 = [...document.querySelectorAll('.arr01')];
const arr02 = [...document.querySelectorAll('.arr02')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    arr01[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    arr02[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})