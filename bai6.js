document.querySelector("#done_6").onclick = function () {
  let input = document.getElementById("input_6").value;
  input = parseInt(input);
  timSoLonNhat(input);
};

function timSoLonNhat(n) {
  var x = 0;
  var content = "";
  for (let i = 0; i <= n; i++) {
    x += i;
    if (x + i >= n) {
      content += `${i}`;
      break;
    }
  }
  document.querySelector(".ketQua_6").innerHTML =
    "Giá trị lớn nhất để 1+2+...+n ≤100 là: " + content;
}
