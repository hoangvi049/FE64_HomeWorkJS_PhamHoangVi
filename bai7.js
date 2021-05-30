let arrNum7 = [];
document.querySelector("#done_7").onclick = function () {
  let input = document.getElementById("input_7").value;
  input = parseInt(input);
  //   renderKetQua7(input);
  //   tinhCuuChuong(arrNum7, input);
  renderKetQua7(arrNum7, input);
  arrNum7.length = "";
  document.getElementById("input_7").value = "";
};

// function tinhCuuChuong(arrNum, n) {
//   let T = 0;
//   for (let i = 0; i <= 10; i++) {
//     T = n * i;
//     arrNum.push(T);
//   }
// }

function renderKetQua7(arrNum, n) {
  var content = "";
  let T = 0;
  for (var i = 0; i <= 10; i++) {
    T = n * i;
    arrNum.push(T);
    content += `
        <p>${n} x ${i} = ${arrNum[i]}</p>
        `;
  }
  document.querySelector(".ketQua_7").innerHTML = content;
}
