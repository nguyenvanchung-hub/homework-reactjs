// bai1:
const getTinhLuong = (luong) => {
 if (luong <= 7000000){
  console.log ('luong rong', luong*0.9)
  console.log ('thue', luong*0.1)
 }
  else if (luong >= 15000000){
  console.log ('luong rong', luong*0.7)
  console.log ('thue', luong*0.3)
  } 
  else {
  console.log ('luong rong', luong*0.8)
  console.log ('thue', luong*0.2)
}
}

// bai2:
const getTuoi = (tuoi) => {
 if (tuoi >= 16){
   console.log ('Duoc xet trung tuyen')
 }  
 else {
   console.log ('tach')
 }
}

// bài 3:
function getNumber(so) {
    so == Number
    if (num < 100) {
        console.log("So nho hon 100")
    }
    else if (num > 100) {
        console.log("So lon hon 100")
    }
}
//bài 4:
function soLonNhat(a, b, c) {
    a, b, c == Number
    var max = a
    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }
    console.log(max)
}
//bai 5:
function diemTrungBinh(diem) {
    diem == Number
    if (diem >= 9) {
        console.log("Hang A")
    }
    else if (score >= 7 && diem < 9) {
        console.log("Hang B")
    }
    else if (score >= 5 && diem < 7) {
        console.log("Hang C")
    }
    else {
        console.log("Hang F")
    }
}
//bai 6:
function equation(a, b, c) {
    a, b ,c == Number
    if (a === 0 && b === 0) {
        console.log("Phuong trinh vo nghiem")
    }
    else if (a === 0 && b != 0) {
        console.log("Phuong trinh co 1 nghiem la:", -c/b)
    }
    else if ((b*b - 4*a*c) < 0) {
        console.log("Phuong trinh vo nghiem")
    }
    else {
        console.log("Phuong trinh co 2 nghiem la:", (-b+Math.sqrt(delta))/(2*a),'va ', (-b-Math.sqrt(delta))/(2*a))
    }
}
//bài 7:
function getCommission(money) {
    money == Number
    if (money <= 100) {
        console.log("Phi hoa hong la:", money*5/100, "trieu")
    }
    else if (money <= 300 && money >100) {
        console.log("Phi hoa hong la:", money*10/100, "trieu")
    }
    else {
        console.log("Phi hoa hong la:", money*20/100, "trieu")
    }
}
//bài 8:
function telephoneCharges(minute) {
    minute == Number
    if (minute <= 50) {
        console.log("Cuoc dien thoai la:", 25000 + minute*600, "VND")
    }
    else if (minute > 50 && minute < 200) {
        console.log("Cuoc dien thoai la:", 25000 + 50*600 + (minute-50)*400, "VND")
    }
    else {
        console.log("Cuoc dien thoai la:", 25000 + 50*600 + 150*400 + (minute-200)*200, "VND")
    }
}

