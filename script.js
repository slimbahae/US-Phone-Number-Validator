function validate() {
    let num = document.getElementById('number').value;
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert mt-3 alert-validation`;
    alertDiv.setAttribute("role", "alert");

    if (regex.test(num)) {
        alertDiv.classList.add('alert-success');
        alertDiv.innerHTML = '<span id="emoji" style="font-size: 1em;">✅</span> The US number you entered is VALID!';
    } else {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerHTML = '<span id="emoji" style="font-size: 1em;">❌</span> The US number you entered is NOT VALID!';
    }

    let container = document.getElementsByClassName("container")[0]; // Select the first element with class 'container'
    container.appendChild(alertDiv);
}

function clearInput() {
    document.getElementById("number").value = "";
    let alertDivs = document.getElementsByClassName("alert-validation");
    while (alertDivs.length > 0) {
        alertDivs[0].parentNode.removeChild(alertDivs[0]);
    }
}
