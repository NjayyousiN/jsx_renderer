/*
    This file represents the function that will code for every jsx element (Usually one general function is needed, you can add more).
    The output of this function will be an object with three properties:
    1. nodeName: The name of the element.
    2. attributes: The attributes of the element.
    3. children: The children of the element.
    This object is a virtual node. 
    The virtual DOM is simply a data structure that consists of virtual nodes that represent the state of the real DOM.
*/

export function jsxHandler(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}
