document.addEventListener("DOMContentLoaded", () => {
    let operando1, operando2, accion, result, memoria, ultimaAccion;
    let visor_linea_1 = document.querySelector(".visor>.linea-1");
    let visor_linea_2 = document.querySelector(".visor>.linea-2");

    inicializar();

    function inicializar() {
        document.querySelectorAll(".tecla").forEach((e) => { e.addEventListener("click", ejecutarAccion) });
        visor_linea_2.innerHTML = "0";
    }

    function escribirNumero(num) {
        console.log(num, visor_linea_2.innerHTML)
        if (visor_linea_2.innerHTML == "0") {
            if (num == ".") {
                visor_linea_2.innerHTML = "0" + num;
            } else {
                visor_linea_2.innerHTML = "" + num;
            }
        } else if (visor_linea_2.innerHTML.length < 19) {
            if (ultimaAccion != "accion") {
                visor_linea_2.innerHTML = visor_linea_2.innerHTML + num;
            } else {
                visor_linea_2.innerHTML = "" + num;
            }
        }
        ultimaAccion = "numero";
    }

    function sumar() {
        operando1 = parseFloat(visor_linea_2.innerHTML);
        // visor_linea_2.innerHTML = "0";
        accion = "sumar";
        ultimaAccion = "accion";
    }

    function restar() {
        operando1 = parseFloat(visor_linea_2.innerHTML);
        // visor_linea_2.innerHTML = "0";
        accion = "restar";
        ultimaAccion = "accion";
    }

    function multiplicar() {
        operando1 = parseFloat(visor_linea_2.innerHTML);
        // visor_linea_2.innerHTML = "0";
        accion = "multiplicar";
        ultimaAccion = "accion";
    }

    function dividir() {
        operando1 = parseFloat(visor_linea_2.innerHTML);
        // visor_linea_2.innerHTML = "0";
        accion = "dividir";
        ultimaAccion = "accion";
    }

    function resultado() {
        operando2 = parseFloat(visor_linea_2.innerHTML);
        switch (accion) {
            case "sumar":
                result = operando1 + operando2;
                break;
            case "restar":
                result = operando1 - operando2;
                break;
            case "multiplicar":
                result = operando1 * operando2;
                break;
            case "dividir":
                if (operando2 != 0) {
                    result = operando1 / operando2;
                } else {
                    result = "Error"
                }
                break;
        }
        visor_linea_2.innerHTML = result;
    }

    function reset() {
        visor_linea_2.innerHTML = "0";
        operando1 = 0;
    }

    function borrar() {
        if (visor_linea_2.innerHTML.length > 1) {
            visor_linea_2.innerHTML = visor_linea_2.innerHTML.slice(0, -1);
        } else {
            visor_linea_2.innerHTML = "0";
        }
    }

    function ejecutarAccion(e) {
        let tecla = e.target.classList[1]
        console.log(tecla)
        switch (tecla) {

            case "sum":
                console.log("sum");
                sumar();
                break;
            case "rest":
                console.log("rest");
                restar();
                break;
            case "mult":
                console.log("mult");
                multiplicar();
                break;
            case "div":
                console.log("div");
                dividir();
                break;
            case "del":
                console.log("del");
                borrar();
                break;
            case "ac":
                console.log("ac");
                reset();
                break;
            case "result":
                console.log("result");
                resultado();
                break;
            case "ans":
                console.log("ans");
                break;
            case "exp":
                console.log("exp");
                break;
            default:
                console.log("num");
                escribirNumero(tecla[2]);
                break;
        }
    }
});