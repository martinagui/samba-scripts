// Especificación Técnica:
// El código QR deberá codificar el siguiente texto:
// {URL}?p={DATOS_CMP_BASE_64}

// Donde:
// {URL} = https://www.afip.gob.ar/fe/ qr/
// {DATOS_CMP_BASE_64} = JSON con datos del comprobante codificado en Base64

//  JSON Sample data :
// var data = '{"ver":1,"fecha":"2020-10-13","cuit":30000000007,"ptoVta":10,"tipoCmp":1,"nroCmp":94,"importe":12100,"moneda":"DOL","ctz":65,"tipoDocRec":80,"nroDocRec":20000000001,"tipoCodAut":"E","codAut":70417054367476}';

var dir = host.type("System.IO.Directory");

//b64: receives a json data and returns base64 encoded string.
function b64(input) {
  //URL de Consulta QR AFIP -- https://www.afip.gob.ar/fe/qr/especificaciones.asp

  // var url = 'https://www.afip.gob.ar/fe/qr/?p=';

  var convert = host.type("System.Convert");
  var encoding = host.type("System.Text.Encoding");
  var inputBytes = encoding.UTF8.GetBytes(input);
  var output = convert.ToBase64String(inputBytes);

  return output;
}
