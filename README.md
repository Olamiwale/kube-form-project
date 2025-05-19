This a kubernetes project for simple form submission

The file tree has a roo folder named Kube-tutor and two folders backend and fronted inside it. Each of the folder has it own dockerfile and yaml file.

kube-tuto
|-----backend
|        |----k8s
|        |     |---deployment.yaml
|        |     |---service.yaml
|        |----Dockerfile
|        |----Server.js
|-----frontend
|        |----React
|        |----k8s
|              |-----deployment.yaml
|              |-----service.yaml
|        | ----Dockerfile



Container image are first built 

# Frontend

docker build -t yourdockerhubusername/form-frontend:latest .
docker push yourdockerhubusername/form-frontend:latest

# Backend

docker build -t yourdockerhubusername/form-backend:latest .
docker push yourdockerhubusername/form-backend:latest
