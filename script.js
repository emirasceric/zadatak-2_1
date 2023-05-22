document.write('<h2>Zadatak 1</h2>');

//nastaviti pisati kod ispod

//a)

const cijene = ['KM 1.00', 'KM 1.85', 'KM 19.99', 'KM 4.85'];

let ukupnaSuma = 0;

for (let i = 0; i < cijene.length; i++) {
  const novaVrijednost = cijene[i].split(' ');
   const cijena = parseFloat(novaVrijednost[1]);
  ukupnaSuma += cijena;
}

document.write(`a)  Zadat je niz: ['KM 1.00', 'KM 1.85', 'KM 19.99', 'KM 4.85'] </br> </br>`)
document.write(`Suma zadatog niza koristeci split metodu je   ${ukupnaSuma.toFixed(2)} KM </br></br></br>`);


//b)

const prices = ['2.05 BAM', '24.50 BAM', '10.25 BAM', '3.45 BAM'];
let ukupnaSuma2 = 0;

for (let i = 0; i < prices.length; i++) {
  const sliced = prices[i].slice(0, -4);
  const cijena = parseFloat(sliced);
  ukupnaSuma += cijena;
}

document.write(`b)  Zadat je niz: ['2.05 BAM', '24.50 BAM', '10.25 BAM', '3.45 BAM'] </br> </br>`)
document.write(` Suma zadatog niza koristeci slice metodu je:   ${ukupnaSuma} BAM`);
