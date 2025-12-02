const output = document.getElementById("output");

// Function to simulate delayed promise
function delayPromise(value, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

// Initial array
const arr = [1, 2, 3, 4];

// Start the promise chain
delayPromise(arr, 3000) // resolves after 3 seconds
  .then((data) => {
    const evens = data.filter((num) => num % 2 === 0);

    return delayPromise(evens, 1000); // 1-second delay for first transformation
  })
  .then((evenNums) => {
    output.innerHTML = evenNums; // Show [2, 4]

    const multiplied = evenNums.map((num) => num * 2);

    return delayPromise(multiplied, 2000); // 2-second delay for second transformation
  })
  .then((finalArr) => {
    output.innerHTML = finalArr; // Show [4, 8]
  });

