module.exports = 
class Bookmark{
    constructor(name, url, category, userid, username)
    {
        this.Id = 0;
        this.Name = name !== undefined ? name : "";
        this.Url = url !== undefined ? url : "";
        this.Category = category !== undefined ? category : "";
        this.UserId = userid !== undefined ? userid : "";
        this.UserName = username !== undefined ? username : "";
    }

    static valid(instance) {
        const Validator = new require('./validator');
        let validator = new Validator();
        validator.addField('Id','integer');
        validator.addField('Name','string');
        validator.addField('Url','url');
        validator.addField('Category','string');
        validator.addField('UserId','integer');
        validator.addField('UserName','string');
        return validator.test(instance);
    }
}