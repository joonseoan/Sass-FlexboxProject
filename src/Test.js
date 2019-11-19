// import React from 'react';
// import { connect } from 'react-redux';
// import { testInput } from './actions';

// const Testsss = props => {
//     return (
//         <div>
//             <input 
//                 onChange = {(e) =>  {
//                     const {name, value} = e.target; 
//                     testInput({name, value})
//                 }}
//                 name={"test"}
//             />
//         </div>
//     )
// }

// const mapStateToProps = ({ textInput }) => {
//     console.log('textInput ----> ', textInput)
//     return { textInput }
// }

// export default connect(mapStateToProps, { testInput })(Testsss);