En la carpeta [[ src/public/video ]] esta vacia porque github no me permite hacer un push, debido a que el proyecto es muy pesado con los videos, por lo mismo los borre.

-Pero me di cuenta que estos videos aun existian en los commits anteriores, por lo que hacer un push era inutil.

-Procedi aplicar un comando de git que permite borrar del cache el archivo que uno desea, es importante saber la ruta del archivo que excedio los limites de Mb. En mi caso la ruta de esos archivos son los siguientes: 
        'src/public/video/3.mp4'
        'src/public/video/1.mp4'
        'src/public/video/190111_05_Construction_Drone_02.mp4'
        'src/public/video/4.mov'
        'src/public/video/StarStaXScape2FINAL.mp4'   

-El comando que permite eliminar de los commits anteriores los archivos que exceden el limite en github es el siguiente:
    recuerda que tienes que tener bien en claro la ruta a eliminar
        git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/1.mp4'
        git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/3.mp4'
        git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/190111_05_Construction_Drone_02.mp4'
        git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/4.mov'
        git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/StarStaXScape2FINAL.mp4'   


-En el momento de hacer un push, tuve un nuevo error que es el siguiente:
        error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8)

-Probando "soluciones de stack" que fueron inservibles:
        Forzando el push:
        git push -f origin main

        Devolverse de HTTP/2 a HTTP/1.1:
        devolverse a la version HTTP/1.1 -> git config http.version HTTP/1.1
        hacer el push del repo -> git push -u origin main
        volver a la version HTTP/2 -> git config http.version HTTP/2


-Solucion al error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8) 
        Eliminar los archivos que exceden el limite en github

        Aumentar el buffer:
        git config  http.postBuffer 157286400

        Cambiar la red WiFi:
        Del 5Ghz a 2.5Ghz


Este proyecto no tiene nada de otro mundo es solo una practica en js, html, css