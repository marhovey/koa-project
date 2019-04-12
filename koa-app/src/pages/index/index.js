import { connect } from 'react-redux';
import { articleId } from "../../store/actions/index";
import Index from './index.jsx';
export default connect(
  () => {return {}}, {
    articleId
  }
)(Index)