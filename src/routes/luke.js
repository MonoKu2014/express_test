import { Router } from 'express';

const router = Router();


router.get('/obtenerBoleta', (req, res) => {
  var items = []
  for (var i = 0; i < 100; i++) {
     items.push(
      {
        "idSolicitud": 3375,
        "numOperacion":"D09010074512",
        "nombreTomador":"EMPRESA CELULAS NO TOCAR A S",
        "rutTomador":"51020903",
        "dvTomador":"6",
        "montoSolicitado":"2.0",
        "moneda":"UF ",
        "fechaVencimiento":"30-12-2019",
        "cuentaCargo":"51020903",
        "comisionEmision":"66796",
        "comisionMantencion":"1.8000",
        "nombreBeneficiario":"NOMBREGENRICO APELLIDOPATERNO APELLIDOMATERNO",
        "rutBeneficiario":"11111111",
        "dvBeneficiario":"1",
        "tipoBeneficiario":"Privado",
        "objetivo":"Anticipo",
        "formaPago":"A la vista",
        "glosa":"sdasdasd",
        "estado":"Cursada",
        "retirador":[
          {
            "idSolicitud":3375,
            "nombreRetirador":"asdasdasd",
            "rutRetirador":"11111111",
            "dvRetirador":"1"
          }
        ]
      })
  };
  return res.json(items);
});


export default router;