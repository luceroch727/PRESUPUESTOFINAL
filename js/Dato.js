const formatoMoneda=(presupuesto) =>{
    return presupuesto.toLocaleString("mx",{
        style: "currency",
        currency: "MXN",
        maximunFractionDigits: 2,
    });
};

const formatoPorcentaje=(porcentajeEgreso) =>{
    return porcentajeEgreso.toLocaleString("mx",{
        style: "percent",
        maximunFractionDigits:1,
    });
};




const ingresos = [100,500,1000];

const totalIngreso = () => {
    let totalIngreso = 0;

    for( const ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
};

const egresos =[10,28,];

const totalEgresos =() => {
    let totalEgreso = 0;
    for( const egreso of egreso){
        totalEgreso += egreso;
    }
return totalEgreso;
};
function cargarcabecero(){
    const presupuesto = totalIngresos()- totalEgresos();
    const porcentajeEgreso =totalEgresos() / totalIngresos();
    const presupuestoMoneda = formatoMoneda(presupuesto);
    const egresoPorcentuado = formatoPorcentaje(porcentajeEgreso);
     console.log(presupuestoMoneda);
     console.log(egresoPorcentuado);
     console.log(totalIngresos());
     console.log(totalEgresos());

};