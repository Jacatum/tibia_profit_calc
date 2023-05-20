let hunts = [];
populateTable();

function register() {
    let hunt = hunts[Object.keys(hunts).pop()];
    let profit = document.getElementById("profit").value;
    let vocation = document.querySelector("#vocation").value;
    if (profit && vocation) {
        switch (vocation) {
            case 'ms':
                hunt["ms"] = parseFloat(profit);
            break;
    
            case 'ek':
                hunt["ek"] = parseFloat(profit);
            break;
    
            case 'rp':
                hunt["rp"] = parseFloat(profit);
            break;
    
            case 'ed':
                hunt["ed"] = parseFloat(profit);
            break;
        }
        populateTable();
    }
}

function newHunt() {
    hunts.push({ms: 0, ek: 0, rp: 0, ed: 0})
    populateTable();
}

function populateTable() {
    let el = document.getElementById('hunts-table');
    el.innerHTML = '';
    Object.entries(hunts).forEach(hunt => {
        el.innerHTML += `
        <tr>
            <th scope="row">${parseInt(hunt[0]) + 1}</th>
            <td>${hunt[1]["ms"]}</td>
            <td>${hunt[1]["ek"]}</td>
            <td>${hunt[1]["rp"]}</td>
            <td>${hunt[1]["ed"]}</td>
        </tr>`;
    });
}

function cleanHunts() {
    hunts = [];
    populateTable();
}
