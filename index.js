function drawHourglassV1(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    let half = Math.floor(n / 2);

    for (let j = 0; j < n; j++) {
      if ((i === 0 || i === n - 1) && i !== half) {
        string += "#";
      } else if (i === j || n - i - 1 === j) {
        string += "#";
      } else if (i === half && j === i) {
        string += "#";
        break;
      } else if (j === 0 || j === n - 1) {
        string += "#";
      } else if (j < n - i - 1 && j > i && i <= half) {
        string += "#";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}

function drawHourglassV2(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    let half = Math.floor(n / 2);

    for (let j = 0; j < n; j++) {
      if ((i === 0 || i === n - 1) && i !== half) {
        string += "#";
      } else if (i === j || n - i - 1 === j) {
        string += "#";
      } else if (i === half && j === i) {
        string += "#";
        break;
      } else if (j === 0 || j === n - 1) {
        string += "#";
      } else if (j > n - i - 1 && j < i && i >= half) {
        string += "#";
      } else {
        string += " ";
      }
    }
    string += "\n";
  }
  console.log(string);
}

function drawHourglassV3(n) {
  let time = 0;
  let interval = setInterval(() => {
    for (let i = 0; i < n; i++) {
      let string = "";
      let half = Math.floor(n / 2);

      for (let j = 0; j < n; j++) {
        if ((i === 0 || i === n - 1) && i !== half) {
          string += "#";
        } else if (i === j || n - i - 1 === j) {
          string += "#";
        } else if (i === half && j === i) {
          string += "#";
          break;
        } else if (j === 0 || j === n - 1) {
          string += "#";
        } else if (j < n - i - 1 && j > i && i <= half && i > time) {
          string += "#";
        } else if (j > n - i - 1 && j < i && i >= half && i > n - time - 2) {
          string += "#";
        } else {
          string += " ";
        }
      }

      string += "\n";

      process.stdout.write(string);
    }
    time++;
    if (time === Math.floor(n / 2)) clearInterval(interval);
  }, 1000);
}
let n = 20;
// to see the other examples of functions just uncomment and comment the other functions!
drawHourglassV1(n);
// drawHourglassV2(n);
// drawHourglassV3(n);
