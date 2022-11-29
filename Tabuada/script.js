/*
for (x=1; x<-10;x++) {
    for(y=1; y <=100; y++) {

    }
}
*/

let numero = prompt("Informe um numero")

function gerarTabuada(numero) {

    document.write("<div id='container_table'>")
    document.write('<table border="1">')
        for (x = 1; x<= 100; x++) {

            document.write("<tr id='trStyle'>")
            for(y=1; y<=numero; y++) {
                document.write(`<td>${y} x ${x} = ${x*y}</td>`)
            }
            document.write("</tr>")
        }
    document.write('</table>')    
    document.write("</div>")
}

function gerarCor() {
    "#" + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6,  '0');
}

var square = document.getElementById("trStyle");
square.style.backgroundColor = gerarCor();


gerarTabuada(numero)