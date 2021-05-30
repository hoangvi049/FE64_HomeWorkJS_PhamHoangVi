document.querySelector("#done_5").onclick = function () {
  let input = document.getElementById("input_5").value;
  let n = reverseSonguyenDuong(input);
  renderKetQua5(n);
  // document.getElementById("input_5").value = "";
};

function reverseSonguyenDuong(str) {
  var n = str.split("");
  var reverseStr = n.reverse();
  var newStr = reverseStr.join("");
  return newStr;
}

function renderKetQua5(str) {
  var content = `${str}`;

  document.querySelector(".ketQua_5").innerHTML =
    "Đảo dãy số thành: " + content;
}
