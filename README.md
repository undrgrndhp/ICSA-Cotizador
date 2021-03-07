# ICSA-Cotizador
 Cotizador 

Este proyecto es un cotizador de prueba para probar mis habilidades de Html, JavaScript y CSS. El objetivo es crear un sitio web anclado a bases de datos para facilitar la creación de cotizaciones, para ser impresas y enviadas en tiempos record y faciles. Consta de al menos 12 módulos que describo a continuación:

1.- Nombre Fiscal de la empresa; Es el título fiscal de la empresa facturadora.

2.- Logo; Logo de la empresa facturadora

3.- Fecha de creaceión del documento

4.- Folio único de documento, capaz de simultaneidad, con base de datos

5.- Grupo de información de la empresa prospecto / compradora, conn base de datos

6.- Fecha de vencimiento de cotización, con calendario interactivo y fecha por defecto modificable

7.- Grupo de entrega con informacion de la presona responsable del encargo, con base de datos

8.- Mensaje de agradecimiento editable


9.- Tabla cotizadora con base de datos

10.- Terminos y condiciones

11.- Mensaje de cierre y linea de firma

12.- Nombre del vendedor, con registor de ventas, porcentaje de comision y base de datos

La base de datos esta en cuestión, no se si utilizar mySQL(Requiere instalacion en el servidor), Microsfot SQL server (requiere instalacion en el servidor), NeDB(tambien requiere instalacion pero es open source y no pesa nada) o directamente en en la página web. Me preocupa que NeDB no pueda manejar cantidades muy grandes de datos comparado con MYSQL y MSQLS. El incluir la base de datos dentro de la pagina tiene el riesgo de la autenticación, quien tenga acceso a la pagina podra ver los datos de las bases, habría que crear un sistema de credenciales seguro y cuidar mucho la informacion.
