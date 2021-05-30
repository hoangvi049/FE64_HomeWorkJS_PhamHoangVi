document.querySelector("#done_3").onclick = function () {
  let input = document.querySelector("#input_3").value;
  input = parseInt(input);
  let S = tinhTong(input) + 2 * input;
  renderKetQua3(S);
};

function tinhTong(n) {
  let S = 0;
  if (n < 2) {
    S = n;
  } else {
    for (let i = 2; i <= n; i++) {
      S += i;
    }
  }
  return S;
}

function renderKetQua3(n) {
  var content = "";
  if (n < 2) {
    content = `<p class = "text-danger">Mời nhập số lớn hơn 2</p>`;
  } else {
    content = `<p class = "">(2+3+4...+n)+2n= ${n}</p>`;
  }
  document.querySelector(".ketQua_3").innerHTML = content;
}
