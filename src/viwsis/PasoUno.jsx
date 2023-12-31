import React from 'react';
import styles from '../styles.module.css'; // Importa el módulo de estilos
import regaloimg from '../img/regalo.png'

const PasoUno = () => {
    return ( 
        <div className={styles.contenedor}>
        <img src={regaloimg} className={styles.regalo} />
        <span>¡Bienvenido a nuestra lista exclusiva!</span>
        <p>
          ¡Gracias por unirte a nosotros! Estás a un paso de recibir tu regalo. Solo falta un pequeño paso más: revisa tu correo electrónico y abre nuestro mensaje para validar
          tu registro. ¡Prepárate para una experiencia única! 🎉
        </p>

         
      </div>
     );
}
 
export default PasoUno;