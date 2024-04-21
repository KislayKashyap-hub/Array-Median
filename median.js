function medianArr() {
    const studentmarks = [70, 55, 38, 57, 98, 64, 77, 45, 55, 33];
    //                     0, 1 ,  2,  3,  4, 5,  6,  7,   8,  9
    const sortValue = studentmarks.sort((a, b) => a - b);
    console.log("Sorted array :", sortValue);
    let median;
    let low = 0;
    let high = sortValue.length - 1;
    let mid = Math.floor((low + high) / 2);
    if (sortValue.length % 2 === 0) {
        median = (sortValue[mid - 1] + sortValue[mid]) / 2;
    } else {
        median = sortValue[Math.floor(sortValue.length / 2)];
    }
    console.log("Median:", mid, median);


} medianArr();