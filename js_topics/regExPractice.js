//  ----- valid password ------

// const regEx = /^[A-Z][0-9]{3}[a-z]/g;
// console.log(regEx.test("A123b"));

//  ----- valid email ------

// const validPhoneNum = /(\+?880)-[0-9]{3}-[0-9]{4}/g
// const text = "Call me at +880-123-4567 or 880-987-6543"
// console.log(text.match(validPhoneNum))

// ------- Exercise 3: Find Dates in Different Formats  ------

// const dateFormate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}|[0-9]{2}-[0-9]{2}-[0-9]{4}/g
// let text = "Today is ads25/01/2025, yesterday was abc24/01/2025, and tomorrow will be 2025.01.26.";
// console.log(text.match(dateFormate))

// let regex = /a.b/;
// console.log("adb".match(regex));

// let regex = /^[A-Z]\d[@#$%^&*!].{8,}$/;
// console.log(regex.test("Pass@123"));


// exercise about lookahead

const testResult = /a(?!b)/
// console.log('acb'.match(testResult))
// console.log('ab'.match(testResult))

// const learnDot = /a.*b/
// const learnDot2 = /a.*?b/
// const learnDot3 = /a.+b/
// console.log("axkjkbkjjkb".match(learnDot))
// console.log("axkjkbkjjkb".match(learnDot2))
// console.log("axkjkbkjjkb".match(learnDot3))


// valid user name

const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_]).{6,}$/
// console.log(regEx.test("User_name1"))

// valid extension

const validExtension = /^[a-zA-Z]$/