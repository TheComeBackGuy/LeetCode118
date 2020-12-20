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

  for (let i = 0; i < numRows; i++) {
    triangle[i] = Array(i + 1);
    triangle[i].fill(1);
  }

  for (let i = 2; i < numRows; i++) {
    // let prevRow = i - 1;

    for (let j = 1; j < triangle[i].length - 1; j++) {
      // let prevCol = j - 1;
      // console.log(triangle[prevRow][prevCol]);
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }
  console.log(triangle);
  return triangle;
};

generate(5);
