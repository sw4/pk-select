var pk = pk || {};
(function (pk) {
    pk.select = function (opt) {

        var el = opt.element,
            options = opt.options || [],
            inputValue = opt.value || pk.attribute(el, 'value') || '',
            inputName = opt.name || pk.attribute(el, 'name') || 'pk-select-'+pk.getRand(1,999),
            inputMultiple = (opt.multiple || pk.attribute(el, 'multiple')) ? true : false,
            inputPlaceholder = opt.placeholder || pk.attribute(el, 'placeholder') || 'Please select...',
            inputSelection={name:[], value:[]},
            listeners=opt.listeners === undefined ? {} : opt.listeners,            
            inputDisabled=(opt.disabled || el.getAttribute('disabled')) ? 'disabled' : '', 
            inputTabIndex=opt.tabindex || el.getAttribute('tabindex') || 0;     
        
            if(inputMultiple && inputName.indexOf('[]') === -1){
                inputName+='[]';
            }else{
                inputName = inputName.replace('[]', '');
            }
            if(inputValue && typeof inputValue !== "object"){
                inputSelection.value.push(inputValue);
            }else{
                inputSelection.value = inputValue;
            }        
        
        
        
        if (options.length === 0 && (el.nodeName === "SELECT" || el.nodeName === "UL")) {
            for (var i = 0 ; i <  el.children.length ; i++) {
                var oVal =pk.attribute(el.children[i], 'value'),
                    oName=el.children[i].innerHTML;
                oVal = oVal || oName;
                options.push({name:oName, value:oVal, selected: inputSelection.value.indexOf(oVal) !==-1 ? true : false});
                if(inputSelection.value.indexOf(oVal)!==-1){inputSelection.name.push(oName);}
            }
        }
        var tpl="<div class='pk-select "+(inputMultiple ? 'pk-select-multiple' : 'pk-select-single')+" "+(inputDisabled ? 'pk-disabled' : '')+"' tabindex='"+inputTabIndex+"'>\
                <input type='hidden' name='"+inputName+"' "+inputDisabled+" value='"+inputValue+"'/>\
                <div class='pk-select-value "+(!inputValue ? 'pk-placeholder' : '')+"'>sdsd</div>\
            <ul>";
        for(var o in options){
            tpl+="<li class='pk-option "+(options[o].selected ? 'pk-selected' : '')+"' data-value='"+options[o].value+"'>"+options[o].name+"</li>";
        }
        tpl+="</ul></div>";

        
        el.innerHtml='';
        el=pk.replaceEl(el, tpl);

        var triggerEl=el.children[1];
        var inputEl=el.children[0];
        var optionsEl=el.children[2];
        if(!inputMultiple){            
            var overlayEl = document.body.insertBefore(pk.createEl("<div class='pk-overlay pk-hide'></div>"), document.body.children[0]);          
            pk.bindEvent('click', overlayEl, function(){               
                 pk.addClass(overlayEl,'pk-hide'); 
                 pk.toggleClass(el,'pk-show'); 
            });
            pk.bindEvent('click', el, function(){
                pk.toggleClass(overlayEl,'pk-hide'); 
                pk.toggleClass(el,'pk-show'); 
            });
        }
        
        
        function updatePlaceholder(){
            if(inputSelection.value.length <1){
                triggerEl.innerHTML=inputPlaceholder;
                pk.addClass(triggerEl, 'pk-placeholder');
                return;
            }
            pk.removeClass(triggerEl, 'pk-placeholder');
            triggerEl.innerHTML= inputMultiple ? "<span class='pk-select-value-tag'>"+inputSelection.name.join("</span><span class='pk-select-value-tag'>")+"</span>" : inputSelection.name.join('');
        }
        updatePlaceholder();
        function updateSelection(i){ 
            inputSelection.value=[];
            inputSelection.name=[];
            for(var o in options){
                if(inputMultiple && o == i){
                    options[o].selected = !options[o].selected;   
                }else if(!inputMultiple && o == i ){
                    options[o].selected=true;
                }else if(!inputMultiple){
                    options[o].selected=false;
                }

                if(options[o].selected){
                    inputSelection.value.push(options[o].value);
                    inputSelection.name.push(options[o].name);
                }
                pk.toggleClass(optionsEl.children[o], 'pk-selected', options[o].selected) 
            }
            inputValue= inputMultiple ? inputSelection.value : inputSelection.value.join('');
            inputEl.value=inputValue;
            updatePlaceholder();
        }
        pk.bindEvent('click', optionsEl, function(e){    
            if(e.target.nodeName == "LI"){
                updateSelection(pk.getIndex(e.target));
            }
        });        
    };
    return pk;
})(pk);
