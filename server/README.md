Table USERS will be used for clientAdmin app. This table will contain informations about admins and will hold one field which will indicate if user is "ussual" admin or "super" admin

<<<<<<< HEAD

=======
### USERS TABLE
>>>>>>> f1abbe9adee63892aa1edfbff41e3551f2241935
<table style="text-align:center;"> 
    <tr><th colspan=3> USERS </th></tr>
    <tr>
        <td>id</td>
<<<<<<< HEAD
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
    <tr>
        <td>admin</td>
        <td>BIT</td>
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
  admin BIT,
  PRIMARY KEY(id),
  UNIQUE INDEX email_UNIQUE (email ASC),
  UNIQUE INDEX id_UNIQUE (id ASC),
  UNIQUE INDEX name_UNIQUE (name ASC)
)
ENGINE = InnoDB
AUTO_INCREMENT=2
DEFAULT CHARACRET SET = utf8;
```
---

<table style="text-align:center"> 
    <tr><th colspan=3> STROM </th></tr>
    <tr>
        <td>id</td>
        <td>INT(10) unsigned NOT NULL AUTO_INCREMENT</td>
    </tr>
    <tr>
        <td>IDEX</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>NAME</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>TYP_OBJ</td>
        <td>VARCHAT(50)</td>
    </tr>
    <tr>
        <td>DATIN</td>
        <td>DATETIME</td>
    </tr>
    <tr>
        <td>DATAK</td>
        <td>DATETIME</td>
    </tr>
    <tr>
        <td>DATVY</td>
        <td>DATETIME</td>
    </tr>
    <tr>
        <td>VLAST</td>
        <td>ENUM('RVSCR', 'PAMSTR', 'NPUST', 'PARTN')</td>
    </tr>
    <tr>
        <td>EXURL</td>
        <td>VARCHAR(255)</td>
    </tr>
    <tr>
        <td>IDNAZ</td>
        <td>VARCHAR(50)</td>
    </tr>
    <tr>
        <td>PRIJEM</td>
        <td>BIT</td>
    </tr>
</table>

```sql
DROP TABLE IF EXISTS strom;

CREATE TABLE IF NOT EXISTS strom (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  IDEX INT(10) UNSIGNED,
  NAME VARCHAR(50),
  TYP_OBJ VARCHAR(50) NOT NULL,
  DATIN DATETIME NOT NULL,
  DATAK DATETIME,
  DATVY DATETIME,
  VLAST ENUM('RVSCR', 'PAMSTR', 'NPUST', 'PARTN'),
  EXURL VARCHAR(255),
  IDNAZ VARCHAR(50),
  PRIJEM BIT,
  PRIMARY KEY(id),
)
ENGINE = InnoDB
AUTO_INCREMENT=2
DEFAULT CHARACRET SET = utf8;
```
---
<table style="text-align:center"> 
    <tr><th colspan=3> LOKAL </th></tr>
    <tr>
        <td>id</td>
        <td>INT(10) unsigned NOT NULL AUTO_INCREMENT</td>
    </tr>
    <tr>
        <td>LON</td>
        <td>FLOAT</td>
    </tr>
    <tr>
        <td>LAT</td>
        <td>FLOAT</td>
    </tr>
</table>

```sql
DROP TABLE IF EXISTS lokal;

