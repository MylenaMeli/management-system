import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StockComponent } from './stock/stock.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { OutputComponent } from './output/output.component';
import { HistoriqueComponent } from './historique/historique.component';
import { EntreeComponent } from './entree/entree.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { AddStockComponent } from './add-stock/add-stock.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {
        path: 'admin',
        component: BoardComponent,
        children: [
          {path:'user', component:UserComponent },
          {path:'sortie', component:OutputComponent },
          { path: 'stock', component: StockComponent },
          { path: 'historique', component: HistoriqueComponent },
          { path: 'entree', component: EntreeComponent },
          { path: 'statistique', component: StatistiquesComponent },
          { path: 'add-stock', component: AddStockComponent },

          
          
        ]
      }
     ,
      
    ];
