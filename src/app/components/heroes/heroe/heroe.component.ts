import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Spiderman';
    edad  : number = 18;

    getNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Superman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }

}