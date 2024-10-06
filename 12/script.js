var arr = [];

function addtocart() {
    let tname = document.getElementById("todo-name").value;
    let tdate = document.getElementById("todo-date").value;
    let s = { name: tname, date: tdate };

    console.log(tname);
    console.log(s);
    arr.push(s);

    // Get or create the 'addeditems' div
    var listi = document.getElementById("addeditems");
    if (!listi) {
        let div = document.createElement("div");
        div.id = "addeditems";
        document.body.appendChild(div);
        listi = document.getElementById("addeditems");
    }

    // Clear the content before adding new items
    listi.innerHTML = "";

    // Loop through the array and create new divs for each item
    arr.forEach(function(value, index) {
        let div = document.createElement("div");
        div.id = "wanted";

        let p = document.createElement("p");
        p.className = "pclass";
        p.innerHTML = `${value.name} - ${value.date}`;

        let bu = document.createElement("button");
        bu.textContent = "Delete";
        bu.classList = "deletebutton";

        // Set the onclick event for the delete button
        bu.onclick = function() {
            deleteitem(index); // Pass the index to the delete function
        };

        div.appendChild(p);
        div.appendChild(bu);
        listi.appendChild(div);
    });
}

function deleteitem(index) {
    // Remove the item from the array
    arr.splice(index, 1);

    // Re-render the updated list
    var listi = document.getElementById("addeditems");
    listi.innerHTML = "";

    arr.forEach(function(value, i) {
        let div = document.createElement("div");
        div.id = "wanted";

        let p = document.createElement("p");
        p.className = "pclass";
        p.innerHTML = `${value.name} - ${value.date}`;

        let bu = document.createElement("button");
        bu.textContent = "Delete";
        bu.classList = "deletebutton";

        // Bind the delete function again
        bu.onclick = function() {
            deleteitem(i);
        };

        div.appendChild(p);
        div.appendChild(bu);
        listi.appendChild(div);
    });
}
