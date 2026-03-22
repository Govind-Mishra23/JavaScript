// 1️⃣ Reverse a String (without .reverse())
function reverseString(str){
    let reverseString = "" ; 
    for(let i = str.length()-1 ; i>= 0; i--){
        reverseString += str[i] ; 
    }
    return reverseString ; 
}

function checkPalindrome(str){
    let reverseString = str.reverse() ; 
    return str === reverseString 
}
function isPalindrome(str){
    let left = 0  
    let right = str.length() 
    while(left < right){
        if(str[left] !== str[right]){
            return false 
        }
        left++  
        right-- 
    }
    return true 
}
function largetEle (arr){
    let maxVal = arr[0] 
    for(const val of arr){
        if(val > maxVal) maxVal = val  
    }
    return max ;
}
function removeDuplicates(arr){

}

function countVowel(str){
    let vowel = "aeiou"
    let count = 0 
    for(let char of str){
        if(vowel.includes(char))count++ ;   
    }
    return count 
}
function flatten (arr){

}
function fact(n){
    if(n === 0 || n === 1) return 1 ;
    return n * fact(n-1) 
}