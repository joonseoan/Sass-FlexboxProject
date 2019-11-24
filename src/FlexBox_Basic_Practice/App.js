import React from 'react';

export default props => {
    return (
        <div className="container" style={ styles.container }>
            <div className="item" style={{ ...styles.item, ...styles.i1 }}>1</div>
            <div className="item" style={{ ...styles.item, ...styles.i2 }}>2</div>
            <div className="item" style={{ ...styles.item, ...styles.i3 }}>3</div>
            <div className="item" style={{ ...styles.item, ...styles.i4 }}>4</div>
            <div className="item" style={ styles.item }>5</div>
            <div className="item" style={ styles.item }>6</div>
            <div className="item" style={ styles.item }>7</div>
            <div className="item" style={ styles.item }>8</div>
            <div className="item" style={ styles.item }>9</div>
            <div className="item" style={ styles.item }>10</div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#ccc',
        padding: '10px',

        height: '1000px',

        // It just assins a horizontal row
        // flexDirection is a sub flex field of "flex"
        display: 'flex',
        // It is same as display: flex only
        flexDirection: 'row',

        // It makes the array placed on the right side
        //  and in reverse order whchis is from right side to left side
        // flexDirection: 'row-reverse'

        // Makes the div items 5 rows, not different colums
        // flexDirection: 'column'

        //  The row starts from the bottom to top
        // flexDirection: 'column-reverse'

        // controls the item's position inside of content. 


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

        // [ IMPORTANT ]
        // alignItems controls the contents inside of item with X and Y coordinates
        //  for instance "center" means that X value at the center
        //  and Y value is at the center.

        // itemses are allocated vertically at the center.
        //      regardless of the height.
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
        
        // Making Cascade structure
        // it must be in flex container!
        flexWrap: 'wrap',

        // With flexWrap, the elements are allocated with 
        // AlignContent that must be used "flexWrap". 
        // Then it impacts all the rows
        //  that are assigned in responsive

        // Please, mind that "flex-end" and "flex-start" are working when the
        //  height is given and that height has engough space.

        // On the other hand, alignItem is only working for a single row.
        // alignContent: 'flex-start'

        // alignContent: 'flex-end'
        // alignContent: 'center'

        // making the space has the same height
        // alignContent: 'flex-around'

        // One is at the top, and the other is bottom
        // alignContent: 'space-between'

        // It streches on the basis of height, not each row
        alignContent: 'stretch' // default
    },

    item: {
        backgroundColor: '#f15d',
        padding: '40px',
        margin: '30px',
        color: '#fff',
        fontSize: '40px',
        
        // flexGrow: 1,

        // Occupying all space defined (width, height)
        // short-cut of flexGrow 
        // flex: 1

        // occupies twice x2
        // flex:2
        
        // occupies triple x3
        // flex:3

    },
    i1: {

        // when we need to extend a single item in maximum, we need to put class in a single item.
        flex: 1

        // When we need to have the original fixed sizie
        // flex: 0
    },
    i2: {
        height: '200px',
        order: 1,

        // occupies twice x2
        // flex: 2
        
        // flex: 1

        // Higher priority than flex 1 in "i1 class"
        // Occupies 20% of row space.
        /* 
            Space flex 1 will shrink as much as the extension of this class element.
        */ 
        // flexBasis: '20%',

        // [ IMPORTANT ]
        // Even when we use absolute value, it is decreasing,
        //      after flex 1 is the minimizing the size.
        // flexBasis: '200px',

        // [ IMPORTANT ]
        // Flex shrink "1" means it can be responsive in terms of the browser size.
        // Flex shrink "0" means it is not responsive and has a fixed size
        // flexShrink: '1' 
        // flexShrink: '0',

        // first "0" : flex, its own value. "0" means that it is not going to extend. 
        // second "0" : flexShrink. "0" means that it is going to be responsive.
        // third value: flexBasis
        // flex: '0 0 200px'         

    },
    i3: {
        order: -2,
        // occupies triple x3
        // flex: 3
    },
    i4: {
        fontSize: '90px',

        // controls vertical position: positioned at the bottom
        // alignSelf: 'flex-end'
        // controls vertical position: positioned at the center with the same size as the biggest one
        // alignSelf: 'stretch'
        // controls vertical position: positioned at the top
        alignSelf: 'flex-start',

        // Change the order
        // all items have the order number : "0"
        // Therefore, on the basis of the "0", we can chnage the displaying order.
        order: -1
    }
}