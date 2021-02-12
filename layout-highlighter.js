// Custom Styles
let styles = `
.lh, .lh > * {

    --flexbox-rgb: 50, 105, 168;
    --flexbox-opacity: 0.2;
    --flexbox-color: rgba(var(--flexbox-rgb), var(--flexbox-opacity));
    --flexbox-padding: 5px;



    background-color: var(--flexbox-color);
    border: 1px solid var(--flexbox-color);

}`;

let css = document.createElement("style");
css.innerHTML = styles;
document.body.appendChild(css);


let highlighterClassName = 'hl';

document.addEventListener('DOMContentLoaded', () => {
    // Select the node that will be observed for mutations
  const targetNode = document.querySelector('body');

  // Options for the observer (which mutations to observe)
  const config = { attributes: false, childList: true, subtree: false, characterData: false, attributeOldValue: false };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes[0] instanceof Element) {
              mutation.addedNodes.forEach(node => {
                  if(getComputedStyle(node).display === 'flex'){
                      node.classList.add(highlighterClassName)
                  }else{
                      node.classList.remove(highlighterClassName)
                  }
              })
          }

      }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);  
})
