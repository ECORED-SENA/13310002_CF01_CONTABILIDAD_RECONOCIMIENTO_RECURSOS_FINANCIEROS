<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos de los hechos económicos y la información contable
      p.mb-5 La información contable organiza las operaciones de una empresa y permite comprender su realidad económica. Los siguientes subtemas desarrollan el reconocimiento, la clasificación y la identificación de los hechos económicos para generar información confiable conforme a la normativa contable (Contaduría General de la Nación, 2025). 
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de contabilidad y su relación con los recursos financieros
      p.mb-5 La contabilidad identifica, mide, clasifica, registra y comunica cada hecho económico. Mediante cuentas y registros, determina sus efectos sobre los recursos, obligaciones y resultados de la empresa (Ayala Cárdenas, 2015). La siguiente tabla presenta algunos recursos y obligaciones contables.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Relación entre contabilidad y recursos financieros
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para relacionar la contabilidad con el reconocimiento de recursos financieros.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Qué representa
                      th.texto-left Relación con la contabilidad
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Efectivo
                      td.ajuste-border-tabla.texto-left Dinero disponible en caja o bancos
                      td.texto-left Se registra como recurso de la empresa
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.ajuste-border-tabla.texto-left Valores pendientes de recaudo
                      td.texto-left Se reconocen cuando surge el derecho de cobro
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios
                      td.ajuste-border-tabla.texto-left Bienes disponibles para la venta o producción
                      td.texto-left Se registran como recursos hasta su venta o consumo
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras
                      td.ajuste-border-tabla.texto-left Deudas con entidades financieras
                      td.texto-left Se reconocen como pasivos
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proveedores
                      td.ajuste-border-tabla.texto-left Deudas por compras a crédito
                      td.texto-left Se registran como obligaciones comerciales
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos
                      td.ajuste-border-tabla.texto-left Valores generados por ventas o servicios
                      td.texto-left Se reconocen cuando se cumplen las condiciones de registro
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos y gastos
                      td.ajuste-border-tabla.texto-left Recursos consumidos en la operación
                      td.texto-left Se registran para determinar el resultado del periodo
          .caja-2.mb-0(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p Para comprender este tema, se desarrollará el siguiente ejemplo:
                h5 Ejemplo aplicado
                p Una papelería compra mercancía por $2.000.000 a crédito. En esta operación se identifican dos efectos: aumenta el inventario, porque la empresa recibe mercancía para vender, y aumenta la obligación con proveedores, porque aún no ha pagado la compra. La contabilidad permite reconocer ambos efectos en el mismo hecho económico.
                p.mb-0 Si la papelería solo registrara la entrada de mercancía y omitiera la deuda, la información financiera quedaría incompleta. Por eso, el registro contable debe reflejar tanto el recurso recibido como la obligación adquirida.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Ente económico y actividad empresarial
      p.mb-5 El ente económico desarrolla actividades que generan operaciones contables separadas de las finanzas personales. La relación se explica así:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Ente económico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ente económico
              p.mb-0 El ente económico es la unidad sobre la cual se organiza y registra la información contable. Puede ser una persona comerciante, empresa o sociedad que desarrolla operaciones identificables, medibles y separadas de las finanzas personales de sus propietarios.
        .py-3.py-md-4(titulo="Separación contable")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Separación contable
              p.mb-0 Los recursos y las deudas del ente económico deben mantenerse separados de los gastos y las obligaciones personales de sus propietarios. Esta separación evita distorsiones y permite conocer la realidad económica del negocio.
        .py-3.py-md-4(titulo="Actividad empresarial")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Actividad empresarial
              p.mb-0 La actividad empresarial comprende operaciones como compras, ventas, prestación de servicios, contratación de personal, pago de impuestos, adquisición de activos y financiación. Estas generan hechos económicos que deben respaldarse, medirse y registrarse.
        .py-3.py-md-4(titulo="Ejemplo aplicado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ejemplo aplicado
              p Una persona natural tiene una panadería. La compra de harina, la venta de pan, el pago del arrendamiento y los recaudos de clientes pertenecen a la actividad empresarial.
              p.mb-0 En cambio, la compra de alimentos para la familia o gastos personales del propietario corresponde a una operación personal y no debe registrarse como gasto del negocio.
      p.mb-5 Los siguientes casos relacionan diferentes entes económicos con su actividad principal y los hechos económicos que generan:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tienda de barrio
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Actividad principal:] compra y venta de productos de consumo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Hechos económicos:] compras, ventas, pagos a proveedores y recaudos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Taller de confección
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Actividad principal:] producción de prendas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Hechos económicos:] compra de insumos, pago de mano de obra y venta de productos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Restaurante
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Actividad principal:] preparación y venta de alimentos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Hechos económicos:] compra de materias primas, ventas diarias y pago de servicios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Empresa de servicios
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Actividad principal:] prestación de servicios profesionales o técnicos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Hechos económicos:] facturación de servicios, cobros a clientes y pago de honorarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sociedad comercial
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Actividad principal:] desarrollo de una actividad empresarial organizada. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Hechos económicos:] aportes de socios, contratos, ventas, gastos e impuestos. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Esta diferencia permite organizar correctamente la contabilidad y reconocer solo los hechos económicos relacionados con el ente económico.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Hechos económicos: concepto y características
      p.mb-5 Un hecho económico es un acontecimiento relacionado con la actividad empresarial que modifica activos, pasivos, patrimonio, ingresos, costos o gastos y puede medirse en dinero. Los hechos económicos deben cumplir las siguientes características:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img11.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Relación con el ente económico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La operación debe corresponder a la actividad de la empresa. Por ejemplo, la compra de mercancía destinada a la venta.
            .row(titulo="Medición monetaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El valor de la operación debe poder expresarse en dinero. Por ejemplo, una venta por $1.500.000.
            .row(titulo="Soporte documental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El hecho debe estar respaldado por una factura, recibo, contrato, comprobante u otro documento válido.
            .row(titulo="Efecto financiero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La operación debe modificar los activos, pasivos, patrimonio, ingresos, costos o gastos. Por ejemplo, un depósito bancario aumenta el efectivo.
            .row(titulo="Reconocimiento normativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El registro debe realizarse conforme a los criterios técnicos y la normativa contable aplicable. Por ejemplo, una compra a crédito genera una obligación.
      p.mb-5 Los siguientes casos permiten diferenciar una posible operación de un hecho económico que debe reconocerse contablemente:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img12.png', alt="" ).m-auto
                  h4.text-center Cotización recibida
                  .caja-3_p
                    p Una empresa recibe una cotización por $3.000.000. Aunque contiene un valor, no representa un hecho económico porque todavía no se ha realizado la compra ni adquirido una obligación.
                    p.mb-0 #[b Resultado:] no genera registro contable.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img13.png', alt="" ).m-auto
                  h4.text-center Compra realizada
                  .caja-3_p
                    p La empresa acepta la compra, recibe la mercancía y obtiene la factura. La operación modifica sus recursos y puede generar una salida de dinero o una obligación con el proveedor.
                    p.mb-0 #[b Resultado:] constituye un hecho económico y debe registrarse.
          p.mb-0 La cotización comunica una posible operación, mientras que la factura respalda una operación realizada que afecta la situación financiera de la empresa.
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Clasificación de los hechos económicos
      p.mb-5 Los hechos económicos pueden clasificarse según su efecto en la contabilidad y la naturaleza de la operación que los origina.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Según su efecto contable
                  p Se clasifica en:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Activos:] modifican los recursos de la empresa. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Pasivos:] generan o modifican obligaciones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Patrimonio:] afectan los aportes o resultados acumulados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ingresos:] aumentan los beneficios económicos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Costos:] se relacionan con la producción o prestación de servicios. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Gastos:] corresponden al funcionamiento de la empresa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Según el tipo de operación
                  p Se clasifica en:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Comerciales:] compra y venta de bienes o servicios. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Financieras:] préstamos, intereses e inversiones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Laborales:] contratación y remuneración del personal. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Tributarias:] impuestos, anticipos y retenciones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Administrativas:] funcionamiento y gestión empresarial. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b De inversión:] adquisición o disposición de activos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ejemplo aplicado
                  p.mb-0 Una empresa vende mercancía de contado por $5.000.000. Este hecho económico corresponde a una #[b operación comercial] y produce varios efectos contables: aumenta el efectivo, genera un ingreso, disminuye el inventario y reconoce el costo de la mercancía vendida.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Un hecho económico puede pertenecer a un tipo de operación y afectar simultáneamente diferentes elementos contables.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Relación entre hechos económicos, soportes y registros contables
      p.mb-5 El proceso contable relaciona el hecho económico con los documentos, la medición y el registro necesarios para garantizar información confiable. Para que una operación se convierta en información contable registrada, se debe realizar la siguiente secuencia:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificación del hecho económico
                    p Se reconoce la operación que afecta la situación económica de la empresa.
                    p.mb-0 #[b Ejemplo:] compra de mercancía.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Obtención del soporte
                    p Se recibe o elabora el documento que respalda la operación.
                    p.mb-0 #[b Ejemplo:] factura de compra.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Medición de la operación
                    p Se determina el valor económico que debe reconocerse.
                    p.mb-0 #[b Ejemplo:] valor de la compra y los impuestos aplicables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Elaboración del comprobante
                    p Se prepara el documento contable interno con las cuentas y los valores correspondientes.
                    p.mb-0 #[b Ejemplo:] comprobante de contabilidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro contable
                    p Se reconocen los efectos de la operación en las cuentas correspondientes.
                    p.mb-0 #[b Ejemplo:] débito en inventarios y crédito en proveedores.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Conservación documental
                    p Se archivan los soportes y comprobantes para conservar la evidencia de la operación.
                    p.mb-0 #[b Ejemplo:] archivo físico o digital.
          p.mb-5 El sistema documental contable regula los soportes, comprobantes y libros que evidencian la relación entre documentación y registro (Contaduría General de la Nación, 2025). La siguiente situación integra las etapas del proceso contable en el pago de un servicio empresarial:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img23.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br 
              br 
              p Una empresa paga el servicio de energía del local por $450.000. El hecho económico es el consumo y pago del servicio; el soporte puede ser la factura del servicio público y el comprobante de pago; el registro contable reconoce un gasto por servicios y la salida de dinero de bancos o caja.
              br
              br
              p  Si la factura se extravía, el registro puede quedar sin respaldo suficiente. Por eso, el manejo documental es parte fundamental del proceso contable.
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Principio de reconocimiento contable
      p.mb-5 El reconocimiento contable determina cuándo un hecho económico debe incorporarse a los registros, independientemente del momento en que se reciba o entregue el dinero. Los aspectos fundamentales son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concepto
                  p.mb-0 El reconocimiento contable consiste en incorporar un hecho económico en los registros de la empresa. Para ello, se identifica el elemento afectado, se determina su valor y se registra en las cuentas correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Criterios de reconocimiento
                  p Una operación puede reconocerse cuando:
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | Existe un recurso, una obligación, un ingreso, un costo o un gasto. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | El elemento está relacionado con la actividad de la empresa. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | Su valor puede medirse de manera fiable. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | La operación cumple las condiciones establecidas para su reconocimiento. 
                  p.mb-0 Se basan en el marco conceptual de la información financiera y las orientaciones técnicas aplicables (Molina Sánchez, 2015).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento y pago
                  p.mb-0 El reconocimiento contable no depende del movimiento de efectivo. Las ventas a crédito se reconocen al entregar el bien y generar el derecho de cobro; las compras, al recibir el bien o servicio y surgir la obligación de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img26.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La siguiente tabla presenta ejemplos de hechos económicos y el momento en que pueden reconocerse contablemente.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Reconocimiento contable de operaciones frecuentes	
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para comprender el momento de reconocimiento de operaciones frecuentes.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Momento de reconocimiento
                      th.texto-left Efecto contable
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta de contado
                      td.ajuste-border-tabla.texto-left Cuando se entrega el bien y se recibe el pago.
                      td.texto-left Aumenta efectivo e ingresos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta a crédito
                      td.ajuste-border-tabla.texto-left Cuando se entrega el bien y nace el derecho de cobro.
                      td.texto-left Aumentan cuentas por cobrar e ingresos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra a crédito
                      td.ajuste-border-tabla.texto-left Cuando se recibe el bien o servicio y surge la obligación.
                      td.texto-left Aumenta activo o gasto y aumenta pasivo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de arriendo
                      td.ajuste-border-tabla.texto-left Cuando se causa o paga el servicio según corresponda.
                      td.texto-left Se reconoce gasto y salida de efectivo o cuenta por pagar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Préstamo bancario
                      td.ajuste-border-tabla.texto-left Cuando la entidad entrega los recursos.
                      td.texto-left Aumenta banco y aumenta obligación financiera.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Impuesto generado
                      td.ajuste-border-tabla.texto-left Cuando ocurre el hecho que origina la obligación tributaria.
                      td.texto-left Se reconoce impuesto por pagar o impuesto descontable según corresponda.
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img27.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La diferencia entre reconocimiento y pago se concreta en la siguiente situación empresarial:
              br
              br
              h5 Ejemplo aplicado
              br
              br
              p Una empresa presta un servicio el 25 de marzo por $1.200.000 y acuerda recibir el pago el 10 de abril.
              br
              ul.fa-ul.mb-0
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-search-dollar
                  | 
                  p.mb-0 Momento de reconocimiento: 25 de marzo. 
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-search-dollar
                  | 
                  p.mb-0 Derecho generado: cuenta por cobrar al cliente. 
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-search-dollar
                  | 
                  p.mb-0 Ingreso reconocido: ingreso por servicios. 
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-search-dollar
                  | 
                  p.mb-0 Momento del recaudo: 10 de abril. 
              br
              p Aunque el pago se recibe en abril, el hecho económico se reconoce en marzo, cuando se presta el servicio y surge el derecho de cobro.
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Importancia de identificar correctamente los hechos económicos
      p.mb-5 La identificación correcta de los hechos económicos garantiza registros coherentes, respaldados y acordes con la realidad financiera de la empresa. Para ello, deben verificarse la operación, la información asociada, su relación con la empresa y el respaldo documental:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img28.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Realidad económica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de registrar una operación, debe verificarse que ocurrió y modificó la situación económica de la empresa. Una cotización o intención de compra no genera necesariamente un registro contable (Universidad Nacional de Colombia, 2014).
            .row(titulo="Información confiable").ajuste-cajaAcordion.ajuste-vineta
              p La identificación adecuada permite determinar:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Qué ocurrió. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Quiénes intervinieron. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Cuál fue el valor de la operación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Qué documento la respalda. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | Qué cuentas resultaron afectadas. 
              p.mb-3 Este análisis evita registros incompletos, duplicados o incorrectos y garantiza la coherencia contable (Ayala Cárdenas, 2015).
            .row(titulo="Separación de operaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los gastos personales de los propietarios deben diferenciarse de las operaciones del negocio. Mezclarlos distorsiona la utilidad, la liquidez y el control de los recursos, y puede generar decisiones equivocadas.
            .row(titulo="Respaldo documental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La identificación correcta facilita la selección del soporte, la medición del valor, el reconocimiento de impuestos y la elaboración del comprobante contable. También permite verificar posteriormente los registros mediante facturas, recibos, contratos y comprobantes (Contaduría General de la Nación, 2025).
      p.mb-5 La siguiente tabla relaciona los errores frecuentes, sus consecuencias y las medidas necesarias para prevenirlos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Errores frecuentes al identificar hechos económicos
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para reconocer errores frecuentes en la identificación de hechos económicos.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Error frecuente
                      th.ajuste-border-tabla.texto-left Consecuencia
                      th.texto-left Forma de prevenirlo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Confundir gastos personales con gastos del negocio
                      td.ajuste-border-tabla.texto-left Distorsiona la utilidad y los resultados del periodo
                      td.texto-left Separar las finanzas personales de las empresariales
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registrar operaciones sin soporte
                      td.ajuste-border-tabla.texto-left Debilita la verificabilidad del registro
                      td.texto-left Exigir documento soporte antes del registro
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Omitir compras a crédito
                      td.ajuste-border-tabla.texto-left Subestima las obligaciones de la empresa
                      td.texto-left Revisar facturas pendientes y saldos con proveedores
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registrar una cotización como compra
                      td.ajuste-border-tabla.texto-left Reconoce una operación que aún no se ha realizado
                      td.texto-left Diferenciar cotización, pedido, factura y recepción del bien
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold No reconocer impuestos
                      td.ajuste-border-tabla.texto-left Afecta obligaciones tributarias y valores reales de la operación
                      td.texto-left Revisar base gravable, tarifa y normativa aplicable
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Duplicar una factura
                      td.ajuste-border-tabla.texto-left Aumenta indebidamente activos, costos o gastos
                      td.texto-left Controlar consecutivos y documentos ya registrados
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Clasificar mal una cuenta
                      td.ajuste-border-tabla.texto-left Afecta estados financieros y reportes contables
                      td.texto-left Revisar la naturaleza de la operación antes de registrar
          p.mb-5 Los siguientes casos relacionan la identificación del hecho económico con su adecuado registro contable: 
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img29.png', alt="" ).m-auto
                  h4.text-center Caso 1. Compra personal
                  .caja-3_p
                    p.mb-0 Un propietario paga con dinero del negocio una compra personal de supermercado por $300.000. Esta operación no corresponde a la actividad empresarial y no debe registrarse como gasto operativo. Su tratamiento dependerá de la naturaleza del retiro o movimiento.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
                  h4.text-center Caso 2. Compra de mercancía a crédito
                  .caja-3_p
                    p.mb-0 Una empresa recibe mercancía a crédito y registra únicamente el inventario. El registro queda incompleto porque también debe reconocerse la obligación con el proveedor. La identificación adecuada permite incorporar simultáneamente el recurso recibido y la deuda adquirida.
          p.mb-5 La cotización, la compra personal y la venta a crédito requieren tratamientos diferentes. El siguiente pódcast presenta criterios para determinar cuándo una situación constituye un hecho económico y debe incorporarse a los registros contables.
          .row.align-items-center.m-0.mb-0
            .col-xl
              .row.align-items-center.justify-content-center.caja-4(data-aos="zoom-in")
                .col-auto.mb-4.mb-lg-0
                  figure(data-aos="fade-right")
                    img(src="@/assets/curso/temas/t1/img31.svg" style="max-width: 220px").m-auto
                .col
                  h4.mb-4 Pódcast
                  TarjetaAudio.color-acento-contenido.mb-4(
                      texto="¿Es del negocio o es personal? Claves para identificar hechos económicos"
                      :audio="audio1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            .col-xl-auto.d-none.d-xl-block
              figure(data-aos="fade-left")
                img(src="@/assets/curso/temas/t1/img32.png" style="max-width: 510px").m-auto
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.8 Ejemplo aplicado de identificación de hechos económicos
      p.mb-3 El siguiente caso integra la identificación de hechos económicos, sus soportes y efectos contables mediante operaciones frecuentes de una empresa:
      h5 Situación empresarial
      p.mb-5 La empresa Comercial Los Pinos S.A.S. realiza las siguientes operaciones durante una semana:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Identificación de hechos económicos en Comercial Los Pinos S.A.S.
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para identificar hechos económicos, soportes y efectos contables iniciales.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left ¿Es hecho económico?
                      th.ajuste-border-tabla.texto-left Soporte sugerido
                      th.texto-left Efecto contable inicial
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Solicita cotización de mercancía por $4.000.000.
                      td.ajuste-border-tabla.texto-left No
                      td.ajuste-border-tabla.texto-left Cotización
                      td.texto-left No genera registro contable.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra mercancía a crédito por $4.000.000.
                      td.ajuste-border-tabla.texto-left Sí
                      td.ajuste-border-tabla.texto-left Factura de compra
                      td.texto-left Aumenta inventario y proveedores.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Vende mercancía de contado por $2.500.000.
                      td.ajuste-border-tabla.texto-left Sí
                      td.ajuste-border-tabla.texto-left Factura de venta o documento equivalente.
                      td.texto-left Aumenta efectivo e ingresos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Paga arriendo del local por $1.200.000.
                      td.ajuste-border-tabla.texto-left Sí
                      td.ajuste-border-tabla.texto-left Recibo, factura o comprobante de pago.
                      td.texto-left Reconoce gasto y salida de efectivo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recibe extracto bancario del mes.
                      td.ajuste-border-tabla.texto-left Puede ser soporte de hechos ya ocurridos
                      td.ajuste-border-tabla.texto-left Extracto bancario.
                      td.texto-left Permite verificar movimientos bancarios.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Firma contrato con un proveedor sin recibir bienes.
                      td.ajuste-border-tabla.texto-left No necesariamente
                      td.ajuste-border-tabla.texto-left Contrato
                      td.texto-left Se analiza si genera obligación reconocible.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Paga una deuda a proveedores. por $800.000.
                      td.ajuste-border-tabla.texto-left Sí
                      td.ajuste-border-tabla.texto-left Comprobante de egreso y soporte de pago.
                      td.texto-left Disminuye banco y proveedores.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-1.ajuste-1(data-aos="fade-right")
                h5 Interpretación del ejemplo
                p.mb-0 No todas las situaciones empresariales generan un registro contable. Solo deben reconocerse aquellas que modifican la situación financiera, como compras, ventas y pagos. Su identificación exige analizar la operación, el soporte, el valor, las cuentas afectadas y los criterios aplicables. Este proceso reduce errores y fortalece la confiabilidad de la información contable.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img33.jpg', alt='' style="width: 500px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
