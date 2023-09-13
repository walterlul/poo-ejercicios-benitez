interface Libro {
  titulo: string;
  autor: string;
  prestado: boolean;
}

export class Biblioteca {
  private libros: Libro[] = []

  constructor () {
    this.agregarLibro({
      titulo: 'Harry Potter',
      autor: 'J.K Rowling',
      prestado: false
    })
    this.agregarLibro({ titulo: 'IT', autor: 'Stephen King', prestado: false })
    this.agregarLibro({
      titulo: 'La tercera puerta',
      autor: 'Norma Huidobro',
      prestado: false
    })
    this.agregarLibro({
      titulo: 'Doctor suenio',
      autor: 'Stephen King',
      prestado: false
    })
  }

  agregarLibro (libro: Libro) {
    this.libros.push(libro)
  }

  private encontrarLibro (titulo: string): Libro | undefined {
    return this.libros.find((libro) => libro.titulo === titulo)
  }

  prestarLibro (titulo: string) {
    const libro = this.encontrarLibro(titulo)

    if (libro) {
      if (libro.prestado) {
        return console.log('El libro no esta disponible.')
      }
      libro.prestado = true
      return console.log('Libro prestado con exito')
    }
    return console.log('El libro que esta buscando no existe.')
  }

  devolverLibro (titulo: string) {
    const libro = this.encontrarLibro(titulo)

    if (libro) {
      if (libro.prestado) {
        libro.prestado = false
        return console.log('Gracias por devolver el libro a tiempo :)')
      }
      return console.log('Usted no ha tomado prestado ese libro')
    }
    return console.log('El libro que esta buscando no existe')
  }

  consultarRegistro () {
    const disponibles = []
    const prestados = []
    this.libros.forEach((libro) => {
      if (libro.prestado) {
        prestados.push(libro)
      } else {
        disponibles.push(libro)
      }
    })

    return console.log(
      `La cantidad de libros prestados son ${prestados.length} y la cantidad de libros disponibles son ${disponibles.length}`
    )
  }
}
