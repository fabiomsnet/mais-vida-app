import { MedicosProvider } from './medicos';
import { UserProvider } from './user';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { HttpModule } from '@angular/http';

export const Providers: any[] = [
    UserProvider, 
    HttpModule, 
    HttpClientModule, 
    HttpClient, 
    HttpHandler,
    MedicosProvider
];

export const ProvidersNative = [SplashScreen, StatusBar];

export { UserProvider, MedicosProvider };
