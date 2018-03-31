const alfabet = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,./';

const addKeyboardLayout = (alfabet) => {
    if (alfabet == false || typeof alfabet !== 'string') {
        alert('Please enter non-empty string');
        return null;
    }

 const resArr = [];
 const breakes = [0, 12, 23, 34]
   for (let i = 0; i < breakes.length - 1; i++) {
    resArr.push(alfabet.slice(breakes[i], breakes[i+1]));
  }
  return resArr;
}

  const array = addKeyboardLayout(alfabet);

console.log(array)

const getRandCharInAlph = (str) => {
    const pos = Math.floor((Math.random() * str.length));
    return str[pos];
}

const getRandCharInRow = (arr, num) => {
    if (typeof num !== 'number' || num < 1 || num > arr.length) {
        console.log(`Please call this function with number from 1 to ${arr.length}`);
        return null;
    }

    const targetString = arr[num - 1]

    if (typeof arr[num - 1] !== 'string' || num < 0 || num > arr.length) {
        console.log(`PLease check if the array consist of non-empty strings`);
        return null;
    }

    return getRandCharInAlph(targetString);
}

console.log(getRandCharInRow(array, 0));
console.log(getRandCharInRow(array, 1));
console.log(getRandCharInRow(array, 2));
console.log(getRandCharInRow(array, 3));
console.log(getRandCharInRow(array, 4));
