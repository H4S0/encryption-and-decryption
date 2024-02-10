const fs = require('fs');

let kljuc = " kljuc je: ";
let duz = 0;
let i = 0, k1 = 0, k2 = 0, k = 0;
let kljuc1 = '';
let linija = '', pom = '', kr = '', pom1 = '';

fs.readFile('kr.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Datoteka ne postoji.');
        return;
    }
    console.log(data);
    pom += data + '\n';

    fs.appendFile('dekodirano.txt', '', (err) => {
        if (err) {
            console.error('Datoteka nije kreirana.');
            return;
        }
        for (k = 1; k <= 26; k++) {
            pom1 = pom;
            for (i = 0; i < pom.length; i++) {
                if (pom.charCodeAt(i) > 96 && pom.charCodeAt(i) < 123) {
                    k1 = pom.charCodeAt(i);
                    k1 -= k;
                    console.log("ovo je k " + k);
                    if (k1 < 96) {
                        pom = pom.substr(0, i) + String.fromCharCode(k1 + 122 - 97) + pom.substr(i + 1);
                    } else {
                        pom = pom.substr(0, i) + String.fromCharCode(k1) + pom.substr(i + 1);
                    }
                    kr += pom[i];
                }
                pom = pom1;
            }
            fs.appendFileSync('dekodirano.txt', kr + kljuc + k + '\n');
            kr = "";
        }
        console.log('Datoteka dekodirano.txt je kreirana.');
    });
});
