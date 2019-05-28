$(function() {
    updateBlocks();

    //IN PREPARATION FOR A LIST OF THE RUNNING SYSTEMS
    window.systems = [
        ["Courage", ""],
        ["is", ""],
        ["Not", ""],
        ["the", ""],
        ["Abscence", ""],
        ["of", ""],
        ["Fear", ""],
        ["A", ""],
        ["Trusted", ""],
        ["Friend", ""],
        ["in", ""],
        ["Science", ""],
    ];

    let systemsdevices = "";
    let i = 0;
    while (i < window.systems.length) {
        //ONLY TILL I HAVE THE SYSTEM STATS
        direction = "up";
        flo = "right";
        if (i < 6) {
            direction = "down";
            flo = "left";
        }
        systemsdevices += '<div id="' + window.systems[i][0] + '" class="column ' + direction + '" style="float:' + flo + ';">';
        //END FILLER

        let bittybits = stringToBits(window.systems[i][0]);
        //systemsdevices+='<div id="'+window.systems[i][0]+'" class="column" style="float:'+flo+';">';
        let bits = "";
        let j = 0;
        while (j < bittybits.length) {
            if (bittybits[j] == "1") {
                bits += '<div class="one"></div>';
            } else {
                bits += '<div class="zero"></div>';
            }
            j++;
        }
        systemsdevices += bits + bits + bits + bits + '</div>';
        i++;
    }
    $("#systems").html(systemsdevices);


    window.ctrlDown = false;

    $(document).keydown(function(e) {
        if (e.which == 17) ctrlDown = true;
    }).keyup(function(e) {
        if (e.which == 17) ctrlDown = false;
    });
});

setInterval(function() {
    updateBlocks();
}, 60000);

window.cursorstate = true;
setInterval(function() {
    if (window.cursorstate) {
        $("#cursorblinking").text("\
		.mark {\
			text-decoration:none;\
		}\
		");
        window.cursorstate = false;
    } else {
        $("#cursorblinking").text("\
		.mark {\
			text-decoration:underline;\
		}\
		");
        window.cursorstate = true;
    }
}, 350);

function updateSystems() {
    let i = 0;
    while (i < window.systems.length) {
        request = $.getJSON(window.systems[i][1]);
        request.done(function(data) {
            time = new Date().getTime() / 1000;
            difference = time - data[1];
            if (difference < 60) {
                $("#" + data[0]).removeClass("down");
                $("#" + data[0]).addClass("up");
            } else {
                $("#" + data[0]).removeClass("up");
                $("#" + data[0]).addClass("down");
            }
        });
        request.fail(function() {
            console.log("Failed to load systems status.");
        });
        i++;
    }
}

function updateBlocks() {
    $("#temperature").html(Math.round(Math.random() * 100) + "%");
    $("#humidity").html(Math.round(Math.random() * 100) + "%");
    $("#dewpoint").html(Math.round(Math.random() * 100) + "%");
}

function strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}

function stringToBits(input) {
    output = "";
    for (i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2);
    }
    return output;
}

function doGetCaretPosition(oField) {

    // Initialize
    let iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        oField.focus();

        // To get cursor position, get empty selection range
        let oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;

    // Return results
    return (iCaretPos);
}