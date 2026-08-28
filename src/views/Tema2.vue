<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Documentos soporte y normativa comercial
      p Los documentos soporte permiten respaldar las operaciones económicas y fortalecer la confiabilidad de la información contable. Su adecuada gestión facilita la verificación de los registros y el cumplimiento de las disposiciones comerciales y tributarias aplicables.
      p.mb-5 Los siguientes subtemas desarrollan las características, la clasificación, los requisitos y el tratamiento de estos documentos dentro del proceso contable.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto de documento soporte
      p.mb-5 El documento soporte respalda una operación económica y permite comprobarla antes de incorporarla al proceso contable. Para comprender su importancia, se desarrollan su concepto, contenido y principales funciones:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Concepto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Concepto
              p El documento soporte es el medio físico o electrónico que evidencia una operación económica, como una venta, compra, pago, recaudo, contrato, nómina o transacción bancaria.
              p.mb-0 Su función es relacionar la operación realizada con los comprobantes, libros y reportes contables.
        .py-3.py-md-4(titulo="Información requerida")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Información requerida
              p Un documento soporte debe contener información suficiente para identificar y verificar la operación:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Fecha y valor. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Tercero relacionado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Concepto y forma de pago. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Impuestos aplicables. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Demás datos necesarios.
        .py-3.py-md-4(titulo="Soportes físicos y electrónicos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Soportes físicos y electrónicos
              p.mb-0 Los documentos soporte pueden generarse en formato físico o electrónico. La factura electrónica posee la misma validez legal que la factura en papel, pero su generación, validación, expedición, recepción y conservación se realizan electrónicamente.
      p.mb-5 Los documentos soporte cumplen funciones que garantizan la trazabilidad y confiabilidad de las operaciones contables:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img5.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Evidenciar
                    p.text-center Demuestra que la operación económica ocurrió.
                    p.mb-0.text-center #[b Ejemplo:] factura de compra.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img6.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Verificar
                    p.text-center Permite comprobar el valor, la fecha, el tercero y el concepto de la operación.
                    p.mb-0.text-center #[b Ejemplo:] extracto bancario.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img7.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Medir
                    p.text-center Respalda el valor económico asignado a la operación.
                    p.mb-0.text-center #[b Ejemplo:] recibo de caja por $500.000.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img8.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Registrar
                    p.text-center Proporciona la información necesaria para elaborar el registro contable.
                    p.mb-0.text-center #[b Ejemplo:] comprobante de egreso.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img9.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Controlar
                    p.text-center Contribuye a prevenir duplicidades, omisiones y errores en la información.
                    p.mb-0.text-center #[b Ejemplo:] consecutivo de facturas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img10.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Conservar
                    p.text-center Facilita la consulta y verificación posterior de la operación.
                    p.mb-0.text-center #[b Ejemplo:] archivo físico o digital.
          p.mb-5 A continuación, se presenta un ejemplo aplicado:
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una empresa paga el arriendo del local por $1.500.000 mediante transferencia bancaria. Para respaldar el registro contable, debe conservar el documento que demuestra el cobro del arrendador y el comprobante de la transferencia. Estos soportes permiten verificar el valor, la fecha, el tercero beneficiario y el concepto del pago.
            p.mb-0 Si la empresa registra el gasto sin conservar el soporte, el asiento contable puede quedar sin respaldo suficiente. Esto dificulta la verificación posterior y puede afectar la confiabilidad de la información registrada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Clasificación de los documentos soporte
      p.mb-5 Los documentos soporte se clasifican según la operación que respaldan y su origen. Esta organización facilita el registro, el control y la conservación de la información contable.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img12.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Según el tipo de operación
      p.mb-5 Según el tipo de operación, los documentos soporte se clasifican en:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img14.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Ventas
                    p.mb-0.text-center Factura de venta o documento equivalente.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img15.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Compras
                    p.mb-0.text-center Factura de compra o documento soporte.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img16.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Recaudos
                    p.mb-0.text-center Recibo de caja o consignación.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img17.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Pagos
                    p.mb-0.text-center Comprobante de egreso o transferencia.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img18.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Nómina
                    p.mb-0.text-center Planilla o comprobante de pago.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img19.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Operaciones bancarias
                    p.mb-0.text-center Extracto, nota débito o nota crédito.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img20.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Devoluciones y descuentos
                    p.mb-0.text-center Nota crédito o nota débito.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img21.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Operaciones internas
                    p.mb-0.text-center Nota contable o comprobante de contabilidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img12.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Según su origen
      p.mb-5 Según su origen, los documentos soporte se clasifican en:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img22.png', alt="" ).m-auto
                  h4.text-center Documentos externos
                  .caja-3_p
                    p Son expedidos por terceros, como proveedores, entidades financieras o empresas de servicios.
                    p.mb-0 #[b Ejemplos:] facturas de proveedores, extractos bancarios y recibos de servicios.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img23.png', alt="" ).m-auto
                  h4.text-center Documentos internos
                  .caja-3_p
                    p Son elaborados por la empresa para respaldar recaudos, pagos, ajustes y demás operaciones propias.
                    p.mb-0 #[b Ejemplos:] recibos de caja, comprobantes de egreso y notas contables.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img12.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo aplicado
          p Una empresa recibe una factura por compra de mercancía. Este documento se clasifica como soporte de compra y sirve para registrar inventario, impuesto descontable si aplica y obligación con el proveedor. Si posteriormente devuelve parte de la mercancía, la nota crédito será el soporte para ajustar el valor de la compra o la cuenta por pagar.
          p.mb-0 La clasificación adecuada evita mezclar soportes de diferentes operaciones y facilita la elaboración del registro contable correspondiente.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Características de los documentos soporte
      p.mb-5 Los documentos soporte deben contener información suficiente para identificar, verificar y respaldar la operación. Además, deben ser legibles, completos, auténticos y conservarse adecuadamente. Antes de utilizarlos en el registro contable, se revisan las siguientes características:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img24.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Fecha").ajuste-cajaAcordion.ajuste-vineta
              p Periodo en el que ocurrió la operación.
              p.mb-3 #[b Ejemplo:] factura emitida en abril.
            .row(titulo="Tercero").ajuste-cajaAcordion.ajuste-vineta
              p Persona o entidad relacionada con la operación.
              p.mb-3 #[b Ejemplo:] proveedor o cliente.
            .row(titulo="Concepto").ajuste-cajaAcordion.ajuste-vineta
              p Descripción del bien, servicio u operación realizada.
              p.mb-3 #[b Ejemplo:] compra de papelería.
            .row(titulo="Valor").ajuste-cajaAcordion.ajuste-vineta
              p Medición económica de la operación.
              p.mb-3 #[b Ejemplo:] $850.000.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Impuestos").ajuste-cajaAcordion.ajuste-vineta
              p Tributos aplicables, cuando correspondan.
              p.mb-3 #[b Ejemplo:] IVA o retención.
            .row(titulo="Consecutivo").ajuste-cajaAcordion.ajuste-vineta
              p Número que facilita el control y la trazabilidad.
              p.mb-3 #[b Ejemplo:] número de factura.
            .row(titulo="Medio de pago").ajuste-cajaAcordion.ajuste-vineta
              p Forma utilizada para cancelar o recibir el valor.
              p.mb-3 #[b Ejemplo:] transferencia bancaria.
            .row(titulo="Validez").ajuste-cajaAcordion.ajuste-vineta
              p Cumplimiento de las condiciones físicas, electrónicas y legales aplicables al documento. En los documentos electrónicos, deben verificarse las condiciones correspondientes a su generación, expedición y validación.
              p.mb-3 #[b Ejemplo:] factura electrónica validada por la DIAN.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img25.png", alt="" style="width: 350px").m-auto
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img26.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p A continuación, se presenta un ejemplo aplicado:
            h5 Ejemplo aplicado
            p Una factura de compra que no identifica claramente al proveedor, no presenta fecha o no permite conocer el concepto adquirido puede generar dificultades en el registro contable. Antes de contabilizarla, se debe verificar si el documento cumple los requisitos necesarios para respaldar la operación.
            p.mb-0 La revisión evita registrar valores sin claridad o clasificar de manera incorrecta un costo, gasto o activo.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Diligenciamiento de documentos soporte
      p.mb-5 El diligenciamiento de documentos soporte consiste en registrar la información necesaria para identificar, comprobar y relacionar cada operación con su registro contable. Para completarlos correctamente, se desarrolla el siguiente proceso:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar la fecha
                    p Indicar el día en que ocurrió la operación para ubicarla en el periodo contable correspondiente.
                    p.mb-0 #[b Ejemplo:] 15 de marzo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img27.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img28.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Asignar el consecutivo
                    p Incluir el número que permite controlar y rastrear el documento.
                    p.mb-0 #[b Ejemplo:] CE-00025.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar al tercero
                    p Registrar el nombre o razón social y el número de identificación del cliente, proveedor o beneficiario.
                    p.mb-0 #[b Ejemplo:] Papelería Central S.A.S., NIT 900.000.000-1.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img29.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img30.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Describir el concepto
                    p Explicar claramente la operación realizada.
                    p.mb-0 #[b Ejemplo:] pago de factura de compra.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Indicar el valor
                    p Registrar el valor total de la operación y los impuestos o retenciones aplicables.
                    p.mb-0 #[b Ejemplo:] $1.200.000.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img31.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img32.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Señalar la forma de pago
                    p Especificar el medio utilizado para efectuar la transacción.
                    p.mb-0 #[b Ejemplo:] transferencia bancaria.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Relacionar los anexos
                    p Indicar las facturas, contratos, recibos u otros documentos que complementan el soporte.
                    p.mb-0 #[b Ejemplo:] factura FV-220.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img33.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img34.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Incorporar la aprobación
                    p Identificar a las personas responsables de elaborar, revisar o aprobar el documento.
                    p.mb-0 #[b Ejemplo:]  auxiliar contable y administrador.
          p.mb-5 Estos pasos permiten elaborar documentos completos y útiles para el control contable, como se evidencia en el siguiente caso:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img35.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br
              br
              p Una empresa realiza un pago a un proveedor por $2.300.000. El comprobante de egreso debe indicar el proveedor, la factura que se cancela, el valor pagado, la fecha, la forma de pago y el soporte bancario. Si se incluye esta información, el pago podrá verificarse posteriormente y cruzarse con la cuenta por pagar.
              br
              br
              p Si el comprobante solo indica “pago” sin más detalle, pierde utilidad para el control contable y puede generar errores de conciliación.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Verificación básica de documentos soporte
      p.mb-5 La verificación básica permite confirmar que el documento corresponde al hecho económico, contiene información coherente y cuenta con el respaldo necesario antes de efectuar el registro contable. Para realizarla, se aplican las siguientes preguntas de control:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Lista de verificación de documentos soporte
              .tabla-a(data-aos="zoom-in")
                table
                  caption La tabla presenta preguntas que pueden aplicarse antes de registrar un documento soporte.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto por revisar
                      th.ajuste-border-tabla.texto-left Pregunta de control
                      th.texto-left Cumple
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha
                      td.ajuste-border-tabla.texto-left ¿Corresponde al periodo contable?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tercero
                      td.ajuste-border-tabla.texto-left ¿Está identificado el cliente, proveedor o beneficiario?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Concepto
                      td.ajuste-border-tabla.texto-left ¿La operación está claramente descrita?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor
                      td.ajuste-border-tabla.texto-left ¿El valor coincide con la operación realizada?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Impuestos
                      td.ajuste-border-tabla.texto-left ¿Se incluyeron impuestos o retenciones cuando aplican?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Relación con el negocio
                      td.ajuste-border-tabla.texto-left ¿La operación pertenece al ente económico?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Duplicidad
                      td.ajuste-border-tabla.texto-left ¿El documento no ha sido registrado antes?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soporte adicional
                      td.ajuste-border-tabla.texto-left ¿Tiene anexos necesarios, como contrato o pago bancario?
                      td.texto-left Sí / No
          p.mb-5 La verificación previa permite detectar documentos repetidos y evitar registros duplicados, como ocurre en el siguiente caso:
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img36.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br
              br
              p Una empresa recibe dos veces la misma factura por correo electrónico. Si no se verifica el consecutivo, podría registrarse dos veces el mismo gasto o la misma obligación. La revisión del número de factura, proveedor, fecha y valor permite detectar la duplicidad antes de afectar la contabilidad.
              br
              br
              p Esta verificación protege la calidad de la información y evita errores que luego pueden afectar reportes, impuestos o saldos de cuentas.       
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Código de Comercio y su relación con la contabilidad
      p.mb-5 El Código de Comercio regula las actividades mercantiles y establece obligaciones que inciden en la organización y el respaldo de la información contable. Esta relación se concreta en los siguientes aspectos (Decreto 410 de 1971):
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img37.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Comerciante").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define quiénes realizan actividades mercantiles y deben cumplir las obligaciones comerciales correspondientes.
            .row(titulo="Actos mercantiles").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar las operaciones propias del comercio que pueden generar efectos contables.
            .row(titulo="Registro mercantil").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Formaliza la inscripción de comerciantes, establecimientos y determinados actos comerciales.
            .row(titulo="Sociedades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Regula las formas de organización empresarial y las responsabilidades derivadas de su constitución.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Títulos valores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Documentan derechos y obligaciones relacionados con operaciones comerciales.
            .row(titulo="Libros y papeles comerciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Respaldan los registros, las operaciones y el cumplimiento de las obligaciones del comerciante.
            .row(titulo="Contratos comerciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden generar derechos, obligaciones, ingresos, costos o gastos que deben analizarse contablemente.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img38.png", alt="" style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p La relación entre las obligaciones comerciales y la contabilidad se concreta en el siguiente caso:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Un comerciante que abre un establecimiento de comercio debe identificar sus obligaciones formales, entre ellas la matrícula mercantil y la organización de sus registros. Las operaciones que realiza, como compras, ventas, pagos, contratos o créditos, deben respaldarse con documentos y registrarse de manera ordenada.
            p.mb-0 La normativa comercial ayuda a comprender por qué la contabilidad no es solo un ejercicio interno, sino una responsabilidad asociada a la actividad mercantil.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img39.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Registro mercantil
      p.mb-5 El registro mercantil, administrado por las cámaras de comercio, identifica a comerciantes y establecimientos y formaliza la inscripción de actos, libros y documentos. En contabilidad, respalda la identificación y organización documental de la empresa. Sus principales elementos son:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img40.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img41.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Matrícula mercantil
                    p Identifica formalmente al comerciante y sus establecimientos de comercio.
                    p.mb-0 #[b Relación contable:] respalda la formalización del negocio.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img42.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Renovación
                    p Actualiza anualmente la información registrada del comerciante y del establecimiento.
                    p.mb-0 #[b Relación contable:] contribuye a mantener vigentes los datos empresariales.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img43.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Inscripción de actos y documentos
                    p Da publicidad a los actos, libros y documentos sujetos a registro.
                    p.mb-0 #[b Relación contable:] respalda cambios relevantes para la organización empresarial.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img44.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Certificado de existencia y representación legal
                    p Acredita la existencia de la sociedad y la identidad de sus representantes legales.
                    p.mb-0 #[b Relación contable:] se utiliza en trámites bancarios, comerciales y contractuales.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img45.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Establecimiento de comercio
                    p Corresponde al conjunto de bienes organizados para desarrollar la actividad empresarial.
                    p.mb-0 #[b Relación contable:] permite relacionar las operaciones con la unidad donde se realizan.
      p.mb-5 La información registrada puede solicitarse en trámites comerciales y financieros, como en el siguiente caso:
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img46.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            h5 Ejemplo aplicado
            p Una sociedad comercial solicita un crédito bancario. El banco puede requerir certificado de existencia y representación legal, estados financieros y soportes de la operación. El certificado no reemplaza la contabilidad, pero permite verificar la existencia jurídica, representantes y datos del ente económico.
            p.mb-0 Por eso, la información mercantil y la contabilidad se complementan en procesos de formalización, financiación y control.
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Actos mercantiles
      p.mb-5 Los actos mercantiles son operaciones comerciales reguladas por la ley que pueden generar efectos contables al modificar los recursos, las obligaciones, los ingresos, los costos o los gastos. Algunos de ellos se relacionan a continuación con sus soportes y efectos frecuentes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compra de mercancía para vender
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Soporte:] factura de compra. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Posible efecto:] aumenta el inventario y el saldo de proveedores o disminuye el efectivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img47.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Venta de bienes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Soporte:] factura de venta. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Posible efecto:] reconoce ingresos y aumenta el efectivo o las cuentas por cobrar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img48.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Operación bancaria
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Soporte:] extracto o contrato bancario. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Posible efecto:] modifica los saldos bancarios y puede generar préstamos o intereses.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img49.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Emisión de un título valor
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Soporte:] letra de cambio, pagaré o cheque. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Posible efecto:] genera un derecho de cobro o una obligación de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img50.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Constitución de una sociedad
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Soporte:] escritura o documento de constitución. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Posible efecto:] reconoce los aportes realizados y el patrimonio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img51.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contrato comercial
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Soporte:] contrato firmado. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Posible efecto:] puede generar activos, obligaciones, ingresos, costos o gastos, según su ejecución.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img52.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img53.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          p La relación entre el acto mercantil, su soporte y el efecto contable se concreta en el siguiente caso:
          .caja-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p.mb-0 Una empresa compra 100 unidades de mercancía para revenderlas. Esta operación es un acto mercantil y, al estar respaldada con factura, genera un hecho económico contable: aumenta el inventario y, si la compra es a crédito, aumenta la obligación con el proveedor.
      Separador
      #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.9 Títulos valores
      p.mb-5 Los títulos valores incorporan derechos exigibles y respaldan pagos, créditos, cobros u obligaciones. Su efecto contable depende de la operación y de la posición de la empresa como acreedora o deudora:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Títulos valores y efectos contables
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para relacionar títulos valores con efectos contables frecuentes.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Título valor
                      th.ajuste-border-tabla.texto-left Uso comercial
                      th.texto-left Posible efecto contable
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cheque
                      td.ajuste-border-tabla.texto-left Orden de pago contra una cuenta bancaria
                      td.texto-left Salida de bancos o pago a terceros
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pagaré
                      td.ajuste-border-tabla.texto-left Promesa de pago
                      td.texto-left Cuenta por cobrar u obligación financiera
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Letra de cambio
                      td.ajuste-border-tabla.texto-left Orden de pago entre partes
                      td.texto-left Derecho de cobro u obligación
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Factura como título valor
                      td.ajuste-border-tabla.texto-left Soporte de venta con mérito de cobro
                      td.texto-left Cuenta por cobrar e ingreso
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Bono o documento similar
                      td.ajuste-border-tabla.texto-left Instrumento de financiación
                      td.texto-left Inversión u obligación según el caso
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p El efecto contable de un título valor depende del derecho o la obligación que representa, como ocurre en el siguiente caso:
              .caja-1.color-2(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa vende mercancía a crédito y recibe un pagaré firmado por el cliente. La venta genera ingreso y cuenta por cobrar; el pagaré sirve como respaldo del derecho de cobro. Si el cliente no paga en la fecha acordada, el título valor puede servir como soporte para gestionar el cobro según las condiciones legales aplicables.
                p.mb-0 La contabilidad debe reflejar el derecho de cobro y conservar el documento que lo respalda.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img54.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.10 Sociedades comerciales
      p.mb-5 Las sociedades comerciales permiten que una o varias personas aporten recursos para desarrollar actividades económicas. Cada tipo societario posee características y responsabilidades particulares que inciden en la organización contable de la empresa; las cuales, se detallan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad por acciones simplificada (S.A.S.)
                  p Puede constituirse por una o varias personas y su capital se divide en acciones.
                  p.mb-0 #[b Responsabilidad contable:] registrar aportes, acciones, operaciones, obligaciones y resultados separados de los recursos personales de los accionistas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img55.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad limitada (Ltda.)
                  p Su capital se divide en cuotas y, por regla general, los socios responden hasta el monto de sus aportes.
                  p.mb-0 #[b Responsabilidad contable:] controlar cuotas sociales, aportes, obligaciones, utilidades y decisiones de la junta de socios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img56.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad anónima (S.A.)
                  p Su capital se divide en acciones y los accionistas responden hasta el monto de sus aportes.
                  p.mb-0 #[b Responsabilidad contable:] controlar acciones, aportes, reservas, dividendos, utilidades y decisiones de la asamblea.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img57.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad colectiva
                  p Los socios responden solidaria e ilimitadamente por las operaciones sociales.
                  p.mb-0 #[b Responsabilidad contable:] registrar las operaciones y controlar las obligaciones, los aportes, los retiros y las responsabilidades frente a terceros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img58.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad en comandita simple
                  p Integra socios gestores, que administran y responden solidaria e ilimitadamente, y socios comanditarios, cuya responsabilidad se limita a sus aportes.
                  p.mb-0 #[b Responsabilidad contable:] diferenciar los aportes, las operaciones y las responsabilidades correspondientes a cada clase de socio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img59.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad en comandita por acciones
                  p Combina socios gestores y comanditarios, pero su capital se representa en acciones.
                  p.mb-0 #[b Responsabilidad contable:] controlar acciones, aportes, obligaciones, resultados y responsabilidades societarias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img60.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Empresa unipersonal
                  p.mb-0 Una persona natural o jurídica destina parte de sus activos al desarrollo de una actividad empresarial. Contablemente, debe diferenciarse el patrimonio de la empresa del patrimonio personal o general del titular.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img61.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img62.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La separación entre los recursos empresariales y personales se concreta en el siguiente caso:
          br
          br
          h5 Ejemplo aplicado
          br
          br
          p Una S.A.S. recibe un aporte de capital de $30.000.000 mediante transferencia bancaria. El soporte puede incluir el documento societario, el acta o decisión correspondiente y el comprobante bancario. Contablemente, se reconoce el ingreso del dinero en bancos y el aumento del patrimonio mediante la cuenta de capital o aportes, según la estructura contable de la empresa.
          br
          br
          p En cambio, si un socio paga una obligación personal con dinero de la sociedad, esa operación no debe registrarse como gasto empresarial. Debe analizarse como una cuenta por cobrar al socio, retiro, anticipo o la figura que corresponda según los soportes y la política contable. Esta separación permite que los estados financieros reflejen la realidad económica de la sociedad y no se mezclen con operaciones personales de sus propietarios.
      Separador
      #t_2_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.11 Libros y papeles comerciales
      p.mb-5 Los libros y papeles comerciales conforman la memoria contable y documental de la empresa. Permiten registrar las operaciones, respaldar derechos y obligaciones, verificar movimientos y sustentar la información financiera. Sus principales funciones se organizan así:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img63.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Libros contables").ajuste-cajaAcordion.ajuste-vineta
              p Los libros contables son:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Libro diario:] registra cronológicamente las operaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Libro mayor:] agrupa los movimientos por cuenta contable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Libro de inventarios y balances:] presenta los bienes, las obligaciones y la situación financiera. 
            .row(titulo="Comprobantes y soportes").ajuste-cajaAcordion.ajuste-vineta
              p Estos son:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Comprobantes contables:] resumen y relacionan los hechos económicos registrados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Facturas y recibos:] respaldan compras, ventas, pagos y recaudos.
            .row(titulo="Documentos comerciales").ajuste-cajaAcordion.ajuste-vineta
              p Los documentos comerciales son:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Contratos:] respaldan los derechos y las obligaciones acordadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Actas:] documentan decisiones societarias o administrativas.
            .row(titulo="Documentos bancarios").ajuste-cajaAcordion.ajuste-vineta
              p Dentro de los documentos bancarios está el siguiente:
              p.mb-3 #[b Extractos bancarios:] permiten verificar y conciliar los movimientos financieros.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img64.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p En cuanto a los libros electrónicos, existe lo siguiente:
          br
          br
          h5 Libros electrónicos
          br
          br
          p Los libros de comercio pueden llevarse en archivos electrónicos, siempre que se garantice la inalterabilidad, integridad, seguridad y conservación de la información. Esta posibilidad está prevista en el artículo 56 del Código de Comercio, modificado por el artículo 173 del Decreto 019 de 2012. Decreto 019 de 2012
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img65.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1.ajuste-2(data-aos="fade-left")
            p La función de estos libros y documentos se concreta en el siguiente ejemplo:
            h5 Ejemplo aplicado
            p Una empresa recibe un requerimiento para explicar una cuenta por pagar registrada en su contabilidad. Para responder, debe consultar el libro o registro contable, el comprobante, la factura del proveedor, el contrato si existe y el soporte de pago si ya se realizó. Esta secuencia documental permite verificar el origen y estado de la obligación.
            p.mb-0 La conservación adecuada de libros y papeles comerciales facilita la revisión interna, la auditoría y el cumplimiento de obligaciones legales.
      Separador
      #t_2_12.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.12 Ejemplo aplicado de clasificación y diligenciamiento de soportes
      p.mb-5 La empresa Comercial Santa Lucía S.A.S. realiza las siguientes operaciones durante una semana. Cada una debe identificarse, relacionarse con el documento soporte, clasificarse y diligenciar para el registro contable. Esto se presenta en la siguiente tabla:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Clasificación y diligenciamiento de documentos soporte
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para clasificar y verificar documentos soporte antes del registro contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Documento soporte
                      th.ajuste-border-tabla.texto-left Clasificación
                      th.texto-left Datos que deben verificarse
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta de mercancía a crédito
                      td.ajuste-border-tabla.texto-left Factura de venta electrónica
                      td.ajuste-border-tabla.texto-left Soporte de ingreso y cartera
                      td.texto-left Cliente, NIT, fecha, valor, IVA, vencimiento
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de papelería a proveedor no obligado a facturar
                      td.ajuste-border-tabla.texto-left Documento soporte en adquisiciones
                      td.ajuste-border-tabla.texto-left Soporte de gasto
                      td.texto-left Proveedor, identificación, concepto, valor, numeración autorizada
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de arriendo del local
                      td.ajuste-border-tabla.texto-left Recibo, factura o comprobante de pago
                      td.ajuste-border-tabla.texto-left Soporte de gasto y egreso
                      td.texto-left Arrendador, periodo, valor, forma de pago
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cliente
                      td.ajuste-border-tabla.texto-left Recibo de caja o comprobante bancario
                      td.ajuste-border-tabla.texto-left Soporte de ingreso de dinero
                      td.texto-left Cliente, factura cancelada, valor, fecha
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago a proveedor
                      td.ajuste-border-tabla.texto-left Comprobante de egreso y soporte bancario
                      td.ajuste-border-tabla.texto-left Soporte de salida de dinero
                      td.texto-left Proveedor, factura pagada, valor, cuenta bancaria
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Devolución en venta
                      td.ajuste-border-tabla.texto-left Nota crédito
                      td.ajuste-border-tabla.texto-left Soporte de ajuste
                      td.texto-left Factura relacionada, motivo, valor, impuestos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Préstamo bancario recibido
                      td.ajuste-border-tabla.texto-left Contrato y desembolso bancario
                      td.ajuste-border-tabla.texto-left Soporte financiero
                      td.texto-left Entidad, monto, plazo, tasa, desembolso
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-5.ajuste-2(data-aos="fade-right")
                h5 La interpretación de este ejemplo es la siguiente:
                p.mb-0 #[b Interpretación del ejemplo:] cada operación exige un documento acorde con su naturaleza. Por ello, antes del registro contable se debe identificar el hecho económico, seleccionar el soporte, clasificarlo y comprobar que contiene la información necesaria.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img66.jpg', alt='' style="width: 300px").m-auto
            .col-xl
              p En las compras realizadas a sujetos no obligados a expedir factura, el adquirente debe generar el documento soporte correspondiente, de acuerdo con los requisitos establecidos por la DIAN.
              p.mb-0 La correcta identificación, clasificación, verificación y documentación de cada operación facilita el registro contable, reduce errores y conserva evidencia para controles posteriores.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
