document.getElementById("attendanceForm").onsubmit = function () {
    
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }
    
    const securityCode = document.getElementById("securityCode").value;
    const confirmSecurityCode = document.getElementById("confirmSecurityCode").value;
    if (securityCode !== confirmSecurityCode) {
        showModal("Security codes do not match!");
        return false;
    }
    // More validations here

    const entryChecked = document.getElementById("entry").checked;
    const exitChecked = document.getElementById("exit").checked;
    if (!entryChecked && !exitChecked) {
        alert("Please select whether you are registering for Entry or Exit.");
        return false;
    }

    return true;
};

function showModal(message) {
    var modal = document.getElementById("myModal");
    document.getElementById("modalText").innerText = message;

    // Calculate form's top offset to adjust modal's position
    var formRect = document.getElementById("attendanceForm").getBoundingClientRect();
    modal.style.top = `${window.scrollY + formRect.top + formRect.height + 10}px`; // 10px below the form

    modal.style.display = "block";
    
    var span = document.querySelector(".modal .close");
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email.toLowerCase());
}

function resetForm() {
    document.getElementById("attendanceForm").reset();
}

window.onload = resetForm;
