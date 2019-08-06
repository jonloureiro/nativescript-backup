import { Button } from "tns-core-modules/ui/button";
import { Page } from 'tns-core-modules/ui/page';
import { EventData } from "tns-core-modules/data/observable";
import { user, login, register } from '../../view-models/user';



const navigatingTo = (args: EventData) => {
  const page = <Page> args.object;
  page.actionBarHidden = true;
  page.bindingContext = user;
}

const singIn = (args: EventData) => {
  const button = <Button> args.object;
  const viewModal = button.showModal('views/loading/loading-modal', {
    context: null,
    closeCallback: null,
  });

  const email = user.get('email');
  const password = user.get('password');

  login(email, password)
    .then(sucess => {
      viewModal.closeModal();
      if (sucess) {
      } /* TODO: ELSE */
    })
    .catch(() => viewModal.closeModal());
}

const singUp = (args: EventData) => {
  const button = <Button> args.object;
  const viewModal = button.showModal('views/loading/loading-modal', {
    context: null,
    closeCallback: null,
  });
  const name = user.get('name');
  const email = user.get('email');
  const password = user.get('password');


  register(name, email, password)
    .then(sucess => {
      viewModal.closeModal();
      if (sucess) {
      } /* TODO: ELSE */
    })
    .catch(() => viewModal.closeModal());
}

export { navigatingTo, user, singIn, singUp }
