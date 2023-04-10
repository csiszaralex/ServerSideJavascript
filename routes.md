# VONATOK ÉS KOCSIJAI:

- index.html - Vonatok listája
- kocsik.html - Egy adott vonat kocsijainak listája

# ROUTING

| Tipus  | Link                     | Mit Csinál?                                                    | Middleware              |
| :----: | ------------------------ | -------------------------------------------------------------- | ----------------------- |
|  GET   | /                        | index.html                                                     | renderMW                |
|  GET   | /vonat                   | Az összes vonat lekérdezése                                    | getVonatokMW            |
|  POST  | /vonat                   | Új vonat létrehozása                                           | saveVonatMW             |
|  GET   | /vonat/:vonatId          | A `vonatId`-jű vonat lekérdezése                               | getVonatMW              |
| PATCH  | /vonat/:vonatId          | A `vonatId`-jű vonat adatainak módosítása                      | getVonatMW, saveVonatMW |
| DELETE | /vonat/:vonatId          | A `vonatId`-jű vonat és a hozzá kapcsolódó kocsik törlése      | getVonatMW, delVonatMW  |
|  GET   | /kocsi                   | kocsik.html                                                    | renderMW                |
|  GET   | /kocsi/:vonatId          | A `vonatId`-jű vonat kocsijait listázza ki                     | getVonatMW, getKocsikMW |
|  POST  | /kocsi/:vonatId          | Új kocsi létrehozása a `vonatId`-jű vonathoz                   | getVonatMW, saveKocsiMW |
|  GET   | /kocsi/:vonatId/:kocsiId | A `vonatId`-jű vonathoz tartozó `kocsiId`-jű kocsi lekérdezése | getVonatMW, getKocsiMW  |
| PATCH  | /kocsi/:kocsiId          | A `kocsiId`-jű kocsi szerkesztése                              | saveKocsiMW             |
| DELETE | /kocsi/:kocsiId          | A `kocsiId`-jű kocsi törlése                                   | delKocsiMW              |

PATCH esetén csak a megváltozatott adatok lesznek módosítva, azaz nem szükséges küldeni a változatlan adatokat.

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

<!-- TODO hibával tér vissza? -->
