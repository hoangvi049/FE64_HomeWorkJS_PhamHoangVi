document.querySelector("#done_9").onclick = function () {
  let input1 = document.getElementById("input_9-1").value;
  let input2 = document.getElementById("input_9-2").value;

  //   console.log(tinhSo(Number(input1), Number(input2)));
  tinhSo(Number(input1), Number(input2));
};

function tinhSo(m, n) {
  var content = "";
  for (i = 0; i < n / 2; i++) {
    if (2 * i + 4 * (m - i) === n) {
      content = `<p> Số gà là: ${i}</p>
             <p> Số chó là: ${m - i}</p>
            `;
    }
    //   console.log("gà ", i, "chó ", m - i);
    // } else {
    //   content = `<p class="text-danger">Thông số không chính xác</p>`;
    // }
  }
  document.querySelector(".ketQua_9").innerHTML = content;
}
