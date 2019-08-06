import { Page } from 'tns-core-modules/ui/page';
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { init } from '../../view-models/user';
import * as application from "tns-core-modules/application";

export function loaded(args: EventData) {
  const labelText = fromObject({
    message: 'Testando conexão'
  });
  const page = <Page> args.object;
  page.actionBarHidden = true
  page.bindingContext = labelText

  init()
    .then((isLoggingIn: boolean): void => {
      if (isLoggingIn) {
        application._resetRootView({
          moduleName: 'views/tabview/tabview-page',
          clearHistory: true
        })
      } else {
        page.frame.navigate({
          moduleName: 'views/login/login-page',
          clearHistory: true
        });
      }
    })
    .catch(() => labelText.set('message', 'Falha na conexão'));
}
