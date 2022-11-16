#!/bin/bash
fileid="1-DmQhGHCUqAGNp1lmRjp_z-ZoLmPUa2-"
filename="saved_model.h5"
html=`curl -c ./cookie -s -L "https://drive.google.com/uc?export=download&id=${fileid}" -k`
curl -Lb ./cookie "https://drive.google.com/uc?export=download&`echo ${html}|grep -Po '(confirm=[a-zA-Z0-9\-_]+)'`&id=${fileid}" -o ${filename} -k