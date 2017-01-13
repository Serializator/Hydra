var sequence = "";
var flickering = false;

function writeNumber(number) {
    if(flickering) {
        /* Remove the ability to try another sequence while the animation is running. */
        return;
    }

    /* Append the new number to the existing sequence. */
    document.getElementById("container-code").innerHTML = (sequence += number);

    /* Start animating based on whether the sequence is valid. */
    if(sequence.length === 3) {
        var animations = 0;
        var animation = setInterval(function() {
            var element = document.getElementById("status-" + ((sequence === "123") ? "correct" : "incorrect"));

            if(element.hasAttribute("active")) {
                element.removeAttribute("active");
            } else {
                element.setAttribute("active", "");
            }

            if(++animations >= 12) {
                flickering = false;
                sequence = "";
                document.getElementById("container-code").innerHTML = "---";
                clearInterval(animation);
            }
        }, 250);

        flickering = true;
    }
}
