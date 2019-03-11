function clearContent() {
  document.getElementById("dec").value = "";
  document.getElementById("hex").value = "";
  document.getElementById("bin").value = "";
}

function calculate() {
  let dec = parseInt(document.getElementById("dec").value);
  let bin = document.getElementById("bin").value;
  let hex = document.getElementById("hex").value;
  if(dec){
    document.getElementById("bin").value = dec.toString(2);
    document.getElementById("hex").value = dec.toString(16);
  } else if (bin) {
    let decimal = parseInt(bin, 2);
    document.getElementById("dec").value = decimal;
    document.getElementById("hex").value = decimal.toString(16);
  } else if (hex) {
    let decimal = parseInt(hex, 16);
    document.getElementById("dec").value = decimal;
    document.getElementById("bin").value = decimal.toString(2);
  }
}

