<style>
.tables-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 36px 56px;
  max-width: 900px;
  margin: 24px auto;
  font-family: Arial, sans-serif;
}
.db-table {
  border: 3px solid #111827;
  border-radius: 13px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(15, 23, 42, .12);
}
.db-table h3 {
  margin: 0;
  padding: 18px 12px;
  background: #10182b;
  color: #ffffff;
  text-align: center;
  letter-spacing: 1px;
}
.db-fields { padding: 16px 22px 18px; color: #26364f; }
.db-field { padding: 5px 0; font-size: 19px; }
.pk { color: #c81920; font-weight: 700; }
.fk {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 8px 7px;
  border-radius: 7px;
  background: #e9fbf3;
  color: #00845b;
  font-weight: 700;
}
.fk small { font-size: 14px; }
@media (max-width: 650px) {
  .tables-grid { grid-template-columns: 1fr; gap: 22px; }
}
</style><div class="tables-grid">
  <section class="db-table">
    <h3>VILLE</h3>
    <div class="db-fields">
      <div class="db-field pk">id_ville <small>(PK)</small></div>
      <div class="db-field">nom_ville</div>
    </div>
  </section>  <section class="db-table">
    <h3>AUTEUR</h3>
    <div class="db-fields">
      <div class="db-field pk">id_auteur <small>(PK)</small></div>
      <div class="db-field">nom_auteur</div>
      <div class="db-field">prenom_auteur</div>
      <div class="db-field">email_auteur</div>
      <div class="fk"><span>id_ville</span><small>(FK)</small></div>
    </div>
  </section>  <section class="db-table">
    <h3>CATEGORIE</h3>
    <div class="db-fields">
      <div class="db-field pk">id_categorie <small>(PK)</small></div>
      <div class="db-field">nom_categorie</div>
    </div>
  </section>  <section class="db-table">
    <h3>ARTICLE</h3>
    <div class="db-fields">
      <div class="db-field pk">id_article <small>(PK)</small></div>
      <div class="db-field">titre_article</div>
      <div class="db-field">contenu_article</div>
      <div class="db-field">date_publication</div>
      <div class="db-field">statut_article</div>
      <div class="db-field">image_article</div>
      <div class="fk"><span>id_auteur</span><small>(FK)</small></div>
      <div class="fk"><span>id_categorie</span><small>(FK)</small></div>
    </div>
  </section>
</div>Légende
- <span style="color:#c81920;font-weight:700">Rouge : clé primaire (PK)</span>
- <span style="color:#00845b;font-weight:700">Vert : clé étrangère (FK)</span>