<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Registro de hechos económicos y comprobantes de contabilidad
      p.mb-5 El registro de hechos económicos incorpora cronológicamente las operaciones en la contabilidad mediante cuentas, valores, soportes y comprobantes. Estos documentos respaldan los asientos contables y garantizan la integridad, verificabilidad, seguridad y conservación de la información financiera (Contaduría General de la Nación, 2025). 
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto de registro contable
      p.mb-5 El registro contable organiza los hechos económicos mediante soportes, cuentas, valores y partida doble. Antes de registrar, se debe analizar la naturaleza de la operación, pues una salida de dinero puede tener diferentes tratamientos contables. Los elementos del registro contable se presentan a continuación, con preguntas orientadoras y ejemplos:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img1.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img2.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Hecho económico
                    p #[b Pregunta orientadora:] ¿Qué operación ocurrió?
                    p.mb-0 #[b Ejemplo:] compra de mercancía
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img3.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Soporte
                    p #[b Pregunta orientadora:] ¿Qué documento respalda la operación?
                    p.mb-0 #[b Ejemplo:] Factura de compra
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img4.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Fecha
                    p #[b Pregunta orientadora:] ¿Cuándo ocurrió la operación?
                    p.mb-0 #[b Ejemplo:] 15 de abril
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img5.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Tercero
                    p #[b Pregunta orientadora:] ¿Quién intervino en la operación?
                    p.mb-0 #[b Ejemplo:] Proveedor Comercial ABC
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img6.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Valor
                    p #[b Pregunta orientadora:] ¿Por cuánto se registra?
                    p.mb-0 #[b Ejemplo:] $2.000.000
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img7.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Cuenta débito
                    p #[b Pregunta orientadora:] ¿Qué cuenta recibe el aumento o registro?
                    p.mb-0 #[b Ejemplo:] Inventarios
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img8.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Cuenta crédito
                    p #[b Pregunta orientadora:] ¿Qué cuenta entrega el recurso o genera obligación?
                    p.mb-0 #[b Ejemplo:] Proveedores
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t4/img9.png' ).m-auto
                  .carrusel_p
                    h4.mb-3.estilo-text Concepto
                    p #[b Pregunta orientadora:] ¿Cómo se describe la operación?
                    p.mb-0 #[b Ejemplo:] Compra de mercancía a crédito
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-2.ajuste-2(data-aos="fade-right")
            p Los elementos anteriores se integran en el siguiente caso:
            h5 Ejemplo aplicado
            p Una empresa compra mercancía a crédito por $2.000.000. Antes de registrar, debe identificar el soporte, que sería la factura de compra; el tercero, que corresponde al proveedor; el valor de la operación; y las cuentas afectadas. En este caso, aumenta el inventario y aumenta la obligación con proveedores.
            p.mb-0 Si la empresa registrara solo el inventario, el hecho económico quedaría incompleto porque no reflejaría la deuda adquirida. El registro contable debe mostrar el efecto completo de la operación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img10.png', alt='' style="width: 500px").m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Partida doble: débito y crédito
      p.mb-5 La partida doble establece que toda operación afecta mínimo dos cuentas y conserva la igualdad entre débitos y créditos (Moreno F., 2020). A continuación, se presenta la forma general como aumentan y disminuyen las cuentas según su naturaleza:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
                  h4.text-center Cuentas que aumentan por el débito
                  .caja-3_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Activo:] aumenta por el débito y disminuye por el crédito. Ejemplos: caja, bancos e inventarios. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Costos:] aumentan por el débito y disminuyen por el crédito. Ejemplo: costo de ventas. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Gastos:] aumentan por el débito y disminuyen por el crédito. Ejemplos: arriendo, servicios y nómina.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
                  h4.text-center Cuentas que aumentan por el crédito
                  .caja-3_p
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Pasivo:] aumenta por el crédito y disminuye por el débito. Ejemplos: proveedores y préstamos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Patrimonio:] aumenta por el crédito y disminuye por el débito. Ejemplos: capital y utilidades acumuladas. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Ingresos:] aumentan por el crédito y disminuyen por el débito. Ejemplos: ventas e ingresos por servicios.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img13.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .caja-1.color-1(data-aos="fade-left")
                p La igualdad entre débitos y créditos se aplica en el siguiente caso:
                h5 Ejemplo aplicado
                p Una empresa recibe $5.000.000 por una venta de contado. En esta operación aumenta bancos o caja, porque ingresa dinero, y aumenta el ingreso por ventas. Según la regla de la partida doble, el aumento del activo se registra en el débito y el aumento del ingreso se registra en el crédito. Registro básico:
                table.color-tabla-sencilla(data-aos="zoom-in").mb-3
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Caja o bancos
                      td.texto-left $5.000.000
                      td.texto-left -
                    tr
                      td.texto-left Ingresos por ventas
                      td.texto-left -
                      td.texto-left $5.000.000
                p.mb-0 El total de débitos y créditos es igual, por lo que el asiento mantiene el equilibrio contable.
      p.mb-5 Toda operación debe mantener la igualdad entre débitos y créditos. El siguiente video permite identificar las cuentas afectadas y aplicar la partida doble.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Partida doble en acción: cómo registrar débitos y créditos
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Naturaleza de las cuentas contables
      p.mb-5 La naturaleza contable indica cómo aumentan o disminuyen las cuentas. Los activos, pasivos y patrimonio representan la situación financiera, mientras que los ingresos, costos y gastos reflejan el desempeño de la empresa (Ayala Cárdenas, 2015). La siguiente tabla presenta la naturaleza de las cuentas y su efecto dentro del registro contable:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Naturaleza de las cuentas contables
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para reconocer la naturaleza contable de las cuentas.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Naturaleza normal
                      th.ajuste-border-tabla.texto-left Qué representa
                      th.texto-left Ejemplo de aumento
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Activo
                      td.ajuste-border-tabla.texto-left Débito
                      td.ajuste-border-tabla.texto-left Recursos y derechos
                      td.texto-left Compra de mercancía
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pasivo
                      td.ajuste-border-tabla.texto-left Crédito
                      td.ajuste-border-tabla.texto-left Obligaciones con terceros
                      td.texto-left Compra a crédito
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
                      td.ajuste-border-tabla.texto-left Crédito
                      td.ajuste-border-tabla.texto-left Recursos propios
                      td.texto-left Aporte de capital
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingreso
                      td.ajuste-border-tabla.texto-left Crédito
                      td.ajuste-border-tabla.texto-left Beneficios generados
                      td.texto-left Venta de mercancía
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo
                      td.ajuste-border-tabla.texto-left Débito
                      td.ajuste-border-tabla.texto-left Valor asociado a producir o vender
                      td.texto-left Costo de mercancía vendida
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto
                      td.ajuste-border-tabla.texto-left Débito
                      td.ajuste-border-tabla.texto-left Consumos administrativos, comerciales o financieros
                      td.texto-left Pago de arriendo
          .caja-2.mb-0(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 500px").m-auto
              .col-xl.caja-2_p
                p Para mayor comprensión del tema, se desarrolla el siguiente ejemplo:
                h5 Ejemplo aplicado
                p Una empresa adquiere un préstamo bancario por $10.000.000. En este hecho económico aumenta bancos, que es un activo, y aumenta la obligación financiera, que es un pasivo. Por tanto, bancos se debita y obligaciones financieras se acredita.
                table.color-tabla-sencilla.color-3(data-aos="zoom-in").mb-3
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Bancos
                      td.texto-left $10.000.000
                      td.texto-left -
                    tr
                      td.texto-left Obligaciones financieras
                      td.texto-left -
                      td.texto-left $10.000.000
                p.mb-0 El asiento refleja que la empresa recibió recursos, pero también adquirió una obligación que deberá pagar.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Cuentas de activo, pasivo, patrimonio, ingresos, costos y gastos
      p.mb-5 Las cuentas contables clasifican los recursos, obligaciones, aportes y resultados de la empresa según su naturaleza y efecto financiero. A continuación, se presenta la clasificación de las cuentas contables:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
                  h4.text-center Situación financiera
                  .caja-3_p
                    p Por la situación financiera, se clasifica en:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Activo:] representa recursos y derechos controlados por la empresa. Ejemplos: caja, bancos, cuentas por cobrar, inventarios y equipos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Pasivo:] representa obligaciones con terceros. Ejemplos: proveedores, préstamos e impuestos por pagar. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Patrimonio:] representa los aportes de los propietarios y los resultados acumulados. Ejemplos: capital, reservas y utilidades acumuladas.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img16.png', alt="" ).m-auto
                  h4.text-center Resultado del periodo
                  .caja-3_p
                    p Por los resultados del periodo, se clasifica en:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Ingresos:] representan beneficios obtenidos por ventas o servicios. Ejemplos: ventas e ingresos por servicios. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Costos:] corresponden a los recursos asociados con la producción o venta. Ejemplos: costo de ventas y materia prima consumida. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-search-dollar
                        | #[b Gastos:] corresponden a consumos necesarios para la operación. Ejemplos: arriendo, servicios, nómina e intereses.
          p La clasificación de las cuentas permite registrar correctamente cada operación, como en el siguiente ejemplo:
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img17.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .caja-1.color-3.ajuste-3(data-aos="fade-left")
                h5 Ejemplo aplicado
                p Una empresa paga el servicio de energía del local por $300.000. Este pago no representa un activo, porque no genera un recurso controlado para periodos futuros; corresponde a un gasto del periodo. Por tanto, se registra un gasto por servicios y una salida de bancos o caja.
                table.color-tabla-sencilla(data-aos="zoom-in").mb-3
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Gasto por servicios públicos
                      td.texto-left $300.000
                      td.texto-left -
                    tr
                      td.texto-left Bancos
                      td.texto-left -
                      td.texto-left $300.000
                p.mb-0 El registro permite reconocer el consumo del servicio y la disminución del dinero disponible.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Comprobantes de contabilidad: concepto y función
      p.mb-5 Los comprobantes de contabilidad resumen, clasifican y respaldan el registro de los hechos económicos a partir de sus respectivos soportes. A continuación, se presenta la utilidad del comprobante dentro del proceso contable:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Resumir
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Función:] reúne la información principal del hecho económico. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] compra de mercancía a crédito.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Clasificar
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Función:] identifica las cuentas afectadas por la operación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] inventarios y proveedores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Medir
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Función:] registra el valor económico de la operación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] compra por $2.000.000.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respaldar el asiento
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Función:] relaciona los documentos que sustentan el registro. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] factura de compra y comprobante de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Controlar
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Función:] permite identificar quién elaboró, revisó y aprobó el comprobante. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] firmas o validaciones internas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Servir de fuente para el registro
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Función:] proporciona la información necesaria para registrar la operación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Ejemplo:] registro en el libro diario o sistema contable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img23.png', alt='' style="max-width: 500px").m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img24.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las funciones del comprobante se integran en el siguiente caso:
          br
          br
          h5 Ejemplo aplicado
          br
          br
          p Una empresa paga una factura de servicios por $600.000. El soporte puede ser la factura del servicio y el comprobante bancario. El comprobante de contabilidad debe indicar la cuenta de gasto, la cuenta de bancos, el valor, la fecha y el concepto. De esta manera, el hecho económico queda listo para registrarse en libros o en el sistema contable.
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 Diligenciamiento de comprobantes de contabilidad
      p.mb-5 El diligenciamiento del comprobante consiste en registrar claramente la fecha, el tercero, el concepto, los soportes, las cuentas, los débitos y créditos, y los responsables. Esto facilita la verificación y evita errores en la información contable. Los campos básicos para diligenciar un comprobante de contabilidad son:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img25.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Número").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Controla el consecutivo del comprobante. Ejemplo: CC-00015.
            .row(titulo="Fecha").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ubica la operación en el periodo. Ejemplo: 20 de abril.
            .row(titulo="Tercero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica el proveedor, cliente o beneficiario. Ejemplo: Comercial Alfa S.A.S.
            .row(titulo="Concepto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Describe la operación. Ejemplo: Compra de mercancía a crédito.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Soporte").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Relaciona el documento que respalda. Ejemplo: Factura FVE-350.
            .row(titulo="Cuenta contable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica la cuenta afectada. Ejemplo: Inventarios.
            .row(titulo="Débito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra el valor debitado. Ejemplo: $2.000.000.
            .row(titulo="Crédito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra el valor acreditado. Ejemplo: $2.000.000.
            .row(titulo="Elaboró y aprobó").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Control interno. Ejemplo: Auxiliar contable y administrador.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img26.png", alt="" style="width: 350px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-4.ajuste-4(data-aos="fade-right")
            p Para comprender este tema, se presenta el siguiente ejemplo:
            h5 Ejemplo aplicado
            p.mb-0 Si una empresa compra mercancía a crédito por $2.000.000, el comprobante debe indicar la factura del proveedor, la fecha, el concepto, la cuenta de inventarios en el débito y la cuenta de proveedores en el crédito. Si el comprobante está incompleto, será más difícil verificar el origen del registro o corregir errores posteriores.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img27.jpg', alt='' style="width: 500px").m-auto
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7  Registro de operaciones de compra
      p.mb-5 Las compras se registran según la naturaleza de lo adquirido y la forma de pago. Pueden afectar inventarios, activos o gastos y generar una salida de dinero o una obligación, considerando los impuestos, descuentos y retenciones aplicables. La siguiente tabla presenta ejemplos de compras y su efecto contable inicial:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Registro básico de operaciones de compra
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para orientar el registro de operaciones de compra según su naturaleza.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Débito frecuente
                      th.texto-left Crédito frecuente
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de mercancía de contado
                      td.ajuste-border-tabla.texto-left Inventarios
                      td.texto-left Caja o bancos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de mercancía a crédito
                      td.ajuste-border-tabla.texto-left Inventarios
                      td.texto-left Proveedores
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de equipo
                      td.ajuste-border-tabla.texto-left Propiedad, planta y equipo
                      td.texto-left Bancos o proveedores
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de papelería para uso inmediato
                      td.ajuste-border-tabla.texto-left Gasto de papelería
                      td.texto-left Caja, bancos o cuentas por pagar
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Servicio recibido pendiente de pago
                      td.ajuste-border-tabla.texto-left Gasto correspondiente
                      td.texto-left Cuentas por pagar
          .row.justify-content-center.align-items-center.mb-0
            .col-xl
              .caja-1.color-3.mb-4.mb-lg-0(data-aos="fade-right")
                p El registro de una compra a crédito se aplica en el siguiente caso:
                h5 Ejemplo aplicado
                p Una empresa compra mercancía a crédito por $3.000.000. El registro básico sería:
                table.color-tabla-sencilla(data-aos="zoom-in").mb-3
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Inventarios
                      td.texto-left $3.000.000
                      td.texto-left -
                    tr
                      td.texto-left Proveedores
                      td.texto-left -
                      td.texto-left $3.000.000
                p.mb-0 El asiento refleja que la empresa recibió mercancía, pero aún no la pagó. Por tanto, se reconoce tanto el recurso como la obligación.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img28.png', alt='' style="width: 500px").m-auto
      Separador
      #t_4_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.8 Registro de operaciones de venta
      p.mb-5 Las ventas reconocen el ingreso y la forma de recaudo. Cuando existen inventarios, también se registra el costo de venta y la disminución de la mercancía. A continuación, se presentan ejemplos de ventas y su efecto contable inicial:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Venta de contado
                  p Aumenta el dinero disponible y se reconoce el ingreso:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Débito:] caja o bancos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Crédito:] ingresos por ventas. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Venta a crédito
                  p Se reconoce el ingreso y el derecho de cobro al cliente:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Débito:] cuentas por cobrar. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Crédito:] ingresos por ventas. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento del costo de venta
                  p Se reconoce el costo de la mercancía y disminuye el inventario:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Débito:] costo de ventas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Crédito:] inventarios. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Devolución en venta
                  p Disminuye el valor neto de las ventas y se ajusta el cobro o recaudo:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Débito:] devoluciones en ventas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Crédito:] cuentas por cobrar, caja o bancos. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Descuento concedido
                  p Disminuye el valor que debe pagar el cliente:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Débito:] descuentos en ventas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Crédito:] cuentas por cobrar, caja o bancos. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img33.png', alt='' style="max-width: 500px").m-auto
      p.text-center Una venta de mercancía puede requerir dos registros contables:
      .row.justify-content-center.align-items-center.mb-3
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img34.jpg', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1.ajuste-5(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una empresa vende mercancía de contado por $4.000.000. El registro básico del ingreso sería:
            table.color-tabla-sencilla(data-aos="zoom-in").mb-3
              thead
                tr
                  th.ajuste-border-tabla.texto-left Cuenta
                  th.ajuste-border-tabla.texto-left Débito
                  th.texto-left Crédito
              tbody
                tr
                  td.texto-left Caja o bancos
                  td.texto-left $4.000.000
                  td.texto-left -
                tr
                  td.texto-left Ingresos por ventas
                  td.texto-left -
                  td.texto-left $4.000.000
            p Si la mercancía vendida tenía un costo de $2.500.000, también se registra:
            table.color-tabla-sencilla(data-aos="zoom-in").mb-3
              thead
                tr
                  th.ajuste-border-tabla.texto-left Cuenta
                  th.ajuste-border-tabla.texto-left Débito
                  th.texto-left Crédito
              tbody
                tr
                  td.texto-left Costo de ventas
                  td.texto-left $2.500.000
                  td.texto-left -
                tr
                  td.texto-left Inventarios
                  td.texto-left -
                  td.texto-left $2.500.000
      p.mb-0.text-center Así, la contabilidad refleja el ingreso y el costo asociado a la operación.
      Separador
      #t_4_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.9 Registro de pagos y recaudos
      p.mb-5 Los pagos y recaudos representan salidas y entradas de dinero. Su registro depende de la causa del movimiento, pues recibir dinero no siempre genera un ingreso ni pagarlo implica necesariamente un gasto. A continuación, se presentan ejemplos de movimientos de dinero y su efecto contable:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img35.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Recaudo de cartera").ajuste-cajaAcordion.ajuste-vineta
              p Aumenta el dinero y disminuye el derecho de cobro:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Débito:] caja o bancos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Crédito:] cuentas por cobrar. 
            .row(titulo="Aporte recibido de un socio").ajuste-cajaAcordion.ajuste-vineta
              p Aumentan los recursos y el patrimonio:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Débito:] caja o bancos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Crédito:] capital o aportes. 
            .row(titulo="Préstamo bancario recibido").ajuste-cajaAcordion.ajuste-vineta
              p Aumenta el dinero y surge una obligación:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Débito:] bancos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Crédito:] obligaciones financieras. 
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Pago a un proveedor").ajuste-cajaAcordion.ajuste-vineta
              p Disminuyen la obligación y el dinero disponible:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Débito:] proveedores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Crédito:] caja o bancos. 
            .row(titulo="Pago de un gasto").ajuste-cajaAcordion.ajuste-vineta
              p Se reconoce el gasto y disminuye el dinero:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Débito:] gasto correspondiente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Crédito:] caja o bancos. 
            .row(titulo="Pago de un préstamo").ajuste-cajaAcordion.ajuste-vineta
              p Disminuyen la deuda y el dinero disponible:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Débito:] obligaciones financieras y gasto por intereses, si corresponde. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Crédito:] caja o bancos. 
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img36.png", alt="" style="width: 300px").m-auto
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img37.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p La causa del movimiento determina las cuentas que deben registrarse:
            h5 Ejemplo aplicado
            p Una empresa recibe $1.500.000 de un cliente que tenía una factura pendiente. Este recaudo no representa una nueva venta, porque el ingreso ya se reconoció cuando se emitió la factura. El registro correcto disminuye la cuenta por cobrar y aumenta bancos.
            table.color-tabla-sencilla.color-3(data-aos="zoom-in").mb-3
              thead
                tr
                  th.ajuste-border-tabla.texto-left Cuenta
                  th.ajuste-border-tabla.texto-left Débito
                  th.texto-left Crédito
              tbody
                tr
                  td.texto-left Bancos
                  td.texto-left $1.500.000
                  td.texto-left -
                tr
                  td.texto-left Cuentas por cobrar
                  td.texto-left -
                  td.texto-left $1.500.000
            p.mb-0 El asiento presenta que la empresa recuperó cartera, no que generó un nuevo ingreso.
      Separador
      #t_4_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.10 Registro de gastos y costos
      p.mb-5 Los costos se relacionan con la producción o venta de bienes y servicios, mientras que los gastos corresponden a actividades administrativas, comerciales o financieras. Su reconocimiento debe realizarse en el periodo en que se causan y respaldarse con soportes válidos. La siguiente tabla presenta ejemplos de costos y gastos dentro del registro contable:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Diferencia entre costos y gastos
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para diferenciar costos y gastos en el registro contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Costo
                      th.ajuste-border-tabla.texto-left Relacionado con producir o vender
                      th.ajuste-border-tabla.texto-left Costo de mercancía vendida
                      th.texto-left Débito a costo de ventas
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto administrativo
                      td.ajuste-border-tabla.texto-left Apoya la gestión del negocio
                      td.ajuste-border-tabla.texto-left Arriendo de oficina
                      td.texto-left Débito a gasto de arriendo
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto de ventas
                      td.ajuste-border-tabla.texto-left Relacionado con comercialización
                      td.ajuste-border-tabla.texto-left Publicidad o comisiones
                      td.texto-left Débito a gasto de ventas
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gasto financiero
                      td.ajuste-border-tabla.texto-left Relacionado con financiación
                      td.ajuste-border-tabla.texto-left Intereses bancarios
                      td.texto-left Débito a gasto financiero
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo de producción
                      td.ajuste-border-tabla.texto-left Relacionado con fabricar
                      td.ajuste-border-tabla.texto-left Materia prima o mano de obra directa
                      td.texto-left Débito a costos de producción
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t4/img38.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .caja-1.color-2(data-aos="fade-left")
                p A continuación, se desarrolla un ejemplo:
                h5 Ejemplo aplicado
                p Una empresa paga $900.000 por publicidad en redes sociales. Este valor no corresponde al costo directo de la mercancía vendida, sino a un gasto de ventas, porque está relacionado con la promoción de los productos.
                table.color-tabla-sencilla.color-3(data-aos="zoom-in").mb-3
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.texto-left Gasto de publicidad
                      td.texto-left $900.000
                      td.texto-left -
                    tr
                      td.texto-left Bancos
                      td.texto-left -
                      td.texto-left $900.000
                p.mb-0 La clasificación adecuada permite que los reportes muestren correctamente el comportamiento de costos y gastos.
      Separador
      #t_4_11.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.11 Relación entre soporte, comprobante y asiento contable
      p.mb-5 El soporte, el comprobante y el asiento forman una secuencia documental y contable. El soporte respalda el hecho económico; el comprobante organiza la operación; y el asiento registra las cuentas afectadas. Esta relación garantiza la trazabilidad y coherencia de la información. A continuación, se presenta la secuencia documental y contable del registro:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Soporte
                    p.mb-0 Respalda el hecho económico. Ejemplo: factura de compra.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img39.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img40.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Comprobante
                    p.mb-0 Resume y organiza los datos de la operación. Ejemplo: comprobante de contabilidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Asiento contable
                    p.mb-0 Registra las cuentas y los valores débito y crédito. Ejemplo: débito a inventarios y crédito a proveedores.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img41.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img42.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Libro contable
                    p.mb-0 Acumula los registros de forma cronológica y sistemática. Ejemplo: libro diario.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Reporte contable
                    p.mb-0 Presenta la información procesada. Ejemplo: estado financiero o reporte auxiliar.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img43.png', alt='' style="width: 300px").m-auto
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-1.color-3.ajuste-6(data-aos="fade-right")
                p El tema se aplica en el siguiente ejemplo:
                h5 Ejemplo aplicado
                p.mb-0 Una empresa compra mercancía a crédito. La factura es el soporte; el comprobante de contabilidad resume la operación; el asiento registra inventarios en el débito y proveedores en el crédito; y el libro diario o software contable conserva el movimiento. Esta secuencia permite verificar posteriormente el origen del registro.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t4/img44.jpg', alt='' style="width: 500px").m-auto
      Separador
      #t_4_12.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.12 Ejemplo aplicado de registro de hechos económicos
      p A continuación, se presenta un ejemplo aplicado que integra la identificación del hecho económico, el soporte, el comprobante y el asiento contable.
      p.mb-5 La empresa Comercial San Miguel S.A.S. realiza las siguientes operaciones durante el mes:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Operaciones para registrar hechos económicos
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para analizar operaciones antes de elaborar asientos contables.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Fecha
                      th.ajuste-border-tabla.texto-left Operación
                      th.texto-left Soporte
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 02/05
                      td.ajuste-border-tabla.texto-left Aporte de socio en efectivo por $10.000.000
                      td.texto-left Comprobante bancario y acta o documento soporte
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 04/05
                      td.ajuste-border-tabla.texto-left Compra mercancía a crédito por $4.000.000
                      td.texto-left Factura de proveedor
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 08/05
                      td.ajuste-border-tabla.texto-left Vende mercancía de contado por $3.000.000
                      td.texto-left Factura de venta
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 10/05
                      td.ajuste-border-tabla.texto-left Paga arriendo del local por $1.200.000
                      td.texto-left Recibo o factura y comprobante de pago
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 15/05
                      td.ajuste-border-tabla.texto-left Recauda cartera de cliente por $800.000
                      td.texto-left Recibo de caja o comprobante bancario
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 20/05
                      td.ajuste-border-tabla.texto-left Paga a proveedor $1.500.000
                      td.texto-left Comprobante de egreso y soporte bancario
          p.mb-5 Los registros contables derivados de las operaciones planteadas son los siguientes:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 16.
                span Asientos contables básicos
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para registrar hechos económicos mediante partida doble.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Cuenta
                      th.ajuste-border-tabla.texto-left Débito
                      th.texto-left Crédito
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aporte de socio
                      td.ajuste-border-tabla.texto-left Bancos
                      td.ajuste-border-tabla.texto-left $10.000.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aporte de socio
                      td.ajuste-border-tabla.texto-left Capital
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $10.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra a crédito
                      td.ajuste-border-tabla.texto-left Inventarios
                      td.ajuste-border-tabla.texto-left $4.000.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra a crédito
                      td.ajuste-border-tabla.texto-left Proveedores
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $4.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta de contado
                      td.ajuste-border-tabla.texto-left Caja o bancos
                      td.ajuste-border-tabla.texto-left $3.000.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta de contado
                      td.ajuste-border-tabla.texto-left Ingresos por ventas
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $3.000.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de arriendo
                      td.ajuste-border-tabla.texto-left Gasto de arriendo
                      td.ajuste-border-tabla.texto-left $1.200.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de arriendo
                      td.ajuste-border-tabla.texto-left Bancos
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $1.200.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
                      td.ajuste-border-tabla.texto-left Bancos
                      td.ajuste-border-tabla.texto-left $800.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
                      td.ajuste-border-tabla.texto-left Cuentas por cobrar
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $800.000
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago a proveedor
                      td.ajuste-border-tabla.texto-left Proveedores
                      td.ajuste-border-tabla.texto-left $1.500.000
                      td.texto-left -
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago a proveedor
                      td.ajuste-border-tabla.texto-left Bancos
                      td.ajuste-border-tabla.texto-left -
                      td.texto-left $1.500.000
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img45.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p Los registros anteriores permiten reconocer el efecto contable de cada operación:
              br
              br
              p #[b Interpretación del ejemplo:] cada operación afecta mínimo dos cuentas y conserva la igualdad entre débitos y créditos. Los aportes, las compras y los recaudos aumentan los recursos; las ventas generan ingresos; y los pagos disminuyen el dinero disponible o las obligaciones.
              br
              br
              p El análisis del hecho económico permite diferenciar ingresos, gastos, activos y pagos de deudas. Asimismo, la relación entre el soporte, el comprobante y el asiento garantiza la trazabilidad y facilita la elaboración de libros y reportes contables.
          p.mb-0 El registro organizado convierte las operaciones en información contable verificable y útil.

</template>

<script>
export default {
  name: 'Tema4',
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
