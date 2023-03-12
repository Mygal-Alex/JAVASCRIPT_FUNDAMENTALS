(() => {
    const arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
    function occurrence(array) {
    return array.sort(
        (a, b) =>
        array.filter((v) => v === a).length -
        array.filter((v) => v === b).length
    );
    }
    const last = occurrence(arr);
    const lastIn = last[last.length - 1];
    let us = [];
    for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === lastIn + 1) {
        us = arr.splice(arr[i]);
    }
    }
    console.log(arr);
    console.log(us);
})();
