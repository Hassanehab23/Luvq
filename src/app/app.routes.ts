import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsandConditionsComponent } from './termsand-conditions/termsand-conditions.component';
import { DocumentedComponent } from './documented/documented.component';
import { VisionComponent } from './vision/vision.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CategoriesComponent } from './categories/categories.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { DiningroomComponent } from './diningroom/diningroom.component';
import { LightingComponent } from './lighting/lighting.component';
import { HomedecorComponent } from './homedecor/homedecor.component';
import { OutdoorfurntureComponent } from './outdoorfurnture/outdoorfurnture.component';
import { KidsfurntureComponent } from './kidsfurnture/kidsfurnture.component';
import { OfficefurntureComponent } from './officefurnture/officefurnture.component';
import { EntrywayComponent } from './entryway/entryway.component';
import { StorageComponent } from './storage/storage.component';
import { GallaryComponent } from './gallary/gallary.component';
export const routes: Routes = [
    {path:"",redirectTo:"Home",pathMatch:'full'},
    {path:"Home",component:HomeComponent,title:'CleanKom-كليين كوم'},
    {path:"About",component:AboutComponent,title:'About-Us CleanKom-كليين كوم'},
    {path:"Blogs",component:BlogComponent,title:'Blog CleanKom-كليين كوم'},
    {path:"Contact",component:ContactUsComponent,title:'Contact-Us CleanKom-كليين كوم'},
    {path:"Categories",component:CategoriesComponent,title:'Categories CleanKom-كليين كوم'},
    {path:"Gallary",component:GallaryComponent,title:'Gallary CleanKom-كليين كوم'},

    {path:"Living Room",component:LivingroomComponent,title:'Living Room'},
    {path:"Bed Room",component:BedroomComponent,title:'Bed Room'},
    {path:"Dining Room",component:DiningroomComponent,title:'Dining Room'},
    {path:"Lighting",component:LightingComponent,title:'Lighting'},
    {path:"Home Decor",component:HomedecorComponent,title:'Home Decor'},
    {path:"Outdoor Furniture",component:OutdoorfurntureComponent,title:'Outdoor Furniture'},
    {path:"Kid's Furniture",component:KidsfurntureComponent,title:"Kid's Furniture"},
    {path:"Office Furniture",component:OfficefurntureComponent,title:'Office Furniture'},
    {path:"Entryway",component:EntrywayComponent,title:'Entryway'},
    {path:"Storage & Organization",component:StorageComponent,title:'Storage & Organization'},


    {path:"Vision",component:VisionComponent,title:'Vision CleanKom-كليين كوم'},
    {path:"Documented",component:DocumentedComponent,title:'Documented Maarouf CleanKom-كليين كوم'},
    {path:"Terms and Conditions",component:TermsandConditionsComponent,title:'Terms and Conditions CleanKom-كليين كوم'},
    {path:"Privacy Policy",component:PrivacyPolicyComponent,title:'Privacy Policy CleanKom-كليين كوم'},




]