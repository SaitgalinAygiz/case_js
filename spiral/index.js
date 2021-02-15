matrix(5).map(mat => console.log(mat))

function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(new Array(n).fill(0));
    }

    let counter = 1,
        startColumn = 0,
        endColumn = n - 1,
        startRow = 0,
        endRow = n - 1

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endColumn] = counter;
            counter++;
        }

        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return result;
}