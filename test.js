(function (window,undefined) {
    var
        readyList,
        rootAct,
        core_strundefined = typeof undefined,
        location = window.location,
        document = window.document,
        docElem = window.documentElement,

        _Act = window.Act,
        __ = window._,

        core_version = "0.1.0",

        Act = function(selector,context) {
            return new Act.fn.init(selector,context,rootAct);                
        };
    console.log("auto running...");
})();