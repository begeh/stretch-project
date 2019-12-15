$('#x-name').change(function() {
    let val;
    val = $('#x-name').val();
    $("#x-axis h2").text(val);
});

$('#y-name').change(function() {
    let val;
    val = $('#y-name').val();
    $("#y-axis h2").text(val);
});

$('#chart-name').change(function() {
    let val;
    val = $('#chart-name').val();
    $("#chart-title").text(val);
});

$('#font_color').change(function(){
    let val;
    val = $('#font_color').val();
    $('#chart-title').css('color', val);
});

$('#font_size').change(function(){
    let val;
    val = $('#font_size').val();
    $('#chart-title').css('font-size', val + "px");
});