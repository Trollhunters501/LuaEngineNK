const prefix = "[LuaEngineNK] ";
const LuaEngineNK = Class(Object, {
    build: function(){
        let libs = new NnClassLoader({ urls: ["https://github.com/luaj/luaj/releases/download/v3.0.2/luaj-jse-3.0.2.jar"] });
        let LuaFactor = libs.type("org.luaj.vm2.script.LuaScriptEngineFactory");
        let LuaManager = new LuaFactor();
        let LuaEngine = LuaManager.getScriptEngine();
        LuaEngine.put("getServer", server);
        LuaEngine.put("getLogger", console);
        LuaEngine.put("manager", manager);
        LuaEngine.put("plugin", plugin);
        let subclass = {
            put: function(arg1, arg2){
                LuaEngine.put(arg1, arg2);
            },
            eval: function(arg1, arg2){
                if(arg2 == null){
                  LuaEngine.eval(arg1);
                }else{
                  LuaEngine.eval(arg1, arg2);
                }
            },
            getEngineName: function(){
                return "LuaEngineNK & " + LuaManager.getEngineName();
            },
            setNnClassLoader: function(codeNC, classes){
              let ClasLoad = new NnClassLoader(codeNC);
              let KeysClass = Object.keys(classes);
              for(var keys in KeysClass){
                LuaEngine.put(KeysClass[keys], ClasLoad.type(classes[KeysClass[keys]]));
              }
            },
            getLanguageVersion: function(){
                return LuaManager.getLanguageVersion();
            },
            getManager: function(){
                return LuaManager;
            },
            getEngine: function(){
                return LuaEngine;
            },
            getClass: function(){
                return LuaEngineNK;
            },
            getEngineClass: function(){
                return LuaFactor;
            },
            evalFile: function(fileA){
              if(!fileA instanceof java.io.File){
                throw "The object is not a file!";
                return;
              }
              if(!fileA.exists()){
                throw "The file does not exist!";
                return;
              }
              let reader = new java.io.FileReader(fileA);
              LuaEngine.eval(reader);
              reader.close();
            }
        };
        return subclass;
    },
    getClass: function(){
      return LuaEngineNK;
    },
    constructor: function(){
      return this.build();
    },
    getName: function(){
      return "LuaEngineNK";
    },
    toString: function(){
      return "LuaEngineNK[]";
    }
});
function enable(){
  console.info(prefix+"§aDone");
}
function load(){
  console.info(prefix+"§eLoading...");
}
function disable(){
  console.info(prefix+"§cBye");
}
module.exports = {
  LuaEngineNK: LuaEngineNK,
  onEnable: enable,
  onLoad: load,
  onDisable: disable
}
