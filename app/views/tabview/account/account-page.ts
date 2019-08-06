import { init, logout } from '../../../view-models/user';
import * as application from "tns-core-modules/application";


const signOut = () => {
  logout()
    .then(sucess=> {
    if (sucess) {
      application._resetRootView({
        moduleName: 'app-root',
        clearHistory: true
      })
    } // TODO: ELSE
    });
};


export { signOut };
