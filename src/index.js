module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  let needReverse = false;
  let newArr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    let item = matrix[i];
    if (needReverse) item = item.reverse();
    needReverse = !needReverse;
    newArr = newArr.concat(item);
  }
  return newArr;
};
