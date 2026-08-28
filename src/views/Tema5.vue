<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Cálculo de valores económicos, impuestos y uso de #[i software] contable
      p.mb-5 El cálculo de valores económicos determina el monto correcto de cada operación, considerando precios, descuentos, impuestos, retenciones, forma de pago y soportes. Su adecuada aplicación evita errores contables y permite cumplir las obligaciones tributarias según la normativa vigente (DIAN).
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Valores económicos en las operaciones contables
      p.mb-5 Los valores económicos corresponden a los montos monetarios que intervienen en una operación. Su identificación permite registrar cada concepto según su naturaleza contable. Los principales valores que intervienen en compras, ventas, pagos y recaudos se organizan según su función:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valor bruto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] valor inicial antes de descuentos o impuestos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] precio de la mercancía.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Descuento
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] disminución aplicada al valor de la operación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] descuento comercial.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Base gravable
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] valor sobre el cual se calcula un impuesto. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] base para calcular el IVA.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Impuesto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] valor tributario generado en la operación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] IVA generado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Retención
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] valor descontado como anticipo de un impuesto. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] retención en la fuente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Valor neto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] valor final por pagar o recibir. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] total de la factura menos las retenciones aplicables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Intereses
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Representa:] valor asociado con una financiación o mora. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] intereses de un préstamo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right")
            p La separación de estos valores se aplica en la siguiente operación de venta:
            h5 Ejemplo aplicado
            p Una empresa vende mercancía por $1.000.000 más IVA del 19 %. El valor de la mercancía es $1.000.000 y el IVA generado es $190.000. El total de la factura será $1.190.000, antes de considerar retenciones u otros descuentos.
            p.mb-0 La contabilidad debe reconocer por separado el ingreso por ventas y el impuesto generado, porque no tienen la misma naturaleza. El ingreso pertenece a la empresa, mientras que el IVA generado corresponde a una obligación tributaria que debe declararse y pagarse según las condiciones aplicables.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img8.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Base gravable, tarifa y valor del impuesto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img9.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.ajuste-7(data-aos="fade-left")
            p La base gravable, la tarifa y el valor del impuesto permiten calcular las obligaciones tributarias asociadas con una operación contable. La fórmula general es la siguiente:
            .caja-6(data-aos="zoom-in")  
              h5.mb-0 Valor del impuesto = base gravable × tarifa
      p.mb-5 Los elementos del cálculo y los valores resultantes se diferencian de la siguiente manera:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img10.png", alt="" style="width: 390px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Base gravable").ajuste-cajaAcordion.ajuste-vineta
              p Es el valor sobre el cual se aplica la tarifa del impuesto.
              p.mb-3 #[b Ejemplo:] $2.000.000.
            .row(titulo="Tarifa").ajuste-cajaAcordion.ajuste-vineta
              p Es el porcentaje establecido por la normativa para calcular el impuesto.
              p.mb-3 #[b Ejemplo:] 19 %.
            .row(titulo="Valor del impuesto").ajuste-cajaAcordion.ajuste-vineta
              p Es el resultado de multiplicar la base gravable por la tarifa.
              p.mb-3 #[b Ejemplo:] $380.000.
            .row(titulo="Valor total").ajuste-cajaAcordion.ajuste-vineta
              p Corresponde a la suma de la base gravable y el impuesto, cuando aplique.
              p.mb-3 #[b Ejemplo:] $2.380.000.
            .row(titulo="Valor neto").ajuste-cajaAcordion.ajuste-vineta
              p Es el valor final por pagar o recibir después de aplicar retenciones, descuentos u otros conceptos.
              p.mb-3 #[b Ejemplo:] total de la operación menos las retenciones aplicables.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img11.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El cálculo de estos valores se aplica en la siguiente adquisición de un servicio:
          br
          br
          h5 Ejemplo aplicado
          br
          br
          p Una empresa compra un servicio gravado por $800.000 más IVA del 19 %. El cálculo sería:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-search-dollar
              | 
              p.mb-0 IVA = $800.000 × 19 %
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-search-dollar
              | 
              p.mb-0 IVA = $152.000
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-search-dollar
              | 
              p.mb-0 Total de la factura = $800.000 + $152.000 = $952.000
          br
          p El valor de $800.000 corresponde a la base gravable, $152.000 al impuesto y $952.000 al total antes de retenciones. Este cálculo debe estar soportado por la factura o documento correspondiente.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Clasificación general de impuestos relacionados con operaciones contables
      p.mb-5 En las operaciones contables intervienen impuestos y conceptos tributarios cuya aplicación depende de la actividad económica, la operación y la normativa vigente. Los principales impuestos y conceptos tributarios se clasifican según su aplicación y efecto contable:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img12.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="IVA generado").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] impuesto cobrado en las ventas gravadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] se reconoce como impuesto por pagar.
            .row(titulo="IVA descontable").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] impuesto pagado en compras que puede descontarse, según la normativa. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] se reconoce como impuesto descontable.
            .row(titulo="Retención en la fuente").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] anticipo del impuesto sobre la renta practicado en determinados pagos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] se registra como menor valor por pagar o como saldo a favor, según corresponda.
            .row(titulo="Impuesto de industria y comercio (ICA)").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] impuesto territorial asociado con actividades comerciales, industriales o de servicios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] puede reconocerse como gasto o impuesto por pagar.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Retención de ICA").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] anticipo del ICA practicado en determinados pagos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] se registra según la operación y la normativa del municipio. 
            .row(titulo="Régimen Simple de Tributación").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] sistema opcional que simplifica el cumplimiento de obligaciones tributarias para determinados contribuyentes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] requiere identificar los ingresos y las obligaciones periódicas aplicables (DIAN, s. f.).
            .row(titulo="Impuesto nacional al consumo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Representa:] impuesto aplicable a determinados bienes o servicios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Relación contable:] se reconoce cuando la operación lo genera.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img13.png", alt="" style="width: 300px").m-auto
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img14.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p La aplicación de estos conceptos depende de las características de cada operación:
            h5 Ejemplo aplicado
            p Un restaurante puede tener operaciones relacionadas con IVA o impuesto nacional al consumo, dependiendo de su régimen, actividad y condiciones aplicables. Por ello, antes de registrar la venta no basta con conocer el valor recibido; se debe revisar qué impuesto se genera, qué soporte se emite y cómo se declara según la normativa vigente.
            p.mb-0 En este tipo de operaciones, la contabilidad debe apoyarse en la información tributaria actualizada, porque las tarifas, responsabilidades y formularios pueden cambiar.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Cálculo básico de IVA
      .row.justify-content-center.align-items-center.mb-5
        .col-xl
          .caja-1.ajuste-2.mb-4.mb-lg-0(data-aos="fade-right")
            p El IVA se genera en la venta de bienes o servicios gravados. El IVA generado constituye una obligación tributaria, mientras que el pagado en compras puede ser descontable. Estas operaciones se respaldan mediante la factura electrónica, que tiene validez legal y se gestiona digitalmente (DIAN). Las fórmulas son:
            .caja-6(data-aos="zoom-in").mb-3
              h5.mb-0  IVA = base gravable × tarifa
            br
            .caja-6(data-aos="zoom-in")  
              h5.mb-0  Total, factura = base gravable + IVA
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img15.jpg', alt='' style="width: 500px").m-auto
      p.mb-5 La siguiente tabla desarrolla el cálculo del IVA generado en una operación de venta:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 17.
                span Cálculo básico de IVA en venta
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para calcular el IVA generado en una venta gravada.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.texto-left Valor
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor de la venta antes de IVA
                      td.texto-left $2.000.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tarifa de IVA
                      td.texto-left 19 %
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold IVA generado
                      td.texto-left $380.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total factura
                      td.texto-left $2.380.000
          .row.justify-content-center.align-items-center.mb-0
            .col-xl
              .caja-1.color-3.mb-4.mb-lg-0.ajuste-2(data-aos="fade-right")
                p A continuación, se realiza un ejemplo:
                h5 Ejemplo aplicado
                p Una empresa vende mercancía gravada por $2.000.000 más IVA del 19 %. El registro contable debe reconocer el ingreso por $2.000.000, el IVA generado por $380.000 y el total por cobrar o recibir por $2.380.000.
                p Registro básico de venta de contado:
                table.color-tabla-sencilla(data-aos="zoom-in")
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Caja o bancos
                      td.texto-left $2.380.000
                      td.texto-left -
                    tr
                      td.texto-left Ingresos por ventas
                      td.texto-left -
                      td.texto-left $2.000.000
                    tr
                      td.texto-left IVA generado
                      td.texto-left -
                      td.texto-left $380.000
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img16.jpg', alt='' style="width: 500px").m-auto
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Retenciones aplicables en operaciones comerciales
      p.mb-5 Las retenciones corresponden a valores descontados en determinados pagos como anticipo de impuestos. Su aplicación depende de la operación y la normativa vigente. La DIAN establece que los agentes retenedores y autorretenedores deben declarar y pagar oportunamente las retenciones practicadas (DIAN). Antes de aplicar una retención, se deben identificar los siguientes elementos:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar el concepto del pago
                    p Determinar la naturaleza de la operación.
                    p.mb-0 #[b Ejemplo:] honorarios, servicios o compras.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Establecer la base de retención
                    p Definir el valor sobre el cual se calcula la retención.
                    p.mb-0 #[b Ejemplo:] valor antes del IVA.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Consultar la tarifa aplicable
                    p Identificar el porcentaje correspondiente según el concepto y la normativa.
                    p.mb-0 #[b Ejemplo:] tarifa establecida para el servicio.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificar al sujeto retenido
                    p Determinar a quién se le practica la retención.
                    p.mb-0 #[b Ejemplo:] proveedor o beneficiario del pago.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Reconocer al agente retenedor
                    p Establecer quién tiene la obligación de practicarla.
                    p.mb-0 #[b Ejemplo:] empresa que realiza el pago.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Calcular el valor retenido
                    p Multiplicar la base de retención por la tarifa aplicable.
                    p.mb-0 Valor retenido = base de retención × tarifa
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Determinar el valor neto
                    p Restar la retención al total que debe pagarse al tercero.
                    p.mb-0 Valor neto = total de la operación − retención
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img23.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-4.ajuste-6(data-aos="fade-right")
            p El procedimiento anterior se aplica en el siguiente pago por servicios:
            h5 Ejemplo aplicado
            p Una empresa recibe una factura de servicios por $1.000.000 más IVA de $190.000, para un total de $1.190.000. Si procede una retención en la fuente del 4 % sobre la base antes de IVA, el cálculo sería:
            p.mb-0 Retención = $1.000.000 × 4 %
            p.mb-0 Retención = $40.000
            p Valor neto por pagar = $1.190.000 - $40.000 = $1.150.000
            p.mb-0 En el registro contable, la empresa reconoce el gasto, el IVA descontable si cumple condiciones, la retención por pagar y el valor neto a pagar al proveedor.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img24.jpg', alt='' style="width: 500px").m-auto
      Separador
      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.6 Registro contable de impuestos
      p.mb-5 El registro de impuestos depende de la operación, su tratamiento tributario y las cuentas afectadas, de acuerdo con la normativa y los soportes correspondientes. La siguiente tabla presenta ejemplos de registros asociados a impuestos frecuentes:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 18.
                span Registro contable básico de impuestos
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para relacionar operaciones tributarias con registros contables básicos.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Cuenta débito frecuente
                      th.texto-left Cuenta crédito frecuente
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta gravada con IVA
                      td.ajuste-border-tabla.texto-left Caja, bancos o cuentas por cobrar
                      td.texto-left Ingresos e IVA generado
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra gravada con IVA
                      td.ajuste-border-tabla.texto-left Inventario, gasto o activo e IVA descontable
                      td.texto-left Bancos o proveedores
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retención practicada a proveedor
                      td.ajuste-border-tabla.texto-left Proveedor, gasto o activo según operación
                      td.texto-left Retención por pagar
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de retenciones
                      td.ajuste-border-tabla.texto-left Retención por pagar
                      td.texto-left Bancos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Impuesto asumido como gasto
                      td.ajuste-border-tabla.texto-left Gasto por impuestos
                      td.texto-left Bancos o impuesto por pagar
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Anticipo del Régimen Simple
                      td.ajuste-border-tabla.texto-left Impuesto o anticipo según política contable
                      td.texto-left Bancos
          p El registro de una compra gravada permite diferenciar el valor del inventario, el IVA descontable y la obligación con el proveedor:
          .row.justify-content-center.align-items-center.mb-0
            .col-xl
              .caja-1.color-3.mb-4.mb-lg-0.ajuste-2(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa compra mercancía por $1.500.000 más IVA del 19 %, a crédito. El IVA es $285.000 y el total de la factura es $1.785.000. El registro básico podría ser:
                table.color-tabla-sencilla.color-2(data-aos="zoom-in")
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Inventarios
                      td.texto-left $1.500.000
                      td.texto-left -
                    tr
                      td.texto-left IVA descontable
                      td.texto-left $285.000
                      td.texto-left -
                    tr
                      td.texto-left Proveedores
                      td.texto-left -
                      td.texto-left $1.785.000
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img25.png', alt='' style="width: 500px").m-auto
      Separador
      #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.7 Concepto y utilidad del #[i software] contable
      p.mb-5 El #[i software] contable facilita el registro, la organización y el procesamiento de la información. Sin embargo, su confiabilidad depende de la verificación y el criterio contable de la persona responsable. Las principales funciones del #[i software] contable y su aporte al proceso de registro se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro de terceros
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] organiza la información de clientes y proveedores. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] NIT, nombre y dirección.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Captura de comprobantes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] permite registrar los asientos contables. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] compras, ventas y egresos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cálculo automático
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] facilita el cálculo de impuestos y totales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] IVA y retenciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consulta de saldos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] facilita la revisión de las cuentas registradas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] cartera, bancos y proveedores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Generación de reportes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] organiza la información contable procesada. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] auxiliares y balances.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] permite relacionar las operaciones con sus documentos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] comprobante asociado con una factura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Archivo digital
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Utilidad:] conserva los soportes electrónicos relacionados con las operaciones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] factura electrónica o recibo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img32.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img33.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Estas funciones intervienen en el registro de una compra mediante el software contable:
          br
          br
          h5 Ejemplo aplicado
          br
          br
          p Una empresa registra una factura de compra en el software contable. El sistema puede calcular el IVA, generar la cuenta por pagar y actualizar el inventario o gasto correspondiente. No obstante, antes de guardar el registro se debe verificar que el proveedor, la fecha, el concepto, la cuenta contable, el impuesto y el valor total coincidan con el soporte.
          br
          br
          p La herramienta facilita el registro, pero la calidad de la información depende de la revisión previa y del correcto ingreso de datos.
      Separador
      #t_5_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.8 Aplicación del #[i software] contable en el registro de operaciones
      p.mb-5 El registro mediante software contable requiere configurar datos básicos e ingresar correctamente la información de cada operación, de acuerdo con sus soportes. El registro de una operación contable se desarrolla mediante la siguiente secuencia:
      .bg-4
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar el hecho económico
                    p Determinar la operación realizada.
                    p.mb-0 #[b Ejemplo:] compra, venta, pago o recaudo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img34.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img35.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisar el soporte
                    p Confirmar el documento que respalda la operación.
                    p.mb-0 #[b Ejemplo:] factura, recibo, contrato o comprobante.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Seleccionar el tipo de documento
                    p Elegir el módulo o documento correspondiente.
                    p.mb-0 #[b Ejemplo:] compra, venta, egreso, ingreso o nota contable.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img36.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img37.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Ingresar la fecha y el tercero
                    p.mb-0 Registrar el periodo y los datos del cliente o proveedor.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registrar valores e impuestos
                    p.mb-0 Incorporar la base, la tarifa, el IVA y las retenciones aplicables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img38.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img39.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Seleccionar las cuentas contables
                    p.mb-0 Asignar las cuentas según la naturaleza de la operación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Adjuntar o relacionar el soporte
                    p.mb-0 Asociar el documento electrónico para garantizar la trazabilidad.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img40.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img41.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Validar débitos y créditos
                    p.mb-0 Comprobar la igualdad del asiento contable.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Guardar y consultar el reporte
                    p.mb-0 Confirmar que la operación quedó correctamente registrada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img42.png', alt='' style="width: 300px").m-auto
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t5/img43.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .caja-1.color-1.ajuste-8(data-aos="fade-left")
                p La secuencia anterior se aplica en el registro de una venta a crédito:
                h5 Ejemplo aplicado
                p Para registrar una venta a crédito, se selecciona el documento de factura o venta, se ingresa el cliente, la fecha, el valor de los productos, el IVA si aplica y la forma de pago a crédito. El sistema debe afectar ingresos, IVA generado y cuentas por cobrar.
                p.mb-0 Después de guardar, se recomienda consultar el auxiliar del cliente para verificar que la cartera quedó registrada por el valor correcto. Esta revisión evita diferencias posteriores entre facturación, cartera y contabilidad.
      Separador
      #t_5_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.9 Revisión de datos antes de registrar en #[i software] contable
      p.mb-5 Antes del registro, se deben verificar los datos y soportes. Esta revisión evita errores, reprocesos y reportes inconsistentes mediante controles internos. Los principales controles para validar la información antes de guardarla en el sistema son los siguientes:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 19.
                span Lista de verificación antes de registrar en #[i software] contable
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para validar información antes del registro en #[i software] contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto por revisar
                      th.ajuste-border-tabla.texto-left Pregunta de control
                      th.texto-left Cumple
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tercero
                      td.ajuste-border-tabla.texto-left ¿El cliente o proveedor está correctamente identificado?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha
                      td.ajuste-border-tabla.texto-left ¿Corresponde al periodo contable correcto?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documento
                      td.ajuste-border-tabla.texto-left ¿El soporte es válido y está completo?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Consecutivo
                      td.ajuste-border-tabla.texto-left ¿El documento no está duplicado?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Concepto
                      td.ajuste-border-tabla.texto-left ¿La operación está claramente descrita?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Base
                      td.ajuste-border-tabla.texto-left ¿El valor antes de impuestos es correcto?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Impuestos
                      td.ajuste-border-tabla.texto-left ¿Se aplicaron IVA o retenciones cuando corresponden?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas
                      td.ajuste-border-tabla.texto-left ¿Las cuentas contables corresponden a la operación?
                      td.texto-left Sí / No
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Débitos y créditos
                      td.ajuste-border-tabla.texto-left ¿El asiento está equilibrado?
                      td.texto-left Sí / No
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soporte adjunto
                      td.ajuste-border-tabla.texto-left ¿El documento quedó relacionado o archivado?
                      td.texto-left Sí / No
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img44.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La importancia de esta revisión se reconoce en el siguiente caso:
              br
              br
              h5 Ejemplo aplicado
              br
              br
              p Una factura de compra por $900.000 se registra por error con fecha del mes siguiente. Aunque el valor sea correcto, el gasto o inventario quedará reconocido en un periodo diferente al que corresponde, afectando reportes mensuales, impuestos y conciliaciones.
              br
              br
              p Este tipo de error puede evitarse revisando fecha, periodo y soporte antes de guardar el comprobante en el sistema.
      Separador
      #t_5_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.10 Caso aplicado: cálculo, registro e ingreso de información en #[i software] contable
      p.mb-5 La empresa Comercial Nueva Ruta S.A.S. compra servicios de mantenimiento por valor de $1.200.000 más IVA del 19 %. La operación está sujeta a retención en la fuente del 4 % sobre la base antes de IVA. El proveedor emite factura electrónica y la empresa realizará el pago por transferencia bancaria. La siguiente tabla presenta el cálculo de IVA, retención y valor neto a pagar:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 20.
                span Cálculo de valores económicos de la operación
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para calcular los valores económicos antes del registro contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Concepto
                      th.ajuste-border-tabla.texto-left Cálculo
                      th.texto-left Valor
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Base del servicio
                      td.ajuste-border-tabla.texto-left Dato de la factura
                      td.texto-left $1.200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold IVA 19 %
                      td.ajuste-border-tabla.texto-left $1.200.000 × 19 %
                      td.texto-left $228.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total, factura
                      td.ajuste-border-tabla.texto-left $1.200.000 + $228.000
                      td.texto-left $1.428.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retención en la fuente 4 %
                      td.ajuste-border-tabla.texto-left $1.200.000 × 4 %
                      td.texto-left $48.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor neto por pagar
                      td.ajuste-border-tabla.texto-left $1.428.000 - $48.000
                      td.texto-left $1.380.000
          p.mb-5 La siguiente tabla presenta el asiento básico de la operación, diferenciando gasto, IVA, retención y valor por pagar:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 21.
                span Registro contable de la operación
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para registrar una compra de servicios con IVA y retención.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto de mantenimiento
                      td.ajuste-border-tabla.texto-left $1.200.000
                      td.texto-left -
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold IVA descontable
                      td.ajuste-border-tabla.texto-left $228.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retención en la fuente por pagar
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $48.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proveedores o cuentas por pagar
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $1.380.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Total
                      td.ajuste-border-tabla.texto-left $1.428.000
                      td.texto-left  $1.428.000
          p.mb-5 A continuación, se organiza la información que debe registrarse o verificarse en el #[i software] contable:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 22.
                span Datos para ingresar en #[i software] contable
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para preparar el ingreso de información en #[i software] contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Campo del sistema
                      th.texto-left Información para registrar
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tipo de documento
                      td.texto-left Factura de compra o cuenta por pagar
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha
                      td.texto-left Fecha de la factura
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tercero
                      td.texto-left Proveedor del servicio
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Concepto
                      td.texto-left Servicio de mantenimiento
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Base gravable
                      td.texto-left $1.200.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold IVA descontable
                      td.texto-left $228.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retención en la fuente
                      td.texto-left $48.000
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor neto por pagar
                      td.texto-left $1.380.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medio de pago
                      td.texto-left Transferencia bancaria
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soporte
                      td.texto-left Factura electrónica y comprobante de pago
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-1.color-4.ajuste-7(data-aos="fade-right")
                p La interpretación del caso es la siguiente:
                p.mb-0 #[b Interpretación del caso:] la operación debe registrarse separando el gasto, el IVA, la retención y el valor neto por pagar. El cálculo y la verificación previa de estos valores evitan errores contables y tributarios. Aunque el software facilita el proceso, la calidad del registro depende de la correcta clasificación de las cuentas, la revisión de los soportes y la validación de los datos.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img45.jpg', alt='' style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
