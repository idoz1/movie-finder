function formConfig() {
  $("input[type='radio']").checkboxradio({
                                              icon: false
                                            });
  $("#speed").selectmenu();

  $("#slider-range").slider({
                              min: 1950,
                              max: 2024,
                              values: [ 1950 ],
                              slide: function( event, ui ) {
                                $( "#amount" ).val( ui.value );
                              }
                            });
  $( "#amount" ).val( $( "#slider-range" ).slider( "value" ) );
}

export {formConfig}
