let title_element = document.getElementsByTagName("title")[0];
let title_text = title_element.innerHTML;
let body = document.getElementsByTagName("body")[0];
let video = document.getElementsByTagName("video")[0];
video.style.visibility = "visible";


document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "h" && event.target.nodeName.toLowerCase() !== "input") {
        if (body.style.visibility === "visible") {
            body.style.visibility = "hidden";
            title_element.innerHTML = "Focus Mode: ON";
        } else {
            body.style.visibility = "visible";
            title_element.innerHTML = title_text;
        }
    }
});
