import React from 'react';

class Stages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="main-stages">
                <ul>
                    <li>
                        Desafio 1
                        <ul>
                            <li>Etapa 1</li>
                            <li>Etapa 2</li>
                            <li>Etapa 3</li>
                            <li>Etapa 4</li>
                        </ul>
                    </li>
                    <li>
                        Desafio 2
                        <ul>
                            <li>Etapa 1</li>
                            <li>Etapa 2</li>
                            <li>Etapa 3</li>
                            <li>Etapa 4</li>
                        </ul>
                    </li>
                    <li>
                        Desafio 3
                        <ul>
                            <li>Etapa 1</li>
                            <li>Etapa 2</li>
                            <li>Etapa 3</li>
                            <li>Etapa 4</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Stages;