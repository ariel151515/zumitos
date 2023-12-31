import React from 'react';
import styles from '../styles.module.css'; // Importa el módulo de estilos
import regaloimg from '../img/regalo.png'

const PasoUno = () => {
    return ( 
        <div className={styles.contenedor}>
        <span>¡ATENCION!</span>
        <p>
        🌟 ¡Exclusivo hoy! 🌟 Reserva ahora y desbloquea un descuento especial del 30% en tu próximo pedido. No pierdas la oportunidad de saborear momentos únicos. Recuerda, tendrás 30 días para redimir tu oferta después de completar la reserva. ¡Atrévete a vivir una experiencia gastronómica inolvidable! 🍽️✨ ¡Haz tu reserva ahora!
        </p>
      </div>
     );
}
 
export default PasoUno;