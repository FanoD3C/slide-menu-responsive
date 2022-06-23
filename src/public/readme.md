En la carpeta [[ src/public/video ]] esta vacia porque github no me permite hacer un push, debido a que el proyecto es muy pesado con los videos, por lo mismo los borre.

-Pero me di cuenta que estos videos aun existian en los commits anteriores, por lo que hacer un push era inutil.

-Procedi aplicar un comando de git que permite borrar del cache el archivo que uno desea, es importante saber la ruta del archivo que excedio los limites de Mb. En mi caso la ruta de esos archivos son los siguientes: 
    'src/public/video/3.mp4'
    'src/public/video/1.mp4'

-El comando que permite eliminar de los commits anteriores los archivos que exceden el limite en github es el siguiente:
    git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/1.mp4'
    git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch src/public/video/3.mp4'

        recuerda que tienes que tener bien en claro la ruta a eliminar

Este proyecto no tiene nada de otro mundo es solo una practica en js, html, css