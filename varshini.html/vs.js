
var johnMass,markMass,johnHeight,markHeight;
johnMass=10;
johnHeight=15;
markMass=20;
markHeight=25;
var johnBmi=johnMass/(johnHeight*johnHeight);
var markBmi=markMass/(markHeight*markHeight);
console.log(johnBmi);
console.log(markBmi);
var ifMarkBmi=markBmi>johnBmi;
console.log(ifMarkBmi);
console.log('Is Mark\'s BMI Higher Than John\'s?'+ifMarkBmi);
