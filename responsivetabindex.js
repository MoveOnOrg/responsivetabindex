(function($) {

  function updateTabIndexes() {
    var width = $(window).width();
    $('[data-tabindex-value]').each(function() {
      var $this = $(this);
      var minwidth = $this.attr('data-tabindex-min-width');
      if (minwidth && minwidth <= width) {
        $this.attr('tabindex', $this.attr('data-tabindex-value'));
      }
      else {
        if (typeof $this.data('initial-tabindex') === 'undefined') {
          $this.removeAttr('tabindex');
        }
        else {
          $this.attr('tabindex', $this.data('initial-tabindex'));
        }
      }
    });
  }

  $(document).ready(function() {
    $('[data-tabindex-value]').each(function() {
      var $this = $(this);
      $this.data('initial-tabindex', $this.attr('tabindex'));
    });
    updateTabIndexes();
    $(window).on('resize', updateTabIndexes);
  });

})(jQuery);
