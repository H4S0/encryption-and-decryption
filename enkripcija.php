<?php
$linija = $pom = $kr = '';
$duz = $i = $k = $k1 = $k2 = 0;

$dat = fopen("ot.txt", "r");
if ($dat) {
    while (($linija = fgets($dat)) !== false) {
        echo $linija . PHP_EOL;
        $pom .= $linija . PHP_EOL;
    }
    fclose($dat);
} else {
    echo "Datoteka ne postoji.";
}

echo "Unesite kljuc: ";
$k = intval(trim(fgets(STDIN)));

for ($i = 0; $i < strlen($pom); $i++) {
    if (ord($pom[$i]) > 96 && ord($pom[$i]) < 123) {
        $k1 = ord($pom[$i]);
        $k1 = $k1 + $k;
        if ($k1 > 122) {
            $pom[$i] = chr($k1 - 122 + 97);
        } else {
            $pom[$i] = chr($k1);
        }
        $kr .= $pom[$i];
    }
}

$dat2 = fopen("kr.txt", "w");
if ($dat2) {
    fwrite($dat2, $kr . PHP_EOL);
    fclose($dat2);
    echo "Datoteka kr.txt je kreirana.";
} else {
    echo "Nisam mogao kreirati datoteku.";
}
?>