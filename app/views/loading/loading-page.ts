import { Page } from 'tns-core-modules/ui/page';
import { EventData } from "tns-core-modules/data/observable";
import { init } from '../../view-models/user';

export function navigatingTo(args: EventData) {
  const page = <Page> args.object;
  page.actionBarHidden = true

  init().then((isLoggingIn: boolean): void => {
    if (isLoggingIn) {

    } else {
      page.frame.navigate({
        moduleName: 'views/login/login-page',
        clearHistory: true
      });
    }
  })
}
