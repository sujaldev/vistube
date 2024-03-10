// ==UserScript==
// @name        VisTube
// @namespace   com.github.sujaldev
// @match       *://www.youtube.com/*
// @grant       none
// @version     1.2
// @author      Sujal Singh
// @description Allows you to focus on the video you are watching and not the other stuff YouTube wants you to focus on.
// @icon        https://raw.githubusercontent.com/sujaldev/vistube/main/src/icons/icon.svg
// ==/UserScript==

let body, video;
let focusTitle = "Focus Mode";
let originalTitle = document.title;

document.addEventListener("keydown", (e) => {
    // only work on video pages
    if (!window.location.pathname.startsWith("/watch")) {
        return
    }

    let isInput = ["input", "textarea"].includes(e.target.tagName.toLowerCase());
    let isEditable = e.target.getAttribute("contenteditable") === "true";
    let isIgnored = isInput || isEditable;

    let toggleEvent = e.key.toLowerCase() === "h";

    if (!isIgnored && toggleEvent) {
        body = document.getElementsByTagName("body")[0];
        video = document.getElementsByTagName("video")[0];

        if (body.style.visibility === "visible") {
            body.style.visibility = "hidden";

            if (document.title !== originalTitle) {
                originalTitle = document.title;
            }
            document.title = focusTitle;
        } else {
            body.style.visibility = "visible";

            if (document.title !== focusTitle) {
                originalTitle = document.title;
            }
            document.title = originalTitle;
        }

        video.style.visibility = "visible";
    }
})