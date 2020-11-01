//bai 1: In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả
function multiplicationTable(x) {
    for(n = 1; n <= 9; n++)   
    console.log(x + 'x' + n + '=' + (n*x));
}
multiplicationTable(5); 

//bai 2: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6
function printOutTheNumber(a) {
    for( i = 1; i <= a; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}
printOutTheNumber(11); 

// bai 3: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21
function total(n) {
    let sum = 0;
    for(i = 0; i <= n; i++) {
      sum = sum +i;
    }
    return sum;
}
total(6);

//bai 4: Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)
function factorial(a) {
    if(a == 0) {
        return 1;
    } else if(a < 0) {
        console.log('Nhập sai');
    } else {
        let factorial = 1;
        for(i = 2; i <= a; i++) {
            factorial *= i;
        }
        return factorial;
    }
}
factorial(5);

//bai 5: Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn
const arrayEvenNumber = (arr = []) => {
    let arrayOfNumber = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            ++ arrayOfNumber;
        }
    }
    console.log(arrayOfNumber);
}
arrayEvenNumber(arr = [1,2,3,4,5,6,7,8,9]); 

//bai 6: Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
function contains(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(contains(arr = ['A', 'C', 'A', 'A', 'B', 'D', 'B'])); 

//bai 7: Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]
const newStudent = () => {
    for(let i = 0; i < studentNames.length; i++) {
        for(let x = 0; x < studentScores.length; x++) {
            if(studentNames[i].id == studentScores[x].id) {
                studentNames[i].score = studentScores[x].score
            }
        }
    }
    return studentNames;
}
console.log(newStudent);

//bai 8: Cho array dưới đây là danh sách các students
const students = [
        { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
        { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
        { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
        { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
        { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
        { id: 6, name: 'Phí Duy Quân', score: 9.6 },
        { id: 7, name: 'Trần Minh Minh', score: 6.1 }
    ]
const newStudent = () => {
    let max = 0;
    let min = 12;
    const arrPoint = [];
    const arrPoint1 = [];
    for(let i = 0; i < students.length; i++) {
        if(students[i].score == Max) {
            arrPoint.id = students[i].id;   
            arrPoint.name = students[i].name;
            arrPoint.score = students[i].score;
        }
        if(students[i].score == Min) {
            arrPoint1.id = students[i].id;
            arrPoint1.name = students[i].name;
            arrPoint1.score = student[i].score;
        }
    }
    console.log(arrPoint);
    console.log(arrPoint1);
}
console.log(newStudent);