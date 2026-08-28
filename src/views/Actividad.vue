<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre reconocimiento y registro de hechos económicos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar la comprensión de los conceptos y procedimientos relacionados con la identificación de hechos económicos, la clasificación de documentos soporte, la aplicación de la normativa comercial y contable, el reconocimiento y la medición de operaciones, el registro mediante partida doble, el diligenciamiento de comprobantes, el cálculo de valores económicos e impuestos y el uso básico de software contable.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál situación representa un hecho económico que debe analizarse para registro contable?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una empresa solicita una cotización de mercancía a un proveedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una empresa recibe una factura por mercancía comprada a crédito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un cliente pregunta por el precio de un producto que ofrece la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El administrador revisa posibles proveedores para el próximo mes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La compra a crédito afecta inventarios y genera una obligación con el proveedor, por lo que debe reconocerse contablemente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la función principal de la contabilidad en relación con los recursos financieros?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar, medir y comunicar hechos económicos que afectan la situación financiera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar únicamente los movimientos de efectivo o de dinero que realiza la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elaborar documentos comerciales o mercantiles sin interpretar la operación económica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir o reemplazar los soportes contables cuando no existen documentos suficientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La contabilidad permite reconocer recursos, obligaciones, ingresos, costos y gastos de manera organizada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Por qué es importante separar los gastos personales de los gastos del negocio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque los gastos o erogaciones personales deben registrarse como costos de la operación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque todos los pagos hechos por el propietario o dueño son gastos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque los gastos personales aumentan o incrementan el patrimonio de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque permite que la contabilidad refleje la realidad económica del ente económico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Mezclar gastos personales con empresariales distorsiona los resultados y afecta la confiabilidad de la información.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una empresa firma un contrato con un proveedor, pero aún no recibe bienes ni servicios. ¿Cuál análisis es más adecuado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar de inmediato una compra, porque el contrato firmado ya constituye una obligación exigible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocer como un gasto el valor total pactado, aunque aún no se hayan recibido bienes ni servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar si el contrato ya genera una obligación reconocible o si solo establece condiciones futuras.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Registrar una cuenta por cobrar al proveedor, pues el contrato suscrito genera un derecho económico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. No todo documento genera registro inmediato; se debe analizar si ya ocurrió un hecho económico medible y reconocible.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál documento soporta de manera más adecuada una venta de mercancía a crédito?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una cotización previa enviada al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una conversación de venta con un cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una lista interna de precios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una factura de venta emitida al cliente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La factura de venta respalda el ingreso y el derecho de cobro generado por la operación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe revisarse principalmente antes de utilizar un documento soporte en el registro contable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que presente color institucional, imagen, diseño gráfico y modelo comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que ya haya sido archivado, organizado y guardado sin revisar sus contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que identifique fecha, tercero, concepto, valor y relación con la operación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que corresponda únicamente a un documento físico, impreso, firmado y válido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta El soporte debe permitir verificar qué ocurrió, cuándo, con quién y por qué valor.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la relación correcta entre hecho económico, soporte y registro contable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Primero ocurre el hecho económico, luego se respalda con soporte y después se registra contablemente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Primero se registra el hecho económico, luego se busca el soporte y después se identifica una operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Este soporte reemplaza el registro contable cuando contiene todos sus datos y valores de cada operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El registro contable solo se realiza cuando existe pago efectivo relacionado con la operación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El soporte documenta la operación y sirve de base para elaborar el registro contable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál afirmación describe mejor la relación entre el Código de Comercio y la contabilidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El Código de Comercio sustituye las normas contables internacionales vigentes para las empresas de todo el país.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El Código de Comercio regula aspectos mercantiles que inciden en comerciantes, sociedades, libros y papeles comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El Código de Comercio solo regula los impuestos nacionales relacionados con las actividades del sector empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El Código de Comercio elimina la obligación de conservar documentos soporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La normativa comercial orienta obligaciones y documentos relacionados con la actividad empresarial.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En una sociedad comercial, ¿por qué es importante diferenciar el patrimonio de la empresa y el patrimonio personal de los socios?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque todas las operaciones de carácter personal de los socios deben registrarse como gastos de la sociedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque los recursos personales de cada socio siempre forman parte de los ingresos económicos de la sociedad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque la sociedad tiene recursos, obligaciones y resultados propios que deben reflejarse separadamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque los aportes de capital efectuados por los socios deben registrarse como ventas propias de la sociedad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta La separación patrimonial evita mezclar operaciones personales con operaciones empresariales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué significa reconocer contablemente una operación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar el soporte sin registrarlo, si la operación cumple las condiciones para ser medida y presentada como parte de la información financiera.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar únicamente los pagos hechos en efectivo, aunque existan hechos que cumplan las condiciones para su reconocimiento contable y financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Preparar una cotización comercial antes de cada venta, aunque aún no exista un hecho que pueda reconocerse y medirse en la información financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incorporar un hecho económico en los registros cuando cumple las condiciones para ser medido y presentado como parte de la información financiera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El reconocimiento contable implica identificar, medir y registrar una operación según su naturaleza.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una empresa vende mercancía a crédito. ¿Cuál tratamiento refleja mejor el reconocimiento contable?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar el ingreso solamente cuando el cliente realice ya el pago correspondiente por la venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registrar solamente una entrada de dinero en bancos cuando el cliente efectúe el pago ya pactado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar la venta realizada como un aporte del capital ya efectuado directamente por el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reconocer el ingreso y la cuenta por cobrar si la venta cumple las condiciones de reconocimiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta Una venta a crédito puede generar ingreso y derecho de cobro aunque el pago se reciba después.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la diferencia entre medición inicial y medición posterior?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La medición inicial se hace al reconocer por primera vez la operación; la posterior actualiza o ajusta valores después.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La medición inicial solo se aplica a los ingresos y la posterior ya se utiliza para registrar los gastos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La medición inicial corresponde al archivo del soporte válido; la posterior se aplica al pago efectivo de la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No existe diferencia alguna entre ambas mediciones, porque solo se aplican cuando la operación se paga en efectivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Algunos elementos requieren ajustes posteriores, como depreciación, deterioro o intereses.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una empresa compra un computador para usarlo durante varios años. ¿Cuál análisis contable es más adecuado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrarlo siempre como gasto inmediato, porque se abona totalmente durante el periodo actual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconocerlo solamente como ingreso, porque aumenta los recursos disponibles de toda la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar si corresponde reconocerlo como activo por generar beneficios durante varios periodos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Omitir su registro contable cuando se haya comprado de contado y ya pagado durante ese periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Cuando un bien genera beneficios futuros, puede reconocerse como activo y medirse posteriormente mediante depreciación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué establece la partida doble?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que todo registro contable debe afectar al menos dos cuentas, manteniendo igualdad entre débitos y créditos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que toda operación debe registrarse dos veces en la misma cuenta, según los valores indicados en el soporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que solo las compras a crédito requieren registro contable porque generan obligaciones para toda la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que los débitos siempre representan ingresos y los créditos son gastos en registros contables de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La partida doble permite conservar el equilibrio contable en cada operación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En términos generales, ¿cómo aumentan las cuentas de activo, costos y gastos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por el crédito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Por el débito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Por las notas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Con facturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Activos, costos y gastos aumentan por el débito; pasivos, patrimonio e ingresos aumentan por el crédito.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Una empresa recibe un préstamo bancario por $20.000.000. ¿Cuál registro básico es más coherente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Débito al capital y crédito a las ventas comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Débito a proveedores y crédito a la cuenta bancos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Débito a gastos financieros y crédito a otros ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Débito a bancos y crédito a obligaciones financieras.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La empresa recibe dinero, pero también adquiere una obligación que debe pagar.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una empresa recauda una factura pendiente de un cliente. ¿Cuál interpretación es correcta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se registra una venta por el recurso recibido del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se recupera una cuenta por cobrar previamente registrada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se genera un nuevo pasivo comercial a nombre del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se reconoce un egreso por el valor recaudado del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El recaudo de cartera aumenta bancos y disminuye cuentas por cobrar, pero no representa una nueva venta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué representa la base gravable en el cálculo de impuestos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El valor final obtenido después de restar todos los pagos en el periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El total de activos que posee la empresa al cierre del periodo contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor sobre el cual se aplica una tarifa para determinar el impuesto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El saldo de las cuentas bancarias al cierre del correspondiente periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La base gravable permite calcular impuestos como IVA o retenciones, según corresponda.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la mejor práctica antes de registrar una operación en software contable?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Validar soporte, tercero, fecha, concepto, cuentas, impuestos y valores antes de guardar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Guardar el registro sin verificar soportes y revisarlos solamente al término de cada año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Registrar solo el valor pagado, sin diferenciar impuestos, retenciones ni cuentas usadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar siempre la misma cuenta contable para agilizar el registro de todas las operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El software facilita el registro, pero la calidad depende de la revisión previa de la información ingresada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Una empresa compra un servicio por $1.000.000 más IVA y debe practicar retención. ¿Cuál decisión contable es más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar el valor pagado como gasto sin separar impuestos ni retenciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Separar gasto, IVA, retención por pagar y valor neto a pagar al proveedor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Registrar la retención como ingreso operacional proveniente del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Omitir el IVA y registrar el total pagado como gasto directo de operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Cada concepto tiene naturaleza diferente y debe registrarse de forma separada para evitar errores contables y tributarios.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
