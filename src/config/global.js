export default {
  global: {
    Name: 'Reconocimiento y registro de hechos económicos',
    Description:
      'Este componente desarrolla conceptos y procedimientos para identificar hechos económicos, clasificar documentos soporte, aplicar la normativa comercial y contable, medir y registrar operaciones, calcular impuestos y utilizar <i>software</i> contable. Además, integra comprobantes y técnicas de medición financiera para organizar la información, reducir errores y fortalecer la formalización y gestión contable de los negocios.',
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
      termino: 'Base gravable',
      significado:
        'valor sobre el cual se aplica una tarifa para calcular un impuesto o retención.',
    },
    {
      termino: 'Comprobante de contabilidad',
      significado:
        'documento interno que resume el registro contable de un hecho económico, indicando cuentas, débitos, créditos, concepto y soporte.',
    },
    {
      termino: 'Crédito',
      significado:
        'registro contable ubicado en el lado derecho de una cuenta; aumenta pasivos, patrimonio e ingresos, y disminuye activos, costos y gastos.',
    },
    {
      termino: 'Débito',
      significado:
        'registro contable ubicado en el lado izquierdo de una cuenta; aumenta activos, costos y gastos, y disminuye pasivos, patrimonio e ingresos.',
    },
    {
      termino: 'Documento soporte',
      significado:
        'evidencia física o electrónica que respalda un hecho económico, como facturas, recibos, contratos o extractos bancarios.',
    },
    {
      termino: 'Hecho económico',
      significado:
        'operación que afecta la situación financiera de la empresa y puede medirse en dinero.',
    },
    {
      termino: 'Impuesto',
      significado:
        'obligación tributaria generada por una operación económica, según la normativa vigente.',
    },
    {
      termino: 'Medición contable',
      significado:
        'proceso mediante el cual se asigna un valor monetario a un hecho económico reconocido.',
    },
    {
      termino: 'Partida doble',
      significado:
        'principio contable según el cual todo registro afecta al menos dos cuentas, manteniendo igualdad entre débitos y créditos.',
    },
    {
      termino: 'Reconocimiento contable',
      significado:
        'proceso mediante el cual un hecho económico se incorpora formalmente en los registros contables.',
    },
    {
      termino: 'Registro contable',
      significado:
        'anotación ordenada de una operación en las cuentas correspondientes, con base en soportes y comprobantes.',
    },
    {
      termino: 'Retención',
      significado:
        'valor descontado en una operación como anticipo de un impuesto que debe declararse y pagarse.',
    },
    {
      termino: 'Software contable',
      significado:
        'herramienta tecnológica que permite registrar operaciones, organizar información y generar reportes contables.',
    },
    {
      termino: 'Soporte contable',
      significado:
        'documento que permite verificar la existencia, valor y naturaleza de una operación registrada.',
    },
    {
      termino: 'Valor económico',
      significado:
        'monto monetario asociado a una operación contable, como precio, impuesto, descuento, retención o valor neto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayala Cárdenas, S. I., & Fino Serrano, G. (2015). Contabilidad básica general: Un enfoque administrativo y de control interno. Corporación Universitaria Republicana.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá. (s.f.). Información de Sociedades. Cámara de Comercio de Bogotá.',
      link: 'https://www.ccb.org.co/servicios/crea-tu-empresa/constituye-tu-empresa/informacion-de-sociedades',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2020). Marco conceptual para la preparación y presentación de información financiera de las entidades de gobierno (versión 2015.02, actualizada según la Resolución 167 de 2020).',
      link: 'https://www.contaduria.gov.co/documents/20127/36035/Marco%2BConceptual%2BVersi%C3%B3n%2B2015.02.pdf/ef46d692-2418-77e4-4828-7aad47dbb3e2',
    },
    {
      referencia:
        'Contaduría General de la Nación. (2025, 25 de agosto). Norma de proceso contable y sistema documental contable.',
      link: 'https://www.contaduria.gov.co/documents/d/guest/ANEXO%2BRESOLUCION%2B222%2BDE%2B2025%2B-%2B20250825_NormProcContable',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Documento soporte con sujetos no obligados a expedir factura de venta o documento equivalente.',
      link: 'https://www.dian.gov.co/impuestos/Paginas/Sistema-de-Factura-Electronica/Documento-Soporte-Adquisiciones-No-Obligados.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). ¿Qué es la factura electrónica?',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/factura-electronica/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). ¿Qué es el Régimen Simple de Tributación (RST)?',
      link: 'https://micrositios.dian.gov.co/regimen-simple-tributacion/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2026). Vencimientos tributarios de enero de 2026.',
      link: 'https://www.dian.gov.co/Paginas/Vencimientos-tributarios-enero-2026.aspx',
    },
    {
      referencia:
        'IFRS Foundation. (s. f.). IFRS Accounting Standards Navigator.',
      link: 'https://www.ifrs.org/issued-standards/list-of-standards/',
    },
    {
      referencia:
        'IFRS Foundation. (s. f.). International Accounting Standards Board.',
      link: 'https://www.ifrs.org/groups/international-accounting-standards-board/',
    },
    {
      referencia: 'IFRS Foundation. (2025). IFRS for SMEs Accounting Standard.',
      link: 'https://www.ifrs.org/issued-standards/ifrs-for-smes/',
    },
    {
      referencia:
        'International Accounting Standards Board. (2009). Norma Internacional de Información Financiera para Pequeñas y Medianas Entidades (NIIF para las PYMES). IFRS Foundation.',
      link: 'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/niif/NIIF_PYMES.pdf',
    },
    {
      referencia:
        'Molina Sánchez, H. (2015). Documento de Orientación Técnica 003: Orientaciones técnicas sobre la aplicación de la NIIF para las PYMES. Marco conceptual. Consejo Técnico de la Contaduría Pública.',
      link: 'https://www.dian.gov.co/fizcalizacioncontrol/herramienconsulta/NIIF/Orientaciones%20CTCP/Documento3_Orientaciones_Tecnica_NIIF_para_las_Pymes_Marco.pdf',
    },
    {
      referencia:
        'Moreno Fernández, J. A. (2014). Contabilidad básica (4.ª ed.). Grupo Editorial Patria.',
      link: 'https://books.google.com.ec/books?id=X9bhBAAAQBAJ',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971, 27 de marzo). Decreto 410 de 1971, por el cual se expide el Código de Comercio. Secretaría del Senado.',
      link: 'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Ramírez Echeverry, H. F., & Suárez Balaguera, L. E. (2012). Guía NIIF para PYMES: Norma Internacional de Información Financiera para Pymes. Universidad Libre.',
      link: 'https://repository.unilibre.edu.co/items/e597b737-9107-4549-9723-66f5ee4b2377',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2014, 29 de julio). Guía de reconocimiento contable.',
      link: 'https://gerencia.unal.edu.co/fileadmin/user_upload/CON_2_GU_reconocimiento_contable_D.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
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
