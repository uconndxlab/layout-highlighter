// Custom Styles
let styles = `
.lh, .lh > * {

    --flexbox-rgb: 50, 105, 168;
    --flexbox-opacity: 0.2;
    --flexbox-color: rgba(var(--flexbox-rgb), var(--flexbox-opacity));
    --flexbox-padding: 5px;



    background-color: var(--flexbox-color);
    border: 1px solid var(--flexbox-color);
    padding: var(--flexbox-padding);

}`;

let css = document.createElement("style");
css.innerHTML = styles;
document.body.appendChild(css);


let highlighterClassName = 'lh';
let pollingInterval = 2000;

/**
 * Switched to setInterval to easily account for changes 
 * to style due to media queries. Good for PoC, but 
 * probably bad in the longrun.
 */
setInterval(() => {
    let elements = document.querySelectorAll('body *');
    elements.forEach(el => {
        if(getComputedStyle(el).display === 'flex'){
            // console.info('Highlighting:', el)
            el.classList.add(highlighterClassName)
        }else{
            // console.info('Removing Highlighting:', el)
            el.classList.remove(highlighterClassName)
        }
    });
}, pollingInterval);
