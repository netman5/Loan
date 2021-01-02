const minLoan = 500000;
const maxLoan = 5000000;

let interest = 0;
let emi;
let duration;

function validation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("month").value;
    const month = document.getElementById("year").value;
    const purpose = document.getElementById("purpose").value;
    const working = document.getElementById("exampleCheck1");
    const notWorking = document.getElementById("exampleCheck2");
    const loanAmnt = document.getElementById("loanAmnt").value;
    const income = document.getElementById("mntIncome").value;

    const btn = document.getElementById("formbtn");

    if (
        name &&
        email &&
        day &&
        month &&
        year &&
        purpose &&
        loanAmnt &&
        income == ""
    ) {
        btn.style.display = "hidden";
    } else {
        btn.style.display = "visible";
    }
}

function checkLoan(e) {
    e.preventDefault();
    const amount = document.getElementById("loanAmnt").value;
    const salary = Number(
        document.getElementById("mntIncome").value
    );
    const name = document.getElementById("name").value;
    if (amount > maxLoan) {
        Swal.fire(
            {
                icon: "error",
                title:
                    "<h6>The amount you entered is above our maximum</h6>",
                text: "Pls try again with new Amount",
            },
            clearFields()
        );
    } else if (amount > minLoan) {
        interest = 8.7 / 100;
        duration = 8 * 12;
        console.log(interest, amount);
        emi =
            (amount *
                interest *
                (1 + interest / 12) *
                duration) /
            (12 * (1 + interest / 12) * duration - 1);
        console.log(emi);
    } else {
        interest = 5.7 / 100;
        duration = 5 * 12;
        console.log(interest, amount);
        emi =
            (amount *
                interest *
                (1 + interest / 12) *
                duration) /
            (12 * (1 + interest / 12) * duration - 1);
        console.log(emi);
    }

    if (salary > emi) {
        Swal.fire(
            {
                icon: "success",
                title:
                    "<h6>Congratulation! " +
                    name +
                    " you qualified for " +
                    amount +
                    ", you'll be paying " +
                    emi +
                    " monthly for the duration of " +
                    duration +
                    " months!</h6>",
                text: "Click Ok to proceed",
                imageWidth: 400,
                imageHeight: 200,
            },
            clearFields()
        );
    } else if (emi > salary) {
        Swal.fire(
            {
                icon: "error",
                title:
                    "<h6>Sorry you are unable to apply today...</h6>",
                text: "Try again in few months",
            },
            clearFields()
        );
    }
}
function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("purpose").value = "";
    document.getElementById("exampleCheck1").checked = false;
    document.getElementById("exampleCheck2").checked = false;
    document.getElementById("loanAmnt").value = "";
    document.getElementById("mntIncome").value = "";
}
document
    .getElementById("formbtn")
    .addEventListener("click", checkLoan, clearFields);

document
    .getElementById("forms")
    .addEventListener("load", validation);
// document
//     .getElementById("formBtn")
//     .addEventListener("click", clearFields);
