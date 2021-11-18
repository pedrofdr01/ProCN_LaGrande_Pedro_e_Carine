var p, x, x0, x1, x2, x3, x4, y0, y1, y2, y3, y4 = 0;
var result = NaN;

function calc() {
    p = Number.isNaN(parseFloat($("#p").val())) ? 0 : parseFloat($("#p").val());
    x = Number.isNaN(parseFloat($("#x").val())) ? 0 : parseFloat($("#x").val());
    x0 = Number.isNaN(parseFloat($("#x0").val())) ? 0 : parseFloat($("#x0").val());
    x1 = Number.isNaN(parseFloat($("#x1").val())) ? 0 : parseFloat($("#x1").val());
    x2 = Number.isNaN(parseFloat($("#x2").val())) ? 0 : parseFloat($("#x2").val());
    x3 = Number.isNaN(parseFloat($("#x3").val())) ? 0 : parseFloat($("#x3").val());
    x4 = Number.isNaN(parseFloat($("#x4").val())) ? 0 : parseFloat($("#x4").val());
    y0 = Number.isNaN(parseFloat($("#y0").val())) ? 0 : parseFloat($("#y0").val());
    y1 = Number.isNaN(parseFloat($("#y1").val())) ? 0 : parseFloat($("#y1").val());
    y2 = Number.isNaN(parseFloat($("#y2").val())) ? 0 : parseFloat($("#y2").val());
    y3 = Number.isNaN(parseFloat($("#y3").val())) ? 0 : parseFloat($("#y3").val());
    y4 = Number.isNaN(parseFloat($("#y4").val())) ? 0 : parseFloat($("#y4").val());

    switch (p) {
        case 2:
            calcPoint2();
            break;
        case 3:
            calcPoint3();
            break;
        case 4:
            calcPoint4();
            break
        case 5:
            calcPoint5();
            break
    }

    printOutput();
}

function calcPoint2() {
    a = (x - x1) / (x0 - x1);
    b = (x - x0) / (x1 - x0);

    result = a * y0 + b * y1;
}

function calcPoint3() {
    a = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
    b = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
    c = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));

    result = a * y0 + b * y1 + c * y2;
}

function calcPoint4() {
    a = ((x - x1) * (x - x2) * (x - x3)) / ((x0 - x1) * (x0 - x2) * (x0 - x3));
    b = ((x - x0) * (x - x2) * (x - x3)) / ((x1 - x0) * (x1 - x2) * (x1 - x3));
    c = ((x - x0) * (x - x1) * (x - x3)) / ((x2 - x0) * (x2 - x1) * (x2 - x3));
    d = ((x - x0) * (x - x1) * (x - x2)) / ((x3 - x0) * (x3 - x1) * (x3 - x2));

    result = a * y0 + b * y1 + c * y2 + d * y3;
}

function calcPoint5() {
    a = ((x - x1) * (x - x2) * (x - x3) * (x - x4)) / ((x0 - x1) * (x0 - x2) * (x0 - x3) * (x0 - x4));
    b = ((x - x0) * (x - x2) * (x - x3) * (x - x4)) / ((x1 - x0) * (x1 - x2) * (x1 - x3) * (x1 - x4));
    c = ((x - x0) * (x - x1) * (x - x3) * (x - x4)) / ((x2 - x0) * (x2 - x1) * (x2 - x3) * (x2 - x4));
    d = ((x - x0) * (x - x1) * (x - x2) * (x - x4)) / ((x3 - x0) * (x3 - x1) * (x3 - x2) * (x3 - x4));
    e = ((x - x0) * (x - x1) * (x - x2) * (x - x3)) / ((x4 - x0) * (x4 - x1) * (x4 - x2) * (x4 - x3));

    result = a * y0 + b * y1 + c * y2 + d * y3 + e * y4;
}

function printOutput() {
    var html = ``;
    html += `<div class="col-12">`;
    html += `   <b>P(${x}) = </b> ${Number.isNaN(result) ? "Nenhum resultado obtido." : result.toFixed(4)}`;
    html += `</div>`;

    $("#result").html(html);
}