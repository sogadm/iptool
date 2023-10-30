// 搜索函数
var inputElement; // 将inputElement声明在全局作用域

window.onload = function () {
  var macmac = document.getElementById("macmac");
  var macname = document.getElementById("macname");

  inputElement = document.querySelector("input");
  inputElement.addEventListener("input", () => {
    if (inputElement.value.length > 6) {
      inputElement.value = inputElement.value.slice(0, 6);
    }
  });
};

function search() {
  var input = document.getElementById("searchInput").value.toUpperCase(); // 将输入框的值转换为大写字母
  var pattern = /^[0-9A-Fa-f]+$/; // 用正则表达式判断输入是否为16进制字符串
  if (input === "") {
    document.getElementById("macmac").innerText = "MAC地址"; // 输入框为空时显示
    document.getElementById("macname").innerHTML = "厂商名称</br>非唯一时随机显示"; // 输入框为空时显示
    return;
  }
  if (!pattern.test(input)) {
    input = input.replace(/[^0-9A-Fa-f]/g, "").substring(0, 6); // 去掉非16进制字符并只保留前6位16进制字符
    document.getElementById("searchInput").value = input;
  }
  var found = false; // 标记是否找到匹配项
  for (var i = 0; i < data.length; i++) {
    if (data[i][0].indexOf(input) !== -1) {
      // 如果16进制字符串包含搜索内容
      document.getElementById("macmac").innerText = data[i][0];
      var a = document.createElement("a");
      a.href = "//www.baidu.com/s?wd=" + encodeURIComponent(data[i][1]);
      a.target = "_blank";
      a.innerHTML = data[i][1];
      document.getElementById("macname").innerHTML = "";
      document.getElementById("macname").appendChild(a);
      found = true; // 标记找到匹配项
      break; // 找到匹配项后退出循环
    }
  }
  if (!found) {
    // 如果没有找到匹配项
    document.getElementById("macmac").innerText = "出错了!";
    document.getElementById("macname").innerHTML = "没能找到信息</br>重新输入MAC的前 6 位!";
  }
}