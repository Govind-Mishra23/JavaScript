// Type coercion = automatic conversion of one data type into another by JavaScript
// | Value       | Converts to |
// | ----------- | ----------- |
// | `"5"`       | 5           |
// | `""`        | 0           |
// | `true`      | 1           |
// | `false`     | 0           |
// | `null`      | 0           |
// | `undefined` | NaN         |
// | `"abc"`     | NaN         |


// To String Conversion Rules
// If any operand is string in +, everything becomes string:

// + Operator (Tricky One)
// 👉 If string is involved → concatenation
// 👉 Otherwise → number addition
// 2 + true     // 3
// console.log(2 + undefined)

// -, *, / Operators
// 👉 Always convert to number
// "5" - 2   // 3
// "5" * 2   // 10
// "10" / 2  // 5
//console.log(5 - "") // 5


// ✅ == (Loose Equality)
// 👉 Performs coercion