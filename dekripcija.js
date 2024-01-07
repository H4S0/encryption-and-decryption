const fs = require('fs');

let kljuc = " kljuc je: ";
let duz = 0;
let i = k1 = k2 = k = 0;
let kljuc1 = '';
let linija = pom = kr = pom1 = '';

try {
    const dat = fs.readFileSync('kr.txt', 'utf8');
    linija = dat;
    pom = dat;
    console.log(linija);
} catch (err) {
    console.error("Datoteka ne postoji.");
}

const dat2 = fs.createWriteStream('dekodirano.txt', { flags: 'a' });

if (dat2) {
    for (k = 1; k <= 26; k++) {
        pom1 = pom;

        for (i = 0; i < pom.length; i++) {
            if (pom.charCodeAt(i) > 96 && pom.charCodeAt(i) < 123) {
                k1 = pom.charCodeAt(i);
                k1 = k1 - k;
                console.log("ovo je k " + k);

                if (k1 < 96) {
                    pom = pom.substring(0, i) + String.fromCharCode(k1 + 122 - 97) + pom.substring(i + 1);
                } else {
                    pom = pom.substring(0, i) + String.fromCharCode(k1) + pom.substring(i + 1);
                }
                kr += pom[i];
            }
            pom = pom1;
        }

        dat2.write(kr);
        dat2.write(" kljuc je " + k + '\n');
        kr = "";
    }

    dat2.end();
    console.log("Datoteka dekodirano.txt je kreirana.");
} else {
    console.error("Datoteka nije kreirana");
}
