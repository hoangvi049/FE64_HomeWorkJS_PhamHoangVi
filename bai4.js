let arrNum4 = [];
document.querySelector("#done_4").onclick = function () {
  let input = document.querySelector("#input_4").value;
  input = parseInt(input);

  timUoc(arrNum4, input);
  renderKetQua4(arrNum4);
  arrNum4.length = 0;
};
function timUoc(arrNum, n) {
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) {
      arrNum.push(i);
    }
  }
}

function renderKetQua4(arrNum) {
  var n = 0;
  var content = "";
  for (let i = 0; i < arrNum.length; i++) {
    if ((n = arrNum[i])) {
      content += `${n} `;
    }
  }
  document.querySelector(".ketQua_4").innerHTML = "Các ước số là: " + content;
}

// function renderKetQua4(arrNum, n) {
//   let content = "";
//   for (let i = 0; i <= n; i++) {
//     if (n % i == 0) {
//       arrNum.push(i);
//     }
//     content += `${arrNum[i]} `;
//   }
//   document.querySelector(".ketQua_4").innerHTML = "Các ước số là: " + content;
// }
