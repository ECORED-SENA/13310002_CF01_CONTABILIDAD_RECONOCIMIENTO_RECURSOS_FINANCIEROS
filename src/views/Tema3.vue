<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Normas de reconocimiento y medición contable
      p.mb-5 Las normas de reconocimiento y medición contable determinan cuándo un hecho económico debe registrarse como activo, pasivo, patrimonio, ingreso, costo o gasto, y el valor que debe asignársele. Este capítulo aborda la normativa contable, las NIC y NIIF, la medición inicial y posterior, las técnicas de medición, el tratamiento contable y la importancia relativa, con fundamento en la NIIF para las PYMES.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de normativa contable
      p.mb-5 La normativa contable establece principios y procedimientos para reconocer, medir, presentar y revelar los hechos económicos de manera uniforme y comparable. En Colombia, se fundamenta en estándares internacionales y se aplica según las características y el grupo de cada entidad. Sus principales funciones son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificación
                  p Determina si una operación corresponde a un hecho económico.
                  p.mb-0 #[b Ejemplo:] compra de mercancía para la venta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento
                  p Establece si el hecho económico debe incorporarse en la contabilidad.
                  p.mb-0 #[b Ejemplo:] reconocimiento de una cuenta por pagar al recibir la factura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Medición
                  p Define el valor por el cual debe registrarse la operación.
                  p.mb-0 #[b Ejemplo:] valor de la compra, impuestos y descuentos aplicables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación
                  p Orienta la organización de la información en los estados financieros.
                  p.mb-0 #[b Ejemplo:] clasificación como activo, pasivo, ingreso o gasto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revelación
                  p Permite complementar la información mediante notas y explicaciones relevantes.
                  p.mb-0 #[b Ejemplo:] descripción de las políticas contables aplicadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-1(data-aos="fade-right")
            p La aplicación de estas funciones permite determinar el tratamiento contable de una operación, como en el siguiente ejemplo:
            h5 Ejemplo aplicado
            p Una empresa adquiere una maquinaria para utilizarla en su operación. La normativa contable permite establecer que no debe registrarse como gasto inmediato, sino como un activo, porque se espera que genere beneficios económicos en varios periodos. Además, orienta su medición inicial, el reconocimiento posterior de depreciación y la presentación en los estados financieros.
            p.mb-0 Este ejemplo refleja que la normativa contable ayuda a clasificar correctamente las operaciones y a evitar registros que distorsionen los resultados del periodo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img6.png', alt='' style="width: 500px").m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Norma Internacional Contable y Norma Internacional de Información Financiera
      p.mb-5 Las NIC y las NIIF orientan el tratamiento de la información financiera según el marco aplicable. La NIIF para las PYMES establece requerimientos simplificados para entidades sin obligación pública de rendir cuentas. Sus diferencias son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Normas Internacionales de Contabilidad (NIC)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Normas Internacionales de Contabilidad (NIC)
              p Fueron emitidas por el Comité de Normas Internacionales de Contabilidad antes de la creación del Consejo de Normas Internacionales de Contabilidad. Las NIC que no han sido reemplazadas continúan vigentes y forman parte de las NIIF completas.
              p.mb-0 #[b Ejemplo:] NIC 2, Inventarios, que establece el tratamiento contable de los inventarios.
        .py-3.py-md-4(titulo="Normas Internacionales de Información Financiera (NIIF)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Normas Internacionales de Información Financiera (NIIF)
              p Son emitidas por el Consejo de Normas Internacionales de Contabilidad (International Accounting Standards Board [IASB]). Establecen requerimientos para reconocer, medir, presentar y revelar las operaciones y demás hechos económicos en los estados financieros.
              p.mb-0 #[b Ejemplo:] NIIF 15, Ingresos de actividades ordinarias procedentes de contratos con clientes, que establece criterios para reconocer los ingresos derivados de contratos con clientes.
        .py-3.py-md-4(titulo="NIIF para las PYMES")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 NIIF para las PYMES
              p Es un estándar independiente dirigido a entidades sin obligación pública de rendir cuentas que preparan estados financieros con propósito de información general. Simplifica algunos tratamientos contables y exige menos revelaciones que las NIIF completas, pero conserva los principios de reconocimiento, medición, presentación y revelación.
              p.mb-0 #[b Ejemplo:] establece tratamientos simplificados para los inventarios, las propiedades, planta y equipo y otros hechos económicos habituales de las pequeñas y medianas entidades.
      p.mb-5 La siguiente tabla presenta la relación general entre normas contables, normas de información financiera y su aplicación en el registro contable
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Relación entre normas contables e información financiera
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para diferenciar referentes normativos aplicados al reconocimiento contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Referente
                      th.ajuste-border-tabla.texto-left Propósito
                      th.texto-left Relación con el registro contable
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Normas contables
                      td.ajuste-border-tabla.texto-left Orientan el registro y tratamiento de las operaciones
                      td.texto-left Ayudan a clasificar hechos económicos
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Normas de información financiera
                      td.ajuste-border-tabla.texto-left Orientan la preparación y presentación de información útil
                      td.texto-left Permiten elaborar reportes comprensibles
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Marco conceptual
                      td.ajuste-border-tabla.texto-left Define conceptos, criterios y bases generales
                      td.texto-left Apoya el reconocimiento y medición
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Políticas contables
                      td.ajuste-border-tabla.texto-left Adaptan criterios normativos a la entidad
                      td.texto-left Permiten uniformidad en registros similares
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Procedimientos internos
                      td.ajuste-border-tabla.texto-left Ordenan la forma de registrar y verificar
                      td.texto-left Facilitan control y trazabilidad
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p La aplicación del marco correspondiente permite reconocer operaciones, aunque el efectivo se reciba posteriormente:
              br
              br
              h5 Ejemplo aplicado
              br
              br
              p Una empresa vende mercancía por $3.000.000 a crédito. Aunque no recibió efectivo de inmediato, existe un derecho de cobro y un ingreso asociado a la venta realizada. El reconocimiento no depende únicamente del pago, sino del cumplimiento de las condiciones que permiten incorporar el hecho económico en la contabilidad.
              br
              br
              p Esta situación evidencia la importancia de aplicar criterios contables y no limitar el registro solo a los movimientos de caja.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Reconocimiento contable de operaciones
      p.mb-5 El reconocimiento contable incorpora un hecho económico en los registros cuando cumple el marco técnico, cuenta con soporte y puede medirse de forma fiable. Según la operación, puede afectar activos, pasivos, patrimonio, ingresos, costos o gastos. Algunos casos frecuentes son:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img11.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Compra de mercancía a crédito").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Elementos reconocidos:] activo y pasivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Efecto contable:] aumenta el inventario y el proveedor.
            .row(titulo="Venta de contado").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Elementos reconocidos:] ingreso y activo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Efecto contable:] aumenta el ingreso por ventas y el efectivo o saldo bancario.
            .row(titulo="Pago de nómina").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Elementos reconocidos:] gasto y activo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Efecto contable:] aumenta el gasto de personal y disminuye el efectivo o saldo bancario.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Préstamo recibido").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Elementos reconocidos:] activo y pasivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Efecto contable:] aumenta el saldo bancario y la obligación financiera.
            .row(titulo="Aporte de un socio").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Elementos reconocidos:] activo y patrimonio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Efecto contable:] aumentan los recursos disponibles y el capital aportado.
            .row(titulo="Servicio recibido pendiente de pago").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Elementos reconocidos:] gasto y pasivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Efecto contable:] aumenta el gasto y se reconoce una cuenta por pagar.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img12.png", alt="" style="width: 300px").m-auto
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img13.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p El reconocimiento contable depende del momento en que ocurre el hecho económico, como se presenta en el siguiente caso:
            h5 Ejemplo aplicado
            p.mb-0 Una empresa recibe una factura por servicio de internet correspondiente al mes de abril, por valor de $180.000, pero la paga en mayo. El hecho económico corresponde al consumo del servicio en abril. Por tanto, puede reconocerse el gasto y la cuenta por pagar en abril, aunque el pago se realice en el mes siguiente.
      p.mb-0 Este ejemplo permite diferenciar el reconocimiento del pago. La contabilidad busca reflejar el hecho económico cuando ocurre, no únicamente cuando se mueve el efectivo.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Medición inicial y medición posterior
      p.mb-5 La medición contable asigna un valor monetario a los elementos reconocidos. Puede ser inicial, al registrarlos por primera vez, o posterior, al actualizar su valor según el marco técnico aplicable (Consejo de Normas Internacionales de Contabilidad, 2010). Estas se explican a continuación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img14.png', alt="" ).m-auto
                  h4.text-center Medición inicial
                  .caja-3_p
                    p Determina el valor por el cual se reconoce por primera vez la operación.
                    p #[b Medición por costo:] incluye el precio de adquisición y los desembolsos directamente relacionados con la operación y por pagar. 
                    p #[b Medición de obligaciones:] reconoce inicialmente los pasivos por el valor de los recursos que la empresa deberá entregar para cancelarlos. 
                    p.mb-0 #[b Ejemplo:] una maquinaria se registra por su precio de compra y los costos necesarios para ponerla en funcionamiento.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img15.png', alt="" ).m-auto
                  h4.text-center Medición posterior
                  .caja-3_p
                    p Actualiza el valor de los elementos después de su reconocimiento inicial.
                    p #[b Medición por costo:] considera depreciaciones, amortizaciones, deterioros, intereses u otros cambios establecidos en el marco técnico. 
                    p #[b Medición de obligaciones:] actualiza el valor del pasivo cuando se generan intereses, pagos u otras modificaciones. 
                    p.mb-0 #[b Ejemplo:] posteriormente, la maquinaria disminuye su valor contable por la depreciación acumulada.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img16.jpg', alt='' style="width: 500px").m-auto
            .col-xl
              .caja-1.ajuste-2(data-aos="fade-left")
                p La diferencia entre ambos momentos de medición se concreta en el siguiente caso:
                h5 Ejemplo aplicado
                p Una empresa compra un computador por $2.800.000 para uso administrativo. En la medición inicial, se registra el activo por su valor de adquisición. Posteriormente, la empresa debe reconocer la depreciación según la vida útil definida y la política contable aplicada.
                p.mb-0 Si el computador se registrara como gasto en el momento de la compra, se afectaría de manera inmediata el resultado del periodo, aunque el bien será utilizado durante varios meses o años. Por eso, la medición inicial y posterior ayudan a reflejar mejor el uso económico del recurso.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Técnicas de medición financiera
      p.mb-5 Las técnicas de medición financiera permiten valorar los elementos contables mediante el costo histórico, el valor razonable, el valor neto realizable, el costo amortizado o el valor presente. También incluyen ajustes posteriores, como depreciación, deterioro e intereses (Ramírez, 2012). La siguiente tabla presenta ejemplos de su aplicación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Técnicas de medición financiera
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para reconocer técnicas de medición financiera aplicadas al registro contable.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Técnica de medición
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Ejemplo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo histórico
                      td.ajuste-border-tabla.texto-left Valor pagado o por pagar en la adquisición
                      td.texto-left Compra de inventario por valor de factura
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor razonable
                      td.ajuste-border-tabla.texto-left Valor estimado de intercambio en condiciones de mercado
                      td.texto-left Medición de ciertos instrumentos financieros
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor neto realizable
                      td.ajuste-border-tabla.texto-left Valor esperado de venta menos costos necesarios
                      td.texto-left Inventario con posible pérdida de valor
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costo amortizado
                      td.ajuste-border-tabla.texto-left Valor de una obligación o instrumento ajustado por pagos e intereses
                      td.texto-left Préstamo bancario
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Valor presente
                      td.ajuste-border-tabla.texto-left Valor actual de flujos futuros esperados
                      td.texto-left Obligación o derecho con pagos futuros
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Depreciación
                      td.ajuste-border-tabla.texto-left Distribución del costo de un activo durante su vida útil
                      td.texto-left Maquinaria usada en la operación
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Deterioro
                      td.ajuste-border-tabla.texto-left Reconocimiento de pérdida de valor
                      td.texto-left Cartera de difícil cobro
          p.mb-5 La aplicación de estas técnicas permite ajustar el valor contable cuando cambian las expectativas de recuperación:
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br
              br
              p Una empresa tiene una cuenta por cobrar de $5.000.000 a un cliente que presenta dificultades de pago. Aunque inicialmente se reconoció por el valor facturado, posteriormente puede requerirse evaluar si existe deterioro, es decir, si no se espera recuperar la totalidad del valor.
              br
              br
              p La medición posterior permite evitar que los estados financieros presenten cuentas por cobrar con valores que probablemente no se recuperarán. Esto mejora la confiabilidad de la información financiera.
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Criterios para seleccionar el tratamiento contable de un hecho económico
      p.mb-5 Para seleccionar el tratamiento contable se analizan la naturaleza, el soporte, los elementos afectados, el periodo, la normativa y las políticas contables. La siguiente tabla presenta preguntas orientadoras para determinarlo según el fondo económico de la operación.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Criterios para definir el tratamiento contable
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para orientar la selección del tratamiento contable de un hecho económico.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Pregunta orientadora
                      th.texto-left Ejemplo
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Naturaleza de la operación
                      td.ajuste-border-tabla.texto-left ¿Qué ocurrió realmente?
                      td.texto-left Compra, venta, pago, préstamo, aporte.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soporte
                      td.ajuste-border-tabla.texto-left ¿Qué documento respalda el hecho?
                      td.texto-left Factura, contrato, recibo, extracto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Elemento afectado
                      td.ajuste-border-tabla.texto-left ¿Afecta activo, pasivo, patrimonio, ingreso, costo o gasto?
                      td.texto-left Compra de inventario afecta activo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Medición
                      td.ajuste-border-tabla.texto-left ¿Cuál es el valor que debe registrarse?
                      td.texto-left Valor facturado, impuesto, descuento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                      td.ajuste-border-tabla.texto-left ¿A qué periodo corresponde la operación?
                      td.texto-left Servicio causado en abril.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Normativa
                      td.ajuste-border-tabla.texto-left ¿Qué criterio técnico aplica?
                      td.texto-left Reconocimiento de ingreso o gasto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Política contable
                      td.ajuste-border-tabla.texto-left ¿Cómo lo trata la empresa de manera uniforme?
                      td.texto-left Vida útil de activos, depreciación.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p La aplicación conjunta de estos criterios permite establecer el tratamiento contable adecuado, como ocurre en el siguiente caso:
              .caja-1.color-2(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa paga $1.500.000 por una licencia de software que utilizará durante un año. Si el pago genera un derecho de uso durante varios meses, puede analizarse si corresponde reconocer un activo o un gasto pagado por anticipado, según la política contable y el marco aplicable. Si se registrara todo como gasto inmediato, podría afectarse el resultado de un solo periodo sin reflejar el beneficio futuro.
                p.mb-0 Este análisis evidencia que el tratamiento contable debe responder al fondo económico de la operación y no únicamente a la forma del pago.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img18.png', alt='' style="width: 500px").m-auto
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Importancia de la materialidad o importancia relativa
      p.mb-5 La materialidad determina si una información puede influir en las decisiones financieras. Se evalúa según su cuantía, naturaleza y contexto, pues incluso un valor pequeño puede ser relevante (IFRS Foundation, 2018). A continuación, se relaciona cada situación con su posible efecto y la revisión requerida:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img19.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Omisión de una factura de bajo valor").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Posible efecto:] puede afectar la información según el tamaño y el contexto de la empresa. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Revisión necesaria:] comparar el valor con las cifras relevantes.
            .row(titulo="Clasificación incorrecta de un activo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Posible efecto:] puede alterar la presentación de los activos y gastos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Revisión necesaria:] analizar su naturaleza, uso y vida útil.
            .row(titulo="Falta de registro de un impuesto").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Posible efecto:] puede generar obligaciones, intereses o sanciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Revisión necesaria:] consultar la normativa tributaria aplicable.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Duplicación de un gasto").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Posible efecto:] aumenta indebidamente los gastos y disminuye el resultado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Revisión necesaria:] verificar consecutivos, facturas y demás soportes.
            .row(titulo="Falta de reconocimiento de una deuda").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Posible efecto:] disminuye incorrectamente los pasivos de la empresa. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Revisión necesaria:] revisar facturas, contratos y obligaciones pendientes.
            .row(titulo="Falta de reconocimiento del deterioro de cartera").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Posible efecto:] sobreestima el valor de las cuentas por cobrar. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-search-dollar
                  | #[b Revisión necesaria:] evaluar la probabilidad de recuperación de la cartera.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img20.png", alt="" style="width: 300px").m-auto
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img21.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p La importancia relativa cambia según las características de cada empresa, como se plantea en el siguiente caso:
            h5 Ejemplo aplicado
            p.mb-0 Una microempresa omite registrar una factura de servicios por $600.000. Para una empresa con gastos mensuales de $200.000.000, este valor puede no ser significativo en términos relativos; pero para una microempresa con gastos mensuales de $3.000.000, representa el 20 % de sus gastos y puede afectar la lectura del resultado.
      p.mb-0 Por eso, la importancia relativa debe analizarse según el tamaño, actividad y realidad económica de la empresa.
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 Errores frecuentes en el reconocimiento y medición contable
      p.mb-5 Los errores contables afectan la confiabilidad de la información y pueden generar obligaciones, sanciones o decisiones incorrectas. Su prevención requiere verificar el soporte, la naturaleza, el valor y el tratamiento de cada operación (Contaduría General de la Nación, 2025). A continuación, se presentan os errores comunes y la forma de prevenirlos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registro sin soporte
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] dificulta la verificación de la operación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] exigir el documento correspondiente antes del registro.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cotización reconocida como compra
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] registra una operación que aún no se ha realizado. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] diferenciar entre cotización, pedido y factura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compra a crédito no registrada
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] subestima las obligaciones de la empresa. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] revisar las facturas y cuentas pendientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activo registrado como gasto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] aumenta indebidamente los gastos y reduce el resultado. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] evaluar la vida útil y los beneficios económicos futuros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Impuestos omitidos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] presenta valores incompletos y puede generar sanciones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] verificar la base gravable y la tarifa aplicable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Deterioro no reconocido
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] sobreestima el valor de los activos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] evaluar la recuperación de la cartera o los inventarios. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Facturas duplicadas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Efecto:] aumenta indebidamente los gastos o las obligaciones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search-dollar
                      | #[b Prevención:] controlar consecutivos, soportes y registros anteriores.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img28.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un error en la clasificación de una operación puede afectar varios elementos contables:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img29.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa compra una impresora por $1.800.000 para usarla durante varios años, pero la registra como gasto de papelería. Este tratamiento afecta la utilidad del periodo y no refleja que la empresa adquirió un recurso que seguirá prestando servicio. El registro debe analizarse como adquisición de activo, sujeto a las políticas de depreciación correspondientes.
          br
          br
          p Este error puede parecer sencillo, pero afecta la presentación de activos, gastos y resultados. Por eso, es necesario revisar la naturaleza de cada operación antes de definir el registro.
      Separador
      #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.9 Ejemplo aplicado de reconocimiento y medición de una operación
      p A continuación, se presenta un ejemplo aplicado que integra identificación del hecho económico, soporte, reconocimiento, medición y tratamiento contable.
      p.mb-5 La empresa Comercial El Progreso S.A.S. realiza durante el mes las operaciones presentadas en la siguiente tabla:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Reconocimiento y medición de operaciones frecuentes
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para aplicar criterios de reconocimiento y medición contable en operaciones frecuentes.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Operación
                      th.ajuste-border-tabla.texto-left Soporte
                      th.ajuste-border-tabla.texto-left Reconocimiento
                      th.texto-left Medición inicial
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra mercancía a crédito por $5.000.000 más IVA.
                      td.ajuste-border-tabla.texto-left Factura de compra
                      td.ajuste-border-tabla.texto-left Inventario, impuesto descontable si aplica y proveedor.
                      td.texto-left Valor de la factura y tributos aplicables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Vende mercancía de contado por $3.500.000 más IVA.
                      td.ajuste-border-tabla.texto-left Factura de venta
                      td.ajuste-border-tabla.texto-left Ingreso, impuesto generado y efectivo.
                      td.texto-left Valor de venta e impuesto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recibe préstamo bancario por $20.000.000.
                      td.ajuste-border-tabla.texto-left Contrato y desembolso
                      td.ajuste-border-tabla.texto-left Banco y obligación financiera.
                      td.texto-left Valor desembolsado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Paga arriendo del local por $1.200.000.
                      td.ajuste-border-tabla.texto-left Factura o recibo
                      td.ajuste-border-tabla.texto-left Gasto de arrendamiento y salida de bancos.
                      td.texto-left Valor pagado o causado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra computador para uso administrativo por $2.500.000.
                      td.ajuste-border-tabla.texto-left Factura de compra
                      td.ajuste-border-tabla.texto-left Activo fijo y salida de bancos o proveedor.
                      td.texto-left Valor de adquisición.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Reconoce depreciación mensual del computador.
                      td.ajuste-border-tabla.texto-left Cálculo interno y política contable
                      td.ajuste-border-tabla.texto-left Gasto por depreciación y depreciación acumulada.
                      td.texto-left Valor calculado según vida útil.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              .caja-1(data-aos="fade-right").mb-3
                p La interpretación es la siguiente:
                p #[b Interpretación del ejemplo:] Cada operación debe analizarse según su naturaleza económica. Una compra a crédito genera un activo y una obligación; una venta reconoce el ingreso, los impuestos y el costo correspondiente; y un préstamo aumenta los recursos y los pasivos, pero no constituye un ingreso.
                p.mb-0 El computador se reconoce como activo porque será utilizado durante varios periodos. Posteriormente, su costo se distribuye mediante la depreciación, conforme a la vida útil y la política contable.
              p.mb-0 El reconocimiento y la medición permiten registrar cada operación según su naturaleza y efecto contable.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img30.png', alt='' style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
