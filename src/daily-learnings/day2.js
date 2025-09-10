/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let constants = [];
    let vowelsInString = [];
    let vowelCount = {};

    for (const characters of s) {
        if (vowelCount[characters]) {
            vowelCount[characters] += 1;
        } else {
            vowelCount[characters] = 1;
        }
        if (vowels.includes(characters)) {
            vowelsInString.push(characters);

        } else {
            constants.push(characters);
        }
    }

    console.log(`count of vowels in the given string is ${vowelsInString.length} `);


    vowelsInString.forEach(e => console.log(e));

    console.log(`count of constants in the given string is ${constants.length}`);

    constants.forEach(e => console.log(e));

    console.log('count for each character');


    for (const v in vowelCount) {
        console.log(`${v}: ${vowelCount[v]}`);
    }




}


vowelsAndConsonants('javascriptloops');