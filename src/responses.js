const addressees = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "nombreCorto":"leandro",
            "nombreDest":"leandro",
            "rutDest":"11088617",
            "dvDest":"9",
            "cuenta":"190523752336",
            "banco":"BANCO ESTADO",
            "nombreEmp":"CELULAS NO TOCAR TDM",
            "rutEmp":"60656544",
            "dvEmp":"5",
            "convenio":"    184200",
            "cuentaDest":"000000000018053100",
            "codBancoDest":"012",
            "cecClaCta":"TPI",
            "cecTipCta":"COB ",
            "ugeEst":"",
            "glosa":null
         })
     }

    res.send(items);
    next();
}

const pagosUnitarios = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "folio": "68156472" + i,
            "tipoOperacion": "NOR",
            "fecha": "16/08/2019",
            "rutEmpOrigen": "60656544",
            "dvRutEmpOrigen": "5",
            "nombreEmpOrigen": "CELULAS NO TOCAR TDM",
            "cuentaCargo": "000060656544",
            "rutEmpBeneficiario": "11137156",
            "dvRutEmpBeneficiario": "3",
            "nombreEmpBeneficiario": "CELULA TDM",
            "nombreBancoBeneficiario": "BCI",
            "cuentaDestino": "000000000060656544",
            "monto": 5000000,
            "moneda": "CLP",
            "convenio": "184200",
            "glosa": "TRANSFERENCIA DE PRUEBA"
         })
     }

    res.send(items);
    next();
}

const pagosMasivos = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "folio":"401025886100" + i,
            "producto":"PAGOS MASIVOS",
            "cuentaCargo":"000060656544",
            "fechaPago":"2019-08-29 00:00:00.0",
            "monto":225000.0000,
            "moneda":"CLP",
            "codEstado":"6910",
            "fechaCargo":"2019-03-29 00:00:00.0",
            "nombreArchivo":"CARGATDM.TXT",
            "fechaVencValeVista":"2019-03-29 00:00:00.0",
            "fechaVencPagoEfectivo":"2017-05-24 00:00:00.0",
            "convenio":"    184200",
            "rutEmpresa":"60656544",
            "divEmpresa":"5",
            "tipoPago":"REM",
            "razonSocial":"CELULAS NO TOCAR TDM",
            "totalRegistros":"30",
            "tipoFolio":null,
            "subTipoProducto":"REM"
         })
     }

    res.send(items);
    next();
}



const obtenerListadoImpuestos = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "nombreEmp":"EMPRESA CANALES TDM A S",
            "rutEmp":"58929969",
            "dvEmp":"8",
            "folio":"0E4AC894-2E2B-4218-A679-E9E90F6449C4",
            "cuenta":"58930169",
            "monto":"500000.0000",
            "moneda":"CLP",
            "origen":"Previred",
            "fecha":"2019-01-16"
         })
     }

    res.send(items);
    next();
}

const obtenerCVDGrupo = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "nOperacion":"163" + i,
            "nombreEmp":"CELULAS NO TOCAR TDM",
            "rutEmp":"60656544",
            "dvEmp":"5",
            "monedaCompra":"CLP",
            "montoCompra":"70000.00",
            "cuentaAbono":"61656544",
            "tipoCambio":"602.098744",
            "monedaPago":"USD",
            "montoPago":"116.26",
            "cuentaCargo":"60656546"
         })
     }

    res.send(items);
    next();
}

const onp = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "folio": "ONP1000000" + i,
            "talonario": "990001",
            "numCheques": 4,
            "nombreEmpresa": "EMPRESA TDM CRA84 A S",
            "cuenta": "70446191",
            "fecha": "13/05/2019",
            "rutEmp": "70446191",
            "dvRutEmp": "7",
            "monto": 22827
         })
     }

    res.send(items);
    next();
}

const listCredits = (req, res, next) => {

    var items = []
     for (var i = 0; i < 100; i++) {
        items.push({
            "cai":"D090",
            "iic":"10069425",
            "numIdeCredito":"135355" + i,
            "montoSolicitado":"1394304.0",
            "numeroConvenio":"186971",
            "tipoDeCreditoSeleccionado":"AVC721",
            "glosaTipoDeCreditoSeleccionado":"Cuota fija tasa fija               ",
            "rutEmpresa":"590670901",
            "dvEmpresa":"1",
            "numeroCuotas":"4",
            "cuentaAbono":"99067090        ",
            "aposQueHanFirmado":[
                {
                "rutUsuario":"13608118",
                "digitoVerifUsu":"7",
                "nombres":"GUILLERMO                ",
                "apellidoPaterno":"SANDOVAL                 ",
                "apellidoMaterno":"TDM                      ",
                "fechaCreacion":"28/08/2019",
                "horaInicio":"10:53",
                "emailusu":null
                }
            ],
            "operationType":"credit",
            "canal":"980",
            "idEmpresa":"59067090",
            "nOperacion":"D09010069425",
            "ultimoActuante":"GUILLERMO SANDOVAL TDM"
            })
        }
    res.send(items);
    next();
}

const tracking = (req, res, next) => {

    items.push({
        "folio": "401109054500",
		"fechaAccion": "2019-08-18 00:00:00.0",
		"rutUsuario": "13609916",
		"dvUsuario": "7",
		"nombreCompletoUsuario": "CELULA NO TOCAR TDM TDMCL",
		"accCod": "INGR",
		"codEstado": null,
		"descEstado": null,
		"nombreUsuario": null,
		"apPatUsuario": null,
		"apMatUsuario": null
        });

    items.push({
        "folio": "401109054500",
        "fechaAccion": "2019-08-18 00:00:00.0",
        "rutUsuario": "13609916",
        "dvUsuario": "7",
        "nombreCompletoUsuario": "CELULA NO TOCAR TDM TDMCL",
        "accCod": "INGR",
        "codEstado": null,
        "descEstado": null,
        "nombreUsuario": null,
        "apPatUsuario": null,
        "apMatUsuario": null
        });

    res.send(items);
    next();
}


const trackingOnp = (req, res, next) => {

    items = [
        {
           "serial":"000000990013",
           "motivo":"2"
        },
        {
           "serial":"000000990014",
           "motivo":"2"
        },
        {
           "serial":"000000990015",
           "motivo":"3"
        },
        {
           "serial":"000000990016",
           "motivo":"6"
        }
     ]

    res.send(items);
    next();
}

module.exports = {
    addressees,
    pagosUnitarios,
    pagosMasivos,
    obtenerListadoImpuestos,
    obtenerCVDGrupo,
    onp,
    listCredits,
    tracking,
    trackingOnp
}