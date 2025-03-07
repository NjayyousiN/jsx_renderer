import { jsxHandler } from "./jsxHandler.js";
import { render } from "./domRenderer.js";

const vdom = (
    <div id="app">
        <h1>Hello</h1>
        <p>Custom JSX!</p>
    </div>
);

document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(render(vdom));
});
