# log-browser-resolution-js

A simple vanilla script to log your browser resolution in the console. This can be helpful during development when you don't want to second guess the browsers' resolution when you need it for a specific task.

Note: You may notice a performance decrease or a bit of stutter when you resize the window with the script since it constantly calculates the resolution dynamically. It's not the most optimal but it works.

# Example Setup

1) Clone the repository and add the script to your project folder. Then add the path of the script within the script tag. i.e.,

```html
<script src="../scripts/log-browser-res.js"></script>
```

- You can inline the script if you don't want to download it. i.e.,

```html
<script>
    //log initial window resolution 
    console.log("Initial window resolution: " + window.outerWidth + " x " + window.outerHeight);

    //log window resolution on resize
    window.onresize = () => {
        const winWidth = window.outerWidth;
        const winHeight = window.outerHeight;

        console.clear(); //prevent logs from being spammed
        console.log("Current window resolution: " + winWidth + " x " + winHeight);
    }
</script>
```

- If you're using a framework such as React, you can add it to the file where the main root render is located. i.e.,

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log("Initial window resolution: " + window.outerWidth + " x " + window.outerHeight);

//log window resolution on resize
window.onresize = (): void => {
    const winWidth = window.outerWidth;
    const winHeight = window.outerHeight;

    console.clear(); //prevent logs from being spammed
    console.log("Current window resolution: " + winWidth + " x " + winHeight);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
    <App></App>
    </React.StrictMode>
);
```

2) Run the dev server or build tool for your app/project.

3) Open the dev console in your browser.

4) You will see the initial resolution of your browser window logged.

5) When you resize the browser window, it will log the current resolution.