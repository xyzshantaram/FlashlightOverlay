
window.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const checkBox = document.querySelector("#dark-enabled");
    const innerRadius = document.querySelector("#lit-radius");
    const outerRadius = document.querySelector("#circle-radius");
    const colorSelector = document.querySelector("#overlay-color");

    const overlay = new FlashLightOverlay();

    colorSelector.onchange = function (e) {
        overlay.color = this.value;
    }
    innerRadius.onchange = function (e) {
        overlay.innerRadius = this.value;
    }
    outerRadius.onchange = function (e) {
        overlay.outerRadius = this.value;
    }

    checkBox.onchange = function (e) {
        if (this.checked) overlay.enable();
        else overlay.disable();
    }
});