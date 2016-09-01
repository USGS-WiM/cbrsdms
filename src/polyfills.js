System.register(['core-js/es6', 'core-js/es7/reflect'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[
            function (_1) {},
            function (_2) {}],
        execute: function() {
            require('zone.js/dist/zone');
            if (process.env.ENV === 'production') {
            }
            else {
                // Development
                Error['stackTraceLimit'] = Infinity;
                require('zone.js/dist/long-stack-trace-zone');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1lBRUEsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztZQUV2QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sY0FBYztnQkFDZCxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ2hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2NvcmUtanMvZXM2JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxucmVxdWlyZSgnem9uZS5qcy9kaXN0L3pvbmUnKTtcclxuaWYgKHByb2Nlc3MuZW52LkVOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgLy8gUHJvZHVjdGlvblxyXG59IGVsc2Uge1xyXG4gIC8vIERldmVsb3BtZW50XHJcbiAgRXJyb3JbJ3N0YWNrVHJhY2VMaW1pdCddID0gSW5maW5pdHk7XHJcbiAgcmVxdWlyZSgnem9uZS5qcy9kaXN0L2xvbmctc3RhY2stdHJhY2Utem9uZScpO1xyXG59Il19