<table>
<tr>
<td width="50%" valign="top">VILLE<br>
id_ville (PK)

nom_ville
</td>
<td width="50%" valign="top">AUTEUR<br>
id_auteur (PK)<br>

nom_auteur<br>
prenom_auteur<br>
email_auteur<br>
id_ville (FK)
</td>
</tr>
<tr>
<td width="50%" valign="top">CATEGORIE<br>
id_categorie (PK)<br>

nom_categorie
</td>
<td width="50%" valign="top">ARTICLE<br>
id_article (PK)<br>

titre_article<br>
contenu_article<br>
date_publication<br>
statut_article<br>
image_article<br>
id_auteur (FK)<br>
id_categorie (FK)
</td>
</tr>
</table>Légende : (PK) signifie Primary Key (clé primaire).<br>(FK) signifie Foreign Key ( Clé Étrangère).