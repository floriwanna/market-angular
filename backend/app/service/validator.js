module.exports = {
    checkBodyStructure: function (body, args) {
        if (!body) throw new Error('body: undefined');
        if (!args) throw new Error('args: undefined');
        if (Array.isArray(args)) {
            for (let x of args) {
                if (!body[x]) return false;
            }
            return true;
        }
        else
            return !!body[args]
    }
}
