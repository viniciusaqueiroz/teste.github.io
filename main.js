jQuery(document).ready(function() {
            // Exibir e/ou Ocultar Botão
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 450) {
                    jQuery('.voltar-ao-topo').fadeIn(450);
                } else {
                    jQuery('.voltar-ao-topo').fadeOut(450);
                }
            });
            
            // Efeito de animação
            jQuery('.voltar-ao-topo').click(function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, 1000);
            })
        });
