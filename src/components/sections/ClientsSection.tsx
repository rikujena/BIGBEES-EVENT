import { motion } from "framer-motion";

const clients = [
  { name: "HappyHomes", logo: "/HappyHomes.png" },
  { name: "0", logo: "" },
  { name: "0", logo: "" },
  { name: " you are next", logo: "" },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Brands We've Collaborated With
          </h2>
          <p className="text-muted-foreground">
            Trusted by industry leaders and innovative startups across multiple sectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
