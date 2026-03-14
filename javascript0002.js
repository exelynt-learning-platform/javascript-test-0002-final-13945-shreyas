let rows = 5;

function nCr(n, r) {
    let res = 1;
    for (let i = 0; i < r; i++) {
        res = res * (n - i) / (i + 1);
    }
    return Math.round(res);
}

for (let i = rows - 1; i >= 0; i--) {
    let line = "";

    
    for (let s = 0; s < rows - i - 1; s++) {
        line += " ";
    }

 
    for (let j = 0; j <= i; j++) {
        line += nCr(i, j) + " ";
    }

    console.log(line);
}
