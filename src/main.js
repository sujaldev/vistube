const $x = (xpath, context = document) => {
    return document.evaluate(
        xpath, context, null,
        XPathResult.FIRST_ORDERED_NODE_TYPE, null
    ).singleNodeValue;
};


let title_element = $x("//title");
let title_text = title_element.innerHTML;
let body = $x("//body")
let video;


let interval = setInterval(wait_for_video_creation, 1000);

function wait_for_video_creation() {
    video = $x("//video");
    if (video == undefined) {
        return
    }
    clearInterval(interval);
    handle_video_creation()
}

function handle_video_creation() {
    document.addEventListener("keydown", handle_keydown)
}

function handle_keydown(event) {
    if (event.key.toLowerCase() === "h" && event.target.nodeName.toLowerCase() !== "input") {
        if (body.style.visibility === "visible") {
            body.style.visibility = "hidden";
            title_element.innerHTML = "Focus Mode: ON";
        } else {
            body.style.visibility = "visible";
            title_element.innerHTML = title_text;
        }
        $x("//video").style.visibility = "visible";
    }
}
