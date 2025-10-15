import { Routes } from '@angular/router';

// http://localhost:4200/ -> /admin
export const routes: Routes = [
    { path: "", redirectTo:"admin", pathMatch:"full" },
    {
        path: "",
        loadChildren: () => 
            import("./pages/pages-module").then(m=>m.PagesModule)
    }
];
