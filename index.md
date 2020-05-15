# Magento - Long Term Support

This repository aims to be a dependably patched archive of the Magento CE core releases. These sources should stay as close to the sources released by Magento as possible (no new features).  **However, pull requests with unofficial bug fixes and security patches from the community are definitely encouraged.** It's our goal to apply patches available from Magento as quickly as possible, but these do not always cover all known issues.

Though Magento does not follow [Semantic Versioning](http://semver.org/) we aim to provide a workable system for dependancy definition.  A release version might look something like "1.9.1.0", but there may have been some functionality added since the "1.9.0.0" release.  There might also have been some patches released with no update to the currently available sources or version number.  

Because of this, we must define a slightly different system to define each decimal place.


##\#MageVer
#####1 - UBER VERSION
######.
#####9 - Magento Major Version
######.
#####1 - Magento Minor Version
######.
#####0 - ? (maybe some patches)


Each Magento Minor Version release will get its own branch that will be independently maintained with patches and backported bug fixes.


## Installation
This allows you to define your version dependencies safely in composer.json:

```
"openmage/magento-lts": "1.9.1.*"
```

Running `$ composer.phar update` will install the latest 1.9.1.* core sources under the htdocs directory.  This means that any time there are new patches available from Magento, and they've been imported into magento-lts, **all you have to do to patch your sources is run `$ composer.phar update` again.** If your build process already includes this step, then all you need to do is build and deploy, and you're patched!

## Why (Yet Another) Magento Fork?

This is only *technically* a fork. We are still aiming to run in parallel with the official Magento sources.  Any time there's a new release version, we'll create a new branch.  Any time there's a patch, we'll apply it.  The only difference is we're accepting bug fixes from the community.  This allows us to work off of stable sources without having to wait for official patches from Magento.  This also means that if you're running an older version of Magento, you'll still get all patches that apply to your version.

## License
[OSL v3.0](http://opensource.org/licenses/OSL-3.0)


## Maintainers
* [Lee Saferite](https://github.com/LeeSaferite)
* [David Robinson](https://github.com/drobinson)
* Pull requests are welcome


## TODO
* Travis CI tests to check for newly availble patches for each version
