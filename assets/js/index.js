function calc() {
    var x = 0;
    var x0 = Number.isNaN(parseFloat($("#x0").val())) ? 0 : parseFloat($("#x0").val());
    var x1 = Number.isNaN(parseFloat($("#x1").val())) ? 0 : parseFloat($("#x1").val());
    var x2 = Number.isNaN(parseFloat($("#x2").val())) ? 0 : parseFloat($("#x2").val());
    var y0 = Number.isNaN(parseFloat($("#y0").val())) ? 0 : parseFloat($("#y0").val());
    var y1 = Number.isNaN(parseFloat($("#y1").val())) ? 0 : parseFloat($("#y1").val());
    var y2 = Number.isNaN(parseFloat($("#y2").val())) ? 0 : parseFloat($("#y2").val());

    let a = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
    let b = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
    let c = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));

    let d = (a * y0) + (b * y1) + (c * y2);

    printOutput(d);
}

function printOutput(result) {
    var html = ``;
    html += `<div class="col-12">`;
    html += `   <b>P(X):</b> ${Number.isNaN(result) ? "Nenhum resultado obtido." : result}`;
    html += `</div>`;

    $("#result").html(html);
}