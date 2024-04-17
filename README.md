# LuaEngineNK
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Lua](https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Run Lua in Nukkit!

Requirements:

JSEngineNK Plugin: https://cloudburstmc.org/resources/jsenginenk.939/

LuaLib Plugin: https://github.com/Trollhunters501/LuaLib

Know Basic JavaScript

# Installation: 
Easily installed with a JSEngineNK script:

```js
if(!script.getScriptByName("LuaEngineNK")){
   load("https://cdn.jsdelivr.net/gh/Trollhunters501/LuaEngineNK/src/Creadores/Program/LuaEngineNK.js");
}
```
# Engine Creation: 
Just add this code to your script and you can use Lua!
```js
var TestLua = new LuaEngineNK().build();
```
# Eval:
```js
TestLua.eval("print('hello world!')");
```
# Default variables:
getLogger return logger by JSEngineNK 

getServer return server 

manager return manager by JSEngineNK 

plugin return main Class by JSEngineNK
# Specify Variables (put):
```js
TestLua.put("Variable", objectJava);
//also applies to setNnClassLoader!
```
# setNnClassLoader: 
This function does the same thing as JSEngineNK's Nnclassloader API but passed to Lua example:
```js
TestLua.setNnClassLoader({ urls: ["https://test.com/test.jar"] }, {
  variable: "class.example"//...
});
```
It also has most of the features of [PHPEngineNK](https://cloudburstmc.org/resources/phpenginenk.968/) (minus code conversion and print)

# evalFile: 
Run Ruby code from a file:
```js
TestLua.evalFile(manager.getFile("TestLua", "Test.lua"));
```
More Info: https://github.com/luaj/luaj
