:<?php
$kljuc = " kljuc je: ";
$duz = 0;
$i = $k1 = $k2 = $k = 0;
$kljuc1 = '';
$linija = $pom = $kr = $pom1 = '';

$dat = fopen("kr.txt", "r");
if ($dat) {
    while (($linija = fgets($dat)) !== false) {
        echo $linija . PHP_EOL;
        $pom .= $linija . PHP_EOL;
    }
    fclose($dat);
} else {
    echo "Datoteka ne postoji.";
}

$dat2 = fopen("dekodirano.txt", "a");
if ($dat2) {
    for ($k = 1; $k <= 26; $k++) {
        $pom1 = $pom;
        for ($i = 0; $i < strlen($pom); $i++) {
            if (ord($pom[$i]) > 96 && ord($pom[$i]) < 123) {
                $k1 = ord($pom[$i]);
                $k1 = $k1 - $k;
                echo "ovo je k " . $k . PHP_EOL;
                if ($k1 < 96) {
                    $pom[$i] = chr($k1 + 122 - 97);
                } else {
                    $pom[$i] = chr($k1);
                }
                $kr .= $pom[$i];
            }
            $pom = $pom1;
        }
        fwrite($dat2, $kr);
        fwrite($dat2, " kljuc je " . $k . PHP_EOL);
        $kr = "";
    }
    fclose($dat2);
    echo "Datoteka dekodirano.txt je kreirana.";
} else {
    echo "Datoteka nije kreirana";
}
?>