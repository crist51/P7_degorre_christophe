# Pb
. Pb au niveau du token, un utilisateur peut suprimer tout les post malgré le mauvais token au user ?
. Pas de message JSON sur la suppretion mais fonctionnelle
. ./midlleware/password non fonctionnel
.Lors de la création d'un post suis je obligé de renseigner User Id malgré mon token? usr postman
. Postman commmetn implementer les image sepuis form-data au lieu de row.JSON

# Pas implementer
. Multer à tester;
. L'administrateur n'est pas implementer;
. Repérer les dernières participations des employés ;
. Voir metre le lastname le firstname a l'inscription et metre une image profil par default (req.body)

# Amelioration
. Voir pour modifier l'adresse mail et le password
. Systeme de like.
. Limiter le poid de l'image.
. Rajouter une image sur le profil du user

# Reflextion
Est-ce que ce serais pas interessant d'implementer l'Id du User lorqu'il ce ceonnecte afin d'avoir son id
    tout le long de sa navigation je n'arrive pas sortirr son Id de l'auth


# ----------------- ROUTES DISPONIBLE -------------------

#  ================ user (user_img --> a faire )================================

## signIn & signUp
http://localhost:3000/api/authentification/signup
http://localhost:3000/api/authentification/login
## readAll("auth")
http://localhost:3000/api/user/
## readOne ("auth") & update & delate("auth")
http://localhost:3000/api/user/('userId ')


# ================= post Ok ================================
## read_All & create ("auth")
http://localhost:3000/api/post
## readOne ("auth") & update & delate("auth")
http://localhost:3000/api/post/('post_id ')


# ================= gallery ( gallery_media --> a tester )=============================
## read_All("auth") & create ("auth")
http://localhost:3000/api/gallery
## readOne ("auth") & update & delate("auth")
http://localhost:3000/api/gallery/('gallery_id ')





