const output = document.getElementById("output");
const form = document.getElementById("calc_form");
const buttons = form.querySelectorAll("input[type=button]");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.value;

        switch (value) {
            case "=":
                try {
                    output.value = eval(output.value);
                } catch (e) {
                    output.value = "Error";
                }
                break;
            case "AC":
                output.value = "";
                break;
            case "DE":
                output.value = output.value.slice(0, -1);
                break;
            case "±":
                output.value = -parseFloat(output.value);
                break;
            case "%":
                output.value = parseFloat(output.value) / 100;
                break;
            default:
                output.value += value;
                break;
        }
    });
});
