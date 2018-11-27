import React,{Component} from 'react';

const Contex = React.createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
        return{
            ...state,
            contacts:state.contacts.filter(contact=> contact.id !== action.payload)
        };
        case 'ADD_CONTACT':
        return{
            ...state,
            contacts:[action.payload,...state.contacts]
        }
        default:
        return state;
    }
}
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

      ],
      dispatch: action=> this.setState(state=>reducer(state,action))
      
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