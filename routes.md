# VONATOK ÉS KOCSIJAI:

- index.html - Vonatok listája
- kocsik.html - Egy adott vonat kocsijainak listája

# ROUTING

| Tipus | Link                            | Mit Csinál?                                                                          | Middleware                          |
| :---: | ------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------- |
|  GET  | /                               | index.html - Vonatok megjelenítése                                                   | GetVonatokMW, renderMW              |
|  GET  | /vonat/edit/:vonatId            | vedit.html - A `vonatId`-jű vonat szerkesztése (Ha nincs `vonatID`, akkor új vonat)  | getVonatMW, renderMW                |
| POST  | /vonat/edit/:vonatId            | A `vonatId`-jű vonat szerkesztése, `vonatId` nélkül új létrehozása                   | getVonatMW, saveVonatMW             |
|  GET  | /vonat/delete/:vonatId          | A `vonatId`-jű vonat és annak kocsijainak törlése                                    | getVonatMW, delVonatMW              |
|  GET  | /kocsi/:vonatId                 | kocsi.html - A `vonatId`-jű vonat kocsijainak megjelenítése                          | getVonatMW, getKocsikMW, renderMW   |
|  GET  | /kocsi/edit/:vonatId/:kocsiId?  | kedit.html - A `vonatId`-jű vonat `kocsiId`-jű kocsijának szerkesztése / létrehozása | getVonatMW, getKocsiMW, renderMW    |
| POST  | /kocsi/edit/:vonatId/:kocsiId?  | A `kocsiId`-jű kocsi szerkesztése / létrehozása                                      | getVonatMW, getKocsiMW, saveKocsiMW |
|  GET  | /kocsi/delete/:vonatId/:kocsiId | A `kocsiId`-jű kocsi törlése                                                         | getVonatMW, getKocsiMW, delKocsiMW  |

# Middlewarek

|  Middleware  | Mit csinál?                                                                                                                |
| :----------: | -------------------------------------------------------------------------------------------------------------------------- |
|   renderMW   | Rendereli az adott html file-t                                                                                             |
|  getVonatMW  | Lekérdezi az adott vonatot, ha nincs ilyen ID-jű vonat hibával tér vissza                                                  |
| getVonatokMW | Lekérdezi az összes vonatot                                                                                                |
| saveVonatMw  | Menti az új vonatot, vagy módosítja a meglévőt, hibás létrehozás, vagy nemlétező ID-jű módosítás esetén hibával tér vissza |
|  delVonatMW  | Törli az adott vonatot                                                                                                     |
| getKocsikMW  | Lekérdezi az adott vonathoz tartozó kocsikat                                                                               |
|  getKocsiMW  | Lekérdezi az adott kocsit, ha nincs ilyen ID-jű kocsi hibával tér vissza                                                   |
| saveKocsiMW  | Menti az új kocsit, vagy módosítja a meglévőt, hibás létrehozás, vagy nemlétező ID-jű módosítás esetén hibával tér vissza  |
|  delKocsiMW  | Törli az adott kocsit                                                                                                      |
