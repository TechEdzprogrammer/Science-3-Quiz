let answer1 = document.getElementById("one");
let answer2 = document.getElementById("2");
let answer3 = document.getElementById("3");
let answer4 = document.getElementById("4");
let answer5 = document.getElementById("5");
let answer6 = document.getElementById("6");
let score = 0;

function choose(){
    
    if(answer1.value == 'solid'){
        score += 1;
    }

    if(answer2.value == 'Gas'){
        score += 1;
    }

    if(answer3.value == 'solid'){
        score += 1;
    }

    if(answer4.value == 'liquid'){
        score += 1;
    }

    if(answer5.value == 'Gas'){
        score += 1;
    }

    if(answer6.value == 'liquid'){
        score += 1;
    }

    window.alert("Your score is: " + score);
    location.reload();
}

