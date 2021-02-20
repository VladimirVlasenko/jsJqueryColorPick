$(document).ready(function () {

    let r = $("#red").val();
    let g = $("#green").val();
    let b = $("#blue").val();

    let chosenAttr = "color";

    $(".radioInput").on("click", function(){
        chosenAttr = $(".radioInput:checked").val();
    })
    

    $('#red').on("input", function(){
        r = $('#red').val();
        if (chosenAttr == "color") {
            $(".object").css('color', `rgb(${r}, ${g}, ${b})`);
        } else {
            $(".object").css('backgroundColor', `rgb(${r}, ${g}, ${b})`);
        }
    })

    $('#green').on("input", function(){
        g = $('#green').val();
        if (chosenAttr == "color") {
            $(".object").css('color', `rgb(${r}, ${g}, ${b})`);
        } else {
            $(".object").css('backgroundColor', `rgb(${r}, ${g}, ${b})`);
        }
    })

    $('#blue').on("input", function(){
        b = $('#blue').val();
        if (chosenAttr == "color") {
            $(".object").css('color', `rgb(${r}, ${g}, ${b})`);
        } else {
            $(".object").css('backgroundColor', `rgb(${r}, ${g}, ${b})`);
        }
    })
});
