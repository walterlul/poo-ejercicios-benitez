interface Contacto {
    nombre: string;
    correo: string;
    numero: number;
  }

// puedes crear contactos en el index para agregar mas si lo desea

/* const contacto: Contacto = {
    nombre: 'contactogenerico',
    correo: 'holhola@hotmail.com',
    numero: 12345565,
  } */

export class Agenda {
  private contactos: Contacto[] = []

  constructor () {
    this.agregarContacto({
      nombre: 'wolter',
      correo: 'hola@gmail.com',
      numero: 3704020511
    })
    this.agregarContacto({
      nombre: 'wolter2',
      correo: 'hola2@gmail.com',
      numero: 3704020213511
    })
    this.agregarContacto({
      nombre: 'wolter3',
      correo: 'hola13@gmail.com',
      numero: 3704020111511
    })
  }

  agregarContacto (contacto: Contacto) {
    this.contactos.push(contacto)
  }

  buscarContacto (nombre: string) {
    const contacto = this.contactos.find((contacto) => contacto.nombre === nombre)
    console.log(contacto)
  }

  listarContactos () {
    return this.contactos.forEach((contacto) => {
      console.log(contacto)
    })
  }
}
