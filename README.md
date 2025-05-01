Wireframe : https://www.figma.com/design/xywAc5eMFXAPRQhm94xCWS/Untitled?node-id=2-1342&t=MVWdNzL4sMoJxlsm-1

Téléchargez l’archive ZIP, ajoutez tous les packages nécessaires avec npm install, puis lancez le serveur avec la commande node server.min.js pour démarrer notre projet.

Présentation du projet:
Le site permet à un utilisateur de consulter les données météorologiques de la planète Mars, en récupérant les relevés fournis par l’API InSight de la NASA. 
Parmi les informations disponibles, on retrouve la température, la pression atmosphérique et la vitesse du vent. 
Le site propose également un système de gestion des utilisateurs, avec la possibilité de créer, modifier et supprimer un compte. 
L’utilisateur peut consulter l’historique des relevés météo déjà récupérés.

Rapport d'analyse:
Deux rapport ont été réalisés à l’aide de l’outil Lighthouse, afin d’évaluer et de comparer l’empreinte carbone du site avant et après optimisation.
Le premier audit montre un score de performance de 81, tandis que le second, après les améliorations, atteint un score parfait de 100. 
L’objectif était de rendre le site plus rapide, plus léger, et surtout plus respectueux de l’environnement numérique.

Avant les optimisations, le site présentait plusieurs problèmes critiques. 
Il servait des images dans des formats non optimisés, entraînant un poids inutile de 361 Ko. 
La compression du texte n’était pas activée, augmentant la taille des données transférées. 
Le fichier JavaScript contenait 2,6 Mo de code inutilisé, ce qui sollicitait davantage le processeur du client. 
Le site ne comportait pas de balise <meta name="viewport">, ce qui nuisait à l’affichage mobile et pouvait provoquer des rechargements ou des calculs de rendu supplémentaires. 
Enfin, les ressources JavaScript étaient redondantes et mal organisées, et le site n’exploitait pas de stratégies efficaces de mise en cache. 
Le poids total estimé de la page était d’environ 3 Mo, ce qui se traduisait par une empreinte carbone élevée pour chaque visite.

Après intervention, la taille totale des ressources a été réduite à environ 250 Ko. 
Les images ont été compressées et redimensionnées correctement, ce qui a permis de limiter leur poids à environ 50 Ko. 
Le code JavaScript a été nettoyé, supprimant les redondances et les scripts inutiles. 
Une compression efficace des fichiers texte a été mise en place. Les ressources critiques qui bloquaient le rendu ont été supprimées, améliorant le temps de chargement. 
Une politique de cache a été appliquée pour les éléments statiques. 
De plus, la balise viewport a été ajoutée pour un rendu adapté aux écrans mobiles. 
Toutes ces actions ont contribué à un site plus léger, plus rapide, et optimisé pour tous les types de navigateurs.

Selon les données du Website Carbon Calculator, 1 Mo de données transférées génère environ 1,76 g de CO₂ par visite. 
Avant optimisation, le site générant environ 3 Mo de transfert produisait donc autour de 5,3 g de CO₂ par visite. 
Après optimisation, avec un poids réduit à 250 Ko, cette valeur chute à environ 0,44 g de CO₂ par visite. 
Cela représente une réduction de plus de 90 % des émissions associées au chargement de la page.

Grâce aux optimisations mises en œuvre (compression des fichiers, nettoyage du code JavaScript, allègement des images, ajout de la balise viewport, mise en cache), 
le site est désormais plus performant et beaucoup moins énergivore. 
En réduisant significativement la quantité de données transférées et traitées, l’empreinte carbone par utilisateur est fortement diminuée. 
Ce projet contribue donc à un web plus durable, tout en offrant une meilleure expérience utilisateur.
