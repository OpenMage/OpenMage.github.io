---
layout: page
title: Migration Guide
---

(Still in Progress)

For a Migration from Magento 1 to OpenMage, we recommend to first update to the latest Magento Release.
We provide the Magento Releases via Git at https://github.com/OpenMage/magento-mirror

We do not provide Patch File, but we will explain how you can create your own Patch File from our Git Repositories.

* First clone the mirror repository to a new empty directory.
* add the mirror repostiory as additional remote to your local checkout
* fetch everything

```
git clone https://github.com/OpenMage/magento-lts.git ./
git remote add mirror https://github.com/OpenMage/magento-mirror.git
git fetch --all
```

now we use git to create a patch file as described here https://stackoverflow.com/a/28193089
In this example we have currently Magento 1.9.4.4 in use, and want a patch to migrate to 19.4.3

```
git diff --binary 1.9.4.4..v19.4.3 > migration.patch
```

You can then use this patch with `git apply migration.patch`, possibly you can even use PHPStorm to apply it.

For more information about which versions are available have a look at our currently supported Versions at http://www.openmage.org/supported-versions.html
and our list of releases at https://github.com/OpenMage/magento-lts/releases

We currently recommend to use the latest Release of the Major Version 19,
as it also contains already a lot of patches related to Problems introduced by Magento Releases and Patches.

Later Major Versions may contain changes which can cause Issues or contain smaller Backwards Incompatibilities, so we suggest to take this additional step only after OpenMage is already running stable for you under Version 19.
And maybe you want to wait for an upgrade to another Major Version, till the next Version with Long-Term-Support is released (so you only need to do a Major Upgrade every 4 years)  
But dont be afraid, if we talk about Major Upgrade, we dont talk about an Effort like Magento 1 to 2. A Major Upgrade with us is more like an Upgrade from Magento 1.8 to 1.9

