# Custom JSX Renderer

A lightweight, educational implementation of a JSX renderer that demonstrates how JSX syntax can be transformed into DOM elements without using React or other frameworks.

## Project Overview

This project provides a minimal implementation of a JSX rendering system that:
1. Transforms JSX syntax into virtual DOM nodes
2. Renders those virtual DOM nodes to actual DOM elements

The goal is to help developers understand how JSX works under the hood, by showing how babel transforms JSX calls into function calls that create a virtual DOM structure, which is then rendered to the real DOM.

## How It Works

JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. This project demonstrates how JSX is:

1. Transformed by Babel into function calls (to `jsxHandler`)
2. Converted into a virtual DOM representation
3. Rendered to real DOM elements using the `render` function

## Project Structure

```
jsx_renderer/
├── src/
│   ├── index.js          # Main entry point with JSX code
│   ├── jsxHandler.js     # Handles JSX transformations
│   └── domRenderer.js    # Renders virtual DOM to real DOM
├── dist/                 # Build output directory
├── package.json          # Project dependencies and scripts
└── babel.config.json     # Babel configuration
```

## Files Description

### jsxHandler.js

The core function that Babel transforms JSX into. When you write:

```jsx
<div className="container">Hello</div>
```

Babel transforms it to:

```js
jsxHandler("div", { className: "container" }, "Hello");
```

This function creates a virtual DOM node representation with:
- `nodeName`: The type of element (e.g., "div", "h1")
- `attributes`: An object containing all props/attributes
- `children`: Child elements or text content

### domRenderer.js

Contains the `render` function that converts virtual DOM nodes into actual DOM elements. It:
- Creates appropriate DOM elements based on the virtual node type
- Applies all attributes to the created element
- Recursively renders all children
- Returns the fully constructed DOM element

### index.js

The main entry point that contains JSX code to be rendered. It creates a simple DOM structure and attaches it to the document body when the page loads.

## Installation and Running

### Prerequisites

- Node.js and npm

### Setup and Run

1. Clone this repository
   ```
   git clone [repository-url]
   cd jsx_renderer
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Build the project
   ```
   npm run build
   ```

4. Bundle with Webpack
   ```
   npx webpack
   ```

5. Start a live server to view the results
   ```
   npx live-server dist
   ```

6. Open your browser to view the result (typically at http://localhost:8080)

## Babel Configuration

The project uses `@babel/plugin-transform-react-jsx` to transform JSX into function calls. The configuration in `babel.config.json` specifies `jsxHandler` as the function to use for JSX transformation:

```json
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma": "jsxHandler" }]
  ]
}
```

## Webpack Configuration

You may need to create a `webpack.config.js` file with the following content:

```javascript
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './dist/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // Or development
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
```

## Customizing

To modify the rendered content, edit the JSX in `src/index.js` and repeat the build and bundle steps to rebuild.

## Learning Opportunities

This project is ideal for learning about:
- How JSX works underneath React
- The Virtual DOM pattern
- DOM manipulation fundamentals
- Transpilation with Babel
- JavaScript bundling with Webpack


## Credits
This repository is inspired by Jason Miller, most of the code is from his blog. https://jasonformat.com/wtf-is-jsx/.