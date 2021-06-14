// //Khai báo biến
// //Phân biệt var let và const :

// /*
//     Phạm vi hoạt của từ khóa var : toàn bộ scope
//     Phạm vi hoạt của từ khóa let : Trong từng scope khác nhau sẽ phân biệt nhau, trong 1 scope thì k thể 
//     khai báo 2 lần let với cùng 1 tên biến
//     Đối với khai báo biến = var trong js sẽ hỗ trợ cơ chế tự khai báo hosting (ngầm định khai báo biến đó ở đầu scope).
//     Đối với let và const không hỗ trợ hosting

// */


// let hoTen = 'phương';

// {
//     let hoTen = 'Phúc';
//     console.log('hoten', hoTen);
// }

// console.log('hoten', hoTen);

// // ------------------------------ Arrow function --------------------------------

// /* ArrowFunction :
//     + Không hỗ trợ cơ chế hoisting (Khai báo trước mới được sử dụng gọi hàm)
//     + Đối với hàm có 1 lệnh return thì không cần đóng {} và không cần ghi return
//     + Đối với hàm có 1 tham số thì không cần (thamso) => {} --> thamSo => { ... }
//     + Lưu ý: Arrow function không thể định nghĩa được prototype (class)
//     + Arrow function
// */

// //es5
// // function tenHam () {

// // }
// // var tenHam = function () {

// // }

// //es6
// var tenHam = () => {
//     console.log('hello cybersoft');
// }

// tenHam();


// //var tinhTong = (a, b) => { return a + b };
// //Ví dụ hàm có 1 lệnh return
// //var tinhTong = (a, b) => a + b;
// //Ví dụ về hàm có 1 tham số
// // var showMess = name => console.log(`Hello ${name}`);
// // console.log(tinhTong(10, 10));
// // showMess('Thuận');
// // Arrow function không làm thay đổi ngữ cảnh con trỏ this

// /*  + Ngữ cảnh (context) con trỏ this:
//        - Mặc định khi sử dụng con trỏ this thì nó là window {var bien hoặc window.bien}
//        - Khi dùng con trỏ this trong đối tượng object = {} --> thì this là đối tượng đó
//        - Khi dùng con trỏ this trong function (prototype hoặc class) thì this sẽ đại diện cho prototype hay class (function) đó
// */

// // console.log(window.innerHeight,window.innerWidth);
// // console.log(window.location.host);
// // console.log(this.innerHeight);

// // let hocVien = {
// //     id: 1,
// //     hoTenHocVien: 'Lương Gia Thuận',
// //     lop: 'Front End 66',
// //     layThongTinHocVien: function () {
// //         //Trong phương thức khai báo 1 hàm
// //         let hienThiThongTin = () => {
// //             console.log(`Họ tên : ${this.hoTenHocVien} - Lớp : ${this.lop}`);
// //         }
// //         //Gọi hàm đó
// //         hienThiThongTin();

// //     }
// // }
// // hocVien.layThongTinHocVien();


// // function test (name) {

// //     return function (){
// //         console.log('hello ' + name);
// //     }
// // }
// // let hamClick = test ('Thuận');


// // document.querySelector('#tagABC').onclick = hamClick;

// // =============== Default params ==============
// // + Default params: Giúp định nghĩa tham số mặc định cho hàm => Nếu ta gọi hàm không truyền tham số thì hàm sẽ lấy tham số mặc định ngược lại nếu ta truyền tham số thì hàm sẽ thấy tham số ta truyền (không lấy mặc định)

// var getUserInfo = (name, year, age = 2021 - year) => {
//     console.log('Name ' + name);
//     console.log('Age ' + age);
// }
// getUserInfo('Thuận', 2000);

// // =============== Rest params =================


// // var tinhTong = function (a,b) {
// //     console.log(a+b);
// // }

// // var tinhTong = function (a,b,c) {
// //     console.log(a+b+c);
// // }

// var tinhTong = function (thamSo1, ...restParams) { //...restParams là mảng []
//     switch (restParams.length) {
//         case 2: {
//             console.log('Tổng 2 số =', restParams[0] + restParams[1]);
//         } break;
//         case 3: {
//             console.log('Tổng 3 số =', restParams[0] + restParams[1] + restParams[2]);
//         }; break;
//         default: {
//             console.log('Tham số không hợp lệ !');
//         }
//     }
// }
// tinhTong('Bài Toán', 1, 2, 3);

// // ===================== Spread Operator ======================

// let sinhVien1 = { maSV: 1, hoTen: 'Lương Gia Thuận' }
// let sinhVien2 = { ...sinhVien1, lop: 'Front End 66', hoTen: 'Lương Gia Thuận 2' };

