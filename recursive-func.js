function sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}

// Test cases
console.log(sum(1)); // Expected output: 1
console.log(sum(3)); // Expected output: 15 (1 + 2 + 3 + 4 + 5)
console.log(sum(10)); // Expected output: 55 (1 + 2 + 3 + ... + 10)
