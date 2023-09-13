export interface Mascota {
  nombre: string;
  nivelFelicidad: number;
  raza: string;
  nivelComida: number;
}
// crear esta mascota en index

/* const max: Mascota = {
    nombre: 'Max',
    nivelFelicidad: 85,
    raza: 'Golden Retriever',
    nivelComida: 60
  } */

export class MascotaVirtual {
  private aumentarNivelFelicidad (mascota: Mascota, nivel: number) {
    if (nivel >= 0 && nivel <= 100) {
      const nivelActual = (mascota.nivelFelicidad += nivel)
      if (nivelActual > 100) {
        mascota.nivelFelicidad = 100
      } else {
        mascota.nivelFelicidad = nivelActual
      }
    } else {
      console.error('El nivel de felicidad debe estar en el rango de 0 a 100.')
    }
  }

  private disminuirNivelFelicidad (mascota: Mascota, nivel: number) {
    if (nivel >= 0 && nivel <= 100) {
      const nivelActual = (mascota.nivelFelicidad -= nivel)
      if (nivelActual < 0) {
        mascota.nivelFelicidad = 0
      } else {
        mascota.nivelFelicidad = nivelActual
      }
    } else {
      console.error('El nivel de felicidad debe estar en el rango de 0 a 100.')
    }
  }

  private disminuirNivelComida (mascota: Mascota, nivel: number) {
    if (nivel >= 0 && nivel <= 100) {
      const nivelActual = (mascota.nivelComida -= nivel)
      if (nivelActual < 0) {
        mascota.nivelComida = 0
      } else {
        mascota.nivelComida = nivelActual
      }
    } else {
      console.error('El nivel de felicidad debe estar en el rango de 0 a 100.')
    }
  }

  private aumentarNivelComida (mascota: Mascota, nivel: number) {
    if (nivel >= 0 && nivel <= 100) {
      const nivelActual = (mascota.nivelComida += nivel)
      if (nivelActual > 100) {
        mascota.nivelComida = 100
      } else {
        mascota.nivelComida = nivelActual
      }
    } else {
      console.error('El nivel de felicidad debe estar en el rango de 0 a 100.')
    }
  }

  jugarPelota (mascota: Mascota) {
    if (mascota.nivelComida === 0) {
      console.log('Alimentame porfavor')
      return
    } else if (mascota.nivelFelicidad === 100) {
      console.log('Ya estoy cansado de jugar')
      return
    }
    this.disminuirNivelComida(mascota, 20)
    this.aumentarNivelFelicidad(mascota, 25)
    console.log('Atrapando pelotas...', mascota)
  }

  alimentarMascota (mascota: Mascota) {
    if (mascota.nivelComida === 100) {
      console.log('Ya estoy lleno')
      return
    }
    this.aumentarNivelComida(mascota, 40)
    this.aumentarNivelFelicidad(mascota, 10)
    console.log('Comiendo...', mascota)
  }

  bañarMascota (mascota: Mascota) {
    if (mascota.nivelComida === 0) {
      console.log('Quiero comer o me voy a morir')
      return
    } else if (mascota.nivelFelicidad === 0) {
      console.log('Estoy muy triste, sacame a jugar')
      return
    }
    this.disminuirNivelComida(mascota, 10)
    this.disminuirNivelFelicidad(mascota, 25)
    console.log('Lavando pelaje...', mascota)
  }
}
