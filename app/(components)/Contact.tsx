import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Contact = () => {
  const Map = dynamic(() => import("./Map"), {
    loading: () => <p>loading...</p>,
    ssr: false,
  });

  const markers = [
    {
      position: [51.505, -0.09],
      title: "London",
      subtitle:
        "United and we can either include the CSS link tag in head or we can copy and paste the CSS from the file below directly into the project",
      image: "/assets/map/1.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      id="contact"
      className=""
    >
      <Map data={markers} />
    </motion.section>
  );
};

export default Contact;
