import '../Style/Content.css';
import Contentmiddle from '../Components/contentmiddle';
import Contenttop from '../Components/contenttop';
import Contentbottom from '../Components/contentbottom';
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