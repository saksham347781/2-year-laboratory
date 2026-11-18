const fetchButton = document.getElementById("fetchButton");
const statusText = document.getElementById("status");
const result = document.getElementById("result");

fetchButton.addEventListener("click", fetchStudentData);

function getStudentData() {
    // Promise simulates a server response after a delay.
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const student = {
                name: "Saksham Mani Tripathi",
                course: "B.Tech Computer Science",
                university: "GLA University",
                year: "Second Year"
            };

            resolve(student);
        }, 2000);
    });
}

function fetchStudentData() {
    fetchButton.disabled = true;
    statusText.textContent = "Loading data from server...";
    result.innerHTML = "";

    getStudentData()
        .then(function(student) {
            statusText.textContent = "Data received successfully!";

            result.innerHTML =
                '<div class="data-item"><strong>Name:</strong> ' + student.name + '</div>' +
                '<div class="data-item"><strong>Course:</strong> ' + student.course + '</div>' +
                '<div class="data-item"><strong>University:</strong> ' + student.university + '</div>' +
                '<div class="data-item"><strong>Year:</strong> ' + student.year + '</div>';
        })
        .catch(function(error) {
            statusText.textContent = "Something went wrong: " + error;
        })
        .finally(function() {
            fetchButton.disabled = false;
        });
}
