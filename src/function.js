exports.hitungJarak= function (waktuAwal, waktuSampai, kecepatanAwal) {
//deklarasi variable
    let arrAwal=[]
    let arrSampai=[]
    let awal="";
    let akhir="";
    let x = 0;
    let detikHitung=0;
    let hasil;

//merubah format jam bertipe data string menjadi array
    for (let i=0; i <= waktuAwal.length; i++) {
        awal+=waktuAwal[i];
        akhir+=waktuSampai[i];
        if (waktuAwal[i]===":" || i >= waktuAwal.length) {
            arrAwal[x]=awal;
            arrSampai[x]=akhir;
            awal="";
            akhir=""
            x++;
        }
    }

//konvensi jam dalam bentuk array kedalam satuan second
    let detikAwal = arrAwal[0]*60*60+arrAwal[1]*60+arrAwal[2];
    let detikAkhir = arrSampai[0]*60*60+arrSampai[1]*60+arrSampai[2];

//menentukan waktu  dan kecepatan
//setelah 5 menit berjalan kecepatan dinaikkan 2m/s
//setelah 10 menit berikutnya kecepatan dinaikkan beraturan yaitu 1m/s 
    for (x = 0; x <=detikAkhir-detikAwal; x++) {
        if (x==="5"*"60") {
            kecepatanAwal+=2;
            detikHitung=x;
        }else if(x===detikHitung+("10"*"60")){
            kecepatanAwal+=1;
            detikHitung=x
        }
    }
//menghitung jarak yang ditempuh
    hasil=kecepatanAwal*detikHitung;
    return hasil;
}