CREATE TABLE IF NOT EXISTS lokal (
  strom_id INT(10),
  LON FLOAT UNSIGNED NOT NULL,
  LAT FLOAT UNSIGNED NOT NULL,
  FOREIGN KEY (strom_id)
    REFERENCES strom(id)
    ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACRET SET = utf8;
```
---
=======
        <td>INT(10) UNSIGNED NOT NULL AUTO_INCREMENT</td>
    </tr>
    <tr>
        <td>name</td>
        <td>VARCHAR NOT NULL UNIQUE</td>
    </tr>
    <tr>
        <td>email</td>
        <td>VARCHAR UNIQUE</td>
    </tr>
    <tr>
        <td>tel</td>
        <td>VARCHAR</td>
    </tr>
    <tr>
        <td>admin</td>
        <td>BIT</td>
    </tr>
    <!-- <tr>
        <td>JWT</td>
        <td>TEXT CHARACTER SET ascii COLLATE ascii_bin</td>
    </tr> -->
</table>

### IDENT
<table style="text-align:center"> 
    <tr><th colspan=3> IDENT </th></tr>
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

### KATEG
<table style="text-align:center"> 
    <tr><th colspan=3> KATEG </th></tr>
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

### OHRO
<table style="text-align:center"> 
    <tr><th colspan=3> OHRO </th></tr>
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

### LOCAL
<table style="text-align:center"> 
    <tr><th colspan=3> LOKAL </th></tr>
    <tr>
        <td>id</td>
        <td>INT(10) UNSIGNED NOT NULL AUTO_INCREMENT</td>
    </tr>
    <tr>
        <td>lon</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>lat</td>
        <td>INT(10)</td>
    </tr>
</table>
>>>>>>> f1abbe9adee63892aa1edfbff41e3551f2241935

### PISEMNE_D
<table style="text-align:center"> 
    <tr><th colspan=3> PISEMNE_D </th></tr>
    <tr>
        <td>strom_id</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>URL</td>
        <td>VARCHAR(255)</td>
    </tr>
</table>

```sql
DROP TABLE IF EXISTS pisemne_d;

CREATE TABLE IF NOT EXISTS pisemne_d (
  strom_id INT(10),
  URL VARCHAR(255) NOT NULL,
  FOREIGN KEY (strom_id)
    REFERENCES strom(id)
    ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACRET SET = utf8;
```
---

<table style="text-align:center"> 
    <tr><th colspan=3> OBRAZOVE_D </th></tr>
    <tr>
        <td>strom_id</td>
        <td>INT(10)</td>
    </tr>
    <tr>
        <td>URL</td>
        <td>VARCHAR(255)</td>
    </tr>
</table>

<<<<<<< HEAD
```sql
DROP TABLE IF EXISTS obrazove_d;

CREATE TABLE IF NOT EXISTS obrazove_d (
  strom_id INT(10),
  URL VARCHAR(255) NOT NULL,
  FOREIGN KEY (strom_id)
    REFERENCES strom(id)
    ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACRET SET = utf8;
```
---

Example of KAT1 - '1, 1, 2, 0, 0, 0, 3'
=======

### OBRAZOVE_D
>>>>>>> f1abbe9adee63892aa1edfbff41e3551f2241935
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

```sql
DROP TABLE IF EXISTS kateg;

CREATE TABLE IF NOT EXISTS kateg (
  strom_id INT(10),
  KATEG1 VARCHAR(50),
  KATEG2 VARCHAR(50),
  KATEG3 VARCHAR(50),
  KATEG4 VARCHAR(50),
  KATEG5 VARCHAR(50),
  FOREIGN KEY (strom_id)
    REFERENCES strom(id)
    ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACRET SET = utf8;
```
---

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

```sql
DROP TABLE IF EXISTS ohro;

CREATE TABLE IF NOT EXISTS ohro (
  strom_id INT(10),
  OHRO1 VARCHAR(50),
  OHRO2 VARCHAR(50),
  OHRO3 VARCHAR(50),
  OHRO4 VARCHAR(50),
  OHRO5 VARCHAR(50),
  FOREIGN KEY (strom_id)
    REFERENCES strom(id)
    ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACRET SET = utf8;
```
---

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

```sql
DROP TABLE IF EXISTS comment;

CREATE TABLE IF NOT EXISTS comment (
  strom_id INT(10),
  COM_U TEXT NOT NULL,
  COM_A TEXT NOT NULL,
  FOREIGN KEY (strom_id)
    REFERENCES strom(id)
    ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACRET SET = utf8;
```
---
