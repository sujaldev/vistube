let visibility_to_set = "hidden"
let video_elem = document.getElementsByTagName("video")[0];
video_elem.id = "video";
let all_other_elems = document.querySelectorAll("body > *:not(#video)");


function set_visibility(visibility) {
    for (let elem of all_other_elems) {
        elem.style.visibility = visibility;
    }
    video_elem.style.visibility = "visible";
}


function toggle_visibility(visibility) {
    if (visibility === "hidden") {
        return "visible";
    } else {
        return "hidden"
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "h") {
        set_visibility(visibility_to_set);
        visibility_to_set = toggle_visibility(visibility_to_set);
    }
})
