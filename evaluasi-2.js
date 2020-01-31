  m = 120
  m2=240
document.write('angkanya adalah 120 dan 240'+'<br/>')
//KPK
  var a,b,c = m*m2,d;
  for (var i = 1; i <= c; i++) {
      a=i%m
      b=i%m2;
    if (a == 0 && b == 0) {
      d=i;
      break;


    }
  }
  document.write('KPK nya adalah '+d)
  document.write('<br/>')

//fpb
function fpb(a,b){
  return (b == 0) ? a : (fpb(b,a % b));
}
document.write('FPB nya adalah' + fpb(120,240))
document.write('<br/>')