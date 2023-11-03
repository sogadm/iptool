function calculate() {
  let ip = document.getElementById("ip").value;
  let subnet = document.getElementById("subnetValue").innerText;
  let result = document.getElementById("result");
  let ipParts = ip.split(".");
  let subnetParts = subnet.split(".");
  let networkAddress = "";
  let broadcastAddress = "";
  let hostMin = "";
  let hostMax = "";
  let numHosts = "";

  // 实时检查IP格式是否正确
  if (!isValidIp(ip)) {
    result.innerHTML = "请正确输入IP地址";
    return;
  }

  for (let i = 0; i < 4; i++) {
    let ipPart = parseInt(ipParts[i]);
    let subnetPart = parseInt(subnetParts[i]);

    let subnetMaskPart = ipPart & subnetPart;
    let hostMinPart = subnetMaskPart;
    let hostMaxPart = subnetMaskPart | (~subnetPart & 255);
    networkAddress += subnetMaskPart.toString();
    broadcastAddress += hostMaxPart.toString();
    hostMin += hostMinPart.toString();
    hostMax += hostMaxPart.toString();
    if (i < 3) {
      networkAddress += ".";
      broadcastAddress += ".";
      hostMin += ".";
      hostMax += ".";
    }
  }
  numHosts = Math.pow(2, 32 - subnetToBits(subnet)) - 2;
  hostMin = networkAddress.split(".");
  hostMin[3] = parseInt(hostMin[3]) + 1;
  hostMin = hostMin.join(".");
  hostMax = broadcastAddress.split(".");
  hostMax[3] = parseInt(hostMax[3]) - 1;
  hostMax = hostMax.join(".");
  result.innerHTML =
    "<table>" +
    "<tr><td>第一</td><td>" +
    hostMin +
    "</td></tr>" +
    "<tr><td>最后</td><td>" +
    hostMax +
    "</td></tr>" +
    "<tr><td>可用</td><td>" +
    numHosts +
    "</td></tr>" +
    "<tr><td>网络</td><td>" +
    networkAddress +
    "</td></tr>" +
    "<tr><td>广播</td><td>" +
    broadcastAddress +
    "</td></tr>" +
    "</table>";
}

function isValidIp(ip) {
  let ipParts = ip.split(".");
  if (ipParts.length !== 4) {
    return false;
  }
  for (let i = 0; i < ipParts.length; i++) {
    let ipPart = parseInt(ipParts[i]);
    if (isNaN(ipPart) || ipPart < 0 || ipPart > 255) {
      return false;
    }
  }
  return true;
}

function subnetToBits(subnet) {
  let subnetParts = subnet.split(".");
  let bits = 0;
  for (let i = 0; i < 4; i++) {
    let subnetPart = parseInt(subnetParts[i]);
    bits += countBits(subnetPart);
  }
  return bits;
}

function countBits(num) {
  let bits = 0;
  while (num > 0) {
    bits++;
    num = num & (num - 1);
  }
  return bits;
}

// IP变更后立即重新计算
window.onload = function () {
  document.getElementById("ip").dispatchEvent(new Event("input"));
};

// 滑块值列表
var subnetValues = [
  "255.255.0.0",
  "255.255.128.0",
  "255.255.192.0",
  "255.255.224.0",
  "255.255.240.0",
  "255.255.248.0",
  "255.255.252.0",
  "255.255.254.0",
  "255.255.255.0",
  "255.255.255.128",
  "255.255.255.192",
  "255.255.255.224",
  "255.255.255.240",
  "255.255.255.248",
  "255.255.255.252",
  "255.255.255.254",
];

function updateValue(value) {
  document.getElementById("subnetValue").innerText = subnetValues[value];
}

// 计算掩码位数
function calculateMaskBits(mask) {
  var bits = 0;
  mask.split(".").forEach(function (octet) {
    var binary = parseInt(octet, 10).toString(2);
    bits += binary.split("1").length - 1;
  });
  return bits;
}

function updateValue(value) {
  var mask = subnetValues[value];
  var bits = calculateMaskBits(mask);
  document.getElementById("subnetValue").innerText = mask + "/" + bits;
  calculate();
}

// 在页面加载时调用函数以更新显示的子网值
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("ip").dispatchEvent(new Event("input"));
});

document.addEventListener('DOMContentLoaded', function () {
  updateValue(document.getElementById("subnet").value);
});
window.onload = function() {
  // IP变更后立即重新计算
  document.getElementById("ip").dispatchEvent(new Event("input"));

  // 在页面加载时调用函数以更新显示的子网值
  // updateValue(document.getElementById("subnet").value);
};