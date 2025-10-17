Ce projet est une API Todolist développée en JavaScript avec le framework Express. L’API permet de :

Ajouter une tâche (add)

Supprimer une tâche (remove)

Afficher toutes les tâches (display)

Le projet est organisé selon l’architecture MVC (Model, View, Controller).

 Installation et configuration

Cloner le projet

git clone <URL_DU_DEPOT>
cd Exercice2


Installer les dépendances

npm install express cors dotenv
npm install --save-dev nodemon


Configurer les scripts dans package.json

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


Démarrer le serveur

En mode production :

npm start


En mode développement (avec rechargement automatique) :

npm run dev

 Architecture du projet

Le projet suit le modèle MVC :

/models    -> définition des données (tasks)
/controllers -> logique de traitement
/routes    -> définition des routes API
server.js  -> point d’entrée du serveur

 Technologies utilisées

JavaScript (Node.js)

Express.js

CORS

dotenv

nodemon (pour le développement)

 Fonctionnalités

Ajouter une tâche : POST /tasks

Supprimer une tâche : DELETE /tasks/:id

Afficher toutes les tâches : GET /tasks