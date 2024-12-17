const { prisma } = require("../prismaClient");
const bcrypt = require("bcryptjs");

const seedContacto = async () => {
  try {
    console.log("Iniciando carga de contactos...");
    const user_password = await bcrypt.hash("cambiar1234", 10);
    const user_default = {
      firstName: "admin".toLowerCase(),
      lastName: "system".toLowerCase(),
      email: "admin@contacto.com".toLowerCase(),
      password: user_password,
    };

    const create_user = await prisma.USer.create({
      data: user_default,
    });
    // for (const contact of contacts) {
    //   console.log(`Insertando al contacto ${contact.email}`);
    //   await prisma.contact.create({data:contact});
    // }

    console.log("Usuario admin creado!");
  } catch (error) {
    console.log("Error al ejecutar el seeder:", error);
  }
};

(async () => {
  await seedContacto();
})();
