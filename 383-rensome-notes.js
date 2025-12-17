function rensomeNotes(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
        return false;
    }
    let magazinArr = magazine.split("");
    let ransomNoteArr = ransomNote.split("");
    let magazineMap = new Map()
    for (let mag of magazinArr) {
        magazineMap.set(mag, (magazineMap.get(mag) || 0) + 1)
    }
    for (let rensom of ransomNoteArr) {
        if (!magazineMap.has(rensom)) {
            return false
        }
        if (magazineMap.has(rensom)) {
            if(magazineMap.get(rensom) > 0){
                magazineMap.set(rensom, magazineMap.get(rensom) - 1)
            }else{
                return false;
            }
        }

    }
    return true;
}

let ransomNote = "aa"
let magazine = "aab"

console.log(rensomeNotes(ransomNote, magazine));