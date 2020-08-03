---
layout: page_de
title: Wie man OpenMage LTS installiert
excerpt: Installation von Magento LTS. Der vorgeschlagene Weg, diese Magento 1 Fork zu installieren, ist über den Composer.
---

Der vorgeschlagene Weg, diese Magento 1 Fork zu installieren, ist über den Composer. Hierfür sind uns zwei 
funktionierende Installationsprogramme mit Unterstützung für den Magento-Kern als Abhängigkeit bekannt.


### aydin-hassan/magento-core-composer-installer

```json
{

    "require": {
        "aydin-hassan/magento-core-composer-installer": "*",
        "openmage/magento-lts": "{{ site.data.versions.composer.latestStableBranch }}"
    },
    "extra": {
        "magento-core-package-type": "magento-source",
        "magento-root-dir": "htdocs"
    }
    
}
```


### aoepeople/composer-installers
```json
{
    "require": {
        "aoepeople/composer-installers": "*",
        "openmage/magento-lts": "{{ site.data.versions.composer.latestStableBranch }}"
    }
}
```


Warnhinweis: 
Der Wechsel zum AOEs Composer-Installationsprogramm löscht Deinen htdocs-Ordner, es werden nicht nur die magento-lts-Dateien kopiert. 
Wenn Du bereits symlink local.xml, media und var-Ordner hast - dann mache einfach weiter.

