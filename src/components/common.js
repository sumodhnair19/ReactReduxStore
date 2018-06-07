import * as React from 'react';
import  logo  from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';

export const Loader = function(props) {

return(
<div className={props.loaderState ? 'loader-container' :'hideLoader' }>
<div className="loading-spinner"><img alt="app-logo" src={logo}/></div>
<div className="mask-spinner"></div>
</div>

);
}
export const Input = function (props) {
 const typeOfInput = typeof props.isButton !== 'undefined' ? (<input type={props.type} value={props.value} /> ):
 (<input type={props.type} name = {props.name} value={props.value} placeholder={props.placeholder} onChange ={ (e) => props.onChange(e)} /> );
  return(
    <fragment>
    { typeOfInput }
    </fragment>
  );
 }

 const mapStateToProps = state => ({
  loaderState: state.loaderState
});

 export default connect(mapStateToProps, null)(Loader);
