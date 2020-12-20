import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>118. Pascal's Triangle</h1>
<div>
LeetCode Challenges
</div>
`;

///////////////////////////////////////////
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = Array(numRows);
  // if (numRows >= 2) {
  //   triangle.fill([1, 1]);
  //   triangle[0] = [1];

  //   // console.log(triangle);
  // } else {
  //   triangle[0] = [1];
  // }

  for (let i = 0; i < numRows; i++) {
    triangle[i] = Array(i + 1);
    triangle[i].fill(1);
  }

  for (let i = 2; i < numRows; i++) {
    let prevRow = i - 1;

    for (let j = 1; j < triangle[i].length - 1; j++) {
      let prevCol = j - 1;
      console.log(triangle[prevRow][prevCol]);
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  // console.log(triangle);

  // triangle.forEach((row) => {
  //   row.splice(1, 0, "this guy");
  //   if (triangle.indexOf(row) > 0) {
  //     // for (let i = 1; i < row.length; i++) {
  //     // console.log(triangle[i]);

  //     // console.log(row.valueOf());

  //     // ..get the value in the previous line
  //     // let solution = triangle[row - 1];
  //     // console.log(solution);
  //     // }
  //   }
  // });

  // let addedValue = 0;
  // // let nextRow = 0;
  // for (let i = 2; i < triangle.length - 1; i++) {
  //   // console.log(i);
  //   let nextRow = i + 1;
  //   console.log("Next row is  ; " + nextRow);
  //   // triangle[i].splice(i + 1, 0, addedValue);

  //   for (let j = 0; j < triangle[i].length - 1; j++) {
  //     console.log("Triangle row " + i + " is " + triangle[i].length + " long.");
  //     console.log("j is : " + j);
  //     // console.log("triangle thing   "+ triangle[i][j+1])
  //     addedValue = Number(j + (j + 1));
  //     console.log("added value is : " + addedValue);
  //     console.log(triangle[nextRow]);
  //     triangle[nextRow].splice(j + 1, 0, addedValue);

  //     // arrayTotals.push(addedValue);
  //     // console.log(arrayTotals);
  //     // triangle[i + 1].splice(j + 1, 0, addedValue);
  //     // triangle[i + 1].splice(triangle[i + 1], 0, pushNumber); //+ (triangle[i][j] + 1);
  //     // console.log("pushNumber is : " + pushNumber);
  //   }
  //   // .splice(i, 0, pushNumber);
  // }
  console.log(triangle);
  return triangle;
};

generate(5);
