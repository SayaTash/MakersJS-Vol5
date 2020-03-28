
render();

$('#myForm').on('submit', function(e){
    e.preventDefault();
    let data = $('#myForm').serialize();
    $.ajax({
        method: 'post',
        url: `http://localhost:8000/contact`,
        data,
        success: render
    });
});
34.03
function render(){
    $.ajax({
        method: 'get',
        url: `http://localhost:8000/contact`,
        success: function(data){
            $('.tbody').html('');
            data.forEach(item => {
                $('.tbody').append(`
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.surname}</td>
                        <td>${item.phone}</td>
                        <td>${item.email}</td>
                    </tr>
                `)
            });
        }
    });
}