// sinhVien2.maSV = 2;
// // sinhVien2.hoTen = 'Thuận Đẹp Trai';

// console.log('sinhVien1', sinhVien1);
// console.log('sinhVien2', sinhVien2);

// let Arr1 = [1, 2, 3, 4];
// let Arr2 = [...Arr1, 5];
// // Arr2.push(7);

// console.log('Arr1', Arr1);
// console.log('Arr2', Arr2);

// //======================== Destructuring ===================


// let sanPham = {
//     maSP: 1,
//     tenSP: 'IPHONE',
//     hinhAnh: 'http://picsum.photos/200/200',
//     thongTinSanPham: function () {
//         console.log('Mã sản phẩm', sanPham.maSP);
//         console.log('Tên sản phẩm', sanPham.tenSP);
//         console.log('Hình ảnh sản phẩm', sanPham.hinhAnh);
//     }
// }
// //es5
// // let maSP = sanPham.maSP;
// // let tenSP = sanPham.tenSP;
// // let hinhAnh = sanPham.hinhAnh;
// // let thongTinSanPham = sanPham.thongTinSanPham;

// //es6
// let { maSP, tenSP, ...restParams } = sanPham;

// // console.log('restParams',restParams);

// //======================== Object literal ======================
// // + Từ tên biến tạo ra tên thuộc tính 
// //
// let fName = 'Mị';
// let myObj = {
//     name: fName,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// console.log('myObj', myObj);

// //Có thể truyền giá trị vào làm tên thuộc tính 
// let tenThuocTinh = 'Mã học viên';
// let hocVien = {
//     [tenThuocTinh]: '001',
//     tenHocVien: 'Lương Gia Thuận'
// }
// console.log(`Học Viên`, hocVien[tenThuocTinh]);

// // =========================== For In - For Of =============================

// //(1) For in : Ngoài duyệt array ra for in còn dùng để duyệt các thuộc tính object
// let mangSanPham = [
//     { maSP: 1, tenSP: 'IPHONE X', gia: 1000, hinhAnh: 'http://picsum.photos/200/200' },
//     { maSP: 2, tenSP: 'IPHONE XS', gia: 2000, hinhAnh: 'http://picsum.photos/200/200' },
//     { maSP: 3, tenSP: 'IPHONE XS MAX', gia: 3000, hinhAnh: 'http://picsum.photos/200/200' },
// ]
// //Mỗi lần duyệt lấy ra index của mảng
// // for (let index in mangSanPham) { //index = 0 -> ... length -1
// //     //Mỗi lần duyệt lấy ra 1 sản phẩm
// //     let sanPham = mangSanPham[index];

// //     console.log('index',index);
// //     console.log('mangSanPham',mangSanPham[index]);
// //     console.log('mangSanPham',sanPham);
// // }


// var nguoiDung = {
//     taiKhoan: 'giathuanluong',
//     matKhau: '123456',
//     email: 'giathuanluong@gmail.com',
//     soDienThoai: '09080706'
// }

// //console.log('Tài khoản', nguoiDung.taiKhoan);

// for (let tenThuocTinh in nguoiDung) {

//     console.log(tenThuocTinh, nguoiDung[tenThuocTinh]);
// }


// //For in dùng để duyệt key (thuộc tính) của object, for of dùng để duyệt object của array (mảng)


// //(2) For of : Mỗi lần duyệt lấy ra 1 object trong mảng
// for (let sanPham of mangSanPham) {
//     console.log('sanPham', sanPham);
// }


// --------------------------- Bài Tập -----------------------------

document.querySelector('form').onsubmit = function (e) {
    //Chặn sự kiện submit của browser
    e.preventDefault();

    //Dom đến tất cả các thẻ input trong thẻ form
    let arrInput = document.querySelectorAll('form input');

    console.log('arrInput', arrInput);
    let hocVien = {}
    //Duyệt các thẻ input
    for (let input of arrInput) {
        //Lấy name và value
        // let name = input.name;
        // let value = input.value;
        let { name, value } = input;

        hocVien = { ...hocVien, [name]: value }
    }
    //Tạo table từ object học viên


    console.log('hocVien', hocVien);//{maHocVien:1,tenHocVien:'aaa',...}
    var trHocVien = `<tr>`
    for (let tenThuocTinh in hocVien) {
        trHocVien += `
            <td>${hocVien[tenThuocTinh]}</td>
        `
    }
    trHocVien += `</tr>`;
    document.querySelector('#tableHocVien').innerHTML = trHocVien;
}

// ======================== class =====================

