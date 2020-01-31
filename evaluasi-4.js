var jualMobil = {
	nama:'Tompel',
	merk:'Avanza',
	tahun:2017,
	kondisi:'bekas',
	iklan:function(){
	document.write(`BU , saya ${this.nama} , jual mobil ${this.merk} ,tahun ${this.tahun}, ${this.kondisi}`)
	}
}
document.write('<br/>')
jualMobil.iklan()