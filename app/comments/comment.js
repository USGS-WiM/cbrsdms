"use strict";
var Comment = (function () {
    function Comment(caseid, comment, created_by_string, created_date, id) {
        this.caseid = caseid;
        this.comment = comment;
        this.created_by_string = created_by_string;
        this.created_date = created_date;
        this.id = id;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map