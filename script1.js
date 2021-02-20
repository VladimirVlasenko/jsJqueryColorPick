document.addEventListener("DOMContentLoaded", ()=>
{
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue= document.querySelector('#blue');

    let objectX = document.querySelector(".object");

    let r = red.value;
    let g = green.value;
    let b = blue.value;

    let chosenAttr = "color";

    let inputs = document.querySelectorAll('.radioInput');
    document.addEventListener('click', (e) => {
        if (e.target.closest('.radioInput')) {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].checked) {
                    chosenAttr = inputs[i].value;
                }
            }
        }
    })


    red.addEventListener('input', () => {
        r = red.value;
        if (chosenAttr == "color") {
            objectX.style.color = `rgb(${r}, ${g}, ${b})`;
        } else {
            objectX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    })

    green.addEventListener('input', () => {
        g = green.value;
        if (chosenAttr == "color") {
            objectX.style.color = `rgb(${r}, ${g}, ${b})`;
        } else {
            objectX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    })

    blue.addEventListener('input', () => {
        b = blue.value;

        if (chosenAttr == "color") {
            objectX.style.color = `rgb(${r}, ${g}, ${b})`;
        } else {
            objectX.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }


    })
});

