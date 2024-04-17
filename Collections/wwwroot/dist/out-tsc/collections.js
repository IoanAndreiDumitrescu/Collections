let astroMap = new Map();
let totalCount = 0;
function addName() {
    const astroName = document.getElementById("astroName").value;
    if (astroMap.has(astroName)) {
        let currentCount = astroMap.get(astroName);
        astroMap.set(astroName, currentCount + 1);
        alert("This name already exists!");
    }
    else {
        astroMap.set(astroName, 1);
        let ul = document.getElementById("astroList");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(astroName));
        ul.appendChild(li);
    }
    totalCount += 1;
    document.getElementById("totalEntries").innerText = `Total Entries: ${totalCount}`;
    document.getElementById("duplicateEntries").innerText = `Duplicate Entries: ${astroMap.size}`;
    document.getElementById("duplicatePercent").innerText = `Duplicate Entries (%): ${((astroMap.size / totalCount) * 100).toFixed(2)}`;
    document.getElementById("astroName").value = "";
}
//# sourceMappingURL=collections.js.map