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