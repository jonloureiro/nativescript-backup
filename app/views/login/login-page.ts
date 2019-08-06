import { Page } from 'tns-core-modules/ui/page';
import { EventData, fromObject } from "tns-core-modules/data/observable";
import { user, singIn, singUp } from './login-page.view-models';

export function navigatingTo(args: EventData) {
  const page = <Page> args.object;
  page.actionBarHidden = true;
  page.bindingContext = user;
}

export { user, singIn, singUp }
