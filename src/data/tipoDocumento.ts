export const tipoDocumento = {
  FE: { // Factura Electronica
    code: '01'
  },
  ND: { // Nota de Debito
    code: '02'
  },
  NC: { // Nota de Credito
    code: '03'
  },
  TE: { // Tiquete Electronico
    code: '04'
  },
  CCE: { // Confirmacion Comprobante Electronico
    code: '05',
    msjReceptorCode: '1'
  },
  CPCE: { // Confirmacion Parcial Comprobante Electronico
    code: '06',
    msjReceptorCode: '2'
  },
  RCE: { // Rechazo Comprobante Electronico
    code: '07',
    msjReceptorCode: '3'
  }
}
