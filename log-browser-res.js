//log initial window resolution 
console.log("Initial window resolution: " + window.outerWidth + " x " + window.outerHeight);

//log window resolution on resize
window.onresize = () => {
    const winWidth = window.outerWidth;
    const winHeight = window.outerHeight;

    console.clear(); //prevent logs from being spammed
    console.log("Current window resolution: " + winWidth + " x " + winHeight);
}