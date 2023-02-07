let akarPangkatDua = x => {
    if (x < 0) 
        console.log("Tidak bisa input bilangan negatif");
    else if ((x % 2) != 0 )
        console.log("Tidak bisa input bilangan ganjil");
    else
        return console.log(Math.sqrt(x));
}

akarPangkatDua(1);
akarPangkatDua(100);
akarPangkatDua(-1);