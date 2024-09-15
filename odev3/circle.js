const pi=3.14
function circleAlan(r){
 const Alan=pi*r*r;
 console.log('Alan: '+Alan);
}
function circleCircumference(r){
    const cevre=2*pi*r;
    console.log('Cevre: '+cevre);
}

module.exports={
    circleAlan,
    circleCircumference
}