var fibonacci = (i,n)=>[...Array(n)].map((_,j,a)=>a[j]=j<i?1:j-i?s+=s -a[j +~i]:s=i)
var	fibonacci2 = fibonacci(3,9)
console.log(fibonacci2);
var akhir = fibonacci2.map((o)=>o)
document.write(akhir)
document.write('<br/>')
