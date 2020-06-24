---
layout: page
title: How to install 
title_thin: OpenMage LTS
---

The suggested way to install this Magento 1 Fork is via composer.
For this we know of two working installers with support for the magento core as dependency.

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

**Warning**
Note: switching to AOEs composer installer will wipe your htdocs folder,
it's not just copying the magento-lts files.
If you already symlink local.xml, media and var folder - then just go ahead.
