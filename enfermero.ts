class Enfermero {
  private nombre: string;
  private direccion: string;
  private telefono: string;
  private especialidad: string;

  constructor(
    nombre = "",
    direccion = "",
    telefono = "",
    especialidad = ""
  ) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.especialidad = especialidad;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string) {
    this.nombre = nombre;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public setDireccion(direccion: string) {
    this.direccion = direccion;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public setTelefono(telefono: string) {
    this.telefono = telefono;
  }

  public getEspecialidad(): string {
    return this.especialidad;
  }

  public setEspecialidad(especialidad: string) {
    this.especialidad = especialidad;
  }

  public getInfo(): string {
    return `Nombre: ${this.nombre},           Dirección: ${this.direccion},               Teléfono: ${this.telefono},          Especialidad: ${this.especialidad}`;
  }
}


const enfermero1 = new Enfermero("Enfermero1", "Calle 16 av 29", "0987654321", "Pediátrica");
enfermero1.setTelefono("0987654321");

const enfermero2 = new Enfermero("Enfermero2", "Calle 10 av 15", "0912345678");
enfermero2.setEspecialidad("Geriatría");

console.log(enfermero1.getInfo());
console.log(enfermero2.getInfo());
