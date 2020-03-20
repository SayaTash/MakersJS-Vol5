let table = $('.table');


fetch(`https://restcountries.eu/rest/v2/all`)//он об url берет ответ с бекенда 
    .then(result => result.json())
    .then(data=>{

        data.forEach((item,i) => {
        let flag = $('.flag');
            table.append(`
                <tr class="str">
                    <td><span class="code">${data[i].alpha2Code}</span></td>
                    <td><img src="${data[i].flag}"></td>
                    <td><span class="name">${data[i].name}</span></td>
                    <td><span class="cap">${data[i].capital}</span></td>
                    <td><span class="pop">${data[i].population}</span></td>
                </tr>
            `)
        });

    });
