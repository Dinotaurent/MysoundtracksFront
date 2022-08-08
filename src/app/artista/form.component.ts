import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Artista } from './artista';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistaService } from './artista.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref,getDownloadURL  } from 'firebase/storage';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  artista: Artista = new Artista();
  urlImg:string = '';
  constructor(private artistaService: ArtistaService, private router: Router, private activateRoute: ActivatedRoute,private storage: AngularFireStorage) { }

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

    async subirImg(event: any){
      const file = event.target.files[0];
      const storage = getStorage();
      // // console.log(file);
      //
      //

      const filePath = `imagenes/${file.name}`;
      const imgRef = ref(storage,filePath);
      const task = this.storage.upload(filePath, file);

      function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

await delay(8000);
getDownloadURL(imgRef).then(
  response => console.log(response)
).catch(
  error => console.log(error)
);

// this.urlImg = getDownloadURL(imgRef);
console.log(this.urlImg);
// return await getDownloadURL(imgRef);

      // const url = getDownloadURL(imgRef)
    }
}
