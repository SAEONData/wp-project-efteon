jQuery(document).ready(function( $ ){
    $('.fieldcust').change(function(){
          if($('.fieldcust').val() == 'No') {
              $('.input-cust').show(300); 
          } else {
              $('.input-cust').hide(300); 
          } 
      });
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    //   $('.wpcf7-form').on( 'keyup keypress blur change focus','input,select,textarea', function(){
    //       console.log('check');
    //       //$('.wpcf7-form .next-step').val());
    //       $('.wpcf7-form').submit();
    //   });
  });