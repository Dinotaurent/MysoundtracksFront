import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Artista } from './artista';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistaService } from './artista.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  artista: Artista = new Artista();
  constructor(private artistaService: ArtistaService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarArtista();
  }


  public registrar(): void {
      this.artistaService.registrar(this.artista).subscribe(
        response => {
          this.router.navigate(['/artistas'])
          Swal.fire('Nuevo Artista','creado con exito','success')
        }
      )
    }

    public cargarArtista(): void{
      this.activateRoute.params.subscribe(params => {
        let id = params['id']
        if (id){
          this.artistaService.getArtista(id).subscribe( (artista) => this.artista = artista)
        }
      })

    }

    public actualizar(): void{
      this.artistaService.actualizar(this.artista).subscribe(
        (artista) => {
          this.router.navigate(['/artistas'])
          Swal.fire('Artista actualizado','con exito','success')
        }
      )
    }
}
