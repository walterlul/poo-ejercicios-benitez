/* import { Mascota, MascotaVirtual } from './classes/ej4/Mascotas' */

import { Agenda } from './classes/ej5/Contactos'

function main () {
  /* const MascoVirtual = new MascotaVirtual()
  const max: Mascota = {
    nombre: 'Max',
    nivelFelicidad: 75,
    raza: 'Golden Retriever',
    nivelComida: 100
  }

  MascoVirtual.jugarPelota(max)
  MascoVirtual.alimentarMascota(max)
  MascoVirtual.alimentarMascota(max)
  MascoVirtual.alimentarMascota(max)
  MascoVirtual.bañarMascota(max)
  MascoVirtual.bañarMascota(max)
  MascoVirtual.bañarMascota(max)
  MascoVirtual.bañarMascota(max)
  MascoVirtual.bañarMascota(max)
  MascoVirtual.bañarMascota(max) */

  const agenda = new Agenda()

  agenda.buscarContacto('wolter')
  agenda.listarContactos()
}

main()
