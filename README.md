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
