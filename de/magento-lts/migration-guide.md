---
layout: page_de
title: Migration Leitfaden
excerpt: Leitfaden Migration von Magento1 auf OpenMage. Hier direkt zur Anleitung! 
---

(Noch in Arbeit)

Für eine Migration von Magento 1 auf OpenMage empfehlen wir, zunächst auf die neueste Magento-Version zu aktualisieren. 
Wir stellen die Magento-Releases über Git unter https://github.com/OpenMage/magento-mirror zur Verfügung.

Wir stellen keine Patch-Datei zur Verfügung, aber wir werden Dir erklären, wie Du Deine eigene Patch-Datei aus unseren Git-Repositories erstellen kannst.

* Klone zunächst das Spiegel-Repository in ein neues leeres Verzeichnis.
* Füge das Spiegel-Repository als zusätzliches Remote-Repository zu Deiner lokalen Kasse hinzu
* fetch everything


```
git clone https://github.com/OpenMage/magento-lts.git ./
git remote add mirror https://github.com/OpenMage/magento-mirror.git
git fetch --all
```

Jetzt verwenden wir git, um eine Patch-Datei zu erstellen, wie hier beschrieben https://stackoverflow.com/a/28193089. In diesem Beispiel haben wir 
derzeit Magento 1.9.4.4 im Einsatz und möchten einen Patch auf 19.4.3 migrieren.

```
git diff --binary 1.9.4.4..v19.4.3 > migration.patch
```

Du kannst diesen Patch dann mit `git apply migration.patch`möglicherweise kannst Du sogar PHPStorm verwenden, um es anzuwenden.


Weitere Informationen darüber, welche Versionen verfügbar sind, findest Du in unseren derzeit unterstützten Versionen 
unter http://www.openmage.org/supported-versions.html und in unserer Liste der Veröffentlichungen 
unter https://github.com/OpenMage/magento-lts/releases.


Wir empfehlen derzeit, die neueste Version der Major Version 19 zu verwenden, da diese auch bereits eine Menge Patches enthält, die 
sich auf Probleme beziehen, die durch Magento-Releases und Patches eingeführt wurden.

Spätere Hauptversionen können Änderungen enthalten, die Probleme verursachen können oder kleinere Rückwärtsinkompatibilitäten enthalten, 
daher empfehlen wir, diesen zusätzlichen Schritt erst dann vorzunehmen, wenn OpenMage für Sie bereits unter Version 19 stabil läuft. 
Und vielleicht möchten Sie auf ein Upgrade auf eine andere Hauptversion warten, bis die nächste Version mit Langzeit-Support 
freigegeben wird (so dass Sie nur alle 4 Jahre ein Major Upgrade durchführen müssen).

Aber keine Angst, wenn wir über Major Upgrade sprechen, sprechen wir nicht über einen Aufwand wie Magento 1 bis 2. Ein Major Upgrade mit 
uns ist eher wie ein Upgrade von Magento 1.8 auf 1.9


