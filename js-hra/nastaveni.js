const dum = new Lokace ("js-hra/obrazky/dum.png","Stojíš před svým rodným domem, cítíš vůni čerstvě nasekaného dřeva, která se line z hromady vedle vstupních dveří.");
const dumStart = new Lokace ("js-hra/obrazky/dumStart.png","Stojíš před svým rodným domem, cítíš vůni čerstvě nasekaného dřeva, která se line z hromady vedle vstupních dveří.");
const hrad = new Lokace ("js-hra/obrazky/hrad.png","Stojíš před okovanou branou gotického hradu, která je zřejmě jediným vchodem do pevnosti. Klíčová dírka je pokryta pavučinami, což vzbuzuje dojem, že je budova opuštěná.");
const lesZapadni = new Lokace ("js-hra/obrazky/les.png","Jsi na lesní západní cestě, která se klikatí až za obzor, kde mizí v siluetě zapadajícího slunce. Ticho podvečerního lesa občas přeruší zpěv posledních ptáků.");
const lesVychodni = new Lokace ("js-hra/obrazky/les.png","Jsi na lesní východní cestě, která se klikatí až za obzor, kde mizí v siluetě zapadajícího slunce. Ticho podvečerního lesa občas přeruší zpěv posledních ptáků.");
const lesJizni = new Lokace ("js-hra/obrazky/les.png","Jsi na lesní jižní cestě, která se klikatí až za obzor, kde mizí v siluetě zapadajícího slunce. Ticho podvečerního lesa občas přeruší zpěv posledních ptáků.");
const rybnik = new Lokace ("js-hra/obrazky/rybnik.png","Došel jsi ke břehu malého rybníka. Hladina je v bezvětří jako zrcadlo. Kousek od tebe je dřevěná plošina se stavidlem.");
const rozcesti = new Lokace ("js-hra/obrazky/rozcesti.png","Nacházíš se na lesním rozcestí.");
const nelzeJit = "Tímto směrem nelze jít. Následuj zvýrazněné šipky.";
let klicAnoNe = false;
let hlaska = "Vítej a hrej. Cíl je najít klíč a odemknout s ním hrad.";

dum.vychod=lesZapadni;
dumStart.vychod=lesZapadni;
lesZapadni.zapad=dum;
lesZapadni.vychod=rozcesti;
hrad.zapad=lesVychodni;
lesVychodni.vychod=hrad;
lesVychodni.zapad=rozcesti;
rozcesti.zapad=lesZapadni;
rozcesti.vychod=lesVychodni;
rozcesti.jih=lesJizni;
lesJizni.sever=rozcesti;
lesJizni.vychod=rybnik;
rybnik.zapad=lesJizni;

function nastavSipky(lokace){
    console.log("Nastavuji se sipky");
    nastavKlic(lokace);

    if(lokace.vychod){
        document.getElementById("vychod").innerHTML=`<img src="js-hra/obrazky/doprava.png" style="opacity:100%; max-width:100%;height:auto;">`;
        document.getElementById("vychod").onclick=function() {jdi(lokace.vychod)};   
    }
    else{
        document.getElementById("vychod").innerHTML=`<img src="js-hra/obrazky/doprava.png" style="opacity:30%; max-width:100%;height:auto;">`;
        document.getElementById("vychod").onclick= () => {
            document.getElementById("popisLokace").innerHTML=`${nelzeJit}`; 
        }
    }
    if(lokace.zapad){
        document.getElementById("zapad").innerHTML=`<img src="js-hra/obrazky/doleva.png" style="opacity:100%; max-width:100%;height:auto;">`;
        document.getElementById("zapad").onclick=function() {jdi(lokace.zapad)};   
    }
    else{
        document.getElementById("zapad").innerHTML=`<img src="js-hra/obrazky/doleva.png" style="opacity:30%; max-width:100%;height:auto;">`;
        document.getElementById("zapad").onclick= () => {
            document.getElementById("popisLokace").innerHTML=`${nelzeJit}`; 
        }
    }
    if(lokace.sever){
        document.getElementById("sever").innerHTML=`<img src="js-hra/obrazky/nahoru.png" style="opacity:100%; max-width:100%;height:auto;">`;
        document.getElementById("sever").onclick=function() {jdi(lokace.sever)};   
    }
    else{
        document.getElementById("sever").innerHTML=`<img src="js-hra/obrazky/nahoru.png" style="opacity:30%; max-width:100%;height:auto;">`;
        document.getElementById("sever").onclick= () => {
            document.getElementById("popisLokace").innerHTML=`${nelzeJit}`; 
        }    
    }
    if(lokace.jih){
        document.getElementById("jih").innerHTML=`<img src="js-hra/obrazky/dolu.png" style="opacity:100%; max-width:100%;height:auto;">`;
        document.getElementById("jih").onclick=function() {jdi(lokace.jih)};   
    }
    else{
        document.getElementById("jih").innerHTML=`<img src="js-hra/obrazky/dolu.png" style="opacity:30%; max-width:100%;height:auto;">`;
        document.getElementById("jih").onclick= () => {
            document.getElementById("popisLokace").innerHTML=`${nelzeJit}`; 
        }    
    }
}

function hrej(lokace){
    document.getElementById("obrazekLokace").innerHTML=`<img  src=${lokace.obrazek} style="max-width:400px">`;
    document.getElementById("popisLokace").innerHTML=`${lokace.popis}`; 
    document.getElementById("obrazekLokace").onclick= () => {
        document.getElementById("popisLokace").innerHTML=`${lokace.popis}`; 
            if (klicAnoNe && lokace==hrad) alert ("Hrad odemčen. Bravo. Pokud chcete hrát znovu, zmáčkněte F5.");
            if(lokace==hrad && !klicAnoNe) alert ("Nemáte klíč. Hledejte klíč a pak se vraťte.");
    } 
    nastavSipky(lokace);
}

function jdi (cil_OdSipky){
    hrej(cil_OdSipky);
}

function nastavKlic(lokace){
    if (lokace==lokaceKlic) {
        document.getElementById("klic").innerHTML=`<img src="js-hra/obrazky/klic.svg" style="opacity:100%; max-width:100%;height:auto">`;
        document.getElementById("klic").onclick = () => {
            alert("Výborně, máte klíč k hradu.");
            klicAnoNe=true;
        }
    }
    else
        document.getElementById("klic").innerHTML=`<img src="js-hra/obrazky/klic.svg" style="opacity:0%; max-width:100%;height:auto">`;
}

