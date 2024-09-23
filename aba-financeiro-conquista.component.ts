import { Component } from '@angular/core';
import { GraficoMedidorComponent } from '../../../../../commons/src/lib/components/grafico-medidor/grafico-medidor.component';
import { CommonModule } from '@angular/common';
import { Metas } from '../../model/metas';

import { MockMetas } from '../../model/mockmetas';
import { ControleServidorContract } from '@shaenkan/server-contract-library';
import { InterfaceLoginComponent } from "../../../../../commons/src/lib/pages/interface-login/interface-login.component";

@Component({
  selector: 'app-aba-financeiro-conquista',
  standalone: true,
  imports: [GraficoMedidorComponent, CommonModule, InterfaceLoginComponent],
  templateUrl: './aba-financeiro-conquista.component.html',
  styleUrl: './aba-financeiro-conquista.component.scss',
})
export class AbaFinanceiroConquistaComponent {
  metas: Metas[] = MockMetas.getDados();

  toggleMeta(meta: Metas) {
    meta.concluida = !meta.concluida;
  }

  getMetasConcluidas(): number {
    let concluidas = this.metas.filter((meta) => meta.concluida).length;
    const totalMetas = this.metas.length;
    const metasConcluidas = concluidas;
    return totalMetas > 0
      ? Math.round((metasConcluidas / totalMetas) * 100)
      : 0;
  }

  getImage() {
    return ControleServidorContract.getAssetsFolder();
  }
}
