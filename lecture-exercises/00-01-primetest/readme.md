# Übung 0.1: Primetest

In dieser Aufgabe soll ein kleines Commandline-Tool entwickelt werden, das
eine Zahl als Input erhält und als Antwort zurückgibt, ob es sich um eine
Primzahl handelt.

```bash
node primtest.js 7
```

- Nutzen Sie das NodeJS Modulsystem, um in der Datei `is-prime.js` die Methode `isPrime` zu exportieren, die überprüft, ob eine Zahl eine Primzahl ist.
- Importieren Sie in der Datei `primtest.js` die Methode `isPrime`.
- Schreiben Sie die Logik des Tools, indem Sie die übergebene Zahl aus der Commandline entgegen nehmen, `isPrime` aufrufen und eine entsprechende Nachricht in der Konsole ausgeben.
- **Tipp** Mit `process.argv` erhalten Sie ein Array der Commandline-Parameter. Nutzen Sie `console.log` um herauszufinden an welcher Stelle im Array sich der Input-Parameter der Zahl befindet. Übrigens sind alle Werte Strings und müssen deshalb je nach Anforderung z.B. in eine Zahl geparsed werden.
- _Optional_: Sichern Sie das Command-Line Tool gegen fehlerhafte Eingaben wie z.B. fehlende Parameter, zu viele Parameter oder ungültige Parameter ab.
