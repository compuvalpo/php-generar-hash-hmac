# php-generar-hash-hmac
PHP 7, PHP 8 donde ingresas un texto y genera los Hash HMAC md5/sha1/sha256/sha512
La Clave secreta se guarda en la constante `PRIVATE_KEY` en el archivo hash-hmac.php
[https://www.php.net/manual/es/function.hash-hmac.php]


## Librerias
- [ ] jquery-3.7.1. [https://jquery.com/download/]
- [ ] Bootstrap 5.1 [https://getbootstrap.com/docs/5.1/getting-started/download/]
- [ ] sweetalert2 [https://sweetalert2.github.io/#download]
- [ ] Font Awesome Free 6.5.1 [https://fontawesome.com/download]


## Clonar Repositorio
```
git clone https://github.com/compuvalpo/php-generar-hash-hmac.git
```


## Lavantar Repositorio en local
Una vez clonado el repositorio en su carpeta de Apache [www - htdocs - html - u otra según su versión] debe acceder a la siguiente url
`http://localhost/php-generar-hash-hmac`


## Comparar Hashed
Para comparar si 2 Hash son iguales, se debe utilizar la función hash_equals [https://www.php.net/manual/es/function.hash-equals.php]
```
if (hash_equals($hash_conocido, $hash_a_comparar) ) {
	echo "Son iguales";
}
```

## Capturas
![Ejemplo 1](capturas/ejemplo_1.png)
![Ejemplo 2](capturas/ejemplo_2.png)