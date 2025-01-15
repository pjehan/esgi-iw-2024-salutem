# Salutem

## Création du projet

### Installation de Symfony

```bash
composer create-project symfony/skeleton salutem
```

Ou avec le CLI de Symfony

```bash
symfony new salutem # ou symfony new salutem --webapp
```

### Installation des outils de debug et de Maker

```bash
composer req --dev debug
composer req --dev maker
```

### Création du premier contrôleur

```bash
php bin/console make:controller MainController
```

### Installation du moteur de template Twig

```bash
composer req twig
```

### Installation de AssetMapper

Il est possible pour cette étape d'utiliser
AssetMapper (simple, mais limité) ou
Webpack Encore (plus complexe, mais plus puissant).

```bash
composer req symfony/asset-mapper symfony/asset
```

### Installation de Doctrine

```bash
composer req orm
```

Créer le fichier `.env.local` et y ajouter la configuration de la base de données.

```bash
DATABASE_URL="mysql://salutem:salutem@127.0.0.1:3306/salutem?serverVersion=5.7&charset=utf8mb4"
```

Créer la base de données (sauf si elle existe déjà).

```bash
php bin/console doctrine:database:create
```

### Création des entités

```bash
php bin/console make:entity
```

Attention ! Pour les utilisateurs :

```bash
php bin/console make:user
```

Création des fichiers de migration.

```bash
php bin/console make:migration
```

Mise à jour de la base de données.

```bash
php bin/console doctrine:migrations:migrate
```
