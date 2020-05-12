https://bezkoder.com/node-js-jwt-authentication-mysql/ 

Table USERS will be used for clientAdmin app. This table will contain informations about admins and will hold one field which will indicate if user is "ussual" admin or "super" admin

### USERS TABLE
<table style="text-align:center;"> 
    <tr><th colspan=3> USERS </th></tr>
    <tr>
        <td>id</td>
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

### PISEMNE_D
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


### OBRAZOVE_D
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