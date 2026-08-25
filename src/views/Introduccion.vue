<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3 La contabilidad permite reconocer la realidad económica de personas, familias, pequeños negocios, comerciantes y empresas mediante la identificación, organización y registro de los hechos económicos derivados de sus actividades. En este proceso, los documentos soporte respaldan las operaciones y facilitan su clasificación, verificación y registro conforme a la normativa aplicable. Por ello, se requiere personal capacitado para organizar la contabilidad e interpretar la información financiera, especialmente en contextos de formalización empresarial.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 El reconocimiento y registro de hechos económicos integra el estudio de los soportes contables, el Código de Comercio, los actos mercantiles, los títulos valores, las sociedades, los libros y papeles comerciales, las normas de reconocimiento, las técnicas de medición financiera, los impuestos y el uso básico de software contable. Estos contenidos permiten determinar cuándo debe reconocerse una operación, cuál documento la respalda, cómo se calcula su valor y de qué manera se registra.
          p.mb-0 Su aplicación reduce errores, facilita el cumplimiento de obligaciones y fortalece la organización financiera. Además, genera registros claros, verificables y coherentes, necesarios para revisar documentos, comprobar registros, diligenciar libros contables y elaborar reportes financieros.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.jpg', alt='' style="width: 500px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
