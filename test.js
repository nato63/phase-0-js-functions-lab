// Copy your functions from index.js or define them here
function calculateTax(amount) {
    const taxRate = 0.10;
    const tax = amount * taxRate;
    return tax;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

function isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/\s/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
}

// Test functions
function runTests() {
    console.log("=== Running Tests ===\n");

    // Test 1: calculateTax
    console.log("Test 1: calculateTax(100)");
    console.log("Expected: 10");
    console.log("Result:", calculateTax(100));
    console.log(calculateTax(100) === 10 ? "✅ PASSED\n" : "❌ FAILED\n");

    // Test 2: convertToUpperCase
    console.log("Test 2: convertToUpperCase('hello')");
    console.log("Expected: HELLO");
    console.log("Result:", convertToUpperCase('hello'));
    console.log(convertToUpperCase('hello') === 'HELLO' ? "✅ PASSED\n" : "❌ FAILED\n");

    // Test 3: findMaximum
    console.log("Test 3: findMaximum(15, 30)");
    console.log("Expected: 30");
    console.log("Result:", findMaximum(15, 30));
    console.log(findMaximum(15, 30) === 30 ? "✅ PASSED\n" : "❌ FAILED\n");

    // Test 4: isPalindrome
    console.log("Test 4: isPalindrome('racecar')");
    console.log("Expected: true");
    console.log("Result:", isPalindrome('racecar'));
    console.log(isPalindrome('racecar') === true ? "✅ PASSED\n" : "❌ FAILED\n");

    console.log("Test 5: isPalindrome('hello')");
    console.log("Expected: false");
    console.log("Result:", isPalindrome('hello'));
    console.log(isPalindrome('hello') === false ? "✅ PASSED\n" : "❌ FAILED\n");

    // Test 6: calculateDiscountedPrice
    console.log("Test 6: calculateDiscountedPrice(100, 20)");
    console.log("Expected: 80");
    console.log("Result:", calculateDiscountedPrice(100, 20));
    console.log(calculateDiscountedPrice(100, 20) === 80 ? "✅ PASSED\n" : "❌ FAILED\n");

    console.log("=== All Tests Complete ===");
}

// Run the tests
runTests();
