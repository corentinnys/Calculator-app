let btns = document.querySelectorAll("button");
let result = document.querySelector("#resultat");

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        let value = btn.innerText;

        if (value === "=") {
            result.innerText = eval(result.innerText);
        }
        else if (value === "Reset") {
            result.innerText = 0;
        }
        else if (value === "del") {
            result.innerText = 0;
        }
        else {
            result.innerText += value;
        }

    });
});