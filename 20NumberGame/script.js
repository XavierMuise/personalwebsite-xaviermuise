const randNum = document.getElementById('randNum');

let num = -1
let nums = [];
let canPlace = false;
let canGenerate = true;
nums = Array(21).fill(-1);

function generateNum(){
    if(!canGenerate){
        alert("Please place the number first");
    } else{
        num = Math.floor(Math.random() * 999) + 1;
        randNum.innerHTML = num;
        canPlace = true;
        canGenerate = false;
    }
}

function placeNum(number){
    if(num === -1){
        alert("Please generate a number first");
        return;
    }
    if(!canPlace){
        alert("Please generate a new number");
        return;
    } else {
        nums[number] = num
        document.getElementById(number).innerHTML += " " + num;
        checkValid();
        canPlace = false;
        canGenerate = true;
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateNum();
    }
});

function reset(){
    num = -1;
    randNum.innerHTML = num;
    document.getElementById('1').innerHTML = "1:";
    document.getElementById('2').innerHTML = "2:";
    document.getElementById('3').innerHTML = "3:";
    document.getElementById('4').innerHTML = "4:";
    document.getElementById('5').innerHTML = "5:";
    document.getElementById('6').innerHTML = "6:";
    document.getElementById('7').innerHTML = "7:";
    document.getElementById('8').innerHTML = "8:";
    document.getElementById('9').innerHTML = "9:";
    document.getElementById('10').innerHTML = "10:";
    document.getElementById('11').innerHTML = "11:";
    document.getElementById('12').innerHTML = "12:";
    document.getElementById('13').innerHTML = "13:";
    document.getElementById('14').innerHTML = "14:";
    document.getElementById('15').innerHTML = "15:";
    document.getElementById('16').innerHTML = "16:";
    document.getElementById('17').innerHTML = "17:";
    document.getElementById('18').innerHTML = "18:";
    document.getElementById('19').innerHTML = "19:";
    document.getElementById('20').innerHTML = "20:";
    nums = [];
}


function checkValid(){
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == -1) {
            continue;
        }
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] == -1) {
                continue;
            }
            if(nums[i] >= nums[j]) {
                alert("Invalid sequence detected.");
                reset();
                return;
            }
        }
    }
}


