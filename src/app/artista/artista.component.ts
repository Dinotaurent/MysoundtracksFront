import { Component, OnInit } from '@angular/core';
import { Artista } from './artista';
import { ArtistaService } from './artista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artistas: Artista[] = [];

  constructor(private artistaService: ArtistaService) { }

  ngOnInit(): void {
    this.artistaService.getArtistas().subscribe(
      artistas => this.artistas = artistas
    );
  }
  eliminar(artista: Artista): void{
      Swal.fire({
    title: 'Estas seguro?',
    text: "No podras revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.artistaService.eliminar(artista).subscribe(
        response => {
          this.artistas = this.artistas.filter(art => art !== artista)

      Swal.fire(
        'Eliminado!',
        'El Artista fue liquidado',
        'success'
      )})
    }
  })
    }
}
