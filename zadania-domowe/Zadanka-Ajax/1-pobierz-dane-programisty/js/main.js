$(document).ready(function() {
    $('#download-data').click(function() {
        downloadAndDisplayData();
    })

    const downloadAndDisplayData = () => {
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            method: 'GET',
            dataType: "json"
        })
            .done(function (data) {
                $('#download-data').after(`<div id="dane-programisty">Imię: ${data.imie}, Nazwisko: ${data.nazwisko}, Zawód: ${data.zawod}, Firma: ${data.firma}</div>`)
            })
            .fail(function (err) {
                console.error(err);
            })
    }
})