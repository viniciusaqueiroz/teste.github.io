jQuery(document).ready(function() {
            // Exibe ou oculta o botão
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 450) {
                    jQuery('.voltar-ao-topo').fadeIn(450);
                } else {
                    jQuery('.voltar-ao-topo').fadeOut(450);
                }
            });
            
            // Faz animação para subir
            jQuery('.voltar-ao-topo').click(function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, 1000);
            })
        });
