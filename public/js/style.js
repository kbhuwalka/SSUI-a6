// JQuery visibilityToggle plug-in
jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};

$(() => {
  $("#read-more").on("click", function(){
    $(this).visibilityToggle();
    $("#card-container").fadeToggle();
  });
  $("#close-icon").on("click", function(){
    $("#read-more").visibilityToggle();
    $("#card-container").fadeToggle();
  });

  $("#nav-mobile li").on("click", function(){
    $("#nav-mobile li").removeClass("active");
    $(this).toggleClass("active");
  });
});
