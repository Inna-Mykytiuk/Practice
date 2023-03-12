import { closeModal, openModal } from './modal';

export function onOpenButtonClick(event) {
  openModal();
}
export function onCloseButtonClick(event) {
  closeModal();
}
// export function onCloseButtonEsc(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// }
