import { Pipe, PipeTransform } from '@angular/core';
import { SolicitudUsuario } from 'src/app/models/solicitud';

@Pipe({
  name: 'Busqueda',
  pure: false
})

export class BusquedaPipe implements PipeTransform {

  transform(posts: SolicitudUsuario[], search: SolicitudUsuario): any {

    return posts.filter((post) => {
      return (!search.sRazonSocial || post.sRazonSocial.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(search.sRazonSocial.toLowerCase())) ||
        (post.sRazonSocial.toLowerCase().indexOf(search.sRazonSocial.toLowerCase()) > -1)
    }

    )
  }

}
