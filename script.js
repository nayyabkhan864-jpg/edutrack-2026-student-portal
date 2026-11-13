
// ===================================
// 1. DOM ELEMENT SELECTION
// ===================================

const statusButton = document.getElementById("statusButton");
const taskStatus = document.getElementById("taskStatus");
const completedCount = document.getElementById("completedCount");

const counter = document.getElementById("counter");
const bigCounter = document.getElementById("bigCounter");

const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const profileName = document.getElementById("profileName");
const formMessage = document.getElementById("formMessage");

const delayedMessage = document.getElementById("delayedMessage");

const promiseButton = document.getElementById("promiseButton");
const promiseMessage = document.getElementById("promiseMessage");


// ===================================
// 2. TASK STATUS UPDATE
// ===================================

let taskCompleted = false;

statusButton.addEventListener("click", function() {

    taskCompleted = !taskCompleted;

    if (taskCompleted) {

        taskStatus.textContent = "● Completed";
        taskStatus.className = "completed";

        statusButton.textContent = "Mark Pending";

        completedCount.textContent = "01";

    } else {

        taskStatus.textContent = "● Pending";
        taskStatus.className = "pending";

        statusButton.textContent = "Mark Completed";

        completedCount.textContent = "00";

    }

});


// ===================================
// 3. CLICK COUNTER
// ===================================

let clickCount = 0;

countButton.addEventListener("click", function() {

    clickCount++;

    counter.textContent = clickCount;
    bigCounter.textContent = clickCount;

});


// ===================================
// 4. RESET COUNTER
// ===================================

resetButton.addEventListener("click", function() {

    clickCount = 0;

    counter.textContent = clickCount;
    bigCounter.textContent = clickCount;

});


// ===================================
// 5. STUDENT FORM VALIDATION
// ===================================

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = studentName.value.trim();

    if (name === "") {

        formMessage.textContent =
            "Please enter your name before submitting.";

        formMessage.style.color = "red";

    } else if (!/^[a-zA-Z ]+$/.test(name)) {

        formMessage.textContent =
            "Please enter a valid name using letters only.";

        formMessage.style.color = "red";

    } else {

        profileName.textContent = name;

        formMessage.textContent =
            "Success! Your profile has been updated.";

        formMessage.style.color = "green";

        studentForm.reset();

    }

});


// ===================================
// 6. DELAYED MESSAGE USING setTimeout
// ===================================

setTimeout(function() {

    delayedMessage.textContent =
        "Welcome! Your student dashboard is ready.";

}, 3000);


// ===================================
// 7. PROMISE FUNCTION
// ===================================

function verifyAssignment() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (taskCompleted) {

                resolve(
                    "Success! Your assignment is completed."
                );

            } else {

                reject(
                    "Error! Please complete your assignment first."
                );

            }

        }, 2000);

    });

}


// ===================================
// 8. PROMISE EVENT HANDLING
// ===================================

promiseButton.addEventListener("click", function() {

    promiseButton.disabled = true;

    promiseMessage.textContent =
        "Verifying your assignment...";

    promiseMessage.style.color = "#286bb3";

    verifyAssignment()

        .then(function(message) {

            promiseMessage.textContent = message;

            promiseMessage.style.color = "green";

        })

        .catch(function(error) {

            promiseMessage.textContent = error;

            promiseMessage.style.color = "red";

        })

        .finally(function() {

            promiseButton.disabled = false;

            console.log("Assignment verification finished.");

        });

});
