function calc() {
    // var ponto = Number.isNaN(parseFloat($("#ponto").val())) ? 0 : parseFloat($("#ponto").val());
   var ponto = 0;
    var x1 = Number.isNaN(parseFloat($("#x1").val())) ? 0 : parseFloat($("#x1").val());
    var x2 = Number.isNaN(parseFloat($("#x2").val())) ? 0 : parseFloat($("#x2").val());
    var x3 = Number.isNaN(parseFloat($("#x3").val())) ? 0 : parseFloat($("#x3").val());
    var y1 = Number.isNaN(parseFloat($("#y1").val())) ? 0 : parseFloat($("#y1").val());
    var y2 = Number.isNaN(parseFloat($("#y2").val())) ? 0 : parseFloat($("#y2").val());
    var y3 = Number.isNaN(parseFloat($("#y3").val())) ? 0 : parseFloat($("#y3").val());

    let a = ((ponto - x2) * (ponto - x3)) / ((x1 - x2) * (x1 - x3));
    let b = ((ponto - x1) * (ponto - x3)) / ((x2 - x1) * (x2 - x3));
    let c = ((ponto - x1) * (ponto - x2)) / ((x3 - x1) * (x3 - x2));

    let d = (a * y1) + (b * y2) + (c * y3);

    printOutput(d);
}

function printOutput(result) {
    var html = ``;
    html += `<div class="col-12">`;
    html += `   <b>P(X):</b> ${Number.isNaN(result) ? "Nenhum resultado obtido." : result}`;
    html += `</div>`;

    $("#result").html(html);
}