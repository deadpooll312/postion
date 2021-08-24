import store from '../store';
import {setOwsLoading} from '../store/actions/ows';
import client from '../helpers/client';

const ows = {
  get() {
    store.dispatch(setOwsLoading(true));
    return client
        .get(
            '/geoserver/rtls/ows?service=WFS&version=1.1.0&request=GetFeature&typeName=rtls:tags_view&outputFormat=text/javascript&viewparams=site_id:29;ktype:EMPLOYEE;stime:1629786294&format_options=callback:jQuery311005135232945049717_1629785034273&_=1629785034894'
        )
        .finally(() => {
          store.dispatch(setOwsLoading(false));
        });
  },
};

export default ows;
