$(document).ready(function () {
    $('#btn_submit').click(function () {
        var user_name = $('#name').val();
        var user_phone = $('#phone').val();

        $.ajax({
            url: "send.php",
            type: "post",
            data: {
                "name": user_name,
                "phone": user_phone,
            },
            error: function () { $("#erconts").html("Произошла ошибка!"); },
            beforeSend: function () {
                $("#erconts").html("Отправляем данные...");
            },
            success: function (result) {
                $('#erconts').html(result);
                console.log("ntcn");
            }
        });
    });
});