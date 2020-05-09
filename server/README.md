https://bezkoder.com/node-js-jwt-authentication-mysql/ 

Table USERS will be used for clientAdmin app. This table will contain informations about admins and will hold one field which will indicate if user is "ussual" admin or "super" admin

<table style="text-align:center;"> 
    <tr><th colspan=3> USERS </th></tr>
    <tr>
        <td>ID_USER</td>
        <td>INT(10) unsigned NOT NULL AUTO_INCREMENT</td>
    </tr>
    <tr>
        <td>NAME</td>
        <td>VARCHAR NOT NULL UNIQUE</td>
    </tr>
    <tr>
        <td>EMAIL</td>
        <td>VARCHAR UNIQUE</td>
    </tr>
    <tr>
        <td>TEL</td>
        <td>VARCHAR</td>
    </tr>
    <tr>
        <td>SUPER_USER</td>
        <td>BIT</td>
    </tr>
    <tr>
        <td>JWT</td>
        <td>TEXT CHARACTER SET ascii COLLATE ascii_bin</td>
    </tr>
</table>

Table PISEMNE_DOC will hold a document url and id of tree it belongs to

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