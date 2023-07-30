// import React, { useState } from 'react';
//  const { useState } = React;
// function BurgerIcon({ toggleVisibility }) {
//     const [visible, setVisible] = useState(false);
//     const toggleVisibility = () => setVisible(!visible);
//   return (
//     <nav className="main__nav nav">
//     <div className="nav__logo logo">
//       <img className="logo__image" src="./logo.png" alt="logo" />
//     </div>
//     <div className="nav__burger burger" onClick={toggleVisibility}>
//       <span className="burger__line"></span>
//       <span className="burger__line"></span>
//       <span className="burger__line"></span>
//     </div>
//     {visible && (
// <div className="nav__menu menu">
//       <ul className="menu__list">
//         <li className="menu__item">
//           <a href="http://" className="menu__link">
//             Главноеtttt
//           </a>
//         </li>
//         <li className="menu__item">
//           <a href="http://" className="menu__link">
//             Мой плейлист
//           </a>
//         </li>
//         <li className="menu__item">
//           <a href="http://" className="menu__link">
//             Войти
//           </a>
//         </li>
//       </ul>
//     </div>

//       )}
//   </nav>
    
//   );
// }

// export { BurgerIcon };