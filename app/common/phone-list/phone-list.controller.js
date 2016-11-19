    var phoneListCtrl = function(){
        var _this = this;

        this.name = "priyank patel";
        this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
        ];
    };
    phoneListCtrl.prototype.getPhones = function(){
        return this.phones;
    };

    module.exports = phoneListCtrl;