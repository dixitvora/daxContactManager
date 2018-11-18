import React,{Component} from 'react';

const Contex = React.createContext();

export class Provider extends Component{
    state = {
      contacts: [{
          id: '1',
          name: 'Dax Code',
          email: 'daxcod@dev.com ',
          phone: '123-456-7898'
        },
        {
          id: '2',
          name: 'Deep Codere',
          email: 'dipcoder@dev.com ',
          phone: '987-456-1234'
        },
        {
          id: '3',
          name: 'Hiren Coder',
          email: 'hirancoder@dev.com',
          phone: '654-987-4561'
        }

      ]
    }

    render (){
        return(
            <Contex.Provider value={this.state}>
                {this.props.children}
            </Contex.Provider>
        )
    }
}

export const Consumer = Contex.Consumer;