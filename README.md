# SISTEMA ESCOLAR CON ANGULAR Y BACKEND (OPCIONAL)

## DESCRIPCIÓN

Proyecto de un sistema escolar que permite login con roles de **Administrador** y **Alumno**, gestión de materias y asignación de materias a alumnos.  
El frontend está desarrollado en **Angular 15+** y el backend (opcional) se encuentra en la carpeta `backend`.

---

## FUNCIONALIDADES

### Administrador
- Ver lista de alumnos registrados.
- Registrar nuevas materias.
- Asignar materias a los alumnos.
- Acceder a dashboard de administración.

### Alumno
- Ver solo las materias asignadas.
- Acceder a su dashboard personal.

---

## USUARIOS DE PRUEBA

| Rol     | Email               | Contraseña |
|:------- |:------------------ |:----------|
| Admin   | admin@escuela.com   | 123456     |
| Alumno  | alumno@escuela.com  | 123456     |

---

## INSTALACIÓN Y EJECUCIÓN

### Requisitos
- Node.js 18+  
- Angular CLI 18.2+  
- (Opcional) Backend PHP o Node.js para endpoints <--- preferiblemente PHP con XAMPP

### Clonar repositorio
```bash
git clone https://github.com/DIPG100203/Examen_teorico.git
cd Examen_teorico
```
o
```bash
cd EXAMEN_TEO
```
 ### INSTALAR DEPENDENCIAS 

```bash
npm install
```
### Servidor de desarrollo
```bash
ng serve
```
Luego abre http://localhost:4200/ en tu navegador. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

### BACKEND (opcional)

Si usas el backend incluido:

PHP: colocar la carpeta backend en tu servidor local (XAMPP, Laragon, etc.) y acceder a http://localhost/backend/.