//es5
// function HocVien (ma,ten) {
//     this.maHocVien = ma;
//     this.tenHocVien = ten;
//     this.hienThiThongTin = function () {
//         console.log('Mã học viên',this.maHocVien);
//         console.log('Tên học viên',this.tenHocVien);
//     }
// }

//es6

class HocVien {
    ma = '';
    ten = '';

    constructor(ma, ten) {
        this.maHocVien = ma;
        this.tenHocVien = ten;
    }

    //2 cách khai báo phương thức
    //Cách 1
    hienThiThongTin() {
        console.log('Mã học viên', this.maHocVien);
        console.log('Tên học viên', this.tenHocVien);
    }
    //Cách 2
    hienThiThongTin = () => {
        console.log('Mã học viên', this.maHocVien);
        console.log('Tên học viên', this.tenHocVien);
    }

}

let hv = new HocVien(1, 'Lương Gia Thuận');


// import {LaoCong,arrSinhVien} from './models/LaoCong.js';

// import NhanVienLaoCong from './models/LaoCong.js'

// let laoCong = new LaoCong('Thuận');
// laoCong.maNhanVien = 1;

// console.log('laoCong',laoCong)
// console.log(arrSinhVien)

// let nhanVien = new NhanVienLaoCong('Thuận');
// nhanVien.maNhanVien = 2;
// nhanVien.tinhLuong();
// console.log({nhanVien});


