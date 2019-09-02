// Some magic to create an array with random values;
function randomNumbers(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

let arr = new Array(40)
for (var i = 0; i < arr.length; i++) {
    arr[i] = randomNumbers(0, 100)
}

let number = "";


function timer() {
    setInterval(function () {
        number = Math.floor((Math.random() * 100) + 1);
        const barchart = document.querySelectorAll(".bar");

        arr.push(number);

        //give the bar on the far right a random height.
        barchart[barchart.length - 1].style.height = number + "%";
        //loop through barcharts array from end to start excluding the last bar.
        for (let i = barchart.length - 2; i >= 0; i--) {
            //give each bar the height of his right neighbour
            barchart[i].style.height = arr[i + 1] + "%";
        }

        if (arr.length > 41) {
            arr.shift();
        }
        console.log(arr);


        // OLD METHOD

        // barchart[40].style.height = number + "%";

        // barchart[39].style.height = arr[40] + "%";
        // barchart[38].style.height = arr[39] + "%";
        // barchart[37].style.height = arr[38] + "%";
        // barchart[36].style.height = arr[37] + "%";
        // barchart[35].style.height = arr[36] + "%";
        // barchart[34].style.height = arr[35] + "%";
        // barchart[33].style.height = arr[34] + "%";
        // barchart[32].style.height = arr[33] + "%";
        // barchart[31].style.height = arr[32] + "%";
        // barchart[30].style.height = arr[31] + "%";
        // barchart[29].style.height = arr[30] + "%";
        // barchart[28].style.height = arr[29] + "%";
        // barchart[27].style.height = arr[28] + "%";
        // barchart[26].style.height = arr[27] + "%";
        // barchart[25].style.height = arr[26] + "%";
        // barchart[24].style.height = arr[25] + "%";
        // barchart[23].style.height = arr[24] + "%";
        // barchart[22].style.height = arr[23] + "%";
        // barchart[21].style.height = arr[22] + "%";
        // barchart[20].style.height = arr[21] + "%";
        // barchart[19].style.height = arr[20] + "%";
        // barchart[18].style.height = arr[19] + "%";
        // barchart[17].style.height = arr[18] + "%";
        // barchart[16].style.height = arr[17] + "%";
        // barchart[15].style.height = arr[16] + "%";
        // barchart[14].style.height = arr[15] + "%";
        // barchart[13].style.height = arr[14] + "%";
        // barchart[12].style.height = arr[13] + "%";
        // barchart[11].style.height = arr[12] + "%";
        // barchart[10].style.height = arr[11] + "%";
        // barchart[9].style.height = arr[10] + "%";
        // barchart[8].style.height = arr[9] + "%";
        // barchart[7].style.height = arr[8] + "%";
        // barchart[6].style.height = arr[7] + "%";
        // barchart[5].style.height = arr[6] + "%";
        // barchart[4].style.height = arr[5] + "%";
        // barchart[3].style.height = arr[4] + "%";
        // barchart[2].style.height = arr[3] + "%";
        // barchart[1].style.height = arr[2] + "%";
        // barchart[0].style.height = arr[1] + "%";


    }, 1000);

}

function changeHeights() {

}



timer();