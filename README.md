# LuaEngineNK
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Run Lua in Nukkit!

Requirements:

JSEngineNK Plugin: https://cloudburstmc.org/resources/jsenginenk.939/

LuaLib Plugin: https://github.com/Trollhunters501/LuaLib

Know Basic JavaScript

Installation: Easily installed with a JSEngineNK script:

```js
if(!script.getScriptByName("LuaEngineNK")){
   load("https://raw.githubusercontent.com/Trollhunters501/LuaEngineNK/main/src/Creadores/Program/LuaEngineNK.js");
}
```
Engine Creation: Just add this code to your script and you can use Lua!
```js
var TestLua = new LuaEngineNK().build();
```
