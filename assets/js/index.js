function calc() {
    var p = Number.isNaN(parseFloat($("#p").val())) ? 0 : parseFloat($("#p").val());
    var x = Number.isNaN(parseFloat($("#x").val())) ? 0 : parseFloat($("#x").val());
    var x0 = Number.isNaN(parseFloat($("#x0").val())) ? 0 : parseFloat($("#x0").val());
    var x1 = Number.isNaN(parseFloat($("#x1").val())) ? 0 : parseFloat($("#x1").val());
    var x2 = Number.isNaN(parseFloat($("#x2").val())) ? 0 : parseFloat($("#x2").val());
    var x3 = Number.isNaN(parseFloat($("#x3").val())) ? 0 : parseFloat($("#x3").val());
    var x4 = Number.isNaN(parseFloat($("#x4").val())) ? 0 : parseFloat($("#x4").val());
    var y0 = Number.isNaN(parseFloat($("#y0").val())) ? 0 : parseFloat($("#y0").val());
    var y1 = Number.isNaN(parseFloat($("#y1").val())) ? 0 : parseFloat($("#y1").val());
    var y2 = Number.isNaN(parseFloat($("#y2").val())) ? 0 : parseFloat($("#y2").val());
    var y3 = Number.isNaN(parseFloat($("#y3").val())) ? 0 : parseFloat($("#y3").val());
    var y4 = Number.isNaN(parseFloat($("#y4").val())) ? 0 : parseFloat($("#y4").val());

    var a, b, c, d, e = 0;
    var f = NaN;

    if (p == 2) {
        a = ((x - x1)) / ((x0 - x1));
        b = ((x - x0)) / ((x1 - x0));

        if (a === Infinity || a === -Infinity) a = 0;
        if (b === Infinity || b === -Infinity) b = 0;

        f = (a * y0) + (b * y1);
    } else
    if (p == 3) {
        a = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
        b = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
        c = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));

        if (a === Infinity || a === -Infinity) a = 0;
        if (b === Infinity || b === -Infinity) b = 0;
        if (c === Infinity || c === -Infinity) c = 0;

        f = (a * y0) + (b * y1) + (c * y2);
    } else if (p == 4) {
        a = ((x - x1) * (x - x2) * (x - x3)) / ((x0 - x1) * (x0 - x2) * (x0 - x3));
        b = ((x - x0) * (x - x2) * (x - x3)) / ((x1 - x0) * (x1 - x2) * (x1 - x3));
        c = ((x - x0) * (x - x1) * (x - x3)) / ((x2 - x0) * (x2 - x1) * (x2 - x3));
        d = ((x - x0) * (x - x1) * (x - x2)) / ((x3 - x0) * (x3 - x1) * (x3 - x2));

        if (a === Infinity || a === -Infinity) a = 0;
        if (b === Infinity || b === -Infinity) b = 0;
        if (c === Infinity || c === -Infinity) c = 0;
        if (d === Infinity || d === -Infinity) d = 0;

        f = (a * y0) + (b * y1) + (c * y2) + (d * y3);
    } else if (p == 5) {
        a = ((x - x1) * (x - x2) * (x - x3) * (x - x4)) / ((x0 - x1) * (x0 - x2) * (x0 - x3) * (x0 - x4));
        b = ((x - x0) * (x - x2) * (x - x3) * (x - x4)) / ((x1 - x0) * (x1 - x2) * (x1 - x3) * (x0 - x4));
        c = ((x - x0) * (x - x1) * (x - x3) * (x - x4)) / ((x2 - x0) * (x2 - x1) * (x2 - x3) * (x0 - x4));
        d = ((x - x0) * (x - x1) * (x - x2) * (x - x4)) / ((x3 - x0) * (x3 - x1) * (x3 - x2) * (x0 - x4));
        e = ((x - x0) * (x - x1) * (x - x2) * (x - x3)) / ((x4 - x0) * (x4 - x1) * (x4 - x2) * (x4 - x3));

        if (a === Infinity || a === -Infinity) a = 0;
        if (b === Infinity || b === -Infinity) b = 0;
        if (c === Infinity || c === -Infinity) c = 0;
        if (d === Infinity || d === -Infinity) d = 0;
        if (e === Infinity || e === -Infinity) e = 0;

        f = (a * y0) + (b * y1) + (c * y2) + (d * y3) + (e * y4);
    }

    printOutput(f, x);
}

function printOutput(result, x) {
    var html = ``;
    html += `<div class="col-12">`;
    html += `   <b>P(${x}):</b> ${Number.isNaN(result) ? "Nenhum resultado obtido." : result}`;
    html += `</div>`;

    $("#result").html(html);
}