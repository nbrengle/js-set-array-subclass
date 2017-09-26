function onlyUnique(value, index, self) {
    return index == self.indexOf(value);
}

class Set extends Array {

// set does not have duplicates
// set class handles other input
    constructor(...args) {
        const uniq = Array(...args).filter(onlyUnique);
        super(...uniq);
    }

// ability to add string (or number for extra)

    add (item) {
        if (!super.includes(item)) super.push(item);
    }
    push (item) {
        if (!super.includes(item)) super.push(item);
    }

// ability to remove a string (or number for extra)
    remove(item) {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] == item) {
               super.splice(i, 1);
            }
        }
    }
}

let stringSet = new Set('brian','chandler','nate','nate')
console.log(stringSet);
console.assert(stringSet instanceof Array, "not an array");
console.assert(stringSet instanceof Set, "not a set");
console.assert(stringSet.constructor === Set, "constructor not a set");
console.assert(stringSet.length == 3, "wrong length in constructor");
stringSet[3] = 'Samantha';
console.assert(stringSet.length == 4, "wrong length after insert");
stringSet.add('Rupert');
console.assert(stringSet.length == 5, "wrong length after add");
console.assert(stringSet[4] == 'Rupert', "not Rupert");
stringSet.add('Samantha');
console.assert(stringSet.length == 5, "wrong length after non-unique add");
stringSet.remove('Samantha');
console.log(stringSet);
console.assert(stringSet.length == 4, "wrong len after remove");

let mixedSet = new Set(1,"chad",3,"chris");
console.log(mixedSet);
console.assert(mixedSet instanceof Array, "not an array");
console.assert(mixedSet instanceof Set, "not a set");

let weirdSet = new Set({'name':'cat','id':2}, NaN, " ");
console.log(weirdSet);
console.assert(weirdSet instanceof Array, "not an array");
console.assert(weirdSet instanceof Set, "not a set");
