System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tag;
    return {
        setters:[],
        execute: function() {
            Tag = (function () {
                function Tag(name, description, id) {
                    this.name = name;
                    this.description = description;
                    this.id = id;
                }
                return Tag;
            }());
            exports_1("Tag", Tag);
        }
    }
});
//# sourceMappingURL=tag.js.map