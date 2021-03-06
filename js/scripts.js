$(document).ready(function () {

    $('.alert').hide();

    $(function () {
        $('.close-alert').click(function () {
            $('.alert').hide();
        });
    });

    $(".form").each(function (formIndex, formElement) {
        $(formElement).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 7
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, корректно заполните поле.",
                    minlength: "Введите больше 2 символов."
                },
                phone: {
                    required: "Пожалуйста, корректно заполните поле.",
                    minlength: "Введите больше 7 символов."
                }
            },
            submitHandler: function (form) {
                var $form = $(form);
                $.post('send.php', $form.serialize(), function (data) {
                    $('.form-control').removeClass('valid');
                    $(document).ready(function () {
                        $('.form-control').val('');
                        $('.modal').modal('hide');

                        $('.alert').show();

                        $(function () {
                            $(".request").animate({scrollTop: 0}, "slow");
                            return false;
                        });

                    });
                });
            }
        });
    });


    $('.to-bottom').click(function () {

        $('html, body').animate({
            scrollTop: $(".request").offset().top
        }, 300);

    });
});