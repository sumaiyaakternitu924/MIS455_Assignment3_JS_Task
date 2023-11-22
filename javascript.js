function calculatesum() {
    var sum = 0;

    for (var i = 400; i <= 450; i++) {
        sum += i;
    }

    document.getElementById("sumResult").innerHTML =
        `<br> <br> <br>
        Sum of numbers between 400 and 450: <b>${sum}</b>`;
}
// 5
function calculateAverage() {
    var sum = 0;
    var count = 0;

    for (var i = 500; i <= 565; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }

    if (count > 0) {
        var average = sum / count;
        document.getElementById("averageResult").innerHTML =
            `<br> <br> <br>
            Average of even numbers between 500 and 565: <b>${average}</b>`;
    } else {
        document.getElementById("averageResult").innerHTML =
            `<br> <br> <br>
            No even numbers found in the given range.`;
    }
}

//6
function calculateAverageArray() {
    var numbers = [43, 654, 34, 60, 532, 46, 300];
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    if (numbers.length > 0) {
        var average = sum / numbers.length;
        document.getElementById("arrayAverageResult").innerHTML =
            `<br> <br> <br>
            Average of numbers in the array: <b>${average}</b>`;
    } else {
        document.getElementById("arrayAverageResult").innerHTML =
            `<br> <br> <br>
            The array is empty.`;
    }
}
    //7
    function countNumbers() {
        var numbers = [434, 545, 231, 7675, 543, 678];
        var count = 0;
    
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] > 600) {
                count++;
            }
        }
    
        document.getElementById("countResult").innerHTML =
            `<br> <br> <br>
            Total numbers greater than 600 in the array: <b>${count}</b>`;
    }
    //8
    function calculateAverageMarks() {
        var student = {
            name: "Rafsan Khan",
            age: 34,
            address: "House 432, Banani, Rd-11",
            marks: [40, 33, 80, 93, 12, 46]
        };
    
        var marks = student.marks;
        var sum = 0;
    
        for (var i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
    
        if (marks.length > 0) {
            var average = sum / marks.length;
            document.getElementById("averageMarksResult").innerHTML =
                `<br> <br> <br>
                Average marks of ${student.name}: <b>${average}</b>`;
        } else {
            document.getElementById("averageMarksResult").innerHTML =
                `<br> <br> <br>
                No marks available for ${student.name}.`;
        }
    }