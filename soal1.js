function akarPangkatDua (x) {
    if (x < 0) 
       return ("Tidak bisa input bilangan negatif");
    else if ((x % 2) != 0 )
        return ("Tidak bisa input bilangan ganjil");
    else
        return console.log(Math.sqrt(x));
}

akarPangkatDua(100);