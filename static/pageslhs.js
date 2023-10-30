function convertFromBps() {
  var bps = document.getElementById("bps").value;
  if (isNaN(bps)) {
    clearAllInputs();
    return;
  }
  document.getElementById("kbps").value = (bps / 1000).toFixed(0);
  document.getElementById("mbps").value = (bps / 1000000).toFixed(2);
  document.getElementById("gbps").value = (bps / 1000000000).toFixed(2);
  document.getElementById("kbs").value = (bps / 8000).toFixed(0);
  document.getElementById("mbs").value = (bps / 8000000).toFixed(2);
  document.getElementById("gbs").value = (bps / 8000000000).toFixed(2);
}
function convertFromKbps() {
  var kbps = document.getElementById("kbps").value;
  if (isNaN(kbps)) {
    clearAllInputs();
    return;
  }
  document.getElementById("bps").value = (kbps * 1000).toFixed(0);
  document.getElementById("mbps").value = (kbps / 1000).toFixed(2);
  document.getElementById("gbps").value = (kbps / 1000000).toFixed(2);
  document.getElementById("kbs").value = (kbps / 8).toFixed(0);
  document.getElementById("mbs").value = (kbps / 8000).toFixed(2);
  document.getElementById("gbs").value = (kbps / 8000000).toFixed(2);
}
function convertFromMbps() {
  var mbps = document.getElementById("mbps").value;
  if (isNaN(mbps)) {
    clearAllInputs();
    return;
  }
  document.getElementById("bps").value = (mbps * 1000000).toFixed(0);
  document.getElementById("kbps").value = (mbps * 1000).toFixed(0);
  document.getElementById("gbps").value = (mbps / 1000).toFixed(2);
  document.getElementById("kbs").value = (mbps * 125).toFixed(0);
  document.getElementById("mbs").value = (mbps / 8).toFixed(2);
  document.getElementById("gbs").value = (mbps / 8000).toFixed(2);
}
function convertFromGbps() {
  var gbps = document.getElementById("gbps").value;
  if (isNaN(gbps)) {
    clearAllInputs();
    return;
  }
  document.getElementById("bps").value = (gbps * 1000000000).toFixed(0);
  document.getElementById("kbps").value = (gbps * 1000000).toFixed(0);
  document.getElementById("mbps").value = (gbps * 1000).toFixed(0);
  document.getElementById("kbs").value = (gbps * 125000).toFixed(0);
  document.getElementById("mbs").value = (gbps * 125).toFixed(0);
  document.getElementById("gbs").value = (gbps / 8).toFixed(2);
}
function convertFromKbs() {
  var kbs = document.getElementById("kbs").value;
  if (isNaN(kbs)) {
    clearAllInputs();
    return;
  }
  document.getElementById("bps").value = (kbs * 8000).toFixed(0);
  document.getElementById("kbps").value = (kbs * 8).toFixed(0);
  document.getElementById("mbps").value = (kbs / 125).toFixed(2);
  document.getElementById("gbps").value = (kbs / 125000).toFixed(2);
  document.getElementById("mbs").value = (kbs / 1024).toFixed(2);
  document.getElementById("gbs").value = (kbs / 1048576).toFixed(2);
}
function convertFromMbs() {
  var mbs = document.getElementById("mbs").value;
  if (isNaN(mbs)) {
    clearAllInputs();
    return;
  }
  document.getElementById("bps").value = (mbs * 8000000).toFixed(0);
  document.getElementById("kbps").value = (mbs * 8000).toFixed(0);
  document.getElementById("mbps").value = (mbs * 8).toFixed(0);
  document.getElementById("gbps").value = (mbs / 125).toFixed(2);
  document.getElementById("kbs").value = (mbs * 1024).toFixed(0);
  document.getElementById("gbs").value = (mbs / 1024).toFixed(2);
}
function convertFromGbs() {
  var gbs = document.getElementById("gbs").value;
  if (isNaN(gbs)) {
    clearAllInputs();
    return;
  }
  document.getElementById("bps").value = (gbs * 8000000000).toFixed(0);
  document.getElementById("kbps").value = (gbs * 8000000).toFixed(0);
  document.getElementById("mbps").value = (gbs * 8000).toFixed(0);
  document.getElementById("gbps").value = (gbs * 8).toFixed(0);
  document.getElementById("kbs").value = (gbs * 1048576).toFixed(0);
  document.getElementById("mbs").value = (gbs * 1024).toFixed(0);
}
function clearAllInputs() {
  document.getElementById("bps").value = "";
  document.getElementById("kbps").value = "";
  document.getElementById("mbps").value = "";
  document.getElementById("gbps").value = "";
  document.getElementById("kbs").value = "";
  document.getElementById("mbs").value = "";
  document.getElementById("gbs").value = "";
}
