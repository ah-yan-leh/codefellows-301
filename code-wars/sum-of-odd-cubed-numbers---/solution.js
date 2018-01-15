function cubeOdd(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
     if (Number.isInteger(arr[i]) !== true) { return undefined }
     let x = Math.pow(arr[i], 3);
     if (x % 2) {
       sum += x;
     }
    }
    return sum;
    }