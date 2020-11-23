https://rnfirebase.io/

EL PROBLEMA ES EL AUTOLINKING. LA VERSION 0.59 NO LO HACE SOLO

Aca este el link al que accedi:
https://rnfirebase.io/#manual-linking

QUe me lleva aca abajo :
GUIA: https://rnfirebase.io/install-android

SEGUIR ACA:

https://rnfirebase.io/#android-enabling-multidex

### Errores

FAILURE: Build failed with an exception.

- What went wrong:
  Execution failed for task ':app:processDebugManifest'.
  > Manifest merger failed : Attribute application@appComponentFactory value=(android.support.v4.app.CoreComponentFactory) from [com.android.support:support-compat:28.0.0] AndroidManifest.xml:22:18-91
          is also present at [androidx.core:core:1.0.0] AndroidManifest.xml:22:18-86 value=(androidx.core.app.CoreComponentFactory).
          Suggestion: add 'tools:replace="android:appComponentFactory"' to <application> element at AndroidManifest.xml:7:5-117 to override.

Resolve with:
https://stackoverflow.com/a/52564822/14634724
