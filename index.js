//calculateTax function
function calculateTax(amount){
   const taxRate = 0.10;
    const tax = amount * taxRate;
    return tax;   
}
//convertToUpperCase function
function convertToUpperCase(text){
    return text.toUpperCase();
} 
//findmax function
function findMaximum(num1, num2){
    return Math.max(num1, num2);

}
// isPalindrome
function isPalindrome(word){
    //
    const cleaned = word.toLowerCase().replace(/\s/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
//calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage){
    const discountAmount = originalPrice * (discountPercentage / 100);
    const discountedPrice = originalPrice - discountAmount;    
    return discountedPrice;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };