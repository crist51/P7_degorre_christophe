# ----------------- ROUTES DISPONIBLE -------------------

#  ================ user ================================

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

## commentaire post
http://localhost:3000/api/post/('post_id ')/comments


# ================= gallery =============================
## read_All("auth") & create ("auth")
http://localhost:3000/api/gallery
## readOne ("auth") & update & delate("auth")
http://localhost:3000/api/gallery/('gallery_id ')
