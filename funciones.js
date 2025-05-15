function mostrarFormulario() {
    const tipo = document.getElementById("calculoSeleccionado").value;
    const form = document.getElementById("formulario");
    form.innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    if (tipo === "velocidad") {
        form.innerHTML = `
            <label>Desplazamiento (Δx) en metros: <input type="number" id="dx" step="any"></label>
            <label>Tiempo (Δt) en segundos: <input type="number" id="dt" step="any"></label>
            <button type="button" onclick="calcularVelocidad()">Calcular</button>
        `;
    } else if (tipo === "aceleracion") {
        form.innerHTML = `
            <label>Cambio de velocidad (Δv) en m/s: <input type="number" id="dv" step="any"></label>
            <label>Tiempo (Δt) en segundos: <input type="number" id="dt" step="any"></label>
            <button type="button" onclick="calcularAceleracion()">Calcular</button>
        `;
    } else if (tipo === "fuerza") {
        form.innerHTML = `
            <label>Masa (m) en kg: <input type="number" id="m" step="any"></label>
            <label>Aceleración (a) en m/s²: <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularFuerza()">Calcular</button>
        `;
    } else if (tipo === "trabajo") {
        form.innerHTML = `
            <label>Fuerza (F) en Newtons: <input type="number" id="f" step="any"></label>
            <label>Desplazamiento (d) en metros: <input type="number" id="d" step="any"></label>
            <label>Ángulo (θ) en grados : <input type="number" id="theta" step="any" placeholder="0 si no aplica"></label>
            <button type="button" onclick="calcularTrabajo()">Calcular</button>
        `;
    } else if (tipo === "energia") {
        form.innerHTML = `
            <label>Masa (m) en kg: <input type="number" id="m" step="any"></label>
            <label>Velocidad (v) en m/s: <input type="number" id="v" step="any"></label>
            <button type="button" onclick="calcularEnergia()">Calcular</button>
        `;
    } else if (tipo === "epg") {
        form.innerHTML = `
            <label>Masa (m) en kg: <input type="number" id="m" step="any"></label>
            <label>Altura (h) en metros: <input type="number" id="h" step="any"></label>
            <label>Gravedad (g) en m/s²: <input type="number" id="g" step="any" value="9.8"></label>
            <button type="button" onclick="calcularEPG()">Calcular</button>
        `;
    } else if (tipo === "densidad") {
        form.innerHTML = `
            <label>Masa (m) en kg: <input type="number" id="m" step="any"></label>
            <label>Volumen (V) en m³: <input type="number" id="v" step="any"></label>
            <button type="button" onclick="calcularDensidad()">Calcular</button>
        `;
    } else if (tipo === "presion") {
        form.innerHTML = `
            <label>Fuerza (F) en N: <input type="number" id="f" step="any"></label>
            <label>Área (A) en m²: <input type="number" id="a" step="any"></label>
            <button type="button" onclick="calcularPresion()">Calcular</button>
        `;
    } else if (tipo === "carga") {
        form.innerHTML = `
            <label>Corriente (I) en amperios: <input type="number" id="i" step="any"></label>
            <label>Tiempo (t) en segundos: <input type="number" id="t" step="any"></label>
            <button type="button" onclick="calcularCarga()">Calcular</button>
        `;
    } else if (tipo === "ohm") {
        form.innerHTML = `
            <label>Corriente (I) en amperios: <input type="number" id="i" step="any"></label>
            <label>Resistencia (R) en ohmios: <input type="number" id="r" step="any"></label>
            <button type="button" onclick="calcularOhm()">Calcular</button>
        `;
    }
}

function calcularVelocidad() {
    const dx = parseFloat(document.getElementById("dx").value);
    const dt = parseFloat(document.getElementById("dt").value);
    if (dt === 0) {
        document.getElementById("resultado").innerText = "Error: El tiempo no puede ser cero";
        return;
    }
    const resultado = dx / dt;
    document.getElementById("resultado").innerText = `Velocidad media: ${resultado.toFixed(2)} m/s`;
}

function calcularAceleracion() {
    const dv = parseFloat(document.getElementById("dv").value);
    const dt = parseFloat(document.getElementById("dt").value);
    if (dt === 0) {
        document.getElementById("resultado").innerText = "Error: El tiempo no puede ser cero";
        return;
    }
    const resultado = dv / dt;
    document.getElementById("resultado").innerText = `Aceleración media: ${resultado.toFixed(2)} m/s²`;
}

function calcularFuerza() {
    const m = parseFloat(document.getElementById("m").value);
    const a = parseFloat(document.getElementById("a").value);
    const resultado = m * a;
    document.getElementById("resultado").innerText = `Fuerza: ${resultado.toFixed(2)} N (Newtons)`;
}

function calcularTrabajo() {
    const f = parseFloat(document.getElementById("f").value);
    const d = parseFloat(document.getElementById("d").value);
    const thetaInput = document.getElementById("theta");
    let theta = 0;
    if (thetaInput && thetaInput.value !== "") {
        theta = parseFloat(thetaInput.value);
    }
    const thetaRad = theta * Math.PI / 180;
    const resultado = f * d * Math.cos(thetaRad);
    document.getElementById("resultado").innerText = `Trabajo mecánico: ${resultado.toFixed(2)} J (Joules)`;
}

function calcularEnergia() {
    const m = parseFloat(document.getElementById("m").value);
    const v = parseFloat(document.getElementById("v").value);
    const resultado = 0.5 * m * v * v;
    document.getElementById("resultado").innerText = `Energía cinética: ${resultado.toFixed(2)} J (Joules)`;
}

function calcularEPG() {
    const m = parseFloat(document.getElementById("m").value);
    const h = parseFloat(document.getElementById("h").value);
    const g = parseFloat(document.getElementById("g").value);
    const resultado = m * g * h;
    document.getElementById("resultado").innerText = `Energía potencial gravitacional: ${resultado.toFixed(2)} J (Joules)`;
}

function calcularDensidad() {
    const m = parseFloat(document.getElementById("m").value);
    const v = parseFloat(document.getElementById("v").value);
    if (v === 0) {
        document.getElementById("resultado").innerText = "Error: El volumen no puede ser cero";
        return;
    }
    const resultado = m / v;
    document.getElementById("resultado").innerText = `Densidad: ${resultado.toFixed(2)} kg/m³`;
}

function calcularPresion() {
    const f = parseFloat(document.getElementById("f").value);
    const a = parseFloat(document.getElementById("a").value);
    if (a === 0) {
        document.getElementById("resultado").innerText = "Error: El área no puede ser cero";
        return;
    }
    const resultado = f / a;
    document.getElementById("resultado").innerText = `Presión: ${resultado.toFixed(2)} Pa (Pascales)`;
}

function calcularCarga() {
    const i = parseFloat(document.getElementById("i").value);
    const t = parseFloat(document.getElementById("t").value);
    const resultado = i * t;
    document.getElementById("resultado").innerText = `Carga eléctrica: ${resultado.toFixed(2)} C (Coulombs)`;
}

function calcularOhm() {
    const i = parseFloat(document.getElementById("i").value);
    const r = parseFloat(document.getElementById("r").value);
    const resultado = i * r;
    document.getElementById("resultado").innerText = `Voltaje: ${resultado.toFixed(2)} V (Voltios)`;
}
