function creaElemento(elemento: string, id: string, nome: string) {
  return function (constructor: any) {
    const container = document.getElementById(id);
    const persona = new constructor(nome);
    if (container) {
      container.innerHTML = elemento;
      container.querySelector("h1")!.textContent = persona.nome;
    }
  };
}

@creaElemento("<h1></h1>", "container", "Luca")
class Persona {
  constructor(public nome: string) {
    console.log("sto creando una persona denominata " + this.nome);
  }
}
