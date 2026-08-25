export default {
  global: {
    Name: 'Reconocimiento y registro de hechos económicos',
    Description:
      'Este componente desarrolla conceptos y procedimientos para identificar hechos económicos, clasificar documentos soporte, aplicar la normativa comercial y contable, medir y registrar operaciones, calcular impuestos y utilizar software contable. Además, integra comprobantes y técnicas de medición financiera para organizar la información, reducir errores y fortalecer la formalización y gestión contable de los negocios.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Fundamentos de los hechos económicos y la información contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Concepto de contabilidad y su relación con los recursos financieros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ente económico y actividad empresarial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Hechos económicos: concepto y características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Clasificación de los hechos económicos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Relación entre hechos económicos, soportes y registros contables',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Principio de reconocimiento contable',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Importancia de identificar correctamente los hechos económicos',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Ejemplo aplicado de identificación de hechos económicos',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Documentos soporte y normativa comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de documento soporte',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de los documentos soporte',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características de los documentos soporte',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Diligenciamiento de documentos soporte',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Verificación básica de documentos soporte',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Código de Comercio y su relación con la contabilidad',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Registro mercantil',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Actos mercantiles',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Títulos valores',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Sociedades comerciales',
            hash: 't_2_10',
          },
          {
            numero: '2.11',
            titulo: 'Libros y papeles comerciales',
            hash: 't_2_11',
          },
          {
            numero: '2.12',
            titulo:
              'Ejemplo aplicado de clasificación y diligenciamiento de soportes',
            hash: 't_2_12',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normas de reconocimiento y medición contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de normativa contable',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Norma Internacional Contable y Norma Internacional de Información Financiera',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reconocimiento contable de operaciones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Medición inicial y medición posterior',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Técnicas de medición financiera',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Criterios para seleccionar el tratamiento contable de un hecho económico',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Importancia de la materialidad o importancia relativa',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo:
              'Errores frecuentes en el reconocimiento y medición contable',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo:
              'Ejemplo aplicado de reconocimiento y medición de una operación',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Registro de hechos económicos y comprobantes de contabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de registro contable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Partida doble: débito y crédito',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Naturaleza de las cuentas contables',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Cuentas de activo, pasivo, patrimonio, ingresos, costos y gastos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Comprobantes de contabilidad: concepto y función',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Diligenciamiento de comprobantes de contabilidad',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Registro de operaciones de compra',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Registro de operaciones de venta',
            hash: 't_4_8',
          },
          {
            numero: '4.9',
            titulo: 'Registro de pagos y recaudos',
            hash: 't_4_9',
          },
          {
            numero: '4.10',
            titulo: 'Registro de gastos y costos',
            hash: 't_4_10',
          },
          {
            numero: '4.11',
            titulo: 'Relación entre soporte, comprobante y asiento contable',
            hash: 't_4_11',
          },
          {
            numero: '4.12',
            titulo: 'Ejemplo aplicado de registro de hechos económicos',
            hash: 't_4_12',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Cálculo de valores económicos, impuestos y uso de <i>software</i> contable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Valores económicos en las operaciones contables',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Base gravable, tarifa y valor del impuesto',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Clasificación general de impuestos relacionados con operaciones contables',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Cálculo básico de IVA',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Retenciones aplicables en operaciones comerciales',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Registro contable de impuestos',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Concepto y utilidad del <i>software</i> contable',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo:
              ' Aplicación del <i>software</i> contable en el registro de operaciones',
            hash: 't_5_8',
          },
          {
            numero: '5.9',
            titulo:
              'Revisión de datos antes de registrar en <i>software</i> contable',
            hash: 't_5_9',
          },
          {
            numero: '5.10',
            titulo:
              'Caso aplicado: cálculo, registro e ingreso de información en <i>software</i> contable',
            hash: 't_5_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
