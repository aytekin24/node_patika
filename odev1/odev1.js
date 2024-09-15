const arguments = process.argv.slice(2);
function daire(r){
    const pi=3.14;
    let alan=pi*r*r;
    console.log('Yarıçapı:'+r+' olan dairenin alanı:'+alan);
}
daire(arguments[0]*1);