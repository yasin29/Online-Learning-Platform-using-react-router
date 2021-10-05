import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 23.79,
            lng: 90.41
        },
        zoom: 15
    };

    render() {
        const mark = <FontAwesomeIcon style={{ color: 'red' }} icon={faMapMarkerAlt} />
        const call = <FontAwesomeIcon style={{ color: 'red' }} icon={faPhoneVolume} />
        const mail = <FontAwesomeIcon style={{ color: 'red' }} icon={faEnvelopeSquare} />
        return (
            <div className="mx-auto rounded mt-2" style={{ height: '50vh', width: '60%', marginBottom: '200px' }}>
                <div>
                    <h3>Our Address</h3>
                    <h5>{mark} 60 Kemal Ataturk Ave, Dhaka 1212</h5>
                    <p>{call} +8801123123123</p>
                    <p>{mail} support@infotech.com</p>
                </div>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD-9giVxsuUniW-zacmknh5lVnhvUR5rCU' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={23.794480445832228}
                        lng={90.41360789541065}
                        text={mark}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}


export default SimpleMap;