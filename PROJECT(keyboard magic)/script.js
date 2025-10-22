const tableEl = document.querySelector("#table")

let insert = document.querySelector("div")



window.addEventListener('keydown',function(e) {
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
insert.innerHTML = `
    <Table>
        <tr>
        <th>Key</th>
        <th>Key-Code</th>
        <th>Code</th>
        </tr>

        <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
        </tr>
    </Table>
`
    

})
