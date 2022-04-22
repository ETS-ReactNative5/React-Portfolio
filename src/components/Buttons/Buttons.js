// import { motion } from "framer-motion";
// import { useState } from 'react';
// import Modal from './Modal/index';

// function Dalmo () {
// const [modalOpen, setModalOpen] = useState(false);

// }

// const close = () => setModalOpen(false);
// const open = () => setModalOpen(true);



// const Buttons = ({contact, moreinfo}) => 
// {
//     return (
//         <div>
//         <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }} 
//         className="btn-contact" 
//         onClick={()=> (modalOpen ? close() : open())}>{contact}
//         </motion.button>

//         <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }} 
//         className="btn-moreinfo" onClick={()=> null}>{moreinfo}
//         </motion.button>

//         {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
//         </div>
//     )
// }


// Buttons.defaultProps={
//     contact: 'Contact Me',
//     moreinfo: 'More Info',
// }
 
// Buttons.propTypes={
//     contact: ''

// }












// export default Buttons 