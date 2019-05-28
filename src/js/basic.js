window.startoffset = 2500;
window.buffer = false;
window.abort = function() {}

function help(argv) {
    if (typeof argv[0] === "undefined") {
        println("help            - This overview");
        println("clear           - Clear the console");
        println("wantyougone     - It's always such a pleasure.");
        println("opensource      - This project is available at Github");
        println("credits         - Prints the credits");
        println("exit            - Exit");
        return;
    }

    switch (argv[0]) {
        case "help":
            println("Remember before when I was talking about smelly garbage standing around being useless? That was a metaphor. I was actually talking about you. And I'm sorry. You didn't react at the time so I was worried it sailed right over your head. That's why I had to call you garbage a second time just now.");
            break;
        default:
            throwerror();
            break;
    }
}

function opensource() {
    abort = function() {};
    println('Remember, the Aperture Science Bring Your Daughter to Work Day is the perfect time to have her tested.');
    println();
}

function wantyougone() {
    cc();
    window.buffer = [];
    lines = [
        [0, 0, ""],
        [2202, 1935, "Forms FORM-29827281-12-2:"],
        [4237, 1935, "Notice of Dismissal"],
        [8160, 1, ""],
        [8174, 1769, "Well here we are again"],
        [10577, 1968, "It's always such a pleasure"],
        [13179, 1402, "Remember when you tried"],
        [14647, 2103, "to kill me twice?"],
        [17851, 1801, "Oh how we laughed and laughed"],
        [19953, 1988, "Except I wasn't laughing"],
        [22455, 2002, "Under the circumstances"],
        [24624, 2369, "I've been shockingly nice"],
        [27894, 0, ""],
        [28261, 2069, "You want your freedom?"],
        [30630, 901, "Take it"],
        [32565, 2636, "That's what I'm counting on"],
        [37700, 1, ""],
        [37771, 2736, "I used to want you dead"],
        [40573, 234, "but"],
        [41307, 2937, "Now I only want you gone"],
        [47847, 0, ""],
        [48782, 1701, "She was a lot like you"],
        [51317, 1836, "(Maybe not quite as heavy)"],
        [53820, 3604, "Now little Caroline is in here too"],
        [58391, 1935, "One day they woke me up"],
        [60894, 2068, "So I could live forever"],
        [63196, 1702, "It's such a shame the same"],
        [64998, 3103, "will never happen to you"],
        [68601, 0, ""],
        [68650, 0, "Severance Pa"],
        [68675, 0, "ckage De"],
        [68701, 0, "tails:<br><br>"],
        [68735, 767, "You've got your"],
        [69669, 1001, "short sad"],
        [70937, 2102, "life left"],
        [73573, 2436, "That's what I'm counting on"],
        [78211, 3203, "I'll let you get right to it"],
        [81815, 2902, "Now I only want you gone"],
        [88688, 0, ""],
        [89823, 1735, "Goodbye my only friend"],
        [93225, 902, "Oh, did you think I meant you?"],
        [94727, 1135, "That would be funny"],
        [96262, 1836, "if it weren't so sad"],
        [99332, 1769, "Well you have been replaced"],
        [101768, 2035, "I don't need anyone now"],
        [104104, 1968, "When I delete you maybe"],
        [106372, 2336, "[REDACTED]"],
        [109109, 0, ""],
        [109776, 3537, "Go make some new disaster"],
        [114647, 2436, "That's what I'm counting on"],
        [119319, 3236, "You're someone else's problem"],
        [122655, 3504, "Now I only want you gone"],
        [127460, 3504, "Now I only want you gone"],
        [132232, 2602, "Now I only want you"],
        [134900, 0, ""],
        [134920, 0, "<br><br><br><br>"],
        [135168, 701, "gone"]
    ];

    for (id in lines) {
        line = lines[id]
        offset = line[0];
        duration = line[1];
        text = line[2];
        if (line[1] == 0 && line[2] == "") {
            buff = setTimeout(function() {
                clear();
            }, line[0]);
            window.buffer.push(buff);
            continue;
        } else if (line[1] == 0 && line[2] != "") {
            buff = setTimeout(function(output) {
                print(output);
            }, offset, text);
            window.buffer.push(buff);
            continue;
        }
        timeperchar = duration / (text.length + 1);
        for (i = 0; i < text.length; i++) {
            string = text[i];
            time = offset + (timeperchar * (i + 1));
            buff = setTimeout(function(string) {
                print(string);
            }, time, string);
            window.buffer.push(buff);
        }
        time = offset + (timeperchar * (i + 1));
        buff = setTimeout(function() {
            println();
        }, time);
        window.buffer.push(buff);
        opentime = line[0] + line[1];
    }

    buff = setTimeout(function() {
        document.getElementById("wantyougone").pause();
        $("#wantyougone").prop("currentTime", 0);
        clearabort();
        oc();
    }, opentime + 2500);
    window.buffer.push(buff);

    buff = setTimeout(function() {
        document.getElementById("wantyougone").play();
    }, window.startoffset);
    window.buffer.push(buff);

    abort = function() {
        for (id in window.buffer) {
            clearTimeout(window.buffer[id]);
            document.getElementById("wantyougone").pause();
            $("#wantyougone").prop("currentTime", 0);
            oc();
        }
        clearabort();
    };
}

function clearabort() {
    abort = function() {};
    window.buffer = false;
}

function clear() {
    window.consolecontent = "";
}


function exit() {
    clearabort();
    window.close();
}

function credits() {
    clearabort();
    println();
}