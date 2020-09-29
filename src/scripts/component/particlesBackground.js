import "particles.js";
import pjsConfig from "../particles.json"

class bgAnim extends HTMLElement{
    constructor() {
        super();

        particlesJS('particles-js', pjsConfig, function() {
            console.log('callback - particles.js config loaded')});

        $("#particles-js").css({
            display: "none"
        })       
    }
};
window.customElements.define('background-anim', bgAnim);

