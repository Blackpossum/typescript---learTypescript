// simple adding function that add 0 to num

// let inputNumber = 8;

// function sinpleAdd(num: number): number {
//   let result = 0;
//   for (let i = 0; i <= num; i++) {
//     result = result + i;
//     result = num;
//   }
//   return num;
// }

// console.log(sinpleAdd(inputNumber));

// capitalize first letter
// let inputWords: string = "hello world!";

// function capitalizeLetter(str: string): string {
//   let splitInput: string[] = str.split(" ");
//   let capitalize = splitInput.map(
//     (Element) => Element.charAt(0).toUpperCase() + Element.slice(1)
//   );
//   console.log(capitalize);
//   str = capitalize.join(" ");
//   return str;
// }
// console.log(capitalizeLetter(inputWords));

// soal sum of three
function ThreeSum(arr: number[]): boolean {
  if (arr.length < 4) {
    return false;
  }

  const target = arr[0];

  const findTriplet =(index1: number, index2: number, index3: number): boolean => {
    const sum = arr[index1] + arr[index2] + arr[index3];
    return sum === target;
  }

  for (let i = 1; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (findTriplet(i, j, k)) {
          // Log the original array and the triplet
          console.log('Original Array:', arr);
          console.log('Triplet:', [arr[i], arr[j], arr[k]]);
          let result :Boolean = true;
          return true;
        }
      }
    }
  }

  return false;
}

// Example usage
const arr: number[] = [64, 3, 50, 45, 32, 14, 50, 45, 31, 66, 22, 15, 16, 20];
const result: boolean = ThreeSum(arr);
console.log(result); // Output: true




