import * as React from "react";
import { motion } from "framer-motion";

const icon = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgb(39, 40, 40, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(39, 40, 40, 1)"
    }
};

const icon2 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgb(75, 136, 200, 0)"
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(75, 136, 200, 1)"
    }
};


export const ExampleTwo = () => (
    <div className=" flex">
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 720 720"
            className="item-motion md:w-64 md:h-64  w-48 h-48"
        >
            <motion.path
                d="M267.3,222.2v-16.4c0-4.6-4-8.3-9-8.3H122.2c-5,0-9,3.7-9,8.3v100.8c0,4.6,4,8.3,9,8.3h136.2
                c5,0,9-3.7,9-8.3v-24h73.4v82.1c0,4.6-4,8.3-9,8.3H123c-5,0-9,3.7-9,8.3v219.3c0,4.6-4,8.3-9,8.3H32.9c-5,0-9-3.7-9-8.3V145.3
                c0-4.6,4-8.3,9-8.3h298.9c5,0,9,3.7,9,8.3v76.8H267.3z"
                fill={"#272828"}
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 1, ease: "easeInOut" },
                    fill: { duration: 1, ease: [1, 0, 0.8, 1] }
                }}
            />
            <motion.path
                d="M459,222.2H160.1c-5,0-9,3.7-9,8.3v84.3h73.4v-24c0-4.6,4-8.3,9-8.3h152.1c5,0,9,3.7,9,8.3v100.8
                c0,4.6-4,8.3-9,8.3H233.5c-5,0-9-3.7-9-8.3V373h-73.4v227.7c0,4.6,4,8.3,9,8.3h72.1c5,0,9-3.7,9-8.3V466.5c0-4.6,4-8.3,9-8.3h118.7
                c5,0,9,3.7,9,8.3v134.2c0,4.6,4,8.3,9,8.3H459c5,0,9-3.7,9-8.3V230.5C467.9,225.9,463.9,222.2,459,222.2z"
                fill={"#4B88C8"}
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
            />
            <motion.path
                d="M696.1,145.3v59.8c0,4.6-4,8.3-9,8.3h-87.7c-5,0-9,3.7-9,8.3v378.9c0,4.6-4,8.3-9,8.3h-72.9
                c-5,0-9-3.7-9-8.3V221.8c0-4.6-4-8.3-9-8.3H388.2c-5,0-9-3.7-9-8.3v-59.8c0-4.6,4-8.3,9-8.3h298.9
                C692.1,137,696.1,140.7,696.1,145.3z"
                fill="#272828"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2.5, ease: "easeInOut" },
                    fill: { duration: 2.5, ease: [1, 0, 0.8, 1] }
                }}
            />
        </motion.svg>
    </div>
);
