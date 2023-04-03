/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let string1 = ransomNote.split('');
    let string2 = magazine.split('');
    let hashTable = {};

    for (let i = 0; i < string2.length; i++)
    {
        if (!hashTable[string2[i]])
        {
            hashTable[string2[i]] =1
        }
        else
        {
            hashTable[string2[i]]++
        }
    }
// console.log(hashTable)
    for (let i=0; i<string1.length;i++)
    {
        // console.log(hashTable[string1[i]])

        if (!hashTable[string1[i]])
        {
            return false
        }
        else if (hashTable[string1[i]]<0)
        {
            return false
        }
        else
        {
            hashTable[string1[i]] -=1
            // console.log(hashTable[string1[i]])
        }

    }
    return true

};

let ransomNote = "aa", magazine = "aab"
console.log(canConstruct(ransomNote,magazine))