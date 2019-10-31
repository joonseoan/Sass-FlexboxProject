import React from 'react';

export default props => {
    return (
        <div className="container" style={ styles.container }>
            <div className="item" style={ styles.item }>1</div>
            <div className="item" style={ { ...styles.item, ...styles.i2} }>2</div>
            <div className="item" style={ styles.item }>3</div>
            <div className="item" style={ { ...styles.item, ...styles.i4 } }>4</div>
            <div className="item" style={ styles.item }>5</div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#ccc',
        padding: '10px',

        // It just assins a horizontal row
        // flexDirection is a sub flex field of "flex"
        display: 'flex',
        // It is same as display: flex only
        // flexDirection: 'row',

        // It makes the array placed on the right side
        //  and in reverse order whchis is from right side to left side
        // flexDirection: 'row-reverse'

        // Makes the div items 5 rows, not different colums
        // flexDirection: 'column'

        //  The row starts from the bottom to top
        // flexDirection: 'column-reverse'

        // controls the item's position inside of content. 


        flexDirection: 'column',

        // [ Justify Contents controls space vertically and horizontally]
        //  At the center of a row
        justifyContent: 'center',

        // same white space length between contents
        // justifyContent: 'space-between'

        // the right side space length is twice then left side space length
        // justifyContent: 'space-around'

        // all the white space has same length 
        //  whatever the margin length defined below is.
        // justifyContent: 'space-evenly',

        // right side
        // justifyContent: 'flex-end',

        // left side
        // justifyContent: 'flex-start'

        // itemss are allocated vertically at the center.
        //      regardless of the height.

        // [ IMPORTANT ]
        // alignItems controls position of X and Y
        //  for instance "center" means that X value at the center
        //  and Y value is at the center.
        alignItems: 'center',

        // at the top
        // alignItems: 'flex-start', 
        
        // at the bottom
        // alignItems: 'flex-end',

        // default value: "stretch"
        //  that makes all the items stretched to the the biggest height.
        // alignItems: 'stretch',

        // aligns contents on the based of text position.
        // alignItems: 'baseline'
    },
    item: {
        backgroundColor: '#f15d',
        padding: '40px',
        margin: '30px',
        color: '#fff',
        fontSize: '40px'
    },
    i2: {
        height: '200px'
    },
    i4: {
        fontSize: '90px'
    }


}