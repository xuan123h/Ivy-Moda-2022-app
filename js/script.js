// 1. Bắt sự kiện scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  // Chiêu dọc
  x = window.pageYOffset;
  if (x > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
//
// 2. Slider
var dotItem = document.querySelectorAll(".dot");
var arrayImg = [];
function loadImg() {
  for (var i = 0; i < arrayImg.length; i++) {
    arrayImg[i] = new Image();
    arrayImg[i].src = "../assets/img/slide" + (i + 1) + ".png";
  }
}
var arrayImg2 = [
  "../assets/img/slide1.png",
  "../assets/img/slide2.png",
  "../assets/img/slide3.png",
  "../assets/img/slide4.png",
  "../assets/img/slide5.png",
];
var hinh = document.getElementById("hinh");
var index = 0;
function next() {
  if (index === arrayImg2.length - 1) index = -1;
  index++;
  hinh.src = arrayImg2[index];
}
function prev() {
  if (index === 0) index = arrayImg2.length;
  index--;
  hinh.src = arrayImg2[index];
}
var t = 0;
function play() {
  clearInterval(t);
  t = setInterval("next()", 4000);
}
//
// 3. Menu - Slidebar - Category
const itemsliderbar = document.querySelectorAll(".category-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});
//
// --------------------- PRODUCT -------------------------
// Tab trong javascript
const baoquan = document.querySelector(".baoquan");
const chitiet = document.querySelector(".chitiet");
if (baoquan) {
  baoquan.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}
if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}
const button = document.querySelector(".product-content-right-bottom-top");
if (button) {
  button.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
// 4. Bấm vào ảnh
const bigImg = document.querySelector(".product-content-left-big-img img");
const smalImg = document.querySelectorAll(
  ".product-content-left-small-img img"
);
smalImg.forEach(function (imgItem, X) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});
// Validation
function validate() {
  var name = document.frmReg.txtName.value;
  var email = document.frmReg.txtEmail.value;
  var mobile = document.frmReg.txtMobile.value;
  // ----------------------------------------
  var msgName = document.getElementById("nameErr");
  var msgEmail = document.getElementById("emailErr");
  var msgMobile = document.getElementById("mobileErr");

  var hasErrorName = true;
  var hasErrorEmail = true;
  var hasErrorMobile = true;

  // Validate name
  if (name == "") {
    msgName.innerHTML = "Họ và tên không được để trống !";
  } else {
    msgName.innerHTML = "";
    hasErrorName = false;
  }
  // Validate số điện thoại
  var regex = /^0[0-9]{9}$/;
  if (regex.test(mobile) == false) {
    msgMobile.innerHTML =
      "Sai định dạng số điện thoại (Có 10 ký tự và bắt đầu bằng số 0)";
  } else {
    msgMobile.innerHTML = "";
    hasErrorMobile = false;
  }

  // Validate email
  var regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email) == false) {
    msgEmail.innerHTML = "Sai định dạng email";
  } else {
    msgEmail.innerHTML = "";
    hasErrorEmail = false;
  }
  // -------------------------------
  if (hasErrorName == true || hasErrorMobile == true || hasErrorEmail == true) {
    return false;
  } else {
    alert("Đăng ký thành công");
    return true;
  }
}
// Modal
// Modal Show
var btnOpen = document.querySelector(".open-modal-btn");
var modal = document.querySelector(".modal");
var iconClose = document.querySelector(".modal__header i");
var btnClose = document.querySelector(".modal__footer button");

function toggleModal() {
  modal.classList.toggle("hide");
}
btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
modal.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    toggleModal();
  }
});
// Fetch Api
async function getProductApi() {
  const response = await fetch(
    `https://6278f089d00bded55ae17142.mockapi.io/sendo/product`
  );
  const data = await response.json();
  console.log(data);
}
getProductApi();
