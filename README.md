# json-schemata-minecraft

This [Atom.io](https://atom.io/) package provides JSON schemata for several Minecraft mods:

* [Accidentally Circumstantial Events](http://mods.curse.com/mc-mods/minecraft/227796-accidentally-circumstantial-events-ace) (```AccidentallyCircumstantialEvents/*.json```)
* [Advanced Spawn Control](http://mods.curse.com/mc-mods/minecraft/236053-advanced-spawn-control) (```AdvancedSpawnControl.json```)
* [EconomicalMilkTea](http://mods.curse.com/mc-mods/minecraft/244556-economicalmilktea) order support in [AMTweaker](http://mods.curse.com/mc-mods/minecraft/229357-amtweaker) (```AMTweaker/emt.json```)
* [Quadrum](http://mods.curse.com/mc-mods/minecraft/223773-quadrum) (```Quadrum/block/*.json``` and ```Quadrum/item/*.json```)

The schemata are only linked to the file or JSON files in the path listed above.

_Important:_ By itself this package does nothing, it needs a package that makes use of JSON schemata provided via the ```jsonschema.provider``` service, for example the [autocomplete-json](https://atom.io/packages/autocomplete-json) package.
