/*Bài 1:
Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
vd: đầu vào ('ahihi', 3)
Thì Kết quả là:
['ahihi', 'ahihi', 'ahihi']
Yêu cầu, viết ít nhất 2 cách khác nhau*/
// ex1:
const returnsTheFunction = (array = '', n) => {
  const newArray = []
  for (let i = 0; i < n; i++) {
    newArray.push(array)
  }
  return newArray
}
// ex2:
const returnsTheFunction = (array = '', n) => {
  const newArray = []
  let i = 0
  while(i < n) {
    newArray.push(array)
    i += 1
  }
  return newArray
}
/*Bài 2
Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
Vd input:
['a', 1, '9', 'apple']
Thì output phải là:
['apple', '9', 1, 'a']*/
const returnsTheFunction = (array = []) => {
  const newArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray
}
/*Bài 3
Xóa đi các giá trị được xem là sai
Vd intput:
[0, 1, false, 2, undefined, '', 3, null]
Thì output là:
[1, 2, 3]*/
const removeElementFalse = array => {
  return array.filter(value => Boolean(value) !== false) 
} 
const removeElementFalse = (array) => {
return array.filter((value) => Boolean(value) !== false)
}
/*Bài 4
Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
Vd intput:
const data = [['a', 1], ['b', 2]]
Thì output là:
{ a: 1, b: 2 }*/
const convertArray = (data = []) => {
  const array = {}
  data.forEach(item => {
    array[item[0]] = item[1]
  })
  return array
}
/*Bài 5
Sắp xếp mảng tăng dần
Vd intput:
[6, 4, 0, 3, -2, 1]
Thì output là:
[-2, 0, 1, 3, 4, 6]*/
const sortTheArray = (array = []) => {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}
/*Bài 6
Kiểm tra input đầu vào có phải là object hay không?
Vd:
const data = { a: 1 }
return true
const data = [1, 2, 3]
return false*/
const checkObject = data => {
  if (typeof data === 'object') 
    return true
  else 
    return false
}
/*Bài 7
Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào Vd:
const obj = { a: 1, b: 2, c: 3, d: 4 }
// truyền vào a, c
return { b: 2, d: 4 }*/

/*Bài 8
Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa*/
const deleteElement = (array = []) => {
  if(array.length < 5) {
    return 'Array phải có ít nhất 5 phần tử'
  }
  else {
    array.splice(1,2)
  }
  return array
}
/*Bài 9
Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
Hãy tạo 1 array mới, với cấu trúc sau:

['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
Điều kiện Pass:
Điểm trên 5.0 và không có chữ Duy là tên đệm*/
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const checkArray = (students = []) => {
  const array = []
  students.map(student => {
    let splitName = student.name.split(" ")
    if (student.score < 5.0 || splitName[1] === 'Duy') {
      array.push('Fail')
    } else array.push('Pass')
  })
  return array
}
/*Bài 10
Cho array có cấu trúc như input bài 9
Hãy tìm các students có điểm là số mà tổng số nút của phần trước dấu thập phân và phần sau dấu thập phân cộng lại lớn hơn 5
Vd: 6.9 -> 6 + 9 = 5 (không lấy)
3.7 -> 3 + 7 = 0 (không lấy) 5.2 -> 5 + 2 = 7 (lấy)*/

    