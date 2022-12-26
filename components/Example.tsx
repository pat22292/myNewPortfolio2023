import * as React from "react";
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(75, 136, 200, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(75, 136, 200, 1)"
    }
};

export const Example = () => (
    <div className=" ">
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="item-motion md:w-64 md:h-64 w-32 h-32 "
        >
            <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
            />
        </motion.svg>
    </div>
);
