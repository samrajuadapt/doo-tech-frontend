import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabFourComponent } from './components/tab-four/tab-four.component';
import { TabOneComponent } from './components/tab-one/tab-one.component';
import { TabThreeComponent } from './components/tab-three/tab-three.component';
import { TabTwoComponent } from './components/tab-two/tab-two.component';

const routes: Routes = [
  // {path:'/',redirectTo:'one'},
  { path: 'one', component: TabOneComponent },
  { path: 'two', component: TabTwoComponent },
  { path: 'three', component: TabThreeComponent },
  { path: 'four', component: TabFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
