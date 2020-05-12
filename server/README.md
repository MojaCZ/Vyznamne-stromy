https://bezkoder.com/node-js-jwt-authentication-mysql/ 
https://www.admfactory.com/how-to-define-one-to-one-relationship-in-mysql/

Table USERS will be used for clientAdmin app. This table will contain informations about admins and will hold one field which will indicate if user is "ussual" admin or "super" admin

<table style="text-align:center;"> 
    <tr><th colspan=3> USERS </th></tr>
    <tr>
        <td>id</td>
        <td>INT(10) unsigned NOT NULL AUTO_INCREMENT</td>
    </tr>
    <tr>
        <td>name</td>
        <td>VARCHAR(50) NOT NULL UNIQUE</td>
    </tr>
    <tr>
        <td>email</td>
        <td>VARCHAR(50) NOT NULL UNIQUE</td>
    </tr>
    <tr>
        <td>password</td>
        <td>VARCHAR(50) NOT NULL</td>
    </tr>
    <tr>
        <td>tel</td>
        <td>VARCHAR(50)</td>
    </tr>
</table>

```sql
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  tel VARCHAR(50),
  PRIMARY KEY(id),
  UNIQUE INDEX email_UNIQUE (email ASC),
  UNIQUE INDEX id_UNIQUE (id ASC),
  UNIQUE INDEX name_UNIQUE (name ASC)
)
ENGINE = InnoDB
AUTO_INCREMENT=2
DEFAULT CHARACRET SET = utf8;
```

<table style="text-align:center"> 
    <tr><th colspan=3> LOKAL </th></tr>
    <tr>
        <td>LON</td>
        <td>FLOAT</td>
    </tr>
    <tr>
        <td>LAT</td>
        <td>FLOAT</td>
    </tr>
</table>

<table style="text-align:center"> 
    <tr><th colspan=3> PISEMNE_D </th></tr>
    <tr>
        <td>ID_DOC</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>ID_STROM</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>URL</td>
        <td>VARCHAR</td>
    </tr>
</table>

Table OBRAZOVE_DOC will hold a document url and id of tree it belongs to

<table style="text-align:center"> 
    <tr><th colspan=3> OBRAZOVE_D </th></tr>
    <tr>
        <td>ID_DOC</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>ID_STROM</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>URL</td>
        <td>VARCHAR</td>
    </tr>
</table>

Example of KAT1 - '1, 1, 2, 0, 0, 0, 3'
<table style="text-align:center"> 
    <tr><th colspan=3> KATEG </th></tr>
    <tr>
        <td>KAT1</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>KAT2</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>KAT3</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>KAT4</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>KAT5</td>
        <td>VARCHAR(50)</td>
    </tr>
</table>

Example of OHRO1 - 'A,C'
<table style="text-align:center"> 
    <tr><th colspan=3> OHRO </th></tr>
    <tr>
        <td>OHRO1</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>OHRO2</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>OHRO3</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>OHRO4</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>OHRO5</td>
        <td>VARCHAR(50)</td>
    </tr>
</table>

<table style="text-align:center"> 
    <tr><th colspan=3> COMMENT </th></tr>
    <tr>
        <td>COM_U</td>
        <td>TEXT</td>
    </tr>
    <tr>
        <td>COM_A</td>
        <td>TEXT</td>
    </tr>
</table>

