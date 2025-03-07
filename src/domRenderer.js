/*
    This file represents the function that will transform our virtual dom into the real dom.
    The function will take the virtual dom as an argument and return the real dom.
    Hence, we can think of the virtual dom as a blueprint for the real, and the render function as the construction worker
    that decides how the blueprint is implemented.
*/

export function render(vnode) {
    // Strings just convert to #text Nodes:
    if (typeof vnode === "string") return document.createTextNode(vnode);

    // create a DOM element with the nodeName of our VDOM element:
    let n = document.createElement(vnode.nodeName);

    // copy attributes onto the new node:
    let a = vnode.attributes || {};
    Object.keys(a).forEach((k) => n.setAttribute(k, a[k]));

    // render (build) and then append child nodes:
    (vnode.children || []).forEach((c) => n.appendChild(render(c)));

    return n;
}
