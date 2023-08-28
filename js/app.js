const formatoMoneda = (presupuesto) => {
    return presupuesto.toLocaleString("mx", {
      style: "currency",
      currency: "MXN",
      maximunFractionDigits: 2,
    });
  };
  
  const formatoPorcentaje = (porcentajeEgreso) => {
    return porcentajeEgreso.toLocaleString("mx", {
      style: "percent",
      maximunFractionDigits: 1,
    });
  };
  
  let ingresos = {
    
  };
  
  let egresos = {
    
  };
  
  const cargaInicialIngresos = () => {
    for (const ingreso in ingresos) {
      const value = ingresos[ingreso];
      agregarElemento(ingreso, value, "ingreso");
    }
  };
  
  const cargaInicialEgresos = () => {
    for (const egreso in egresos) {
      const value = egresos[egreso];
      agregarElemento(egreso, value, "egreso");
    }
  };
  
  const calcularTotalIngresos = () => {
    let totalIngreso = 0;
    const ingresosElement = document.getElementById("lista-ingresos");
    const elementos = ingresosElement.getElementsByClassName("elemento_valor");
    for (let ingreso = 0; ingreso < elementos.length; ingreso++) {
      const valor = elementos[ingreso].innerHTML;
      totalIngreso = totalIngreso + parseFloat(valor);
    }
    return totalIngreso;
  };
  
  const calcularTotalEgresos = () => {
    let totalEgreso = 0;
    const ingresosElement = document.getElementById("lista-egresos");
    const elementos = ingresosElement.getElementsByClassName("elemento_valor");
    for (let egreso = 0; egreso < elementos.length; egreso++) {
      const egresoNuevo = elementos[egreso].innerHTML;
      totalEgreso = totalEgreso + parseFloat(egresoNuevo);
    }
    return totalEgreso;
  };
  
  const calcularPresupuestoDisponible = () => {
    return calcularTotalIngresos() + calcularTotalEgresos();
  };
  
  const cargarIngresos = () => {
    const valor = document.getElementById("presupuesto_ingreso--valor");
    const porcentaje = document.getElementById("presupuesto_ingreso--porcentaje");
    const egresos = calcularTotalEgresos();
    const ingresos = calcularTotalIngresos();
    const ingresosDinero = formatoMoneda(ingresos);
    const porcentajeEgresos = ingresos - egresos;
    porcentaje.innerHTML = formatoPorcentaje(ingresos / porcentajeEgresos);
    valor.innerHTML = ingresosDinero;
  };
  
  const cargarEgresos = () => {
    const valor = document.getElementById("presupuesto_egreso--valor");
    const porcentaje = document.getElementById("presupuesto_egreso--porcentaje");
    const egresos = calcularTotalEgresos();
    const ingresos = calcularTotalIngresos();
    const egresosDinero = formatoMoneda(egresos);
    const porcentajeEgresos = ingresos - egresos;
    porcentaje.innerHTML = formatoPorcentaje(-egresos / porcentajeEgresos);
    valor.innerHTML = egresosDinero;
  };
  
  const cargarPresupuestoDisponible = () => {
    const id = "prespuestoDisponible--valor";
    const prespuesto = calcularPresupuestoDisponible();
    const presupuestoEnMoneda = formatoMoneda(prespuesto);
    document.getElementById(id).innerHTML = presupuestoEnMoneda;
  };
  
  const cargarcabecero = () => {
    cargaInicialIngresos();
    cargaInicialEgresos();
    cargarIngresos();
    cargarEgresos();
    ///Sumar();
    cargarPresupuestoDisponible();
  };
  
  cargarcabecero();
  
  document.getElementById("agregarbtn").addEventListener("click", (e) => {
    var tipo_resultado = document.getElementById("tipo").value;
    var descripcion = document.getElementById("descripcion").value;
    var valor = document.getElementById("valor").value;
    if (!descripcion) {
      return alert("Por favor agrega una descripción");
    }
    if (!valor) {
      return alert("Por favor agrega un valor");
    }
    if (tipo_resultado == "egreso") {
      egresos[descripcion] = valor;
    } else {
      ingresos[descripcion] = valor;
    }
    limpiarValores();
    cargarcabecero();
  });
  