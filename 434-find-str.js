var countSegments = function (s) {
    s = s.trim();
    if (s.length === 0) {
        return 0
    } else {

        let arr = s.split(/\s+/)
        return arr.length;
    }
};
let s = "                "
console.log(countSegments(s))