let arrNum = [];
document.querySelector("#next_2").onclick = function () {
  let input = document.getElementById("input_2").value;
  input = parseInt(input);
  arrNum.push(input);
  document.getElementById("input_2").value = "";
};

document.querySelector("#done_2").onclick = function () {
  renderKetQua2(arrNum);
  arrNum.length = 0;
};

function renderKetQua2(arrNum) {
  var content = "";
  for (var i = 0; i < arrNum.length; i++) {
    var n = arrNum[i];

    if (kiemTraNguyenTo(n) == true) {
      content += `${n} `;
    }
  }
  document.querySelector(".ketQua_2").innerHTML =
    "Các số nguyên tố là: " + content;
}

function kiemTraNguyenTo(n) {
  var flag = true;

  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    for (var i = 3; i < Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
