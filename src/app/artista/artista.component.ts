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
  }

}
