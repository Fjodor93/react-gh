import '../Style/Content.css';
import Contentmiddle from '../contentmiddle';
import Contenttop from '../contenttop';
import Contentbottom from '../contentbottom';
import { Helmet } from 'react-helmet';
function StartContent(){

    return(
        <div className='contentcontainer'>
            <Helmet><title>SunTan</title></Helmet>
            <Contenttop/>
            <Contentmiddle/>
            <Contentbottom/>
        </div>
    );
}
export default StartContent;