import { connect } from 'react-redux';
import Article from './article.jsx';
export default connect(
  (state) => {
    return {
      appData: state.appData
    }
  }, {}
)(Article)