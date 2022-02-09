import React from "react";

class Categories extends React.Component {

    render() {
        const { categories } = this.props;
        return <div>
            <p>Categorias:</p>
           { categories }
        </div>
        
    }
}

export default Categories;