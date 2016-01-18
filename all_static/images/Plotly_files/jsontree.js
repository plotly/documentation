!function ($) {
  "use strict"; // jshint ;_;

  var _render = function(obj, p, config){
    var parent = $(p);
    var ic = 0;
    var count = 0 ;
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)){
        continue;
      }
      count+=1;
    }

    // auto-collapse (and remove the expander) if the object / array is empty
    if(count===0) {
      parent.slideUp();
      parent.parent().find('.fold').removeClass('fold');
    }

    for (var key in obj) {
      if (!obj.hasOwnProperty(key)){
        continue;
      }
      ic +=1;
      var coma = '',
        lcurl = '',
        rcurl = '',
        lsqr = '',
        rsqr = '',
        quot = '"',
        colon = '';
      if(config.terminators!==false) {
        if (ic < count){
          coma = ',';
        }
        lcurl = '{';
        rcurl = '}';
        lsqr = '[';
        rsqr = ']';
        colon = ':'; // but we still show the colon before single-value items
      }
      if (obj[key] === null){
        parent.append('<li><span class="key">'+key+':</span><span class="null"> null </span>'+coma+'</li>');
      } else if (typeof obj[key] === 'boolean'){
        parent.append('<li><span class="key">'+key+':</span><span class="boolean">'+Utils.escapeForHtml(obj[key])+'</span>'+coma+'</li>');
      } else if (typeof obj[key] === 'number'){
        parent.append('<li><span class="key">'+key+':</span><span class="number">'+Utils.escapeForHtml(obj[key])+'</span>'+coma+'</li>');
      } else if (typeof obj[key] === 'string'){
        parent.append('<li><span class="key">'+key+':</span><span class="string">'+quot+Utils.escapeForHtml(obj[key])+quot+'</span>'+coma+'</li>');
      } else if ($.isArray(obj[key])) {
        var arval = $('<li><span class="key">'+key+colon+'</span><span class="fold">'+lsqr+'</span><ul class="array"></ul><span>'+rsqr+'</span>'+coma+'</li>');
        parent.append(arval);
        arval.find('.unfold').data('card', _render(obj[key], arval.find('.array'), config)) ;
      }else{
        var oval = $('<li><span class="key">'+key+colon+'</span><span class="fold">'+lcurl+'</span><ul class="object"></ul><span>'+rcurl+'</span>'+coma+'</li>');
        parent.append(oval);
        oval.find('.unfold').data('card', _render(obj[key], oval.find('.object'), config));
      }
    }
    return ic;
  };

  $(document).on("click", '.jsontree .fold', function(e){
    e.preventDefault();
    $(this).addClass('folded').parent().find('ul').eq(0).slideUp();
  });

  $(document).on('click', '.jsontree .fold.folded', function(e){
    e.preventDefault();
    $(this).removeClass('folded').parent().find('ul').eq(0).slideDown();
  });

  var JsonTree = function(self, config){
    var j = $.parseJSON(self.data('jsontree'));
    self.append('<ul class="jsontree"></ul>');
    _render([j], self.find('.jsontree'), config);
    if(!config.collapsibleOuter) {
      self.find('.jsontree .fold').first().removeClass('fold');
      if(!config.terminators) {
        self.find('.jsontree>li>ul').css('margin-left',0);
      }
    }
  };

  $.fn.jsontree = function (option, config) {
    return this.each(function () {
      var self = $(this), data = self.data('jsontree');
      if (!data) {
        if (typeof option == 'string') {
          data = option;
          self.data('jsontree', option);
        }else{
          data = {};
          self.data('jsontree', '');
        }
      }
      var cfg = $.extend({
        terminators:true, // set terminators false to remove brackets and commas
        collapsibleOuter:true // set collapsibleOuter false to make the outer layer permanently expanded
      },config||{});
      new JsonTree(self, cfg);
    });
  };

}(window.jQuery);
