import {Header, Icon, Segment, Label} from 'semantic-ui-react';

function SummaryComponent2({role,type,name,ammount}){
    return(


        <Segment secondary inverted color="violet">
        
            <Label
            
                content={role}
            
            />
                
            <Header>
                <Icon name="type"/>
                {type}
                <Icon name="name"/>
                {name}
                <Icon name="ammount"/>
                {ammmount}
            </Header>
        
        </Segment>


    )


}