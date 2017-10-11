import React,{Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map,{
            zoom:12,
            center:{
                lat:Number(this.props.lat),
                lng: Number(this.props.lon)
            }
        })
    }
    render(){
        return <div ref='map'></div>
    }
}

export default GoogleMap;