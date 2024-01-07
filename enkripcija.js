const fs = require('fs');
const readlineSync = require('readline-sync');

let linija = pom = kr = '';
let duz = i = k = k1 = k2 = 0;

try {
    const dat = fs.readFileSync('ot.txt', 'utf8');
    linija = dat;
    pom = dat;
    console.log(linija);

} catch (err) {
    console.error("Datoteka ne postoji.");
}

k = parseInt(readlineSync.question("Unesite kljuc: "));

for (i = 0; i < pom.length; i++) {
    if (pom.charCodeAt(i) > 96 && pom.charCodeAt(i) < 123) {
        k1 = pom.charCodeAt(i);
        k1 = k1 + k;
        if (k1 > 122) {
            pom = pom.substring(0, i) + String.fromCharCode(k1 - 122 + 97) + pom.substring(i + 1);
        } else {
            pom = pom.substring(0, i) + String.fromCharCode(k1) + pom.substring(i + 1);
        }
        kr += pom[i];
    }
}

try {
    fs.writeFileSync('kr.txt', kr + '\n');
    console.log("Datoteka kr.txt je kreirana.");
} catch (err) {
    console.error("Nisam mogao kreirati datoteku.");
}
