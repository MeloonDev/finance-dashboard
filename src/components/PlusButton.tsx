import "./PlusButton.scss";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

function PlusButton() {
  return (
    <motion.button
      className="plus-btn"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9, backgroundColor: "#f492a0" }}
    >
      <AiOutlinePlus />
    </motion.button>
  );
}
export default PlusButton;
