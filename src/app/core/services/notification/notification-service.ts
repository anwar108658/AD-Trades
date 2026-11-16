import { inject, Service } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Service()
export class NotificationService {

toastController = inject(ToastController);

async success(message: string) {
    const toast = await this.toastController.create({
    message,
    duration: 3000,
    position: 'top',
    color: 'success',
    icon: 'checkmark-circle-outline'
    });

    await toast.present();
}

async error(message: string) {
    const toast = await this.toastController.create({
    message,
    duration: 4000,
    position: 'top',
    color: 'danger',
    icon: 'alert-circle-outline'
    });

    await toast.present();
}

async warning(message: string) {
    const toast = await this.toastController.create({
    message,
    duration: 3000,
    position: 'top',
    color: 'warning'
    });

    await toast.present();
}

async info(message: string) {
    const toast = await this.toastController.create({
    message,
    duration: 3000,
    position: 'top',
    color: 'primary'
    });

    await toast.present();
}
}