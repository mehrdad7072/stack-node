function stack(initialSize = 10){
    this.items = Array(initialSize);
    this.index = 0;
};
stack.prototype.size = function(){
    return this.index;
}
stack.prototype.push = function(val){
    return this.items[this.index++] = val;
}
stack.prototype.pop = function(){
    return this.items[--this.index];
}

module.exports = stack;