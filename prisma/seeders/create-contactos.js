const { prisma } = require("../prismaClient");

const seedContacto = async () => {
  try {
    console.log("Iniciando carga de contactos...");

    const contacts = [
      {
        firstname: "Saba",
        lastname: "Gutierrez",
        email: "saba@gutierrez.com",
        phone: "4444-1322",
      },
      {
        firstname: "Camilo",
        lastname: "Chile",
        email: "camilo@chile.com",
        phone: "3232-1111",
      },
      {
        firstname: "Kristina",
        lastname: "Rus",
        email: "Kristina@rus.com",
        phone: "3900-2003",
      },
    ];
    for (const contact of contacts) {
      console.log(`Insertando al contacto ${contact.email}`);
      await prisma.contact.create({data:contact});
    }

    console.log("Contactos cargados correctamente!!!");
  } catch (error) {
    console.log("Error al ejecutar el seeder:", error);
  }
};

(async () => {
  await seedContacto();
})();