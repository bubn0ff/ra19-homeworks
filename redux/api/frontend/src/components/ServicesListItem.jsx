import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServicesRemove } from '../actions/actionCreators';

function ServicesListItem({ item, loading, onRemove }) {

  return (
    <li>
      <span>{item.name}: {item.price}&nbsp;руб.</span>
      <span>
        {loading ? (<p>*</p>) : (
          <>
            <span role='img' aria-label='edit'><Link to={`/services/${item.id}`}>✎</Link></span>
            <span role='img' aria-label='delete' onClick={() => onRemove(item.id)}>❌</span>
          </>
        )}
      </span>
    </li>
  );
}

const mapStateToProps = (state, ownProps) => ({
  loading: (state.servicesRemove.indexOf(ownProps.item.id) !== -1),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(fetchServicesRemove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesListItem);