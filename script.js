function Button(text) {
    this.text = text || "Hello";
}

Button.prototype = {
    create: function() {
        let self = this;
        this.$element = $('<button>');
        this.$element.text(this.text);
        this.$element.click(function(){
            alert(self.text);
        })
        $('body').append(this.$element);
    }
}

const btn1 = new Button('hello!');
btn1.create();

const btn2 = new Button();
btn2.create();