function clearContent() {
  document.getElementById("dec").value = "";
  document.getElementById("hex").value = "";
  document.getElementById("bin").value = "";
}

function hexToBin(hex) {
  let bin='';
  let i=0;
  if(hex&&hex[0]==='0'){
    i = 1;
    bin = '0';
  }
  for(i;i<hex.length;i++){
    switch(hex[i]){
      case '0':
        bin += '0000';
        break;
      case '1':
        bin += '0001';
        break;
      case '2':
        bin += '0010';
        break;
      case '3':
        bin += '0011';
        break;
      case '4':
        bin += '0100';
        break;
      case '5':
        bin += '0101';
        break;
      case '6':
        bin += '0110';
        break;
      case '7':
        bin += '0111';
        break;
      case '8':
        bin += '1000';
        break;
      case '9':
        bin += '1001';
        break;
      case 'a':
      case 'A':
        bin += '1010';
        break;
      case 'b':
      case 'B':
        bin += '1011';
        break;
      case 'c':
      case 'C':
        bin += '1100';
        break;
      case 'd':
      case 'D':
        bin += '1101';
        break;
      case 'e':
      case 'E':
        bin += '1110';
        break;
      case 'f':
      case 'F':
        bin += '1111';
        break;
      case '.':
        bin += '.';
        break;
      default:
        alert("error");
    }
  }
  let flag = 0;
  return bin;
}

function binToDec(bin) {
  let dec = 0;
  let i;
  for(i=0;i<bin.length;i++){
    if(bin[i]==='.')
      break;
  }
  for(let j=i-1;j>=0;j--){
    if(bin[j]==='1'){
      dec += Math.pow(2, i-j-1);
    }
  }
  for(let j=i+1;j<bin.length;j++){
    if(bin[j]==='1'){
      dec += Math.pow(2, i-j);
    }
  }
  return dec.toString();
}


function calculate() {
  let dec = parseFloat(document.getElementById("dec").value);
  let bin = document.getElementById("bin").value;
  let hex = document.getElementById("hex").value;
  if(dec){
    document.getElementById("bin").value = dec.toString(2);
    document.getElementById("hex").value = dec.toString(16);
  } else if (bin) {
    let decimal = binToDec(bin);
    document.getElementById("dec").value = decimal;
    let decimalFloat = parseFloat(decimal);
    document.getElementById("hex").value = decimalFloat.toString(16);
  } else if (hex) {
    let bin = hexToBin(hex);
    document.getElementById("bin").value = bin;
    document.getElementById("dec").value = binToDec(bin);
  }
}

