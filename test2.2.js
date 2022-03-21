var relationship1 = {
    name: 'Zero',
    friends: ['Nero', 'Hero', 'Xero'],
    logfriends: function() {
        var that = this;
        this.friends.forEach( function(myfuncname) {
            console.log(that.name, myfuncname);
        })
    }
}
relationship1.logfriends();

console.log("---");

var relationship2 = {
    name: 'Kero',
    friends: ['Nero', 'Hero', 'Xero'],
    logfriends: function() {
        //var that = this;
        this.friends.forEach( myfuncname => {
            console.log(this.name, myfuncname);
        })
    }
}
relationship2.logfriends();
