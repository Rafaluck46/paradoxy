//object Contact
function Contact() {
    Contact.prototype._applyMasks();
    this.el = document.querySelector('form');
};

Contact.prototype._applyMasks = function () {

    var maskOptions = {
        mask: '+55 (00) 0 0000-0000',
        country: 'Brazil'
    }

    var phone = document.getElementById('phone');
    new IMask(phone, maskOptions);
}

Contact.prototype.isValidForm = function () {
    var isValid = true;
    [...this.el].forEach(elem => {
        if (!elem.value) {
            elem.classList.add('invalid');
            isValid = false;
        }
    });
    return isValid;
}

Contact.prototype.toJson = function () {
    return {
        name: this.el.querySelector('#name').value,
        email: this.el.querySelector('#email').value,
        company: this.el.querySelector('#company').value,
        phone: this.el.querySelector('#phone').value,
        title: this.el.querySelector('#title').value,
        text: this.el.querySelector('#text').value,
        date: new Date(Date.now()).toJSON()
    }
}

Contact.prototype.clearFields = function () {
    [...this.el].forEach(elem => {
        debugger;
        elem.value = '';
        elem.classList.remove('valid');
    })
}

export default Contact;
