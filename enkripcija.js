const fs = require('fs');
const readline = require('readline');

let linija = '', pom = '', kr = '';
let duz = 0, i = 0, k = 0, k1 = 0, k2 = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.readFile('ot.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Datoteka ne postoji.');
        return;
    }
    console.log(data);
    pom += data + '\n';

    rl.question('Unesite kljuc: ', (answer) => {
        k = parseInt(answer);

        for (i = 0; i < pom.length; i++) {
            if (pom.charCodeAt(i) > 96 && pom.charCodeAt(i) < 123) {
                k1 = pom.charCodeAt(i);
                k1 += k;
                if (k1 > 122) {
                    pom = pom.substr(0, i) + String.fromCharCode(k1 - 122 + 97) + pom.substr(i + 1);
                } else {
                    pom = pom.substr(0, i) + String.fromCharCode(k1) + pom.substr(i + 1);
                }
                kr += pom[i];
            }
        }

        fs.writeFile('kr.txt', kr + '\n', (err) => {
            if (err) {
                console.error('Nisam mogao kreirati datoteku.');
                return;
            }
            console.log('Datoteka kr.txt je kreirana.');
            rl.close();
        });
    });
});
