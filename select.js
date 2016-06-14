function select(name, placeholder) {
        var selects = document.getElementsByClassName(name);
        var addSpan = function(){return document.createElement('span')};
        var addUl = function(){return document.createElement('ul')};
        var addLi = function(){return document.createElement('li')};
        for (var i = 0; i < selects.length; i++) { 
            /* add span and ul tags to html */
            selects[i].appendChild(addSpan());
            selects[i].appendChild(addUl());
            /* varibles ul, span ... */
            var span = selects[i].children[1];
            var ul = selects[i].children[2];
            /* style for ul and text for span */
            ul.style.display = 'none';
            span.innerText = placeholder;
            /* add value from option to li tag */
            var select = selects[i].children[0];
            for (var j = 0; j < select.length; j++) {
                ul.appendChild(addLi());
                var li = selects[i].children[2].children;
                var options = selects[i].children[0].children;
                var selectsArr = selects[i].children[0];
                if (li.length === options.length) {
                    for (var s = 0; s < selectsArr.length; s++) {
                        var option = selects[i].children[2].children[s];
                        var li = selects[i].children[0].children[s];
                        option.innerText = li.innerText;
                        option.value = li.value;
                    }
                }
            }
            /* function for open select, copy all value from select to own select */
            span.onclick = function openSelect() {
                var ul = this.nextSibling;
                var span = this;
                var styleUl = ul.style;
                if (styleUl.display == 'none') {
                    styleUl.display = 'block';
                    var li = ul.children;
                    for (var i = 0; i < li.length; i++) {
                        li[i].onclick = function () {
                            var text = this.innerText;
                            span.innerText = text;
                            ul.style.display = 'none';
                        }
                    }
                } else {
                    styleUl.display = 'none';
                }
            }; 
        }

    }
    select('select', 'test')