let mangSanPham = [
    { maSP: 1, tenSanPham: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
    { maSP: 2, tenSanPham: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
    { maSP: 3, tenSanPham: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
    { maSP: 4, tenSanPham: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
    { maSP: 5, tenSanPham: 'IPHONE X', gia: 2500, hangSX: 'Apple' },
    { maSP: 6, tenSanPham: 'IPHONE XS', gia: 1500, hangSX: 'Apple' },
    { maSP: 7, tenSanPham: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
    { maSP: 8, tenSanPham: 'Samsung galaxy Note 10 plus', gia: 2000, hangSX: 'Samsung' },
    { maSP: 9, tenSanPham: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
    { maSP: 10, tenSanPham: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
]




//Yêu cầu: Lấy ra các sản phẩm có hangSX = sony

// let arrSony = []
// for (let sanPham of mangSanPham) {
//     if (sanPham.hangSX === 'Sony') {
//         arrSony.push(sanPham);
//     }
// }
// console.log(arrSony);


//filter: là hàm lọc ra các sản phẩm thỏa điều kiện của arrowfunction

let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');

console.log('arrSony', arrSony);

//find: là hàm tìm ra phần tử thỏa điều kiện arrowfunction. Lấy ra sản phẩm đầu tiên tìm thấy. Tìm không thấy thì trả về underfine

let sp5 = mangSanPham.find(sanPham => sanPham.maSP === 5);

if (sp5) {
    console.log('sp5', sp5);
} else {
    console.log('Không tìm thấy');
}



// Bài tập 1: Lấy ra các sản phẩm có giá trên 2000
let SP = mangSanPham.filter(sanPham => sanPham.gia > 2000);
console.log('SP', SP);


// Bài tập 2: Thay đổi tên sản phẩm thứ 10 thành xiaomi mi mix 3
// Cách 1:
// let tenSP = mangSanPham.find(sanPham => sanPham.tenSanPham === 'Xiaomi mi 10')
// if(tenSP) {
//     console.log('tenSP',tenSP);
// }else{
//     console.log('Không tìm thấy');
// }
// let tenSP10 = {...tenSP, tenSanPham:'Xiaomi mi mix 3'};
// console.log('tenSP10',tenSP10);

//Cách 2:
let sp10 = mangSanPham.find(sanPham => sanPham.maSP === 10);
if (sp10) {
    sp10.tenSanPham = 'Xiaomi mi mix 3';
}
console.log(mangSanPham);

// findIndex: Tương tụ find tuy nhiên tìm vị trí phần tử trong mảng nếu không tìm thấy thì trả về -1. (Chỉnh sửa, xóa dữ liệu trên index)

let index = mangSanPham.findIndex(sp => sp.maSP === 9);
if (index !== -1) {
    mangSanPham[index].tenSanPham = 'Điện thoại trung quốc';
    console.log('mangSP', mangSanPham)
    mangSanPham.splice(index, 1);//splice là xóa
} else {
    console.log('Không tìm thấy', index);
}

//foreach: Dùng để duyệt qua các phần tử của mảng để làm thao tác gì đó

mangSanPham.forEach((sanPham, index) => {
    sanPham.gia += 1000;
    console.log('sanPham', sanPham);
})

//map: là phương thức dùng để thực hiện biến đổi từ mảng này sang mảng khác

let htmlCard = mangSanPham.map((sanPham, index) => {

    return `
    <div class="col-4">
        <div class="card text-left">
            <img class="card-img-top" src="http://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
            <div class="card-body">
            <h4 class="card-title">${sanPham.tenSanPham}</h4>
            <p class="card-text">${sanPham.gia}</p>
            </div>
        </div>
    </div>
    `
})

htmlCard.forEach((htmlSanPham, index) => {
    document.querySelector('#danhSachSanPham').innerHTML += htmlSanPham;
})

//reduce: Hàm reduce tương tự hàm map tuy nhiên kết quả trả về là 1 giá trị từ mảng => 1 giá trị

// let mangSanPham = [
//     { maSP: 1, tenSanPham: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
//     { maSP: 2, tenSanPham: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
//     { maSP: 3, tenSanPham: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
//     { maSP: 4, tenSanPham: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
//     { maSP: 5, tenSanPham: 'IPHONE X', gia: 2500, hangSX: 'Apple' },
//     { maSP: 6, tenSanPham: 'IPHONE XS', gia: 1500, hangSX: 'Apple' },
//     { maSP: 7, tenSanPham: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
//     { maSP: 8, tenSanPham: 'Samsung galaxy Note 10 plus', gia: 2000, hangSX: 'Samsung' },
//     { maSP: 9, tenSanPham: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
//     { maSP: 10, tenSanPham: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
// ]

let tongTienSanPham = mangSanPham.reduce((tongTien, sanPham, index) => {
    return tongTien += sanPham.gia;
}, 0)

console.log('Tổng tiền', tongTienSanPham);

//Sử dụng reduce để tạo từ 1 mảng object => 1 chuỗi html card


let stringHTML = mangSanPham.reduce((content, sanPham, index) => {
    return content += `<tr>
        <td>${sanPham.maSP}</td>
        <td>${sanPham.tenSanPham}</td>
        <td><img width="50" height="50" src="http://picsum.photos/id/${sanPham.maSP}/300/300"></td>
        <td>${sanPham.gia}</td>
        <td>${sanPham.hangSX}</td>
    </tr>`
}, '')

document.querySelector('#tblSanPham').innerHTML = stringHTML;
let arrResult = mangSanPham.reduce((result, sanPham, index) => {
    return [...result, `
    <div class="col-4">
        <div class="card text-left">
            <img class="card-img-top" src="http://picsum.photos/id/${sanPham.maSP}/300/300" alt="...">
            <div class="card-body">
            <h4 class="card-title">${sanPham.tenSanPham}</h4>
            <p class="card-text">${sanPham.gia}</p>
            </div>
        </div>
    </div>
    `]
}, []);

console.log(arrResult);

//sort:

// let mangSanPham = [
//     { maSP: 1, tenSanPham: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
//     { maSP: 2, tenSanPham: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
//     { maSP: 3, tenSanPham: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
//     { maSP: 4, tenSanPham: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
//     { maSP: 5, tenSanPham: 'IPHONE X', gia: 2500, hangSX: 'Apple' },
//     { maSP: 6, tenSanPham: 'IPHONE XS', gia: 1500, hangSX: 'Apple' },
//     { maSP: 7, tenSanPham: 'Samsung galaxy s9', gia: 1500, hangSX: 'Samsung' },
//     { maSP: 8, tenSanPham: 'Samsung galaxy Note 10 plus', gia: 2000, hangSX: 'Samsung' },
//     { maSP: 9, tenSanPham: 'Xiaomi mi 9', gia: 5000, hangSX: 'Xiaomi' },
//     { maSP: 10, tenSanPham: 'Xiaomi mi 10', gia: 4500, hangSX: 'Xiaomi' },
// ]

//Sắp xếp chuỗi a -> z và sắp xếp theo số
let arrTen = mangSanPham.sort((sp, spTruocDo) => {
    let tenSanPham = sp.tenSanPham.toLocaleLowerCase().trim();//S

    let tenSPTruoc = spTruocDo.tenSanPham.toLocaleLowerCase().trim();//G

    if (tenSanPham > tenSPTruoc) {
        return 1;
    }
    return -1;
})

// console.log('mangSXTen', mangSanPham);
// mangSanPham.reverse();
// console.log('mangSXTen', mangSanPham);
//Sắp xếp theo số

let arrGia = mangSanPham.sort((sp,spTruocDo) =>{

    return sp.gia - spTruocDo.gia;
})
console.log('mangSanPham theo giá',arrGia);

